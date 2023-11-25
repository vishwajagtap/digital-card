function openBook() {
  const book = document.getElementById('book');
  const openBtn = document.querySelector('.open-btn');
  const boy = document.getElementById('boy');
  const speakBtn = document.querySelector('.speak-btn');
  
  // Hide the 'Open the Book' button and reveal the book image
  openBtn.style.display = 'none';
  book.classList.remove('hidden');
  
  // Show the boy image
  boy.classList.remove('hidden');
  speakBtn.classList.remove('hidden');
}

function openMessage() {
  const message = document.getElementById('message');
  const speakBtn = document.querySelector('.speak-btn');
  
  // Hide the 'I Want to Say Something' button and reveal the message
  speakBtn.style.display = 'none';
  message.classList.remove('hidden');
}
