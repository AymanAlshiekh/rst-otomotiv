$(document).ready(function(){
  //--------------------
  $('.home-img-slider').slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 990,
        settings: {
          slidesToShow: 3
        }
    },{
        breakpoint: 760,
        settings: {
          slidesToShow: 2
        }
    }, {
        breakpoint: 460,
        settings: {
          slidesToShow:1
        }
    }]
  });
  $("#lightgallery").lightGallery();
  
  //--------------------
});

function openNav() {
  document.getElementById("dashboard-side-nav").style.width = "250px";
}
function closeNav() {
  document.getElementById("dashboard-side-nav").style.width = "0";
}