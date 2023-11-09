defmodule App.Accounts.User do
  use App.Schema
  import Ecto.Changeset

  schema "users" do
    field :status, Ecto.Enum, values: [:online, :do_not_disturb, :busy], default: :online
    field :direction, Ecto.Enum, values: [:up, :down, :left, :right], default: :up
    field :latitude, :integer, default: 10
    field :longitude, :integer, default: 20
    field :name, :string, default: ""
    field :username, :string

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :status, :name, :direction, :latitude, :longitude])
    |> validate_required([:username, :name])
  end
end
