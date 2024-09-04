defmodule App.AI.GeminiAI do
  @moduledoc """
  Módulo para interagir com a API do Google Generative Language.

  Cheque a documentação oficial
  https://ai.google.dev/gemini-api/docs/get-started/tutorial?lang=rest&hl=pt-br
  """
  @url "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent"

  def chat(context, prompt, story \\ []) do
    contents = contents(context, prompt, story)

    body =
      %{
        contents: contents
      }
      |> Jason.encode!()

    headers = [
      {"Content-Type", "application/json"}
    ]

    Finch.build(:post, "#{@url}?key=#{api_key()}", headers, body)
    |> Finch.request(App.Finch)
    |> handle_response(contents)
  end

  defp contents(context, prompt, []) do
    [
      %{
        role: "user",
        parts: [
          %{text: context},
          %{text: prompt}
        ]
      }
    ]
  end

  defp contents(_context, prompt, story) do
    story ++
      [
        %{
          role: "user",
          parts: [
            %{text: prompt}
          ]
        }
      ]
  end

  defp add_story(contents, answer) do
    contents ++
      [
        %{
          role: "model",
          parts: [
            %{text: answer}
          ]
        }
      ]
  end

  defp handle_response({:ok, %Finch.Response{status: 200, body: body}}, contents) do
    case Jason.decode(body) do
      {:ok, %{"candidates" => [candidate | _]}} ->
        answer = Enum.at(candidate["content"]["parts"], 0)["text"]

        {:ok, answer, add_story(contents, answer)}

      _ ->
        IO.puts("Erro ao processar a resposta")
    end
  end

  defp handle_response({:ok, %Finch.Response{status: status, body: body}}) do
    {:error, "Request failed with status #{status}: #{body}"}
  end

  defp handle_response({:error, reason}) do
    {:error, reason}
  end

  defp api_key() do
    Application.get_env(:app, App.AI)[:gemini_ai_api_key]
  end
end
