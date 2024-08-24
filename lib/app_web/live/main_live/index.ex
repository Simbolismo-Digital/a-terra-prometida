defmodule AppWeb.MainLive.Index do
  use AppWeb, :live_view

  alias AppWeb.Presence
  alias App.PubSub
  alias App.Accounts

  @presence "main-stage:presence"
  @change_coordinate "main-stage:change_coordinate"
  @change_direction "main-stage:change_direction"

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
        <div class=" bg-violet-900 w-64 border-l border-violet-600">
          <.sidebar
            socket={@socket}
            current_user={@current_user}
            online_users={@online_users}
            offline_users={@offline_users}
          />
        </div>
      </div>

      <header class="px-4 bg-violet-900 sm:px-6 lg:px-8 border-t border-violet-600">
        <.control_panel current_user={@current_user} />
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
    end

    {:ok,
     socket
     |> assign(:first_interaction, false)
     |> assign(:current_user, current_user)
     |> assign_users()
     |> handle_joins(Presence.list(@presence))}
  end

  defp send_first_interaction(socket) do
    if !socket.assigns[:first_interaction] do

      # Dispara o evento para o AppWeb.AudioPlayerLive.Index
      assign(socket, :first_interaction, true) |> push_event("start_audio", %{})
    else
      socket
    end
  end

  defp assign_users(socket) do
    user_ids = Presence.list(@presence) |> Map.keys()

    users = Accounts.list_users()

    online_users = Enum.filter(users, fn user -> user.id in user_ids end)
    offline_users = Enum.filter(users, fn user -> user.id not in user_ids end)

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
  def handle_event("ready", _params, socket) do
    user_ids =
      Presence.list(@presence)
      |> Map.keys()

    users =
      Accounts.list_users()
      |> Enum.filter(fn user -> user.id in user_ids end)
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

    {:noreply, socket |> send_first_interaction() |> push_event("change_coordinate", coordinate)}
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

    {:noreply, socket |> send_first_interaction() |> push_event("change_direction", direction)}
  end

  defp sidebar(assigns) do
    ~H"""
    <div class="h-[calc(100vh_-_56px)] grid grid-rows-[auto_minmax(88px,min-content)_minmax(0,1fr)]">
      <%= live_render(@socket, AppWeb.AudioPlayerLive.Index, id: "audio_player") %>

      <div class="p-4 flex justify-between items-center">
        <p class="text-white text-base font-semibold truncate text-ellipsis flex-1">
          Office name
        </p>
        <div class="rounded-md hover:bg-slate-900/25 cursor-pointer">
          <.icon name="hero-x-mark" class="w-6 h-6 text-white" />
        </div>
      </div>

      <div class="space-y-4 p-4 overflow-y-auto border-y-2 border-violet-500 bg-violet-700">
        <div class="text-white text-sm font-semibold uppercase">Current area</div>
        <div>
          <.user_button :for={user <- @online_users} user={user} online={true} />
        </div>
      </div>

      <div class="space-y-4 p-4 overflow-y-auto">
        <div class="text-white text-sm font-semibold uppercase">Offline users</div>
        <div>
          <.user_button :for={user <- @offline_users} user={user} online={false} />
        </div>
      </div>
    </div>
    """
  end

  defp control_panel(assigns) do
    ~H"""
    <div class="flex items-center justify-between py-3 text-sm">
      <div class="flex items-center gap-4">
        <a href="/">
          <img src={~p"/images/logo.svg"} width="36" />
        </a>
        <p class="bg-brand/5 text-brand rounded-full px-2 font-medium leading-6">
          <%= @current_user.name %>
        </p>
      </div>
      <div class="flex items-center gap-4 font-semibold leading-6 text-zinc-900">
        <span href="https://twitter.com/elixirphoenix" class="hover:text-zinc-700">
          Some text
        </span>

        <a
          href="https://hexdocs.pm/phoenix/overview.html"
          class="rounded-lg bg-zinc-100 px-2 py-1 hover:bg-zinc-200/80"
        >
          Some action
        </a>
      </div>
    </div>
    """
  end

  defp user_button(assigns) do
    ~H"""
    <div class={[
      "flex items-center gap-4 p-2 hover:bg-violet-800 rounded-md",
      if(@online, do: "cursor-pointer")
    ]}>
      <div class="relative">
        <div class="w-8 h-8 rounded-full bg-slate-500"></div>
        <div class={[
          "absolute right-0 bottom-0 w-3 h-3 rounded-full border-2 border-slate-900",
          if(!@online, do: "bg-slate-300"),
          if(@online and @user.status == :online, do: "bg-green-500"),
          if(@online and @user.status == :busy, do: "bg-yellow-500"),
          if(@online and @user.status == :do_not_disturb, do: "bg-red-500")
        ]}>
        </div>
      </div>
      <p class="text-sm font-semibold leading-6 text-zinc-100 truncate text-ellipsis">
        <%= @user.name %>
      </p>
    </div>
    """
  end
end
