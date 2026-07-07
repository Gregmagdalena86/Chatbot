const chat = document.getElementById("chat");
const form = document.getElementById("chatForm");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");

let messages = [
  {
    role: "assistant",
    content: "Hallo! Ich bin dein Demo-Chatbot. Stelle mir eine Frage.",
  },
];

function render() {
  chat.innerHTML = "";
  for (const message of messages) {
    const div = document.createElement("div");
    div.className = `message ${message.role}`;
    div.textContent = message.content;
    chat.appendChild(div);
  }
  chat.scrollTop = chat.scrollHeight;
}

async function sendMessage(userText) {
  messages.push({ role: "user", content: userText });
  render();

  sendBtn.disabled = true;
  input.disabled = true;

  const loading = { role: "assistant", content: "Denke nach..." };
  messages.push(loading);
  render();

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: messages.filter((m) => m.content !== "Denke nach..."),
      }),
    });

    const data = await response.json();
    messages.pop();

    if (!response.ok) {
      messages.push({ role: "error", content: data.error || "Unbekannter Fehler." });
    } else {
      messages.push({ role: "assistant", content: data.answer });
    }
  } catch (error) {
    messages.pop();
    messages.push({ role: "error", content: "Server nicht erreichbar. Läuft node server.js?" });
  } finally {
    sendBtn.disabled = false;
    input.disabled = false;
    input.focus();
    render();
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  input.value = "";
  sendMessage(text);
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    form.requestSubmit();
  }
});

clearBtn.addEventListener("click", () => {
  messages = [
    {
      role: "assistant",
      content: "Chat gelöscht. Stelle mir eine neue Frage.",
    },
  ];
  render();
});

render();
