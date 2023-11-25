function openBook() {
  const book = document.getElementById('book');
  const bookImage = document.querySelector('.book-image');

  document.querySelector('.button').style.display = 'none';
  book.style.backgroundImage = 'url("book.jpg")';
  bookImage.classList.remove('hidden');
  document.querySelector('.button.hidden').classList.remove('hidden');
}

function showBoyAndText() {
  document.getElementById('boy').classList.remove('hidden');
  document.getElementById('message').classList.remove('hidden');
}
