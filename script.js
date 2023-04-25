

let myButton = document.getElementById("back");
function scrollFunction(){
    if(
        document.body.scrollTop<20 || 
        document.documentElement.scrollTop < 20
    ){
        myButton.style.display = "block";
    }else{
myButton.style.display = "none";
    }
}

myButton.addEventListener("click",backToTop);

function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY >= 100) {
      navbar.classList.add('navbar-fixed');
    } else {
      navbar.classList.remove('navbar-fixed');
    }
  });
  
	       $('.clients-carousel').owlCarousel({
	           loop: true,
	           nav: false,
	           autoplay: true,
	           autoplayTimeout: 5000,
	           animateOut: 'fadeOut',
	           animateIn: 'fadeIn',
	           smartSpeed: 450,
	           margin: 30,
	           responsive: {
	               0: {
	                   items: 1
	               },
	               768: {
	                   items: 2
	               },
	               991: {
	                   items: 2
	               },
	               1200: {
	                   items: 2
	               },
	               1920: {
	                   items: 2
	               }
	           }
	       });
	