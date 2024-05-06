$(document).ready(function() {
    let slideIndex = 1;

    showSlides(slideIndex);

    $('.prev').click(function() {
        showSlides(slideIndex -= 1);
    });

    $('.next').click(function() {
        showSlides(slideIndex += 1);
    });

    function showSlides(n) {
        let slides = $('.mySlides');
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.hide();
        slides.eq(slideIndex - 1).show();
    }
});
