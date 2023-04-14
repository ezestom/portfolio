

// Selecciona los elementos del DOM
const messageList = document.querySelector('.message-list');
const messageInput = document.querySelector('.message-input');
const sendButton = document.querySelector('.send-button');

// Crea una función para agregar un mensaje a la lista
function addMessage() {
  // Obtiene el texto del mensaje y lo limpia
  const messageText = messageInput.value.trim();

  // Verifica que el mensaje no esté vacío
  if (messageText === '') {
    return;
  }

  // Crea un elemento para el nuevo mensaje y lo agrega a la lista
  const newMessage = document.createElement('li');
  newMessage.textContent = messageText;
  messageList.appendChild(newMessage);

  // Limpia el input del mensaje
  messageInput.value = '';
}

// Agrega un controlador de eventos al botón de enviar
sendButton.addEventListener('click', addMessage);

// Agrega un controlador de eventos al input de mensaje para que el usuario pueda presionar Enter para enviar
messageInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    addMessage();
  }
});



