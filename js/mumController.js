// JavaScript Document
var mumController = {

	canvas : null,
	stage : null,
	characters : null,
	characterArray : ["mum", "mumgown"],
	myCharacterName : "mum",
	playBoiler : true,

	init : function() {

		mumController.canvas = document.getElementById("mumcanvas");
		mumController.resize();

		mumController.characters = new lib.radiology_characters();

		mumController.stage = new createjs.Stage(mumController.canvas);

		mumController.stage.addChild(mumController.characters);

		mumController.characters["mumgown"].visible = false;
		mumController.stage.update();

		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", mumController.stage);

		mumController.setCharacter(mumController.myCharacterName);

		window.addEventListener('load', mumController.resize, false);
		window.addEventListener('resize', mumController.resize, false);
		/* */

	},

	resize : function() {
		var height = window.innerHeight;
		var ratio = canvas.width / canvas.height;

		//SJH - this sets the height of the characters on screen
		height = (height / 100) * 85;
		var width = height * ratio;
		mumController.canvas.style.width = width + 'px';
		mumController.canvas.style.height = height + 'px';
	},

	setCharacter : function(characterName) {

		mumController.characters.children.forEach(function(item) {
			item.visible = false;
		});
		/*
		 if(characterName=="mum"){
		 mumController.characters["mumgown"].visible = false;
		 }
		 else
		 {
		 mumController.characters["mum"].visible = false;
		 }
		 */

		mumController.currentCharacter = mumController.characters[characterName];
		mumController.currentCharacter.visible = true;

		mumController.myCharacterName = characterName;
		//mumController.boilerAnimations();

	},

	actions : function(action) {

		//console.log(action);

		switch (action) {

		case "slow_nod":
			mumController.currentCharacter.gotoAndPlay("slow_nod");
			break;

		case "quick_nod":
			mumController.currentCharacter.gotoAndPlay("quick_nod");
			break;

		case "eybrows":
			mumController.currentCharacter.head.eyebrows.gotoAndPlay("raised");
			break;

		case "blink":
			mumController.currentCharacter.head.eyes.gotoAndPlay(2);
			break;

		case "smile":
			mumController.currentCharacter.head.mouth.gotoAndStop("smile");
			break;

		case "th":
			mumController.currentCharacter.head.mouth.gotoAndStop("th");
			break;

		case "oh":
			mumController.currentCharacter.head.mouth.gotoAndStop("oh");
			break;

		case "ee":
			mumController.currentCharacter.head.mouth.gotoAndStop("ee");
			break;

		case "ah":
			mumController.currentCharacter.head.mouth.gotoAndStop("ah");
			break;

		}

	},

	boilerAnimations : function() {

		blinker();
		eyebrows();
		nod();

		function blinker() {

			if (mumController.playBoiler) {
				mumController.actions("blink");

				setTimeout(function() {

					blinker();
				}, Math.floor(Math.random() * 9000) + 800);
			}
		}

		function eyebrows() {
			if (mumController.playBoiler) {
				mumController.actions("eybrows");

				setTimeout(function() {

					eyebrows();
				}, Math.floor(Math.random() * 18000) + 6000);
			}
		}

		function nod() {
			if (mumController.playBoiler) {
				mumController.actions("slow_nod");

				setTimeout(function() {

					nod();
				}, Math.floor(Math.random() * 18000) + 6000);
			}
		}

		function mouth() {
			if (mumController.playBoiler) {

				var mouthArray = ["th", "oh", "ee", "ah"];
				thismouth = mouthArray[Math.floor(Math.random() * mouthArray.length) + 0];
				mumController.actions(thismouth);

				setTimeout(function() {
					// Do something after 5 seconds

					mumController.actions("smile");

					setTimeout(function() {
						// Do something after 5 seconds
						mouth();

					}, Math.floor(Math.random() * 18000) + 6000);

				}, 2000);

			}
		}

	},

	speak : function() {

		countup = 0;
		totalcount = $("span", '#ftext').length;

		mumController.canSpeak = true;

		setTimeout(function() {
			mumController.talking();

			doHighlight()

			function doHighlight() {

				if (countup < totalcount) {

					//console.log($("span", '#ftext').eq(countup));

					$("span", '#ftext').eq(countup).addClass("highlightText");

					setTimeout(function() {

						countup++;
						doHighlight();

					}, 300);

				} else {

					mumController.canSpeak = false;
				}

			}

		}, 2500);

	},

	talking : function() {

		var currentCount = 0;

		playProgressInterval = setInterval(updatePlayProgress, 150);

		mumController.actions("quick_nod");

		mumController.actions("gesture_large");

		function updatePlayProgress() {

			if (mumController.canSpeak == true) {
				currentCount = currentCount + 150;

				var mouthArray = ["th", "oh", "ee", "ah"];
				thismouth = mouthArray[Math.floor(Math.random() * mouthArray.length) + 0];
				mumController.actions(thismouth);

			} else {
				clearInterval(playProgressInterval);

				mumController.actions("smile");
				mumController.actions("slow_nod");
				mumController.actions("point_up");

				setTimeout(function() {

					mumController.actions("point_backdown");

					mumController.playBoiler == true;
					mumController.boilerAnimations();

					//   $(document).trigger("textFinished");

					//sceneController.getNext();

					$('#footer_button').fadeIn();

				}, 2500);

			}
		}

	},

	changeIntoGown : function() {

		console.log("mum char " + mumController.myCharacterName);

		if (mumController.myCharacterName == "mumgown") {
			$(document).trigger("gownChanged");
		} else {

			mumController.myCharacterName = "mumgown";
			animationController.characterOut("mumout", true);

			$(document).on("mumout", function() {
				$(document).off("mumout");
				mumController.setCharacter(mumController.myCharacterName);
				animationController.characterIn("gownChanged", true);
			});

		}
	}
};

//$(document).ready(mumController.init);