const MessageBubble = {
  mounted() {
    this.shift = false;
    this.mode = document.getElementById("chat-mode").value;
    
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
    const chatStory = document.getElementById("chat-story");
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<b>${user}:</b> ${content}`;
    chatStory.appendChild(messageElement);
    
    // Manter o scroll no final ao adicionar uma nova mensagem
    chatStory.scrollTop = chatStory.scrollHeight;
    
    this.showBubble();
  }
};

export default MessageBubble;