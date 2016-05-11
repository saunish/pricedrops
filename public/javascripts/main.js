var menu = 0;

$(document).ready(function(event) {
	$("#share").click(function(event) {
		event.preventDefault();

		menu = 1;
		$(this).parent().css({"width":"250px","height":"100px","margin-left":"-125px","margin-top":"-75px"});
		$(this).css({"display":"none"});
		$("#signIn").css({"display":"block"});
		$("#signUp").css({"display":"block"});
		// $("#google").css({"display":"block"});
	});

	$(document).click(function(event) {
	    if (!$(event.target).is("#acc-btn > *") && menu == 1) {
	       menu = 0;
	       $("#signIn").css({"display":"none"});
			  $("#signUp").css({"display":"none"});
			  // $("#google").css({"display":"none"});
			  $("#share").css({"display":"block"});
			  $("#acc-btn").css({"width":"100px","height":"50px","margin-left":"-50px","margin-top":"-25px"});
	   }
	});

	$("#signIn").click(function(event) {
		event.preventDefault();

		$(this).html('DONE!');
		$(this).css({"background-color":"#16A039", "color":"#FFF"});

		setTimeout(function() {
        menu = 0;
      
        $("#signIn").css({"display":"none"});  $("#signUp").css({"display":"none"});
        // $("#google").css({"display":"none"});
        $("#share").css({"display":"block"});
        $("#acc-btn").removeAttr('style');
	  	
        $("#signIn").removeAttr('style');
        $("#signIn").html('Sign In');
	  }, 1000);
	});

	$("#signUp").click(function(event) {
		event.preventDefault();

		$(this).html('DONE!');
		$(this).css({"background-color":"#16A039", "color":"#FFF"});

		setTimeout(function() {
        menu = 0;

        $("#signUp").css({"display":"none"});
        $("#signIn").css({"display":"none"});
        // $("#google").css({"display":"none"});
        $("#share").css({"display":"block"});
        $("#acc-btn").removeAttr('style');
	  	
        $("#signUp").removeAttr( 'style' );
        $("#signUp").html('Sign Up');
	  }, 1000);
	});

	// $("#google").click(function(event) {
	// 	event.preventDefault();
		
	// 	$(this).html('DONE!');
	// 	$(this).css({"background-color":"#16A039", "color":"#FFF"});

	// 	setTimeout(function() {
 //        menu = 0;

 //        $("#google").css({"display":"none"});
 //        $("#signUp").css({"display":"none"});
 //        $("#signIn").css({"display":"none"});
 //        $("#share").css({"display":"block"});
 //        $("#acc-btn").removeAttr('style');
	  	
 //        $("#google").removeAttr( 'style' );
 //        $("#google").html('Google Plus');
	//   }, 1000);
	// });
});



// owl-carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})