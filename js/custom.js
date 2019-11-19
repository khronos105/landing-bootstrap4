jQuery(document).ready(function ($) {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if(scroll < 200){
            $('.fixed-top').removeClass('background-scroll-down');
        }else{
            $('.fixed-top').addClass('background-scroll-down');
        }
    });
    $('section.section-features .nav-item').click(function(){
        var target = $(this).attr('href');
        $('section.section-features .tab-content img').removeClass('active');
        setTimeout(function(){
            $('section.section-features .tab-content ' + target + ' img').addClass('active');
        }, 200)
    })
})
