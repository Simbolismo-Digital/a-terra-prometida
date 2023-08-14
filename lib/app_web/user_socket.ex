defmodule AppWeb.UserSocket do
  use Phoenix.LiveView.Socket

  channel("room:*", AppWeb.PeerChannel)

  @impl true
  def connect(_params, socket, _connect_info) do
    {:ok, socket}
  end

  @impl true
  def id(_socket), do: nil
end
