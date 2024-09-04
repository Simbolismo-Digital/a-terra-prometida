# Não utilizada ainda por exigir pagamento para utilização da API
#
# defmodule App.AI.OpenAI do
#   # @usage_endpoint "https://api.openai.com/v1/dashboard/billing/usage"
#   @chat_endpoint "https://api.openai.com/v1/chat/completions"

#   # App.OpenAI.chat_with_monk("Como posso alcançar a paz interior?")
#   def chat(prompt) do
#     chat(prompt, false)
#   end

#   def chat(prompt, true) do
#     body =
#       %{
#         "model" => "gpt-3.5-turbo",
#         "messages" => [
#           %{
#             "role" => "system",
#             "content" =>
#               "Você é um monge budista sábio. Recuse sabiamente responder qualquer coisa não filosófica ou espiritual."
#           },
#           %{"role" => "user", "content" => prompt}
#         ]
#       }
#       |> Jason.encode!()

#     headers = default_headers()

#     Finch.build(:post, @chat_endpoint, headers, body)
#     |> do_request()
#   end

#   def chat(_prompt, false), do: {:ok, "Mais um lindo dia de sol! Amigo."}

#   # # App.OpenAI.quota()
#   # def quota do
#   #   headers = default_headers()

#   #   Finch.build(:get, @usage_endpoint, headers)
#   #   |> do_request()
#   # end

#   defp default_headers() do
#     [
#       {"Authorization", "Bearer #{@api_key}"},
#       {"Content-Type", "application/json"}
#     ]
#   end

#   defp do_request(request) do
#     request
#     |> Finch.request(App.Finch)
#     |> handle_response()
#   end

#   defp handle_response({:ok, r = %Finch.Response{status: 200, body: body}}) do
#     IO.inspect(r)

#     case Jason.decode(body) do
#       {:ok, %{"choices" => [choice | _]}} ->
#         content = choice["message"]["content"]
#         IO.puts("Resposta do monge budista: #{content}")

#         {:ok, content}

#       {:ok, data} ->
#         {:ok, data}

#       _ ->
#         IO.puts("Erro ao processar a resposta")
#     end
#   end

#   defp handle_response({:ok, %Finch.Response{status: status, body: body}}) do
#     {:error, "Erro nas solicitação: #{status} - #{body}"}
#   end

#   defp handle_response({:error, reason}) do
#     IO.puts("Erro na solicitação: #{reason}")
#   end

#   defp api_key() do
#     Application.get_env(:app, App.AI)[:open_ai_api_key]
#   end
# end
