import Phaser from "phaser"

export default class PreloaderScene extends Phaser.Scene {
  /**
   * The next scene to load after this scene.
   *
   * @type {string}
   */
  nextScene

  /**
   * PreloaderScene
   *
   * This scene is responsible for loading all assets needed for the main stage.
   *
   * @param {Object} props
   * @param {string} props.name
   * @param {string} props.nextScene
   */
  constructor({name, nextScene}) {
    super(name)
    this.nextScene = nextScene
  }

  preload() {
    this.load.image("tiles", "images/main-tiles.png")
    this.load.image("tiles_oldtown", "images/oldtown.png")
    this.load.tilemapTiledJSON("main_tile_map", "images/main-tiles.json")
    this.load.spritesheet("player", "images/characters.png", {
      frameWidth: 52,
      frameHeight: 72,
    })
  }

  create() {
    this.scene.start(this.nextScene)
  }
}
