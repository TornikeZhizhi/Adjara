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


$(document).ready(function(){

  $(".home_video_box video").mouseenter(function() {
      this.play();
  });

  $(".home_video_box video").mouseleave(function() {
      this.pause();
  });

})




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
	


})


// About Scroll

$(document).ready(function(){
      $(".m_culture_fluid a").on("click",function(e){
        e.preventDefault()
        var  src = $(this).attr("href");

        $("html, body").animate({
          scrollTop : $(src).offset().top
        },800)
      })
    });

})








// Calendar sliders
// $(document).ready(function(){
//   $('.calendar_slide').owlCarousel({
//       loop:true,
//       margin:0,
//       smartSpeed: 700,
//       stagePadding: 0,
//       nav:true,
//       responsive:{
//           0:{
//               items:1
//           },
//           551:{
//               items:2
//           },
//           768:{
//               items:3
//           },
//           993:{
//               items:4
//           },1367:{
//               items:7
//           }

//       }
//   })



// $(".calendar_slide .owl-item.active span").first().css({

//     "color" : "#D5E0C0",
//     "border": "2px solid #AAAAAA"
//   })
  
// })




$(document).ready(function(){
  // $('.date_calendar').owlCarousel({
  //     loop:true,
  //     margin:5,
  //     smartSpeed: 700,
  //     stagePadding: 5,
  //     nav:true,
  //     responsive:{
  //         0:{
  //             items:1
  //         },
  //         551:{
  //             items:2
  //         },
  //         768:{
  //             items:3
  //         },
  //         993:{
  //             items:3
  //         },1367:{
  //             items:3
  //         }

  //     }
  // })



$(".date_calendar .owl-item.active span").first().css({
    "color" : "#D5E0C0",
    "border": "2px solid #AAAAAA"
  });

var currDay = 19, currMonth = 11, currUear =  2018;

var DATETIME = [31,28,31, 30, 31, 30, 31, 31,30,31,30,31];
var MONTH = ["January", "February", "March", "April", "May", "Juny", "July", "August", "September", "Octomber", "November", "December"];

var day, month, year;
var total = $(".c_day").length;
var diff = total - 7;
var q = 0;
var MaxDay ;
var tranformX = 0;

$(document).on("click", ".c_next", function(){
  var cDay = $(".c_day");

  MaxDay = DATETIME[q];

  day = Number($(".c_day.active").data("day")) + 1;
  var lastDay = $(".c_day:last-child").data("day") + 1;

  if(MaxDay >= day){

    if(lastDay > MaxDay){
      lastDay = 1;
    }    
      $(".c_fluid").append(
          "<div class=\"c_day\" data-day=\""+ lastDay +"\">"+
            "<span>"+ lastDay +"</span>"+
          "</div>"
        );
       tranformX -= 57;
      $(".c_day").css("transform", "translateX("+ tranformX +"px)");
  }else{
    if(day > DATETIME[q]){
        day = 1;
    }
      if(q != 11){
        q++;
      }else{
        q = 0;
      }
      MaxDay = DATETIME[q];
      $(".c_fluid").append(
          "<div class=\"c_day\" data-day=\""+ lastDay +"\">"+
            "<span>"+ lastDay +"</span>"+
          "</div>"
        );
      tranformX -= 57;
      $(".c_day").css("transform", "translateX("+ tranformX +"px)");
  }
  
  console.log(MONTH[q], day);

  // tranformX -= 57;
  // $(".c_day").css("transform", "translateX("+ tranformX +"px)");

  $(cDay).removeClass("active");


  $.each(cDay, function(k,v){
      if($(v).data("day") == day){
        $(v).addClass("active");
      }
  })

})


$(document).on("click", ".c_prev", function(){
  var cDay = $(".c_day");



  day = Number($(".c_day.active").data("day")) - 1;


  if(day >= 1){

    if($(".c_day:first-child").hasClass("active")){
      $(".c_fluid").prepend(
          "<div class=\"c_day active\" data-day=\""+ day +"\">"+
            "<span>"+ day +"</span>"+
          "</div>"
        );
    }else{
  tranformX += 57;

      $(".c_day").css("transform", "translateX("+ tranformX +"px)");
    }

  }else{
    
    
    
    if(q != 0){
      q--;
    }else{
      q = 11;      
    }


    if(0 == day){
      day = DATETIME[q];
    }

    MaxDay = DATETIME[q];

    if($(".c_day:first-child").hasClass("active")){
      $(".c_fluid").prepend(
          "<div class=\"c_day active\" data-day=\""+ day +"\">"+
            "<span>"+ day +"</span>"+
          "</div>"
        );
    }else{
  tranformX += 57;

      $(".c_day").css("transform", "translateX("+ tranformX +"px)");
    }
  }
  
 

  console.log(MONTH[q], day);

  $(cDay).removeClass("active");

  $.each(cDay, function(k,v){
      if($(v).data("day") == day){
        $(v).addClass("active");
      }
  })


})

  
})





// Calendar sliders

$(document).ready(function(){

  // Calculate number of Slides
  var totalItems = $('.tour_content').length;


  // If there is only three slides
  if (totalItems == 3) {
    // Set loop option variable to false
    var isLooped = false;
    // Set nav option variable to false
    var isNav = false;
  } 
  else {
    // Set loop option variable to true
    var isLooped = true;


    // Set loop option variable to true
    var isNav = true;
  }


$('.about_main_slider').owlCarousel({
    center: true,
    loop:true,
    margin:10,
    responsive:{
        600:{

            items: 4
        }
    }
});


})



// window click
var gp = 0;

$(".cl_calenadar img").on("click",function(){

  $(".js_calendar").fadeIn()
  setTimeout(function(){
      gp = 1;
    },100)
  

})

 $(window).on("click",function(){
      if (gp ==1) {
        $(".js_calendar").fadeOut()
        gp =0;
      }
  })


$(".js_calendar").on("click",function(e){
    e.stopPropagation()
  })

  // $(".header-icons img").on("click",function(){
  //   $(".header_search").addClass("active");
  //   setTimeout(function(){
  //     gp = 1;
  //   },100)
  // })
 
  // $(".header_search").on("click",function(e){
  //   e.stopPropagation()
  // })


// Calendar JS

$(document).ready(function(){



$(function () {
        $('#pnlEventCalendar').calendar({months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],onSelect: function (event) {
          $('#lblEventCalendar').text(event.label);
        }});
      });




var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();





// 2 calendar

$(function () {
        $('#pnlEventCalendar2').calendar({months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],onSelect: function (event) {
          $('#lblEventCalendar').text(event.label);
        }});
      });




var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();





})

// Gif 

$(document).ready(function(){
   $(".gif_box").each(function(index){
        $(this).on("mouseenter",function(){
            var leng = $(".gif_box").length 
            for (var i = 0; i < leng; i++) {
             $(".gif_box").eq(i).find("img").attr("src","images/tour"+ i +".png") 
            }
            $(this).find("img").attr("src","gif/tour_gif"+ index +".gif");
        })
   })


     $(".gif_box").each(function(index){
        $(this).on("mouseleave",function(){
            var leng = $(".gif_box").length 
            for (var i = 0; i < leng; i++) {
             $(".gif_box").eq(i).find("img").attr("src","images/tour"+ i +".png") 
            }
            // $(this).find("img").attr("src","gif/tour_gif"+ index +".gif");
        })
     })
})





// Gif 


// Events


$(document).ready(function(){

  $(".our_events_tab li").click(function(){
    $(".our_events_tab li").removeClass("active");
    $(this).addClass("active");
  })

//fb notification

$(".add_fb img").on("mouseenter",function(){
  $(this).parent().parent().find(".fb_notification").fadeIn();
})

$(".add_fb img").on("mouseleave",function(){
  $(this).parent().parent().find(".fb_notification").fadeOut();
})



})




$(document).ready(function(){
     $('.event_main_tittle h2 a').click(function(e) {
    var targetHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(targetHref).offset().top
    }, 800);
    e.preventDefault();
  });

  });


