// JavaScript Document
var kerryController = {

	init : function() {

		kerryController.video = document.getElementById("kerryvideoHolder");
		kerryController.onListeners();

	},

	setVideo : function(videoName) {

		$('#kerryPoster').show();
		$("#kerryvideoHolder").find("#kerryMP4").attr("src", "video/" + videoName + gameController.imagesize + ".mp4");
		$("#kerryvideoHolder").find("#kerryWEBM").attr("src", "video/" + videoName + gameController.imagesize + ".webm");
		kerryController.video.load();

	},

	manageVideo : function() {

		if ($('#kerryControl').hasClass("kerryPlay")) {
			kerryController.playVideo();
		} else {
			kerryController.pauseVideo();
		}

	},

	playVideo : function() {

		$('#kerryControl').removeClass("kerryPlay");
		$('#kerryControl').addClass("kerryPause");
		kerryController.video.play();
		$('#kerryPoster').hide();

	},

	videoIsPlaying : function() {
		kerryController.video.removeEventListener('play', isplaying, false);
		$(document).trigger("kerryPlaying");

	},

	videoHasEnded : function() {

		$('#kerryControl').addClass("kerryPlay");
		$('#kerryControl').removeClass("kerryPause");
		$(document).trigger("kerryFinished");


		if (gameController.nextFunction) {
			console.log(gameController.nextFunction);
			eval(gameController.nextFunction + "()");
			gameController.nextFunction = null;
		}

	},

	pauseVideo : function() {
		$('#kerryControl').removeClass("kerryPause");
		$('#kerryControl').addClass("kerryPlay");
		kerryController.video.pause();
	},

	fullscreenVideo : function() {

		if (kerryController.video.requestFullscreen) {
			kerryController.video.requestFullscreen();
		} else if (kerryController.video.mozRequestFullScreen) {
			kerryController.video.mozRequestFullScreen();
			// Firefox
		} else if (kerryController.video.webkitRequestFullscreen) {
			kerryController.video.webkitRequestFullscreen();
			// Chrome and Safari
		}

	},

	showPictureBox : function() {

		$('#pictureBox').fadeIn();

	},

	onListeners : function() {

		$("#kerrybox").on(gameController.touchType, kerryController.manageVideo);
		kerryController.video.addEventListener('play', kerryController.isplaying, false);
		kerryController.video.addEventListener('ended', kerryController.videoHasEnded, false);


	},

	offListeners : function() {

		$("#kerrybox").off(gameController.touchType, kerryController.manageVideo);

	}
};

