(function($) {

    "use strict";

    // COLOR MODE
    $('.color-mode').click(function() {
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true
    });

    // SMOOTHSCROLL
    $(function() {
        $('.nav-link, .custom-btn-link').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);

const contactBtn = document.querySelector('.contact-btn');
const whatsappBtn = document.querySelector('.whatsapp-btn');
const formWrapper = document.querySelector('.contact-form-wrapper');

contactBtn.addEventListener('click', function(event) {
    event.preventDefault();
    formWrapper.classList.toggle('show');
    const scrollTarget = formWrapper.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: scrollTarget,
        behavior: 'smooth'
    });
});

whatsappBtn.addEventListener('click', function() {
    window.open("https://wa.me/201062977494");
});

const scrollUp = document.querySelector('#scroll-up');

window.onscroll = function() {
    if (window.pageYOffset > 100) {
        scrollUp.style.display = 'block';
    } else {
        scrollUp.style.display = 'none';
    }
}

scrollUp.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});