// JavaScript Document

$(function(){
	tempvar=0;
	moveToQuiz=false;
	
	$(".godown").click(function(){
	if($(".intro").css("display")=="block"){	
	$(document).scrollTo( { top:800, left:700}, 800 )
	tempvar++;
	$(this).hide();
	}else{
		 $(function() {
var progressbar = $( "#progressbar" ),
progressLabel = $( ".progress-label" );
progressbar.progressbar({
value: 50,
change: function() {
progressLabel.text( progressbar.progressbar( "value" ) + "%" );
},
complete: function() {
progressLabel.text( "Complete!" );
}
});

});
		$(".bg-image1").fadeOut(1000);
		$(this).hide();
		moveToQuiz=true;
$(".quiz-section").show();
		 var options = {
        nextButton: true,
        prevButton: true,
        pagination: true,
        animateStartingFrameIn: true,
        autoPlayDelay: 3000,
        preloader: true,
        preloadTheseFrames: [1],
        preloadTheseImages: [
            "images/tn-model1.png",
            "images/tn-model2.png",
            "images/tn-model3.png"
        ]
    };
      //  mySequence = $("#sequence").sequence(options).data("sequence"); //initiate a new instance of Sequence
	$("html, body").animate({ scrollTop: 0 }, "slow");

		}
	
	});
	$(".messages a").click(function(){
		moveToQuiz=true;
		$(this).hide();
		$(".messages").css("visibility","visible");
		$(".firstmessage").fadeIn("1000");
		setTimeout(function(){
					$(".firstmessage").hide();
		$(".secondmessage").fadeIn();
		$(".godown").css("background","url(img/up.png)");
		$(".godown").show();
		},2500);
		
		
		});
    var _top = $(window).scrollTop();
    var _direction;
    $(window).scroll(function(){
        var _cur_top = $(window).scrollTop();
        if(_top < _cur_top && !moveToQuiz)
        { $(".intro").fadeOut();
		$(".bg-image1").fadeIn(1000);
		$(".godown").hide();
		}
        else if(!moveToQuiz)
        {  $(".godown").fadeIn();
            $(".intro").fadeIn();
			$(".bg-image1").fadeOut();
        }
        _top = _cur_top;
        console.log(_direction);
    });
});