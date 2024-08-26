const MessageBubble = {
  mounted() {
    this.shift = false;
    
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
  },

  showBubble() {
    document.getElementById("message-bubble").classList.remove("hidden");
    document.getElementById("message-input").focus();
  },

  closeBubble() {
    document.getElementById("message-bubble").classList.add("hidden");
  },

  sendMessage() {
    const messageInput = document.getElementById("message-input");
    if (messageInput.value === "") this.closeBubble(); 
    console.log(`Enviando mesangem "${messageInput.value}"`);
    messageInput.value = "";
  }
};

export default MessageBubble;