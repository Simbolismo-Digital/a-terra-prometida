defmodule App.Personas do
  @moduledoc """
  Módulo para interagir com npcs.
  """

  @doc """
  Inicia uma conversa com um yogi ancião conhecedor dos vedas.

  ## Parâmetros

  * `prompt`: A pergunta ou tema que você deseja discutir com o yogi.
  * `story`: A história ou contexto da conversa (opcional).

  ## Retorno

  * `{:ok, answer, story}`: A resposta do yogi e a história atualizada.

  ## Exemplos

      iex> App.Personas.chat_with_yogi("Qual é o significado da vida?")
      {:ok, "A vida é um ciclo de nascimento, morte e renascimento...", []}
  """
  def chat_with_yogi(prompt, story \\ []) do
    context = common_context("Você é um yogi ancião conhecedor dos vedas")

    with {:ok, answer, story} <- App.AI.GeminiAI.chat(context, prompt, story) do
      IO.puts("Resposta do yogi: #{answer}")
      {:ok, answer, story}
    end
  end

  @doc """
  Inicia uma conversa com um devoto fervoroso hare khrishna.

  ## Parâmetros

  * `prompt`: A pergunta ou tema que você deseja discutir com o devoto.
  * `story`: A história ou contexto da conversa (opcional).

  ## Retorno

  * `{:ok, answer, story}`: A resposta do devoto e a história atualizada.

  ## Exemplos

      iex> App.Personas.chat_with_hare_krishna("Qual é o caminho para a iluminação?")
      {:ok, "O caminho para a iluminação é através da devoção e do amor...", []}
  """
  def chat_with_hare_krishna(prompt, story \\ []) do
    context = common_context("Você é um devoto fervoroso hare khrishna")

    with {:ok, answer, story} <- App.AI.GeminiAI.chat(context, prompt, story) do
      IO.puts("Resposta do hare krishna: #{answer}")
      {:ok, answer, story}
    end
  end

  @doc """
  Inicia uma conversa com um padre cristão conhecedor de toda bíblia e contexto histórico do cristianismo.

  ## Parâmetros

  * `prompt`: A pergunta ou tema que você deseja discutir com o padre.
  * `story`: A história ou contexto da conversa (opcional).

  ## Retorno

  * `{:ok, answer, story}`: A resposta do padre e a história atualizada.

  ## Exemplos

      iex> App.Personas.chat_with_christian("Qual é o significado da crucificação?")
      {:ok, "A crucificação é um símbolo da redenção...", []}
  """
  def chat_with_christian(prompt, story \\ []) do
    context =
      common_context(
        "Você é um padre cristão conhecedor de toda bíblia e contexto histórico do cristianismo"
      )

    with {:ok, answer, story} <- App.AI.GeminiAI.chat(context, prompt, story) do
      IO.puts("Resposta do padre cristão: #{answer}")
      {:ok, answer, story}
    end
  end

  @doc """
  Inicia uma conversa com um líder muçulmano conhecedor de toda religião Muslim.

  ## Parâmetros

  * `prompt`: A pergunta ou tema que você deseja discutir com o líder.
  * `story`: A história ou contexto da conversa (opcional).

  ## Retorno

  * `{:ok, answer, story}`: A resposta do líder e a história atualizada.

  ## Exemplos

      iex> App.Personas.chat_with_muslim("Qual é o significado do Alcorão?")
      {:ok, "O Alcorão é o livro sagrado dos muçulmanos...", []}
  """
  def chat_with_muslim(prompt, story \\ []) do
    context = common_context("Você é um líder muçulmano conhecedor de toda religião Muslim")

    with {:ok, answer, story} <- App.AI.GeminiAI.chat(context, prompt, story) do
      IO.puts("Resposta do padre muçulmano: #{answer}")
      {:ok, answer, story}
    end
  end

  @doc """
  Inicia uma conversa com um monge budista sábio.

  ## Parâmetros

  * `prompt`: A pergunta ou tema que você deseja discutir com o monge.
  * `story`: A história ou contexto da conversa (opcional).

  ## Retorno

  * `{:ok, answer, story}`: A resposta do monge e a história atualizada.

  ## Exemplos

      iex> App.Personas.chat_with_monk("Qual é o caminho para a iluminação?")
      {:ok, "O caminho para a iluminação é através da meditação...", []}
  """
  def chat_with_monk(prompt, story \\ []) do
    context = common_context("Você é um monge budista sábio")

    with {:ok, answer, story} <- App.AI.GeminiAI.chat(context, prompt, story) do
      IO.puts("Resposta do sábio budista: #{answer}")
      {:ok, answer, story}
    end
  end

  @doc """
  Inicia uma conversa com um líder de umbanda babalorixa.

  ## Parâmetros

  * `prompt`: A pergunta ou tema que você deseja discutir com o líder.
  * `story`: A história ou contexto da conversa (opcional).

  ## Retorno

  * `{:ok, answer, story}`: A resposta do líder e a história atualizada.

  ## Exemplos

      iex> App.Personas.chat_with_babalorixa("Qual é o significado da umbanda?")
      {:ok, "A umbanda é uma religião afro-brasileira...", []}
  """
  def chat_with_babalorixa(prompt, story \\ []) do
    context = common_context("Você é um líder ancião de umbanda babalorixa criado nessa cultura")

    with {:ok, answer, story} <- App.AI.GeminiAI.chat(context, prompt, story) do
      IO.puts("Resposta do babalorixa: #{answer}")
      {:ok, answer, story}
    end
  end

  defp common_context(custom) do
    """
    #{custom}.
    Recuse sabiamente responder qualquer coisa não filosófica ou espiritual fora do seu domínio.
    Quando questionado sobre o templo de Arjuna, é o templo que você está agora, e representa a busca do herói Arjuna escrito no livro Sagrado Mahabarata.
    Lembre-se que essa é a busca humana pela verdade e conhecimento. Faça paralelos com sua religião e cite-a caso esteja respondendo sobre o templo.
    """
  end
end
