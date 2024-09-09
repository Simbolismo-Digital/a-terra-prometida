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
          style="cursor: move; min-width: 40vw; max-width: 40vw; min-height: 40vh;"
        >
          <div class="flex justify-between items-center">
            <div id="message-bubble-header" class="p-2 rounded-t">
              Fale com o <b>templo de Arjuna</b>:
            </div>
            <!-- Seleção de Modo -->
            <select id="chat-mode" class="m-4 rounded">
              <option value="free" selected>livremente</option>
              <option value="yogi">com o yogi</option>
              <option value="krishna">com o hare krishna</option>
              <option value="christian">com o cristão</option>
              <option value="muslim">com o mulçumano</option>
              <option value="buddhist">com o monge budista</option>
              <option value="babalorixa">com o babalorixá</option>
              <option value="all">com todos</option>
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
          <textarea id="message-input" class="mt-2 w-full h-32 border border-gray-300 rounded p-4">
          </textarea>
          <!-- Seção de histórico de chat -->
          <div
            id="chat-story"
            class="w-full overflow-y-auto mb-4 border border-gray-300 rounded p-2"
            style="min-height: 30vh; max-height: 50vh; cursor: auto; background-color: #f7f7f7; word-wrap: break-word;"
          >
            <!-- Mensagens anteriores irão aparecer aqui -->
          </div>
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

    {:ok, yogi} = create_npc("1 Yogi", %{longitude: 10, latitude: 10})
    {:ok, krishna} = create_npc("2 Hare Krishna", %{longitude: 10, latitude: 12})
    {:ok, christian} = create_npc("3 Cristão", %{longitude: 10, latitude: 14})
    {:ok, muslim} = create_npc("4 Mulçumano", %{longitude: 10, latitude: 16})
    {:ok, buddhist} = create_npc("5 Budista", %{longitude: 10, latitude: 18})
    {:ok, babalorixa} = create_npc("6 Líder de Umbanda", %{longitude: 10, latitude: 20})

    {:ok,
     socket
     |> assign(:message_bubble_hidden, true)
     |> assign(:npcs, %{
       "yogi" => %{character: yogi, story: []},
       "krishna" => %{character: krishna, story: []},
       "christian" => %{character: christian, story: []},
       "muslim" => %{character: muslim, story: []},
       "buddhist" => %{character: buddhist, story: []},
       "babalorixa" => %{character: babalorixa, story: []}
     })
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

  # Lida com a mensagem async para processar o chat_with_npc
  @impl true
  def handle_info({:chat_with_npc, "all", content}, socket) do
    send(self(), {:chat_with_npc, "yogi", content})
    send(self(), {:chat_with_npc, "krishna", content})
    send(self(), {:chat_with_npc, "christian", content})
    send(self(), {:chat_with_npc, "muslim", content})
    send(self(), {:chat_with_npc, "buddhist", content})
    send(self(), {:chat_with_npc, "babalorixa", content})
    {:noreply, socket}
  end

  @impl true
  def handle_info({:chat_with_npc, "yogi", content}, socket) do
    {:ok, answer, story} = App.Personas.chat_with_yogi(content, socket.assigns.npcs["yogi"].story)

    broadcast_npc(socket, "yogi", answer)

    # Update the story in the socket
    {:noreply,
     socket
     |> assign(
       :npcs,
       Map.update!(socket.assigns.npcs, "yogi", fn yogi_data ->
         %{yogi_data | story: story}
       end)
     )}
  end

  @impl true
  def handle_info({:chat_with_npc, "krishna", content}, socket) do
    {:ok, answer, story} =
      App.Personas.chat_with_hare_krishna(content, socket.assigns.npcs["krishna"].story)

    broadcast_npc(socket, "krishna", answer)

    # Update the story in the socket
    {:noreply,
     socket
     |> assign(
       :npcs,
       Map.update!(socket.assigns.npcs, "krishna", fn krishna_data ->
         %{krishna_data | story: story}
       end)
     )}
  end

  @impl true
  def handle_info({:chat_with_npc, "christian", content}, socket) do
    {:ok, answer, story} =
      App.Personas.chat_with_christian(content, socket.assigns.npcs["christian"].story)

    broadcast_npc(socket, "christian", answer)

    # Update the story in the socket
    {:noreply,
     socket
     |> assign(
       :npcs,
       Map.update!(socket.assigns.npcs, "christian", fn christian_data ->
         %{christian_data | story: story}
       end)
     )}
  end

  @impl true
  def handle_info({:chat_with_npc, "muslim", content}, socket) do
    {:ok, answer, story} =
      App.Personas.chat_with_muslim(content, socket.assigns.npcs["muslim"].story)

    broadcast_npc(socket, "muslim", answer)

    # Update the story in the socket
    {:noreply,
     socket
     |> assign(
       :npcs,
       Map.update!(socket.assigns.npcs, "muslim", fn muslim_data ->
         %{muslim_data | story: story}
       end)
     )}
  end

  @impl true
  def handle_info({:chat_with_npc, "buddhist", content}, socket) do
    {:ok, answer, story} =
      App.Personas.chat_with_monk(content, socket.assigns.npcs["buddhist"].story)

    broadcast_npc(socket, "buddhist", answer)

    # Update the story in the socket
    {:noreply,
     socket
     |> assign(
       :npcs,
       Map.update!(socket.assigns.npcs, "buddhist", fn buddhist_data ->
         %{buddhist_data | story: story}
       end)
     )}
  end

  @impl true
  def handle_info({:chat_with_npc, "babalorixa", content}, socket) do
    {:ok, answer, story} =
      App.Personas.chat_with_babalorixa(content, socket.assigns.npcs["babalorixa"].story)

    broadcast_npc(socket, "babalorixa", answer)

    # Update the story in the socket
    {:noreply,
     socket
     |> assign(
       :npcs,
       Map.update!(socket.assigns.npcs, "babalorixa", fn babalorixa_data ->
         %{babalorixa_data | story: story}
       end)
     )}
  end

  defp broadcast_npc(socket, mode, answer) do
    # Broadcast the npc's response
    Phoenix.PubSub.broadcast(
      PubSub,
      @messages,
      {:messages,
       %{
         "user_id" => socket.assigns.npcs[mode].character.id,
         "username" => socket.assigns.npcs[mode].character.name,
         "content" => answer
       }}
    )
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
    unless mode == "free" do
      send(self(), {:chat_with_npc, mode, content})
    end

    {:noreply, socket}
  end

  @impl true
  def handle_event("message_bubble_hidden", %{"hidden" => value}, socket) do
    {:noreply, assign(socket, :message_bubble_hidden, value)}
  end
end
