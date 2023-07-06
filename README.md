# A Terra Prometida

Uma iniciativa Open Source para engajar comunidades em espaços virtuais.
Junte-se ao Discord: https://discord.gg/ZrH55pyB 

# Demo
https://youtu.be/ZaHQknMooa8

# Pre requisitos

Para prosseguir com este projeto nós assumimos que você tenha instalado:
  * Docker Desktop
  * Mix (Elixir)

### Video Room
#### Mac OS X

```
brew install srtp libnice clang-format ffmpeg opus
```

#### Ubuntu

```
sudo apt-get install libsrtp2-dev libnice-dev libavcodec-dev libavformat-dev libavutil-dev libopus-dev ffmpeg
```

## Executando

Para iniciar o seu servidor Phoenix:
  * Execute `docker-compose up -d` para iniciar as dependências (banco de dados).
  * Execute `mix setup` para instalar e configurar as dependências.
  * Inicie o endpoint do Phoenix com `mix phx.server` ou dentro do IEx com `iex -S mix phx.server`.

Agora você pode visitar [`localhost:4000?username=[NOME_DO_USUÁRIO]`](http://localhost:4000?username=[NOME_DO_USUÁRIO]) no seu navegador.

Basta substituir NOME_DO_USUÁRIO pelo nome do seu usuário e se divertir.

Pronto para executar em produção? Por favor, [verifique nossos guias de implantação](https://hexdocs.pm/phoenix/deployment.html).

## Saiba mais

  * Website oficial: https://www.phoenixframework.org/
  * Guias: https://hexdocs.pm/phoenix/overview.html
  * Documentação: https://hexdocs.pm/phoenix
  * Fórum: https://elixirforum.com/c/phoenix-forum
  * Código-fonte: https://github.com/phoenixframework/phoenix
  * Phoenix LiveView: https://hexdocs.pm/phoenix_live_view/
  * Exercism: https://exercism.org/tracks/elixir
