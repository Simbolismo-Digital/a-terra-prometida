import { marked } from 'marked';
import { HfInference } from '@huggingface/inference';

const MessageBubble = {
  mounted() {
    this.shift = false;
    this.mode = document.getElementById("chat-mode").value;
    this.hf = new HfInference('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', {wait_for_model: true});

    this.handleEvent("messages", (message) => {
      this.chatStoryAppend(message.username, message.content);
    })

    // Função para mostrar o balão
    document.addEventListener("keydown", (event) => {
      const speaking = !document.getElementById("message-bubble").classList.contains("hidden");
      
      switch (event.key) {
        case "Shift":
          this.shift = true;
          break;
        default:
            if (speaking) {
              if (!this.shift && event.key === "Enter") {
                  this.sendMessage();
                  event.preventDefault();
                }  
              
            } else {
              if (event.key === "Enter") {
                  this.showBubble();
                  event.preventDefault();
                }
            }
      }
    });
    
    document.addEventListener("keyup", (event) => {
        if (event.key === "Shift") {
            this.shift = false;
        }
    });

    // Função para fechar o balão
    document.addEventListener("click", (event) => {
      if (!this.el.contains(event.target)) {
        this.closeBubble();
      }
    });

    document.getElementById("close-bubble").addEventListener("click", () => {
      this.closeBubble();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.closeBubble();
      }
    });

    // Função para arrastar o balão
    const bubble = document.getElementById("message-bubble");

    bubble.addEventListener("mousedown", (event) => {
      // Verifica se o target é o elemento com id "chat-story" ou um de seus filhos
      if (event.target.closest("#chat-story")) {
        return; // Ignora a movimentação do balão
      }

      const startX = event.clientX - bubble.offsetLeft;
      const startY = event.clientY - bubble.offsetTop;

      const onMouseMove = (event) => {
        bubble.style.left = `${event.clientX - startX}px`;
        bubble.style.top = `${event.clientY - startY}px`;
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });

    // Configurar modo de conversa
    document.getElementById("chat-mode").addEventListener("change", (event) => {
      this.mode = event.target.value;
    });
  },

  showBubble() {
    document.getElementById("message-bubble").classList.remove("hidden");
    document.getElementById("message-input").focus();
    this.pushEvent("message_bubble_hidden", { hidden: false });

  },

  closeBubble() {
    document.getElementById("message-bubble").classList.add("hidden");
    this.pushEvent("message_bubble_hidden", { hidden: true });
  },

  sendMessage() {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();
    if (message === "") {
      this.closeBubble();
      return false;
    }
    // Enviar mensagem com o modo selecionado
    console.log(`Enviando mensagem "${message}" no modo "${this.mode}"`);
    this.pushEvent("send_message", { content: message, mode: this.mode });
    messageInput.value = "";
  },
  
  chatStoryAppend(user, content) {
    // Converte o conteúdo em Markdown para HTML
    const htmlContent = marked(content, {mangle: false});

    // Cria um elemento HTML para o conteúdo
    const chatStory = document.getElementById("chat-story");
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<b>${user}:</b> ${htmlContent}`;
    chatStory.appendChild(messageElement);

    const audioButton = document.createElement("button");

    // Apply styles to the button
    audioButton.style.backgroundColor = '#808080';
    audioButton.style.border = 'none';
    audioButton.style.color = 'white';
    audioButton.style.padding = '15px';
    audioButton.style.textAlign = 'center';
    audioButton.style.textDecoration = 'none';
    audioButton.style.display = 'inline-block';
    audioButton.style.fontSize = '16px';
    audioButton.style.borderRadius = '50%';
    audioButton.style.cursor = 'pointer';
    audioButton.style.transition = 'background-color 0.3s ease';

    // Add the icon inside the button
    audioButton.innerHTML = '<span style="font-size: 24px;">&#128266;</span>';

    audioButton.addEventListener("click", () => {
      this.textToSpeechMessageBubble(audioButton, content);
    })
    messageElement.appendChild(audioButton);
    
    // Rolar o scroll para o final ao adicionar uma nova mensagem
    // chatStory.scrollTop = chatStory.scrollHeight;
    
    this.showBubble();
  },

  async textToSpeechMessageBubble(button, text) {
    let speech = button.querySelector('audio');
    if (!speech) {
      speech = document.createElement('audio');
      button.appendChild(speech);
    }
    if (!speech.src) {
      const response = await this.hf.textToSpeech({model: 'facebook/mms-tts-por', inputs: text});
      speech.src = URL.createObjectURL(response);
      button.style.backgroundColor = '#4CAF50';
    }
    speech.play().catch(error => {
      console.error('Erro ao tocar audio:', error);
    });
  }
};

export default MessageBubble;
