defmodule AppWeb.AudioPlayerLive.Index do
  use Phoenix.LiveView

  def mount(_params, _session, socket) do
    video_id = "d9SCrpXN3EE"

    {:ok, socket |> assign(:video_id, video_id)}
  end

  def render(assigns) do
    ~H"""
    <div id="audio-player" class="flex items-center gap-4 font-semibold leading-6 text-zinc-900">
      <div class="bg-zinc-800 p-4 rounded-lg flex items-center justify-between w-full">
        <div id="youtube-player" class="flex-1">
          <iframe id="youtube-iframe" height="100" src={"https://www.youtube.com/embed/#{@video_id}?autoplay=1&controls=1"} allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>

    </div>

    <style>
      #youtube-player {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        height: 0;
        overflow: hidden;
        max-width: 100%;
      }
      #youtube-iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    </style>
    """
  end
end
