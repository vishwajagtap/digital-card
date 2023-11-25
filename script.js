function openBook() {
  const bookCover = document.getElementById('bookCover');
  const book = document.getElementById('book');
  
  // Show the book cover image
  bookCover.classList.remove('hidden');
  
  // Hide the button
  event.target.style.display = 'none';
  
  // Show the book with your message
  book.classList.remove('hidden');
}

