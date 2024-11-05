// ====================== Jquery Step Form ====================== 
$(function () {
    $("#wizard").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "slideLeft"
    });
});
// ======================  Testimonial Slider ====================== 
$('#testi_slider').owlCarousel({ 
    dots:true, 
    nav:false, 
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
    loop:true, 
    margin:50, 
    smartSpeed:1000,
    autoplay:true, 
    autoplayTimeout:2000, 
    autoplayHoverPause:true, 
    responsiveClass:true, 
    responsive:{ 
        320:{ 
            items:1, 
        }, 
        1000:{ 
            items:2, 
        }, 
    } 
})