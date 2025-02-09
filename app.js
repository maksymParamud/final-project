// ---------------THIRD PAGE--------------

$(document).ready(function() {
    $('.card-footer button').click(function() {

        $('.card-container').css({
            'border': '2px solid #DDDDDD',
            'background-color': 'transparent',
            
        });

        $('.card-footer button').css({
            'background-color': 'white',
            'color': '#F53838',
            'box-shadow': 'none'
        });

        $(this).closest('.card-container').css({
            'border': '2px solid #F53838',
        });

        $(this).css({
            'background-color': '#F53838',
            'color': 'white',
            'box-shadow': '0px 5px 20px rgba(255, 24, 24, 0.5)'
        });
    });
});


// ---------------FIFTH PAGE--------------

$(document).ready(function () {
    const sliders = $(".slide");
    const slidesContent = $(".slider-content");
    const pointsDiv = $(".points");
    const points = $(".point");
    const arrowLeft = $("#arrow-left");
    const arrowRight = $("#arrow-right");

    let orderArray = sliders.toArray();
    let last = orderArray.length - 1;
    let current = 0;

    function highlightCurrent() {
        $(slidesContent[current]).addClass("active-slide");
        $(points[current]).addClass("active-point");
    }

    function reset() {
        $(slidesContent).removeClass("active-slide");
        $(points).removeClass("active-point");
    }

    function init() {
        reset();
        highlightCurrent();
    }

    init();

    function redoOrder() {
        sliders.each(function (index) {
            $(this).css("order", orderArray.indexOf(this));
        });
    }

    function goRight() {
        reset();
        let prev = orderArray.shift();
        orderArray.push(prev);
        redoOrder();
        if (current === last) {
            current = 0;
        } else {
            current++;
        }
        highlightCurrent();
    }

    function goLeft() {
        reset();
        let prev = orderArray.pop();
        orderArray.unshift(prev);
        redoOrder();
        if (current === 0) {
            current = last;
        } else {
            current--;
        }
        highlightCurrent();
    }

    function pointSlide(e) {
        let index = $(points).index(e.target);
        if (index === -1) return;
        reset();
        let tmp_slides = sliders.toArray();
        
        if (index !== 0) {
            let tail = tmp_slides.splice(0, index);
            orderArray = [...tmp_slides, ...tail];    
        } else {
            orderArray = tmp_slides;
        }

        current = index;
        highlightCurrent();
        redoOrder();
    }

    arrowRight.on("click", goRight);
    arrowLeft.on("click", goLeft);
    pointsDiv.on("click", pointSlide);
});


// ---------------BURGER MENU--------------

$(document).ready(function () {
    $('#burger-btn').change(function() {

        if ($(this).prop('checked')) {
            if ($(".nav-burger-menu").length === 0) {

                $(".burger-menu")

                $(".nav-burger").append(
                    '<ul class="nav-burger-menu">' +
                    '<li><a href="#">About</a></li>' +
                    '<li><a href="#">Features</a></li>' +
                    '<li><a href="#">Pricing</a></li>' +
                    '<li><a href="#">Testimonials</a></li>' +
                    '<li><a href="#">Help</a></li>' +
                    '<div class="sign">'+
                        '<li class="Sign-in"><a href="#">Sign In</a></li>'+
                        '<li class="Sign-up"><a class="sign-up" href="#">Sign Up</a></li>' +
                    '</div>' +
                    '</ul>'
                );

            }
        } else {
            console.log('checkBox is not clicked');
            $(".nav-burger-menu").remove();
        }

    });
});