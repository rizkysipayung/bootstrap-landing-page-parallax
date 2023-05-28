// parallax


// About

$(window).on('load', function(){
    $('.p-left').addClass('pAppear');
    $('.p-right').addClass('pAppear');
})
$(window).scroll(function(){
    // Scrolling Parallax - Jumbotron
    let wScroll = $(this).scrollTop();
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll*0.25 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll*0.5 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll +'%)'
    });
    
    // Appearing Parallax
    if(wScroll > $('.portfolio').offset().top - 600){
        $('.portfolio .img-thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .img-thumbnail').eq(i).addClass('appear');
            }, 200*(i+1));
        });
    }
});

