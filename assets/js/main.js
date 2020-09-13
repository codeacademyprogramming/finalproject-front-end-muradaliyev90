$(document).ready(function () {
    $('.owl-one').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots:true,
        autoplay:true,
        navContainer: '.owl-one-nav',
        navElement: 'span',
        navText: ['<img src="./assets/images/prevarray.svg" alt="">','<img src="./assets/images/nextarray.svg" alt="">'],
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    })
});

$(document).ready(function () {
    $('.owl-two').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots:true,
        autoplay:false,
        navContainer: '.owl-two-nav',
        navElement: 'span',
        navText: ['<img src="./assets/images/prevarray.svg" alt="">','<img src="./assets/images/nextarray.svg" alt="">'],
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    })
});

$(document).ready(function () {
    $('.owl-three').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots:true,
        autoplay:false,
        navContainer: '.owl-three-nav',
        navElement: 'span',
        navText: ['<img src="./assets/images/prevarray.svg" alt="">','<img src="./assets/images/nextarray.svg" alt="">'],
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1170: {
                items: 6
            }
        }
    })
});

//course-page

$(document).ready(function () {
    $('.courseowl-one').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots:true,
        autoplay:true,
        navContainer: '.courseowl-one-nav',
        navElement: 'span',
        navText: ['<img src="./assets/images/prevarray.svg" alt="">','<img src="./assets/images/nextarray.svg" alt="">'],
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1170: {
                items: 2
            }
        }
    })
});

$(document).ready(function () {
    $('.owl-get-choice').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots:true,
        autoplay:true,
        navContainer: '.owl-get-choice-nav',
        navElement: 'span',
        navText: ['<img src="./assets/images/prevarray.svg" alt="">','<img src="./assets/images/nextarray.svg" alt="">'],
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    })
});

$(document).ready(function () {
    $('.educators-offer').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots:true,
        autoplay:true,
        navContainer: '.educators-offer-nav',
        navElement: 'span',
        navText: ['<img src="./assets/images/prevarray.svg" alt="">','<img src="./assets/images/nextarray.svg" alt="">'],
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    })
});