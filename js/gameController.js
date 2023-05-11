// JavaScript Document
var gameController = {
	nextFunction : null,
	hasStarted : false,
	devMode : false,
	init : function() {

		gameController.audioOff = false;

		if (Modernizr.touch) {
			gameController.touchType = "touchend";
		} else {
			gameController.touchType = "click";
		}

		if ($('#videoHolder').width() == 200) {
			gameController.imagesize = "_small";
		} else {
			gameController.imagesize = "";
		}

		function isiPhone() {
			return ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1)
			);

		}

		var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
		if (isiPhone() && window.navigator.standalone == false && isSafari) {

			$("body").append("<div id='bookmarker'></div>");

			$('#bookmarker').on("click", function(){
				$(this).remove();
				startIt();
			});


		} else {
			startIt();
		};


		function startIt(){
		panoController.init();
		animationController.init();
		videoController.init();
		kerryController.init();
		hotspotController.init();
		sceneController.init();
		gameController.fixedListeners();
		mySoundarray = new Array("MRI", "ping", "ct", "c3");
		soundLoader.loadSounds(mySoundarray, null);
		gameController.checkOrientation();
}


	},


	checkOrientation : function() {

		var mql = window.matchMedia("(orientation: portrait)");
		//checks if device is being held in portrait mode

		//	alert(mql.matches);

		if (mql.matches) {
			//if so show warning

			$("body").append("<div id='hider'></div>");
			//confirm('Please hold your device in landscape mode!')

		} else {

			// alert("remove this");
			$("#hider").remove();

			if (gameController.hasStarted == false) {
				gameController.begin();
			}
		}
	},

	fixedListeners : function() {
		$('#submit').on("click", gameController.setUser);
		window.addEventListener('resize', gameController.checkOrientation, false);

	},

	begin : function() {

		gameController.hasStarted = true;

		$('#overlay').fadeOut();
		//gameController.nextFunction="gameController.showNav";
		//	animationController.kerryIn(true);

	},

	showNav : function() {

		$('#navNumbers').fadeIn();

	}
};

$(document).ready(gameController.init); 