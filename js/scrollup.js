// Scroll to top button show/hide
$(window).scroll(function() {
    var scrollUp = $('#scroll-up');
    if ($(this).scrollTop() > 200) {
        scrollUp.addClass('show');
    } else {
        scrollUp.removeClass('show');
    }
});

// Smooth scrolling using jQuery easing
$('a.scrollup').on('click', function(event) {
    event.preventDefault();
    $('html, body').stop().animate({
        scrollTop: 0
    }, 1000);
});