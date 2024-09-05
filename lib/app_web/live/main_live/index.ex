defmodule AppWeb.MainLive.Index do
  use AppWeb, :live_view

  alias AppWeb.Presence
  alias App.PubSub
  alias App.Accounts

  @presence "main-stage:presence"
  @change_coordinate "main-stage:change_coordinate"
  @change_direction "main-stage:change_direction"
  @messages "main-stage:messages"

  @impl true
  def render(assigns) do
    ~H"""
    <div class="w-full h-screen flex flex-col">
      <div class="flex-1 flex">
        <div
          id="world-stage"
          phx-update="ignore"
          data-user-id={@current_user.id}
          phx-hook="WorldStage"
          class="flex-1 relative overflow-hidden"
        >
        </div>
        <div
          id="message-bubble"
          phx-hook="MessageBubble"
          phx-update="ignore"
          class={"z-50 absolute bg-white border border-gray-400 p-4 rounded" <> (if @message_bubble_hidden, do: " hidden", else: "")}
          style="cursor: move; min-width: 450px; max-width: 400px; min-height: 200px;"
        >
          <div class="flex justify-between items-center">
            <div id="message-bubble-header" class="p-2 rounded-t">
              Fale com o <b>templo de Arjuna</b>:
            </div>
            <!-- Seleção de Modo -->
            <select id="chat-mode" class="m-4 rounded">
              <option value="free" selected>livremente</option>
              <option value="buddhist">com o monge budista</option>
            </select>
            <button
              id="close-bubble"
              class="text-gray-500 hover:text-gray-800"
              style="margin-top: -30px;"
              title="<esc>"
            >
              &times;
            </button>
          </div>
          <!-- Seção de histórico de chat -->
          <div
            id="chat-story"
            class="w-full overflow-y-auto mb-4 border border-gray-300 rounded p-2"
            style="cursor: auto; max-height: 150px; background-color: #f7f7f7; word-wrap: break-word;"
          >
            <!-- Mensagens anteriores irão aparecer aqui -->
          </div>
          <textarea id="message-input" class="mt-2 w-full h-32 border border-gray-300 rounded p-4">
          </textarea>
        </div>
        <div class=" bg-violet-900 w-64 border-l border-violet-600">
          <.live_component
            module={AppWeb.Components.SideBar}
            id="sidebar"
            title="A Terra Prometida"
            area="O templo de Arjuna"
            autoplay={@autoplay}
            online_users={@online_users}
            offline_users={@offline_users}
          />
        </div>
      </div>

      <header class="px-4 bg-violet-900 sm:px-6 lg:px-8 border-t border-violet-600">
        <.live_component
          module={AppWeb.Components.ControlPanel}
          id="control_panel"
          current_user={@current_user}
        />
      </header>
    </div>
    """
  end

  def encode(user) do
    %{
      id: user.id,
      name: user.name,
      username: user.username,
      status: user.status,
      position: %{x: user.latitude, y: user.longitude},
      direction: user.direction
    }
  end

  defp sign_in(username, socket) do
    {:ok, user} = Accounts.create_user(%{username: username, name: username})

    socket
    |> assign(:current_user, user)
  end

  @impl true
  def mount(params, session, socket) do
    username = params["username"] || "Guest::#{session["_csrf_token"]}"
    socket = sign_in(username, socket)
    current_user = socket.assigns.current_user

    if connected?(socket) do
      {:ok, _} =
        Presence.track(self(), @presence, current_user.id, %{joined_at: :os.system_time(:seconds)})

      Phoenix.PubSub.subscribe(PubSub, @presence)
      Phoenix.PubSub.subscribe(PubSub, @change_coordinate)
      Phoenix.PubSub.subscribe(PubSub, @change_direction)
      Phoenix.PubSub.subscribe(PubSub, @messages)
    end

    create_npc("1 Yogi", %{longitude: 10, latitude: 10})
    create_npc("2 Hare Krishna", %{longitude: 10, latitude: 12})
    create_npc("3 Cristão", %{longitude: 10, latitude: 14})
    create_npc("4 Mulçumano", %{longitude: 10, latitude: 16})
    {:ok, buddhist} = create_npc("5 Budista", %{longitude: 10, latitude: 18})
    create_npc("6 Líder de Umbanda", %{longitude: 10, latitude: 20})

    {:ok,
     socket
     |> assign(:message_bubble_hidden, true)
     |> assign(:story, [])
     |> assign(:buddhist, buddhist)
     |> assign(:autoplay, false)
     |> assign(:current_user, current_user)
     |> assign_users()
     |> handle_joins(Presence.list(@presence))}
  end

  defp create_npc(name, attributes \\ %{}) do
    %{
      name: name,
      username: "npc_#{name}",
      status: "npc",
      latitude: attributes[:latitude] || 10,
      longitude: attributes[:longitude] || 10,
      direction: attributes[:direction] || :down
    }
    |> App.Accounts.create_user()
  end

  defp assign_users(socket) do
    user_ids = Presence.list(@presence) |> Map.keys()

    users = Accounts.list_users()

    online_users = Enum.filter(users, fn user -> user.id in user_ids or user.status == :npc end)

    offline_users =
      Enum.filter(users, fn user -> user.id not in user_ids and user.status != :npc end)

    socket
    |> assign(:online_users, online_users)
    |> assign(:offline_users, offline_users)
  end

  defp handle_joins(socket, joins) do
    user_ids = Map.keys(joins)

    Enum.reduce(user_ids, socket, fn user_id, socket ->
      user = Accounts.get_user!(user_id)

      socket
      |> push_event("user_join", %{
        user: encode(user)
      })
    end)
  end

  defp handle_leaves(socket, leaves) do
    Enum.reduce(leaves, socket, fn {user, _}, socket ->
      push_event(socket, "user_leave", %{user_id: user})
    end)
  end

  @impl true
  def handle_info(%Phoenix.Socket.Broadcast{event: "presence_diff", payload: diff}, socket) do
    {
      :noreply,
      socket
      |> assign_users()
      |> handle_leaves(diff.leaves)
      |> handle_joins(diff.joins)
    }
  end

  # @impl true
  def handle_info(
        {:change_coordinate,
         %{"x" => x, "y" => y, "direction" => direction, "user_id" => user_id}},
        socket
      ) do
    user = socket.assigns.current_user

    socket =
      if user.id == user_id do
        socket
      else
        socket
        |> push_event("change_coordinate", %{x: x, y: y, direction: direction, user_id: user_id})
      end

    {:noreply, socket}
  end

  @impl true
  def handle_info(
        {:change_direction, params},
        socket
      ) do
    user = socket.assigns.current_user
    %{"user_id" => user_id, "direction" => direction} = params

    socket =
      if user.id == user_id do
        socket
      else
        socket
        |> push_event("change_direction", %{direction: direction})
      end

    {:noreply, socket}
  end

  @impl true
  def handle_info(
        {:messages, params},
        socket
      ) do
    {:noreply, push_event(socket, "messages", params)}
  end

  # Lida com a mensagem async para processar o chat_with_monk
  @impl true
  def handle_info({:chat_with_monk, content}, socket) do
    {:ok, answer, story} = App.Personas.chat_with_monk(content, socket.assigns.story)

    # Broadcast the monk's response
    Phoenix.PubSub.broadcast(
      PubSub,
      @messages,
      {:messages,
       %{
         "user_id" => socket.assigns.buddhist.id,
         "username" => socket.assigns.buddhist.name,
         "content" => answer
       }}
    )

    # Update the story in the socket
    {:noreply, assign(socket, :story, story)}
  end

  @impl true
  def handle_event("ready", _params, socket) do
    user_ids =
      Presence.list(@presence)
      |> Map.keys()

    users =
      Accounts.list_users()
      |> Enum.filter(fn user -> user.id in user_ids or user.status == :npc end)
      |> Enum.map(fn user -> encode(user) end)

    {:noreply,
     socket
     |> push_event("users", %{users: users})}
  end

  @impl true
  def handle_event(
        "change_my_coordinate",
        %{"x" => x, "y" => y, "direction" => direction} = params,
        socket
      ) do
    user = socket.assigns.current_user

    {:ok, _} = Accounts.update_user(user, %{latitude: x, longitude: y, direction: direction})

    coordinate = Map.merge(params, %{"user_id" => user.id})

    Phoenix.PubSub.broadcast(
      PubSub,
      @change_coordinate,
      {:change_coordinate, coordinate}
    )

    {:noreply,
     socket
     |> push_event("change_coordinate", coordinate)
     |> assign(:autoplay, true)}

    #  |> assign(:autoplay, false)}
  end

  @impl true
  def handle_event("change_my_direction", %{"direction" => direction} = params, socket) do
    user = socket.assigns.current_user

    {:ok, _} = Accounts.update_user(user, %{direction: direction})

    direction = Map.merge(params, %{"user_id" => user.id})

    Phoenix.PubSub.broadcast(
      PubSub,
      @change_direction,
      {:change_direction, direction}
    )

    {:noreply, socket |> push_event("change_direction", direction)}
  end

  @impl true
  def handle_event("send_message", %{"content" => content, "mode" => mode}, socket) do
    current_user = socket.assigns.current_user
    IO.puts("Server: send_message #{current_user.username} #{mode} #{content}")

    Phoenix.PubSub.broadcast(
      PubSub,
      @messages,
      {:messages,
       %{"user_id" => current_user.id, "username" => current_user.username, "content" => content}}
    )

    # If the mode is "buddhist", send a message to the LiveView process for async handling
    if mode == "buddhist" do
      send(self(), {:chat_with_monk, content})
    end

    {:noreply, socket}
  end

  @impl true
  def handle_event("message_bubble_hidden", %{"hidden" => value}, socket) do
    {:noreply, assign(socket, :message_bubble_hidden, value)}
  end
end
