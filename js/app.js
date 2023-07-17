$(function(){
$('.owl-carousel0').owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 200,
  items: 3,
  loop: true,
  layzload: true,
  stagePadding: 0,
  padding: 5,
  margin: 5,
  nav:false,
  dots:false,
  center: true,
  startPosition: 1,
  responsive:{
      0:{
          items:1
      },
      485:{
          items:1
      },
      728:{
          items:3
      },
      960 :{
        items:3
      },
      1200 :{
        items:3
    }
  }
})
});

$(function(){
  $('.owl-carousel1').owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 200,
    items: 1,
    loop: true,
    layzload: true,
    stagePadding: 38,
    padding: 5,
    margin: 5,
    nav:false,
    dots:false,
    center: false,
    responsive:{
        0:{
            items:1
        },
        485:{
            items:1
        },
        728:{
            items:2
        },
        960 :{
          items:2
        },
        1200 :{
          items:2
      }
    }
  })
  });