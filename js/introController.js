// JavaScript Document
var introController = {
	department : null,
	init : function() {

	},

	splash : function() {

		if (gameController.devMode) {

			$('#splashBlock').remove();
			characterController.currentCharacter = "boy";
			characterController.currentCharacter.visible = true;
			characterController.myCharacterName = "boy";
			introController.department = "Ultrasound";
			introController.launchScene();
		} else {

			$('#splashBlock').fadeIn("slow");
			$('#welcomeblock').on(gameController.touchType, function() {

				soundLoader.playSound("c3", null, 10, false);

				$('#welcomeblock').off();
				$('#splashBlock').fadeOut();
				//	introController.sceneChoiceItem();
				introController.characterBlock();
			});

		}

	},

	characterBlock : function() {
		$('#characterBlock').fadeIn();
		animationController.footerIn();
		$('.choseCharacter').on(gameController.touchType, function() {
			characterController.myCharacterName = $(this).data("charactername");

			sceneController.sceneAudio("intro", 3);

			if (characterController.myCharacterName.indexOf("boy") >= 0) {
				characterController.myCharacterGender = "boy";
			} else {
				characterController.myCharacterGender = "girl";
			}

			if (characterController.myCharacterName == "teenboy") {
				$('#footer_text').css({
					"width" : "60%",
					"margin-left" : "26%"
				});
			}

			$('.choseCharacter').css("opacity", "0.5");
			$(this).css("opacity", "1");
			$('#intro_footer_button').fadeIn();

		});

		$('#intro_footer_button').on(gameController.touchType, function() {
			$('#intro_footer_button').off();
			$('.choseCharacter').off();
			$('#intro_footer_button').fadeOut("slow");
			characterController.setCharacter(characterController.myCharacterName);
			characterController.boilerAnimations();
			$('#characterBlock').fadeOut();
			introController.sceneChoice();

		});
	},

	sceneChoice : function() {
		$('#sceneChoiceBlock').fadeIn();
		animationController.characterIn("playSceneText", null);
		$(document).on("playSceneText", introController.sceneIntroText);
	},

	sceneIntroText : function() {
		$(document).off("playSceneText");
		$(document).on("textFinished", function() {
			introController.sceneIntroShowChoices();
		});

		characterController.actions("slow_nod");
		$('#ftext').html(addspans("Hi. I'm excited but a little bit nervous, but we can have a look around before we go to hospital."));
		//soundLoader.playSound(characterController.myCharacterName + "_intro_1", null, 100, false, true);

		soundLoader.playSpeechSound("intro_1");

		//	characterController.speak("hotspot");
	},

	sceneIntroShowChoices : function() {

		$(document).off("textFinished");
		$('#intro_footer_button').fadeIn();
		$('#intro_footer_button').on(gameController.touchType, function() {
			$('#intro_footer_button').off();
			$('#intro_footer_button').fadeOut("slow");

			$('#ftext').html(addspans("What department are you going to visit? Let's pick one using these buttons."));

			characterController.actions("gesture_large");
			//soundLoader.playSound(characterController.myCharacterName + "_intro_2", null, 100, false, true);

			soundLoader.playSpeechSound("intro_2");

			//	characterController.speak("hotspot");
			$(document).on("textFinished", function() {
				characterController.actions("point_up");
				$(document).off("textFinished");
				$('#sceneChoiceTitlebar').fadeIn();
				$('#sceneChoiceHolder').fadeIn();
				introController.sceneChoiceClicks();
			});
		});
	},

	sceneChoiceClicks : function() {
		$('#intro_footer_button').on(gameController.touchType, introController.sceneChoiceItem);
		$('.sceneChoice').on(gameController.touchType, function() {

			//alert("test this");
			introController.department = $(this).data("department");
			$('.sceneChoice').css("opacity", "0.5")
			$(this).css("opacity", "1")
			$('#intro_footer_button').fadeIn();
		});
	},

	sceneChoiceItem : function() {
		characterController.actions("point_down");
		$('#intro_footer_button').off();
		$('.sceneChoice').off(gameController.touchType);
		$('.sceneChoice').css("cursor", "default");
		$('#intro_footer_button').fadeOut("slow");

		switch (introController.department) {

		case "Nuclear":
			myDept = "Nuclear Medicine";
			filename = "nuclear";
			break;

		case "X-Ray":
			myDept = "X-Ray";
			filename = "xray";
			break;

		case "CT":
			myDept = "CT Scanner";
			filename = "ct";
			break;

		default:
			myDept = introController.department;
			filename = introController.department.toLowerCase();
			break;

		}

		mySound = characterController.myCharacterName + "_" + filename + "_1";
		mySoundarray = new Array(mySound);
		soundLoader.loadSounds(mySoundarray, null);

		characterController.actions("gesture_small");

		$('#ftext').html(addspans("Great the " + myDept + " room. Let's go!"));
		soundLoader.playSpeechSound(filename + "_1");

		//		characterController.speak("hotspot");

		$(document).on("textFinished", function() {
			$(document).off("textFinished");
			$('#intro_footer_button').fadeIn();
			$('#intro_footer_button').on(gameController.touchType, function() {
				$('#intro_footer_button').off(gameController.touchType);
				introController.showKerry();
			});
		});

	},

	showKerry : function() {
		$('#sceneChoiceBlock').fadeOut();
		$('#intro_footer_button').fadeOut("slow");
		animationController.kerryIn(false);
		characterController.actions("point_up");
		$('#ftext').html(addspans("This is Kerry. Whenever you see her you can press the play button and she will tell you more."));
		soundLoader.playSpeechSound("intro_3");

		//	characterController.speak("hotspot");

		$(document).on("textFinished", function() {
			
			kerryController.setVideo("introduction");
		//	kerryController.playVideo();
			$(document).off("textFinished");
			characterController.actions("point_backdown");
		});

		$(document).on("kerryPlaying", function() {
			alert("pointit");
			characterController.actions("point_backdown");
			$(document).off("kerryPlaying");
			characterController.canSpeak = false;
			$('#ftext').html("");
			animationController.characterOut(null, false);
			animationController.footerOut();
		});

		$(document).on("kerryFinished", function() {
			$(document).off("kerryFinished");
			introController.launchScene();
		});

	},

	launchScene : function() {
		var goScene = null;

		switch(introController.department) {
		case "X-Ray":
			goScene = "Xray";
			break;

		case "MRI":
			goScene = "Mri";
			break;

		default:
			goScene = introController.department;
			break;

		}

		animationController.footerOut();
		animationController.kerryOut();
		sceneController.openScene(goScene);

	},

	returnMenu : function() {
		characterController.canSpeak = false;
		$('#footer_home_button').off();
		$('#footer_home_button').hide();
		sceneController.toggleHotspots(false);

		textTitle = "";

		speechBox = null;


console.log(introController.department.toLowerCase());


		switch(introController.department.toLowerCase()) {


		case "xray":
			hideBox = "parentXRay";
			speechBox = "xray_16";
			textTitle = "X-Ray";


		case "x-ray":
			hideBox = "parentXRay";
			speechBox = "xray_16";
			textTitle = "X-Ray";
			break;

		case "ultrasound":
			hideBox = "parentUltrasound";
			speechBox = "ultrasound_15";
			textTitle = "Ultrasound";
			break;

		case "mri":
			hideBox = "parentMRI";
			textTitle = "MRI";
			speechBox = "mri_20";
			break;

		case "fluoroscopy":
			hideBox = "parentFluoroscopy";
			textTitle = "Fluoroscopy";
			speechBox = "fluoroscopy_20";
			break;

		case "ct":
			hideBox = "parentCT";
			textTitle = "CT";
			speechBox = "ct_17";
			break;

		case "nuclear":
			hideBox = "parentNuclear";
			textTitle = "Nuclear Medicine";
			speechBox = "nuclear_17";
			break;

		}

		$('#ftext').html(addspans("You've completed the visit around the " + textTitle + " department. Shall we visit another department?"));


		if (speechBox) {
			soundLoader.playSpeechSound(speechBox);
		} else {
			characterController.speak("hotspot");

		}

		$("#" + hideBox).hide();

		$(document).on("textFinished", function() {
			$(document).off("textFinished");

			$('#menuChoiceBlock').fadeIn("slow");

			$(".menuChoice").on(gameController.touchType, function() {

				$(".menuChoice").off();
				introController.department = $(this).data("department");
				cleanup()
				introController.launchScene();
			});

		});

	}
};

function cleanup() {
	$('#ftext').html("");
	animationController.characterOut(null, true);
	animationController.characterOut(null, false);
	animationController.footerOut();
	$('.roomitem').hide();
	animationController.kerryOut();
	$('#menuChoiceBlock').hide();
	$('.menuChoice').show();

}


$(document).ready(introController.init);
