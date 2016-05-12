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
			  $("#acc-btn").css({"width":"150px","height":"50px","margin-left":"-50px","margin-top":"-25px"});
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

/*** EQUAL HEIGHTS ***/
var $window = $(window);
//

equalheight = function(container){
	var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = new Array(),
		$elm,
		topPosition = 0;
	$(container).each(function() {

		$elm = $(this);
		$($elm).height('auto')
		topPostion = $elm.position().top;

		if (currentRowStart != topPostion) {
			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0; // empty the array
			currentRowStart = topPostion;
			currentTallest = $elm.height();
			rowDivs.push($elm);
		} else {
			rowDivs.push($elm);
			currentTallest = (currentTallest < $elm.height()) ? ($elm.height()) : (currentTallest);
		}
		for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}

$(window).load(function() {
	equalheight('.equal-heights > div');
});

$(window).resize(function(){
	equalheight('.equal-heights > div');
});
