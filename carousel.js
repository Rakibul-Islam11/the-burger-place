$('#myCarousel').carousel({
    interval: 3000
})//এখানে slid টা কত speed এ slid হবে তা এখানে বলে দিতে পারেন এখানে amount যত বাড়াবেন তত speed কম্বে

$('.carousel .carousel-item').each(function () {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});
