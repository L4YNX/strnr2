const homeLink = document.querySelector('.home a');

    // Funkcja do obsługi kliknięcia w link "Home"
    function handleHomeClick(event) {
      event.preventDefault(); // Zapobieganie domyślnej akcji kliknięcia (przełączanie linku)

      // Płynne przewijanie do góry strony
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    }

// Dodawanie obsługi zdarzenia dla linka "Home"
homeLink.addEventListener('click', handleHomeClick);

window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  var scrollPosition = window.scrollY;
  var headerHeight = header.clientHeight;

  var opacity = 1 - (scrollPosition / headerHeight);

  header.style.opacity = opacity >= 0 ? opacity : 0;
});