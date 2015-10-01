$("document").ready(function(){

/********************
CIRCLE PROGRESS BARS
********************/	
	function drawCircle(){
//HTML CIRCLE		
		$('#html-circle').circleProgress({
			value: 0.85,
			size: 200,
			startAngle: 11,
			thickness: 6,
			fill: {
				gradient: ["#F14A29", "#E3A857"]
			}
		});
		$("#html-circle").on('circle-animation-progress', function(event, progress) {
		$(this).find('.percent').html(parseInt(85 * progress) + '<i>%</i>');
		});	
//CSS CIRCLE
		$('#css-circle').circleProgress({
			value: 0.85,
			size: 200,
			startAngle: 11,
			thickness: 6,
			fill: {
				gradient: ["blue", "lightblue"]
			}
		});
		$("#css-circle").on('circle-animation-progress', function(event, progress) {
		$(this).find('.percent').html(parseInt(85 * progress) + '<i>%</i>');
		});	
//JAVASCRIPT CIRCLE
		$('#javascript-circle').circleProgress({
			value: 0.80,
			size: 200,
			startAngle: 11,
			thickness: 6,
			fill: {
				gradient: ["#F5D04C", "yellow"]
			}
		});
		$("#javascript-circle").on('circle-animation-progress', function(event, progress) {
		$(this).find('.percent').html(parseInt(80 * progress) + '<i>%</i>');
		});	

	}
drawCircle();
/**************
SIDE-NAV LINKS
**************/
	
	$("#about").show();
	$("#portfolio").hide();
	$("#contact").hide()
	$("#process").hide();

	$("#about-link").click(function(){
		$("#home").hide();
	    $("#about").show();
	    $("#contact").hide();		
		$("#portfolio").hide();
		$("#process").hide();
	});

	$("#process-link").click(function(){
		$("#home").hide();
	    $("#about").hide();
	    $("#contact").hide();		
		$("#portfolio").hide();
		$("#process").show();
	});

	$("#portfolio-link").click(function(){
		$("#home").hide();
	    $("#about").hide();
	    $("#contact").hide();		
		$("#portfolio").show();
		$("#process").hide();
	});

	$("#contact-link").click(function(){
		$("#home").hide();
	    $("#about").hide();
	    $("#contact").show();		
		$("#portfolio").hide();
		$("#process").hide();
	});	

/**************
ABOUT-CONTENT
**************/
	$("#btc-button").click(function(){
		console.log('show me the money')
	});//end of btc-button click()
	
});//end of ready function