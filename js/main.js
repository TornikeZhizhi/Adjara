// Hmburger Menu

$(document).ready(function(){
	$(".hamburger_menu").on("click",function(){
		$(".bur1").toggleClass("active");
		$(".bur2").toggleClass("active");
		$(".bur3").toggleClass("active");

		$(".main_navbar").toggleClass("active")
		$(".main_menu_fluid").toggleClass("active");
	})




$('.scrollspy_button a').click(function(e) {
    var targetHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(targetHref).offset().top
    }, 800);
    e.preventDefault();
  });


})