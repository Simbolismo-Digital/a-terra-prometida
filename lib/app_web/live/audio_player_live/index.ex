defmodule AppWeb.AudioPlayerLive.Index do
  use Phoenix.LiveView

  def render(assigns) do
    ~H"""
    <div id="audio-player" class="flex items-center gap-4 font-semibold leading-6 text-zinc-900">
      <div class="bg-zinc-800 p-4 rounded-lg w-full">
        <div>
          <h1 class="text-white">Background Music</h1>
        </div>
        <div class="flex items-center justify-between">
        <button id="toggle-play-button" class="bg-blue-500 text-white p-2 rounded ml-4">
            <svg
              id="play-icon"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.752 11.168l-6.797-3.978A1 1 0 006 8v8a1 1 0 001.555.832l6.797-3.978a1 1 0 000-1.664z"
              />
            </svg>
            <svg
              id="pause-icon"
              class="h-6 w-6 hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 9v6m4-6v6" />
            </svg>
          </button>
          <input
            id="volume-control"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value="1"
            class="w-32 h-2 bg-blue-500 rounded"
          />
        </div>
      </div>
      <audio id="audio" src={"/audio/Action 1 Loop.ogg"} type="audio/ogg" loop></audio>
    </div>

    <script>
      document.addEventListener('DOMContentLoaded', function () {
        var audio = document.getElementById('audio');
        var toggleButton = document.getElementById('toggle-play-button');
        var playIcon = document.getElementById('play-icon');
        var pauseIcon = document.getElementById('pause-icon');
        var volumeControl = document.getElementById('volume-control');

        // Função para iniciar o áudio
        function startAudio() {
          if (audio) {
            console.log("Tocar audio");
            audio.play();
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
          }
        }

        // Função para parar o áudio
        function stopAudio() {
          console.log("Pausar audio");
          audio.pause();
          pauseIcon.classList.add('hidden');
          playIcon.classList.remove('hidden');
        }

        toggleButton.addEventListener('click', function () {
          if (audio.paused) {
            startAudio()
          } else {
            stopAudio()
          }
        });

       volumeControl.addEventListener('input', function () {
          audio.volume = volumeControl.value;
        });

        // Adiciona um listener para o evento `start_audio`
        window.addEventListener("phx:start_audio", function (event) {
          startAudio();
        });
      });
    </script>
    """
  end
end
