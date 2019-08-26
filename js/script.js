// owl.carousel
$(".owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    autoplayTimeout: 2200,
    smartSpeed: 800,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
// owl.carousel



// isotope
$('.portfolio-item').isotope({
    itemSelector : '.item',
    layoutModel : 'fitRows'
});

$('.portfolio-menu ul li').click(function () {
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector
    });
});
// isotope


// Magnific Popup
$(document).ready(function() {
    $(".work").magnificPopup({
        type : 'image',
        gallery : {
            enabled : true
        }
    });
});
// Magnific Popup




// count up
$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
            countNum: countTo
        },
        {
            duration: 8000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }
        });
});
// count up