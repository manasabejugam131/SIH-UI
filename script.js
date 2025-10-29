// Simple Chat Room Simulation
function sendMessage() {
  var input = document.getElementById('chat-input');
  var message = input.value.trim();
  if (message) {
    var messages = document.getElementById('chat-messages');
    messages.innerHTML += `<div><b>You:</b> ${message}</div>`;
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
  }
}

// Simple AI Chatbot Simulation
function askBot() {
  var input = document.getElementById('bot-input');
  var message = input.value.trim();
  if (message) {
    var messages = document.getElementById('bot-messages');
    messages.innerHTML += `<div><b>You:</b> ${message}</div>`;
    // Simple bot reply
    setTimeout(function() {
      messages.innerHTML += `<div><b>VED AI:</b> I'm here to help you learn easily! (AI simulation)</div>`;
      messages.scrollTop = messages.scrollHeight;
    }, 500);
    input.value = '';
  }

