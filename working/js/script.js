//sticky Nav effect
//$(document).ready(function(){
   // $(window).scroll(function(){
        //var topscroll =750;
        //if($(window).scrollTop() >= topscroll){
        //    $('nav').addClass("navbar-fixed-top");
            //$('nav').css({
			//	height:'500px'
            //});
      //  }
       // else{
       //     $('nav').removeClass("navbar-fixed-top");
       // }
   // });

//});


  //Parallax effect in the hero
 $(document).ready(function(){



    $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.logo').css({
        'transform': 'translate(0px,'+ wScroll/2 +'%)'
    });

            $('.beer').css({
        'transform': 'translate(0px, -'+ wScroll/40 +'%)'
    });
            $('.burger').css({
        'transform': 'translate(0px, '+ wScroll/4 +'%)'
    });
 });

});

//$(document).ready(function(){



   // $(window).scroll(function(){
   // var wScroll = $(this).scrollTop();

   //if(wScroll > $('.portfolioSection').offset().top - ($(window).height()/2)){
    //    console.log('its working now');
       // $('.portfolioSection img').each(function(){
        //$('.portfolioSection img').addClass('showPortImg');

       //    });
    //}


////});

//});





//fading quotes on homepage
$(document).ready(function(){
    $(".quotes > .blockquote:gt(0)").hide();
    setInterval(function(){
        $('.quotes > .blockquote:first')
        .fadeOut(1)
        .next()
        .fadeIn(500)
        .end()
        .appendTo('.quotes');
    },5000);

});


//Makes the secondary nav pop out after the user scrolls
$(document).ready(function(){
$(window).scroll(function(){
var navStick =51;
if($(window).scrollTop() >= navStick){
$('.navbar-default').addClass("navbar-fixed-top");
}else{$('.navbar-default').removeClass("navbar-fixed-top");}
});
});


//Makes the secondary nav pop out after the user scrolls
$(document).ready(function(){
$(window).scroll(function(){
var topscroll =25;
if($(window).scrollTop() >= topscroll){
$('.secondaryNav').addClass("secondaryNavPosition");
}
});
});


//Adds a class to the secondary nav when the screen width is below 900px
/*$(document).ready(function(){

$(window).on('resize', function() {
    if($(window).width() < 900) {
        $('.secondaryNav').addClass('secondaryNavMoblie');
    }
});


$(window).scroll(function(){
var moblieSecNavScroll =253;
if($(window).scrollTop() >= moblieSecNavScroll){
$('.secondaryNavMoblie').addClass("secondaryNavMobliePosition");
$('.navbar').removeClass("navbar-fixed-top");
    }else{
        $('.secondaryNavMoblie').removeClass("secondaryNavMobliePosition");
    }
});


});*/


$(document).ready(function(){
$(window).scroll(function(){
var topscroll =200;
if($(window).scrollTop() >= topscroll){
$('.secondaryNav').addClass("secondaryNavPosition");
} else {

}
});
});





$(window).scroll( function() {
  console.log( $(this).scrollTop());
});
