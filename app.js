const messageForm = document.querySelector('#message-form');
const messagesList = document.querySelector('#messages');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const nameInput = messageForm.querySelector('#name');
  const messageInput = messageForm.querySelector('#message');
  
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();
  
  if (name !== '' && message !== '') {
    const messageItem = document.createElement('li');
    const messageHeading = document.createElement('h3');
    const messageText = document.createElement('p');
    const messageTime = document.createElement('time');
    
    messageHeading.textContent = name;
    messageText.textContent = message;
    messageTime.dateTime = new Date().toISOString();
    messageTime.textContent = new Date().toLocaleString();
    
    messageItem.appendChild(messageHeading);
    messageItem.appendChild(messageText);
    messageItem.appendChild(messageTime);
    
    messagesList.appendChild(messageItem);
    
    nameInput.value = '';
    messageInput.value = '';
  }
});