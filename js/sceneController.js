// JavaScript Document
var sceneController = {
	naveHelpTimeOut : null,
	sceneArray : new Array(),
	sceneHotspotArray : new Array(),
	sceneItem : 0,
	scenefinished : false,

	init : function() {

		$('#badge').center();
		$(window).resize(function() {
			$('#badge').center();
		});

		reloadButtonClick();

		function reloadButtonClick() {

			$('#footer_button').on(gameController.touchType, function() {
				$('#footer_button').off();
				console.log("is this clicked?");
				$('#footer_button').fadeOut(function() {
					reloadButtonClick();
				});
				sceneController.getNext();
			});

		}


		$('#nav1').on("click", function() {
			gameController.nextFunction = "sceneController.sceneWaitingarea";
			newScene();
			$('.Titletext').css("background-image", "url(img/name_reception_room.png)");
			panoController.loadView("scene_waitingarea", "0", "0");
			panoController.pano.set("hotspot[mum].enabled", true);
			panoController.pano.set("hotspot[mum].visible", true);
		});

		$('#nav2').on(gameController.touchType, function() {
			gameController.nextFunction = "sceneController.sceneUltrasound";
			newScene();
			$('.Titletext').css("background-image", "url(img/name_ultrasound_room.png)");
			panoController.loadView("scene_view_ultrasound", "100", "20");
		});

		$('#nav3').on(gameController.touchType, function() {
			gameController.nextFunction = "sceneController.sceneXray";
			newScene();
			$('.Titletext').css("background-image", "url(img/name_xray_room.png)");
			console.log("xray");
			panoController.loadView("scene_view_xray", "0", "0");
		});

		$('#nav4').on(gameController.touchType, function() {
			gameController.nextFunction = "sceneController.sceneFluoroscopy";
			newScene();
			$('.Titletext').css("background-image", "url(img/name_fluoroscopy_room.png)");
			panoController.loadView("scene_view_fluoroscopy", "120", "0");
		});

		$('#nav5').on(gameController.touchType, function() {
			gameController.nextFunction = "sceneController.sceneMri";
			newScene();
			$('.Titletext').css("background-image", "url(img/name_mri_room.png)");
			panoController.loadView("scene_view_mri", "0", "0");
		});

		$('#button6').on(gameController.touchType, function() {
			newScene();
			panoController.loadView("scene_view9", "280", "0");
		});

		$('#button7').on(gameController.touchType, function() {
			easeItemH("mum", null, -20);
		});

		$('.tempButton').on(gameController.touchType, function() {

			$('.tempButton').removeClass("tempHighlight");
			$(this).addClass("tempHighlight");

		});

		function newScene() {

			$('#splashBlock').hide();
			$('#characterBlock').hide();
			$('#sceneChoiceBlock').hide();

			$('#ftext').html("");
			animationController.characterOut(null, true);
			animationController.characterOut(null, false);
			animationController.footerOut();
			$('.roomitem').hide();
			animationController.kerryOut();
			animationController.titleIn();

		}

	},

	openScene : function(scenename) {
		gameController.nextFunction = "sceneController.scene" + scenename;
		$('#ftext').html("");
		animationController.characterOut(null, true);
		animationController.characterOut(null, false);
		animationController.footerOut();
		$('.roomitem').hide();
		animationController.kerryOut();
		animationController.titleIn();

		if (scenename == "Mri") {
			scenename = "mri";
		}

		thisScene = "scene_view_" + scenename;

		if (scenename == "Home") {
			thisScene = "scene_waitingarea";
		}

		$('.Titletext').css("background-image", "url(img/name_" + scenename + "_room.png)");
		panoController.loadView(thisScene);
		sceneController.scenefinished = false;
		$('#footer_home_button').on(gameController.touchType, introController.returnMenu);

	},

	sceneWaitingarea : function() {
		characterController.setCharacter("young_girl");
		$('#ftext').html("Reception intro text");
		animationController.footerIn();
		animationController.characterIn();
	},

	sceneCT : function() {

		sceneController.sceneAudio("ct", 17);

		sceneController.setupScene();
		sceneController.sceneHotspotArray = new Array("ctChanging", "ctTable", "ctDoughnut");

		sceneController.sceneItem = 0;
		sceneController.sceneArray = new Array();
		sceneController.sceneArray.push(new Array("charactertext", "This is the CT Scanner Room. Follow me and I'll show you around!", "ct_2"));
		sceneController.sceneArray.push(new Array("kerry", "ct_intro"));
		sceneController.sceneArray.push(new Array("charactertext", "First we need to get changed.", "ct_3"));
		sceneController.sceneArray.push(new Array("hotspot", "CTChanging", "Changing Room", "ct_4"));
		sceneController.sceneArray.push(new Array("charactertext", "Now let’s have a look at the CT scanner table.", "ct_5"));
		sceneController.sceneArray.push(new Array("hotspot", "CTTable", "CT Scanner Table", "ct_6"));
		sceneController.sceneArray.push(new Array("charactertext", "Now let’s have a look at the doughnut!", "ct_7"));
		sceneController.sceneArray.push(new Array("hotspot", "CTDoughnut", "Doughnut", "ct_8"));
		sceneController.sceneArray.push(new Array("charactertext", "That's it, you've seen everything there is to see!", "ct_13"));
		sceneController.sceneArray.push(new Array("badge", "CT Scanner Room", "ct_14"));
		sceneController.sceneArray.push(new Array("siemens"));
		sceneController.sceneArray.push(new Array("charactertext", "Why not have a look round and play the hotspots again?", "ct_15"));
		$('#badgeitem').css("background-image", "url('img/badge_silver_ct.png')");

		$(document).on("actionCompleted", function() {
			sceneController.getNext();
			$(document).off("actionCompleted");
		});

	},

	sceneUltrasound : function() {

		sceneController.sceneAudio("ultrasound", 16);

		sceneController.setupScene();
		sceneController.sceneHotspotArray = new Array("ultrasoundMachine", "ultrasoundLights", "ultrasoundBed");

		sceneController.sceneItem = 0;
		sceneController.sceneArray = new Array();

		sceneController.sceneArray.push(new Array("charactertext", "This is the Ultrasound Room. Follow me and I'll show you around!", "ultrasound_2"));
		sceneController.sceneArray.push(new Array("charactertext", "Let's have a look at the Ultrasound Machine.", "ultrasound_3"));
		sceneController.sceneArray.push(new Array("hotspot", "ultrasoundMachine", "Ultrasound Machine", "ultrasound_4"));
		sceneController.sceneArray.push(new Array("hotspot", "ultrasoundLights", "Light Switch", "ultrasound_6"));
		sceneController.sceneArray.push(new Array("charactertext", "You might need to lie down for your scan.", "ultrasound_8"));
		sceneController.sceneArray.push(new Array("hotspot", "ultrasoundBed", "Ultrasound Bed", "ultrasound_9"));
		sceneController.sceneArray.push(new Array("charactertext", "That's it, you've seen everything there is to see!", "ultrasound_11"));
		sceneController.sceneArray.push(new Array("badge", "ultrasound", "ultrasound_12"));
		sceneController.sceneArray.push(new Array("siemens"));
		sceneController.sceneArray.push(new Array("charactertext", "Why not have a look round and play again?", "ultrasound_13"));

		$('#badgeitem').css("background-image", "url('img/badge_silver_ultrasound.png')");

		$(document).on("actionCompleted", function() {
			sceneController.getNext();
			$(document).off("actionCompleted");
		});

	},

	sceneXray : function() {

		sceneController.sceneAudio("xray", 17);
		sceneController.setupScene();
		sceneController.sceneHotspotArray = new Array("xrayChangingRoom", "xrayChestXray", "xrayBed");
		sceneController.sceneItem = 0;
		sceneController.sceneArray = new Array();
		sceneController.sceneArray.push(new Array("charactertext", "This is the X-Ray room. Follow me and I'll show you around!", "xray_2"));
		sceneController.sceneArray.push(new Array("charactertext", "First we need to get changed.", "xray_3"));
		sceneController.sceneArray.push(new Array("hotspot", "xrayChangingRoom", "Changing Room", "xray_4"));
		sceneController.sceneArray.push(new Array("charactertext", "Now let's have a look at the chest X-Ray machine.", "xray_5"));
		sceneController.sceneArray.push(new Array("hotspot", "xrayChestXray", "X-Ray Machine", "xray_6"));
		sceneController.sceneArray.push(new Array("charactertext", "You might need to lie down for your X-Ray.", "xray_8"));
		sceneController.sceneArray.push(new Array("hotspot", "xrayBed", "X-Ray Bed", "xray_9"));
		sceneController.sceneArray.push(new Array("charactertext", "That's it, you've seen everything there is to see!", "xray_12"));
		sceneController.sceneArray.push(new Array("badge", "X-Ray", "xray_13"));
		sceneController.sceneArray.push(new Array("siemens"));
		sceneController.sceneArray.push(new Array("charactertext", "Why not have a look round and play again?", "xray_14"));

		$('#badgeitem').css("background-image", "url('img/badge_silver_xray.png')");

		$(document).on("actionCompleted", function() {
			sceneController.getNext();
			$(document).off("actionCompleted");
		});
	},

	sceneFluoroscopy : function() {
		sceneController.sceneAudio("fluoroscopy", 20);
		sceneController.setupScene();
		sceneController.sceneHotspotArray = new Array("fluoroscopyChanging", "fluoroscopyMachine", "fluoroscopyDrink");

		sceneController.sceneItem = 0;
		sceneController.sceneArray = new Array();
		sceneController.sceneArray.push(new Array("charactertext", "This is the Fluoroscopy room. Follow me and I'll show you around!", "fluoroscopy_2"));
		sceneController.sceneArray.push(new Array("charactertext", "Fluoroscopy shows moving pictures of the inside of your body.", "fluoroscopy_3"));
		sceneController.sceneArray.push(new Array("charactertext", "First we need to get changed.", "fluoroscopy_4"));
		sceneController.sceneArray.push(new Array("hotspot", "fluoroscopyChanging", "Changing Room", "fluoroscopy_5"));
		sceneController.sceneArray.push(new Array("charactertext", "Let's have a look at the X-Ray machine!", "fluoroscopy_6"));
		sceneController.sceneArray.push(new Array("hotspot", "fluoroscopyMachine", "X-Ray Machine", "fluoroscopy_7"));
		sceneController.sceneArray.push(new Array("hotspot", "fluoroscopyDrink", "Special Drink", "fluoroscopy_11"));
		sceneController.sceneArray.push(new Array("charactertext", "That's it, you've seen everything there is to see!", "fluoroscopy_16"));
		sceneController.sceneArray.push(new Array("badge", "Fluoroscopy", "fluoroscopy_17"));
		sceneController.sceneArray.push(new Array("siemens"));
		sceneController.sceneArray.push(new Array("charactertext", "Why not have a look round and play again?", "fluoroscopy_18"));

		$('#badgeitem').css("background-image", "url('img/badge_silver_fluoroscopy.png')");

		$(document).on("actionCompleted", function() {
			$(document).off("actionCompleted");
			sceneController.getNext();

		});
	},

	sceneMri : function() {
		sceneController.sceneAudio("mri", 21);
		sceneController.setupScene();
		sceneController.sceneHotspotArray = new Array("mriChanging", "mriScanroom", "mriMachine");
		sceneController.sceneItem = 0;
		sceneController.sceneArray = new Array();

		sceneController.sceneArray.push(new Array("charactertext", "This is the MRI room. Follow me and I'll show you around.", "mri_2"));
		sceneController.sceneArray.push(new Array("charactertext", "First we need to get changed.", "mri_3"));
		sceneController.sceneArray.push(new Array("hotspot", "mriChanging", "Changing Room", "mri_4"));
		sceneController.sceneArray.push(new Array("charactertext", "Let's have a look at the MRI Room!", "mri_6"));
		sceneController.sceneArray.push(new Array("hotspot", "mriScanroom", "MRI Room", "mri_7"));
		sceneController.sceneArray.push(new Array("charactertext", "Now, let's look at the MRI Machine.", "mri_13"));
		sceneController.sceneArray.push(new Array("hotspot", "mriMachine", "MRI Machine", "mri_14"));
		sceneController.sceneArray.push(new Array("charactertext", "That's it, you've seen everything there is to see!", "mri_16"));
		sceneController.sceneArray.push(new Array("badge", "MRI", "mri_17"));
		sceneController.sceneArray.push(new Array("siemens"));
		sceneController.sceneArray.push(new Array("charactertext", "Why not have a look round and play again?", "mri_18"));

		$('#badgeitem').css("background-image", "url('img/badge_silver_mri.png')");

		$(document).on("actionCompleted", function() {
			sceneController.getNext();
			$(document).off("actionCompleted");

		});

	},

	sceneNuclear : function() {
		sceneController.sceneAudio("nuclear", 18);
		sceneController.setupScene();
		sceneController.sceneHotspotArray = new Array("NuclearWaiting", "NuclearInjecting", "NuclearScanning");
		sceneController.sceneItem = 0;
		sceneController.sceneArray = new Array();

		sceneController.sceneArray.push(new Array("charactertext", "This is the Nuclear Medicine room. Follow me and I’ll show you around!", "nuclear_2"));
		sceneController.sceneArray.push(new Array("kerry", "nuclear_hotspot1"));
		sceneController.sceneArray.push(new Array("function", "hotspotController.nuclearStartStep1"));

		sceneController.sceneArray.push(new Array("charactertext", "Now, let’s find the Waiting Room!", "nuclear_3"));
		sceneController.sceneArray.push(new Array("hotspot", "NuclearWaiting", "Waiting Room", "nuclear_4"));

		sceneController.sceneArray.push(new Array("charactertext", "Now, let’s find the Injecting Room!", "nuclear_5"));
		sceneController.sceneArray.push(new Array("hotspot", "NuclearInjecting", "Injecting Room", "nuclear_6"));

		sceneController.sceneArray.push(new Array("charactertext", "Now, let’s find the Scanning Room!", "nuclear_7"));
		sceneController.sceneArray.push(new Array("hotspot", "NuclearScanning", "Scanning Room", "nuclear_8"));

		sceneController.sceneArray.push(new Array("charactertext", "That's it, you've seen everything there is to see!", "nuclear_13"));
		sceneController.sceneArray.push(new Array("badge", "Nuclear Medicine", "nuclear_14"));
		sceneController.sceneArray.push(new Array("siemens"));
		sceneController.sceneArray.push(new Array("charactertext", "Why not have a look round and play the hotspots again?", "nuclear_15"));

		$('#badgeitem').css("background-image", "url('img/badge_silver_nuclear.png')");

		$(document).on("actionCompleted", function() {
			sceneController.getNext();
			$(document).off("actionCompleted");

		});

	},

	getNext : function() {

		animationController.kerryOut();
		$('#pictureBox').fadeOut();
		$('#audioBox').fadeOut();
		$('#videoBox').fadeOut();
		$('#footer_button').fadeOut();
		$('#siemensblock').fadeOut("slow");

		nextItem = sceneController.sceneArray[sceneController.sceneItem];

		if (sceneController.sceneItem == sceneController.sceneArray.length) {
			sceneController.scenefinished = true;
			$('#ftext').html("");

			$('#ftext').html(addspans("When you've finished, click on the home button."));
			soundLoader.playSpeechSound("home");

			$(document).on("textFinished", function() {
				$(document).off("textFinished");
				sceneController.toggleHotspots(true);
				$('#footer_home_button').show();
			});

		} else {
			switch (nextItem[0]) {

			case "kerry":

				$('#ftext').empty();
				kerryController.setVideo(nextItem[1]);
				animationController.kerryIn(true);
				kerryController.playVideo();
				$(document).on("kerryFinished", function() {
					$(document).off("kerryFinished");
					sceneController.getNext();
				});

				break;

			case "charactertext":
				$('#ftext').html(addspans(nextItem[1]));

				if (sceneController.sceneItem == 0) {
					thisType = "welcome";
				} else {
					thisType = "standard";
				}

				if (nextItem.length == 3) {
					soundLoader.playSpeechSound(nextItem[2], thisType);
				} else {
					characterController.speak(thisType);
				}

				break;

			case "hotspot":
				$('#ftext').html(addspans("Look for the '" + nextItem[2] + "' hotspot!"));
				panoController.pano.set("hotspot[" + nextItem[1] + "].visible", true);
				panoController.pano.set("hotspot[" + nextItem[1] + "Title].visible", true);

				if (nextItem.length == 4) {
					soundLoader.playSpeechSound(nextItem[3]);
				} else {
					characterController.speak(thisType);
				}

				sceneController.showNavHelp();
				break;

			case "function":

				eval(nextItem[1] + "()");

				break;

			case "badge":
				animationController.badge.restart();

				$('#ftext').html(addspans("You've won the " + nextItem[1] + " room badge!"));
				characterController.speak("hotspot");

				if (nextItem.length == 3) {
					soundLoader.playSpeechSound(nextItem[2], "badge");
				} else {
					characterController.speak("hotspot");
				}

				$(document).on("badgeComplete", function() {
					$(document).off("badgeComplete");
					$('#roomTitlebar').fadeOut();
				});
				break;

			case "siemens":

				$('#roomTitlebar').fadeOut();

				$('#siemensblock').fadeIn("slow", function() {

					$('#ftext').empty();

					$('#footer_button').fadeIn(function() {
						animationController.flashNext.restart();
					});

					$('#siemensblock').on(gameController.touchType, function() {
						window.open('http://www.siemens.co.uk/education/en/', '_blank');

					});

				});

				break;

			}
			sceneController.sceneItem++;
		}
	},

	sceneAudio : function(scene, countup) {

		mySoundarray = new Array();

		for (var i = 0; i < countup; i++) {

			mySoundarray.push(characterController.myCharacterName.replace("gown", "") + "_" + scene + "_" + (i + 1));

		};

		mySoundarray.push(characterController.myCharacterName + "_home");

		soundLoader.loadSounds(mySoundarray, null);

	},

	toggleHotspots : function(show) {

		$.each(sceneController.sceneHotspotArray, function(index, value) {
			panoController.pano.set("hotspot[" + value + "].visible", show);
			panoController.pano.set("hotspot[" + value + "Title].visible", show);
		});

	},

	setupScene : function() {

		$('#ftext').html("");
		$('#footer_button').hide();
		mumController.setCharacter("mum");
		characterController.myCharacterName = characterController.myCharacterName.replace("gown", "");
		characterController.setCharacter(characterController.myCharacterName);
		mumController.boilerAnimations();
		characterController.boilerAnimations();
		console.log("boiler");
		animationController.footerIn();
		animationController.characterIn("actionCompleted", false);

	},

	showNavHelp : function() {
		console.log("set time out");
		sceneController.naveHelpTimeOut = setTimeout(function() {
			$('#hintbox').fadeIn();
		}, 10000);

		//check if pano is moving
		$(window).mousedown(function() {
			$(window).mousemove(function() {

				clearTimeout(sceneController.naveHelpTimeOut);
				$('#hintbox').fadeOut();
				$(window).unbind("mousemove");

			});
		});

		$(window).on("touchmove", function(ev) {
			clearTimeout(sceneController.naveHelpTimeOut);
			$('#hintbox').fadeOut();

		});
	}
};
