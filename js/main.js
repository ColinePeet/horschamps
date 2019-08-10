/*
Swiper
 */
function initSwiper(slidesPerView){
var swiper = new Swiper('.swiper1', {
    slidesPerView: slidesPerView,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
  });

}

/*
Swiper Responsive
 */
$(window).ready(function(){
if ($(window).width() < 700){
  initSwiper(1);
  } else if ($(window).width() < 900){
    initSwiper(2);
  }else if ($(window).width() < 1100){
    initSwiper(3);
  } 
  else {
initSwiper(4);
}
});



/*
Parallax
 */
$('.parallax-window1').parallax({imageSrc: 'img/restaurant.jpg'});
$('.parallax-window2').parallax({imageSrc: 'img/home-header.jpg'});
$('.parallax-window3').parallax({imageSrc: 'img/bedroom.jpg'});
$('.parallax-window4').parallax({imageSrc: 'img/grange.jpg'});
$('.parallax-window5').parallax({imageSrc: 'img/home-header.jpg'});


/*
Scroll Reveal
*/
$(window).scroll(function(){
  $('.hidden').each(function(){
    if(isScrolledIntoView($(this))){
      $(this).addClass("reveal");
    }
    else{
      $(this).addClass("hidden");
    }
  });
  $('.bg-anim').each(function(){
    if(isScrolledIntoView($(this))){
      // setTimeout(function(){ 
        $(this).addClass("reveal");
        console.log(this);
      // }, 1000);
    }
  })
});




function isScrolledIntoView(elem){
   var $elem = $(elem);
   var $window = $(window);

   var docViewTop = $window.scrollTop();
   var docViewBottom = docViewTop + $window.height();

   var elemTop = $elem.offset().top;
   var elemBottom = elemTop;

   return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};


// Burger menu
// let myBurger = document.querySelector(".burger");
// let myMenu = document.querySelector(".menu");
// let myNav = document.querySelector("nav");

// myBurger.addEventListener("click", function () {
//   myBurger.classList.toggle("active");
//   myMenu.classList.toggle("active");
//   myNav.classList.remove("englobe");
// });


/* 
Smooth Scroll */
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });