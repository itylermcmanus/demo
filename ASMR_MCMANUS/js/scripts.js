$(document).ready(function() {


	var whispernoise = $("#whispersound")[0];
	$("#bigwhisper")
	.mouseenter(function() {
		whispernoise.play();
	});

	var chewnoise = $("#chewsound")[0];
	$("#bigchew")
	.mouseenter(function() {
		chewnoise.play();
	});

	var scratchnoise = $("#scratchsound")[0];
	$("#bigscratch")
	.mouseenter(function() {
		scratchnoise.play();
	});

	var brushnoise = $("#brushsound")[0];
	$("#bigbrush")
	.mouseenter(function() {
		brushnoise.play();
	});

	var crinklenoise = $("#crinklesound")[0];
	$("#bigcrinkle")
	.mouseenter(function() {
		crinklenoise.play();
	});

	/* menu sounds */ 

	var whispermenunoise = $("#whispersound")[0];
	$("#menuwhisper")
	.mouseenter(function() {
		whispermenunoise.play();
	});

	var whispermenunoise = $("#whispersound")[0];
	$("#whisperpagemenu")
	.mouseenter(function() {
		whispermenunoise.play();
	});

	var chewmenunoise = $("#chewsound")[0];
	$("#menuchew")
	.mouseenter(function() {
		chewmenunoise.play();
	});

	var chewmenunoise = $("#chewsound")[0];
	$("#chewpagemenu")
	.mouseenter(function() {
		chewmenunoise.play();
	});

	var scratchmenunoise = $("#scratchsound")[0];
	$("#menuscratch")
	.mouseenter(function() {
		scratchmenunoise.play();
	});

	var scratchmenunoise = $("#scratchsound")[0];
	$("#scratchpagemenu")
	.mouseenter(function() {
		scratchmenunoise.play();
	});

	var brushmenunoise = $("#brushsound")[0];
	$("#menubrush")
	.mouseenter(function() {
		brushmenunoise.play();
	});

	var brushmenunoise = $("#brushsound")[0];
	$("#brushpagemenu")
	.mouseenter(function() {
		brushmenunoise.play();
	});

	var crinklemenunoise = $("#crinklesound")[0];
	$("#menucrinkle")
	.mouseenter(function() {
		crinklemenunoise.play();
	});

	var crinklemenunoise = $("#crinklesound")[0];
	$("#crinklepagemenu")
	.mouseenter(function() {
		crinklemenunoise.play();
	});
 
 	$(function(){
    $(".video").hover(function(){
      $(this).find(".tags").fadeIn();
    }
                    ,function(){
                        $(this).find(".tags").fadeOut();
                    }
                   );        
});


});





/* var audio = $("whisperFINAL.mp3")[0];
$("#bigwhisper").mouseenter (function() {
  whisperFINAL_audio.play();
});

var audio = $("chewFINAL.mp3")[0];
$("#bigchew").mouseenter (function() {
  chewFINAL.audio.play();
});

/* var audio = $("Scratching.mp3")[0];
$("#bigscratch").mouseenter (function() {
  audio.play();
});

var audio = $("#Brushing.mp3")[0];
$("#bigbrush").mouseenter (function() {
  audio.play();
});

var audio = $("Crinkle.mp3")[0];
$("#bigcrinkle").mouseenter (function() {
  audio.play();
});
*/ 

