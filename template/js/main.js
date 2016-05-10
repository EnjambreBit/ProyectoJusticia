

/* ================================= */
/* :::::::::: 1. Loading ::::::::::: */
/* ================================= */

$(window).load(function() {
	"use strict";
	
	$('.globload').fadeOut("slow")
	
	
	setTimeout(function() {
		
		$("#logo").addClass("fadeIn").removeClass("opacity-0");
		
	}, 800);
	
	setTimeout(function() {
		
		$("#counter").addClass("fadeIn").removeClass("opacity-0");
		
	}, 1600);
	
	
	setTimeout(function() {
		
		$("#subscribe").addClass("fadeIn").removeClass("opacity-0");
		
	}, 2400);
		
});

/* ================================= */
/* ::::::::: 2. Countdown :::::::::: */
/* ================================= */

			$('#counter').countdown('2019/11/16 12:00:00').on('update.countdown', function(event) {
				var $this = $(this).html(event.strftime(''
					+ '<div class="counter-container"><strong>Launching in...</strong><div class="counter-box first"><div class="number">%-D</div><span>Day%!d<span></div>'
					+ '<div class="counter-box second"><div class="number">%H</div><span>Hours</span></div>'
					+ '<div class="counter-box third"><div class="number">%M</div><span>Minutes</span></div>'
					+ '<div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'
				));
			});
//		
		
/* ================================= */
/* :::::::::: 3. Carousel :::::::::: */
/* ================================= */

$('.carousel').carousel({
	  interval: 5000,
	  pause: "hover"
})

/* ================================= */
/* :::::::: 4. Multiscroll ::::::::: */
/* ================================= */

$(document).ready(function() {
	"use strict";
            $('#myContainer').multiscroll({
            	sectionsColor: ['#2B2D35', '#F1E7C0', '#7BAABE'],
            	anchors: ['first', 'second', 'third'],
            	menu: '#menu',
            	navigation: true,
            	navigationTooltips: ['Home', 'About', 'Contact'],
            	loopBottom: true,
            	loopTop: true
            });
			
        });

/* ================================= */
/* :::::::: 5. Notify me ::::::::: */
/* ================================= */
jQuery(document).ready(function() {
        "use strict";
            $("#notifyMe").notifyMe();
});


/* ================================= */
/* :::::::: 6. Placeholder ::::::::: */
/* ================================= */
    $('input,textarea').focus(function(){
       $(this).data('placeholder',$(this).attr('placeholder'))
       $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
       $(this).attr('placeholder',$(this).data('placeholder'));
    });
	
	$('input, textarea').placeholder();



/* ================================= */
/* :::::::: 7. Google Map ::::::::: */
/* ================================= */

			// Map Coordination
			var latlng = new google.maps.LatLng(51.498609000000000000,-0.133906000000024500);

			// Map Options
			var myOptions = {
				zoom: 15,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true,
				scrollwheel: false,
				// Google Map Color Styles
				styles: [	
			
					{	stylers:[			{hue:'#f1e7c0'},			{invert_lightness:true},			{saturation:-80},			{lightness:20},			{gamma:0}	]	},
					{		featureType:'water',		elementType:'geometry',		stylers:[			{color:'#333333'},]	},
					{'featureType':'landscape','stylers':[{'color':'#2B2D35'}]},]
				};

            var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

			// Marker Image
			var image = 'img/pin.png';
			

		  	// -------------------------- First Marker

		  	// Marker Coordination
			var myLatlng = new google.maps.LatLng(51.498609000000000000,-0.133906000000024500);

			var marker = new google.maps.Marker({

				  position: myLatlng,
				  map: map,
				  title: 'Hello!',
				  icon: image
			  });

		
$(document).ready(function() {		
			$("#showMap").click(function(){
                $("#map_container").removeClass("index-999 invisible").addClass("animated fadeIn visible index999");
				$("#closeMap").removeClass("index-999 invisible").addClass("visible index999");
            });
			$("#closeMap").click(function(){
				$(this).removeClass("visible index999").addClass("invisible index-999");
                $("#map_container").removeClass("fadeIn visible index999").addClass("animated fadeOut index-999 invisible");
            });
});