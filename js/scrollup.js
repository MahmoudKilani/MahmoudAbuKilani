  // Scroll to top button show/hide
  window.addEventListener('scroll', function() {
      var scrollUp = document.getElementById('scroll-up');
      if (window.scrollY > 200) {
          scrollUp.classList.add('show');
      } else {
          scrollUp.classList.remove('show');
      }
  });

  // Smooth scrolling using jQuery easing
  $('a.scrollup').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  });