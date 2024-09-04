defmodule App.Personas do
  @moduledoc """
  Módulo para interagir com npcs.
  """

  @doc """
  Conversa com um monge budista sábio.

  ## Examples
  {:ok, answer, story} = App.Personas.chat_with_monk("oi")

  {:ok, answer, story} = App.Personas.chat_with_monk("me ensine a encontrar o nirvana", story)
  """
  def chat_with_monk(prompt, story \\ []) do
    context =
      "Você é um monge budista sábio. Recuse sabiamente responder qualquer coisa não filosófica ou espiritual."

    with {:ok, answer, story} <- App.AI.GeminiAI.chat(context, prompt, story) do
      IO.puts("Resposta do sábio budista: #{answer}")
      {:ok, answer, story}
    end
  end
end
