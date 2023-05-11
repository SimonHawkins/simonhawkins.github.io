// JavaScript Document
var videoController = {

    init: function () {

        videoController.video = document.getElementById("videoHolder");
        videoController.onListeners();

    },



    begin: function (videoname) {

		

	    videoController.setVideo("video/" + videoname);
        $('#videoBlock').fadeIn("slow");

        if (Modernizr.touch) {
            $("#videoPlay").fadeIn("slow");
        } else {
            videoController.playVideo();
        }

    },




    setVideo: function (videoName) {

		$("#videoHolder").find("#videoMP4").attr("src", "video/"+videoName+".mp4");
  		$("#videoHolder").find("#videoWEBM").attr("src", "video/"+videoName+".webm");
		videoController.video.load();
        videoController.pauseVideo();

    },



    playVideo: function () {
	videoController.video.currentTime = 0;
        $("#videoPlay").fadeOut("slow");
        $("#videoReplay").fadeOut("slow");
        $("#videoContinue").fadeOut("slow");
        videoController.video.play();
        if (is_touch_device()) {
            videoController.fullscreenVideo();
        }
	
    },





videoIsPlaying: function(){
		$(document).trigger("videoPlaying");	
},



videoHasEnded: function(){
	
	console.log("vids ends");
	
	            $("#videoReplay").fadeIn("slow");
            $("#videoContinue").fadeIn("slow");
$(document).trigger("videoFinished");
            if (is_touch_device()) {
                if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else {
                    document.webkitCancelFullScreen();
                }
            }
	
	
},



    pauseVideo: function () {
        videoController.video.pause();
    },

    fullscreenVideo: function () {


        if (videoController.video.requestFullscreen) {
            videoController.video.requestFullscreen();
        } else if (videoController.video.mozRequestFullScreen) {
            videoController.video.mozRequestFullScreen(); // Firefox
        } else if (videoController.video.webkitRequestFullscreen) {
            videoController.video.webkitRequestFullscreen(); // Chrome and Safari
        }

    },


    end: function () {

        $('#videoBlock').hide();
        $("#videoReplay").hide();
        $("#videoContinue").hide();

       videoController.offListeners();
        $('#videoBlock').fadeOut("slow", function () {
            gameController.goNext();
        });

	


    },



    onListeners: function () {
        //setUpListeners(".answer","click",questionController.userAnswer);

        $("#videoPlay").on(gameController.touchType, videoController.playVideo);
        $("#videoReplay").on(gameController.touchType, videoController.playVideo);
		$("#videoContinue").on(gameController.touchType, videoController.end);
	
		        videoController.video.addEventListener('ended', videoController.videoHasEnded, false);
  				videoController.video.addEventListener('play', videoController.videoIsPlaying, false);
  
    },



    offListeners: function () {
        //setUpListeners(".answer","click",questionController.userAnswer);

        $("#videoPlay").off(gameController.touchType, videoController.playVideo);
        $("#videoReplay").off(gameController.touchType, videoController.playVideo);
		$("#videoContinue").off(gameController.touchType, videoController.end);
			        videoController.video.removeEventListener('ended', videoController.videoHasEnded, false);
  				videoController.video.removeEventListener('play', videoController.videoIsPlaying, false);
    }


}



