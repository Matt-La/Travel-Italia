// $('form.ajax').on('submit', function() {

// 	var that = $(this), /*'this' - keyword references the current object that we are in - the form.*/
// 	url = that.attr('action'),
// 	method = that.attr('method'),
// 	data = {};

// 	that.find('[name]').each(function(index, value) {
// 		var that = $(this),
// 		name = that.attr('name'),
// 		value = that.val();

// 		data[name] = value;
// 	});

// 	$.ajax({
// 		url: url,
// 		type: type,
// 		data: data,
// 		success: function(response){
			
// 		}
// 	});

// 	return false;
// });

/*======================
Modal Feature 
=======================*/

<!--Start of page scroll effect -->

$(document).ready(function() {

	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 500);
	        return false;
	      }
	    }
	  });
	});	


	var sightsOffset = $("#sights").offset().top;
	var activitiesOffset = $("#activities").offset().top;
	var contactOffset = $("#contact").offset().top;
	
	var $w = $(window).scroll(function(){

		if ($w.scrollTop() >= sightsOffset) {
			
		}

		if ($w.scrollTop() >= activitiesOffset) {
			
		}

		if ($w.scrollTop() >= contactOffset) {
			
		}

	});
});
 
 <!--End of page scroll effect -->