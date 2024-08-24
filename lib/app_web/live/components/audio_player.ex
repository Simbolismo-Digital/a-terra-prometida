defmodule AppWeb.Components.AudioPlayer do
  use AppWeb, :live_component

  def render(assigns) do
    ~H"""
    <div id="audio-player" class="flex items-center gap-4 font-semibold leading-6 text-zinc-900">
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
      <div id="youtube-player" class="bg-zinc-800 flex-1">
        <iframe
          id="youtube-iframe"
          height="100"
          src={@autoplay && "https://www.youtube.com/embed/#{@video_id}?autoplay=1&controls=1"}
          allow="autoplay; encrypted-media"
          allowfullscreen
        >
        </iframe>
        <div
          id="youtube-iframe-overlay"
          class="overlay"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: transparent; z-index: 10;"
        >
        </div>

        <script>
          document.addEventListener("DOMContentLoaded", (event) => {
            document.getElementById("youtube-iframe-overlay").addEventListener("click", (event) => {
              // console.log("Click overlay", event.target);
              event.target.classList.add('hidden');
              setTimeout(() => {
                // console.log("Switch back overlay");
                event.target.classList.remove('hidden');
                window.focus();
              }, 600);
            })
          });
        </script>
      </div>
    </div>
    """
  end
end
