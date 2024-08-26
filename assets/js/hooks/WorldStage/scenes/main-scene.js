import Phaser from "phaser"
import Player from "../elements/player"
import UserDirection from "../constants/user-direction"

/**
 * @typedef {import("../constants/user-direction").UserDirectionType} UserDirectionType
 * @typedef {import("../elements/player").Coordinate} Coordinate
 * @typedef {import("../models/user").User} User
 */

export default class MainScene extends Phaser.Scene {
  /**
   * The ID of the current user.
   *
   * @type {string}
   */
  userId

  /**
   * Callback when the scene is created.
   *
   * @type {() => void}
   */
  onCreated

  /**
   * Callback when the direction of the current user is changed.
   *
   * @type {(direction: UserDirectionType) => void}
   */
  onChangeDirection

  /**
   * Callback when the coordinate of the current user is changed.
   *
   * @type {(coordinate: Coordinate) => void}
   */
  onChangeCoordinate

  /**
   * Stores all users in the scene.
   *
   * @type {Map<string, Player>}
   * @memberof MainScene
   */
  players = new Map()

  /**
   * The main scene.
   *
   * @param {Object} props
   * @param {string} props.name
   * @param {string} props.userId
   * @param {() => void} props.onCreated
   * @param {(direction: UserDirectionType) => void} props.onChangeDirection
   * @param {(coordinate: Coordinate) => void} props.onChangeCoordinate
   */
  constructor({name, userId, onCreated, onChangeDirection, onChangeCoordinate}) {
    super(name)
    this.userId = userId
    this.onCreated = onCreated
    this.onChangeDirection = onChangeDirection
    this.onChangeCoordinate = onChangeCoordinate
  }

  /**
   * Creates a player sprite in the scene if it does not exist.
   *
   * @param {User} user
   * @returns {Phaser.GameObjects.Sprite}
   */
  createPlayer(user) {
    if (this.players.has(user.id)) {
      return this.players.get(user.id)
    }
    console.log("Create Player", user)

    const player = new Player(this, user, false)
    this.players.set(user.id, player)

    return player.sprite
  }

  /**
   * Removes a player sprite from the scene.
   *
   * @param {string} id
   * @returns {void}
   */
  removePlayer(id) {
    if (!this.gridEngine.hasCharacter(id)) {
      return
    }
    const player = this.players.get(id)
    this.players.delete(id)
    player.destroy()
  }

  /**
   * Changes the direction of a player sprite.
   *
   * @param {string} userId
   * @param {UserDirectionType} direction
   * @returns {void}
   */
  changePlayerDirection(userId, direction) {
    if (userId !== this.userId) {
      this.players.get(userId)?.turnTowards(direction)
    }
  }

  /**
   * Changes the position of a player sprite.
   *
   * @param {string} userId
   * @param {Coordinate} coordinate
   * @returns {void}
   */
  changePlayerPosition(userId, {x, y, direction = UserDirection.DOWN}) {
    if (userId !== this.userId) {
      this.players.get(userId)?.moveTo({x, y, direction})
    }
  }

  /**
   * Sets up the camera to follow the player sprite.
   *
   * @param {Phaser.GameObjects.Sprite} playerSprite
   * @returns {void}
   */
  setupCamera(playerSprite) {
    const container = this.gridEngine.getContainer(this.userId)
    this.cameras.main.startFollow(container, true)
    this.cameras.main.setFollowOffset(-playerSprite.width, -playerSprite.height)
  }

  /**
   * Creates the scene.
   * This is where all elements are initialized.
   * @returns {void}
   */
  create() {
    this._setupTileMap()
    this._setupListeners()
    this.onCreated()
  }

  /**
   * Updates the scene on every frame.
   * This is where the player sprite is moved and all other elements are updated.
   * @returns {void}
   */
  update() {
    this._handleNavigationKeys()
  }

  /**
   * Handles the navigation keys.
   *
   * @returns {void}
   * @private
   */
  _handleNavigationKeys() {
    const speaking = !document.getElementById("message-bubble").classList.contains("hidden");
    
    if (speaking) {
      this.input.keyboard.clearCaptures();
      return;
    }

    const cursors = this.input.keyboard.createCursorKeys()
    const alphaCursors = this.input.keyboard.addKeys("W,A,S,D,H,J,K,L", false)

    const directionPressed = new Map([
      ["up", cursors.up.isDown || alphaCursors.W.isDown || alphaCursors.K.isDown],
      ["left", cursors.left.isDown || alphaCursors.A.isDown || alphaCursors.H.isDown],
      ["down", cursors.down.isDown || alphaCursors.S.isDown || alphaCursors.J.isDown],
      ["right", cursors.right.isDown || alphaCursors.D.isDown || alphaCursors.L.isDown],
    ])

    this.players.forEach((player) => player.updateTooltipPosition())

    for (const [direction, value] of directionPressed) {
      if (value) {
        this.gridEngine.move(this.userId, direction)
        break
      }
    }
  }

  /**
   * Sets up the tile map.
   * @returns {void}
   * @private
   */
  _setupTileMap() {
    // this._setupMain();
    this._setupTemple();
  }

  _setupMain() {
    const tileMap = this.make.tilemap({key: "main_tile_map"});
    tileMap.addTilesetImage("jungle", "tiles");
    for (let i = 0; i < tileMap.layers.length / 2; i++) {
      const layer = tileMap.createLayer(i, "jungle", 0, 0)
      layer.scale = 3
    };
    tileMap.addTilesetImage("oldtown", "tiles_oldtown");
    for (let i = tileMap.layers.length / 2; i < tileMap.layers.length; i++) {
      const layer = tileMap.createLayer(i, "oldtown", 0, 0)
      layer.scale = 3
    };
    this.gridEngine.create(tileMap, {characters: []});
  }

  _setupTemple() {
    // Carregar o mapa JSON
    const tileMap = this.make.tilemap({ key: "o_templo_de_arjuna_tile_map" });

    // Adicionar Tilesets ao mapa
    tileMap.addTilesetImage("center", "tiles_center");

    // Criar as camadas
    for (let i = 0; i < tileMap.layers.length; i++) {
        const layer = tileMap.createLayer(i, "center", 0, 0);
        layer.scale = 3;
    }
    this.gridEngine.create(tileMap, {characters: []});
  }

  /**
   * Sets up the listeners for the grid engine.
   * @returns {void}
   * @private
   */
  _setupListeners() {
    this.gridEngine.directionChanged().subscribe(({charId, direction}) => {
      if (charId === this.userId) {
        this.players.get(charId).updateDirectionText(direction)
        this.onChangeDirection(direction)
      }
    })

    this.gridEngine.positionChangeFinished().subscribe(({charId, enterTile}) => {
      if (charId === this.userId) {
        const direction = this.gridEngine.getFacingDirection(charId)
        this.players.get(charId).updateCoordinateText({...enterTile, direction: direction})
        this.onChangeCoordinate({
          ...enterTile,
          direction: direction,
        })
      }
    })
  }
}
