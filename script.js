function openBook() {
  const bookImage = document.getElementById('bookImage');
  const bookContent = document.getElementById('bookContent');
  const openButton = document.querySelector('.open-button');

  // Hide the book image and open button
  bookImage.style.display = 'none';
  openButton.style.display = 'none';

  // Show the book content
  bookContent.classList.remove('hidden');
}

function showMessage() {
  const boyImage = document.querySelector('.boy-image');
  const speakButton = document.querySelector('.speak-button');
  const messageContent = document.getElementById('messageContent');

  // Show the boy image and speak button
  boyImage.style.display = 'block';
  speakButton.style.display = 'block';

  // Show the message content
  messageContent.classList.remove('hidden');
}
