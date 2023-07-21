defmodule App.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    config_common_dtls_key_cert()

    children = [
      # Start the Telemetry supervisor
      AppWeb.Telemetry,
      # Start the Ecto repository
      App.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: App.PubSub},
      AppWeb.Presence,
      # Start Finch
      {Finch, name: App.Finch},
      # Start the Endpoint (http/https)
      AppWeb.Endpoint,
      # Start a worker by calling: App.Worker.start_link(arg)
      # {App.Worker, arg}
      {Registry, keys: :unique, name: App.VideRoom.Registry}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: App.Supervisor]
    Supervisor.start_link(children, opts)
  end

  defp config_common_dtls_key_cert() do
    {:ok, pid} = ExDTLS.start_link(client_mode: false, dtls_srtp: true)
    {:ok, pkey} = ExDTLS.get_pkey(pid)
    {:ok, cert} = ExDTLS.get_cert(pid)
    :ok = ExDTLS.stop(pid)
    Application.put_env(:app, :dtls_pkey, pkey)
    Application.put_env(:app, :dtls_cert, cert)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    AppWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
