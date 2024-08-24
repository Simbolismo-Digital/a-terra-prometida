defmodule AppWeb.Components.ControlPanel do
  use AppWeb, :live_component

  def mount(socket) do
    {:ok, socket}
  end

  def render(assigns) do
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
end
