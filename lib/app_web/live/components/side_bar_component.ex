defmodule AppWeb.Components.SideBar do
  use AppWeb, :live_component

  def mount(socket) do
    {:ok, socket}
  end

  def render(assigns) do
    ~H"""
    <div class="h-[calc(100vh_-_80px)] flex flex-col">
      <.live_component
        module={AppWeb.Components.AudioPlayer}
        id="audio_player"
        autoplay={@autoplay}
        video_id="d9SCrpXN3EE"
      />

      <div class="p-4 flex justify-between items-center">
        <p class="text-white text-base font-semibold truncate text-ellipsis flex-1">
          <%= @title %>
        </p>
        <div class="rounded-md hover:bg-slate-900/25 cursor-pointer">
          <.icon name="hero-x-mark" class="w-6 h-6 text-white" />
        </div>
      </div>

      <div class="flex flex-col flex-1 overflow-hidden">
        <div class="space-y-4 overflow-y-auto custom-scroll border-y-2 border-violet-500 bg-violet-700">
          <div class="text-white text-sm font-semibold uppercase sticky top-0 bg-violet-700 z-10 p-4">
            <%= @area %>
          </div>
          <div>
            <.user_button :for={user <- @online_users} user={user} online={true} />
          </div>
        </div>

        <div class="max-h-[50%] space-y-4 overflow-y-auto custom-scroll">
          <div class="text-white text-sm font-semibold uppercase sticky top-0 bg-violet-900 z-10 p-4">
            Usuários offline
          </div>
          <div>
            <.user_button :for={user <- @offline_users} user={user} online={false} />
          </div>
        </div>
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
          if(@online and @user.status == :npc, do: "bg-green-500"),
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
