// Hmburger Menu

$(document).ready(function(){
	$(".hamburger_menu").on("click",function(){
		$(".bur1").toggleClass("active");
		$(".bur2").toggleClass("active");
		$(".bur3").toggleClass("active");

		$(".main_navbar").toggleClass("active")
		$(".main_menu_fluid").toggleClass("active");
	})



//  Scroll Spy
$('.scrollspy_button a').click(function(e) {
    var targetHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(targetHref).offset().top
    }, 800);
    e.preventDefault();
  });




// Hover Z index
	
// $(".post_fluid_content").on("mouseenter",function(){

// 	$(".post_fluid_content").removeClass("active");
// 	$(".post_fluid_content").addClass("deactive");
// 	$(this).addClass("active");
// })

//



var vids = $(".home_video_box video"); 
$.each(vids, function(){
       this.controls = false; 
}); 


$(".home_video_box video").mouseenter(function() {

	
 
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});

$(".home_video_box video").mouseleave(function() {

  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});


$(".home_video_box").mouseenter(function() {

	$(this).find(".video_decor").addClass("active");
	
})

$(".home_video_box").mouseleave(function() {
	$(this).find(".video_decor").removeClass("active");
})



// modal video

var vids = $(".home_video_modal video"); 
$.each(vids, function(){
       this.controls = false; 
}); 
//Loop though all Video tags and set Controls as false

$(".home_video_modal video").click(function() {

	
  
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});






// Top Scroll

$('.top_scoll a').click(function(e) {
    var targetHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(targetHref).offset().top
    }, 800);
    e.preventDefault();
  });


$(window).on("scroll",function(){
	var sm = $(this).scrollTop();
	if (sm > 400) {
		$(".top_scoll").fadeIn();
	}else {
		$(".top_scoll").fadeOut();
	}
	

console.log(sm)

})



})