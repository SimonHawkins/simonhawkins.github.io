// JavaScript Document
var soundLoader = {
	loadcount : 0,
	init : function() {

		soundManager.url = gameController.baseUrl + "/swf";

		soundManager.flashVersion = 9;
		soundManager.useHighPerformance = true;
		// reduces delays

		// reduce the default 1 sec delay to 500 ms
		soundManager.flashLoadTimeout = 500;

		// mp3 is required by default, but we don't want any requirements
		soundManager.audioFormats.mp3.required = false;

		// flash may timeout if not installed or when flashblock is installed
		soundManager.ontimeout(function(status) {
			// no flash, go with HTML5 audio
			soundManager.useHTML5Audio = true;
			soundManager.preferFlash = false;
			soundManager.reboot();
		});

	},

	loadSounds : function(soundNames, onCompletion) {

		soundManager.onready(function() {

			if ($.isArray(soundNames)) {

				soundLoader.loadcount = 0;

				loader = new PxLoader();

				for ( i = 0,
				len = soundNames.length; i < len; i++) {

					// see if the browser can play m4a
					url = 'audio/' + soundNames[i] + '.mp3';
					if (!soundManager.canPlayURL(url)) {

						// see if the browser can play m4a
						url = 'audio/' + soundNames[i] + '.m4a';
						if (!soundManager.canPlayURL(url)) {

							// ok, what about ogg?
							url = 'audio/' + soundNames[i] + '.ogg';
							if (!soundManager.canPlayURL(url)) {
								continue;
								// can't be played
							}
						}
					}

					// queue the sound using the name as the SM2 id
					loader.addSound(soundNames[i], url);
				}

				// listen to load events
				loader.addProgressListener(function(e) {

					soundLoader.loadcount++;

					thePercent = Math.round((soundLoader.loadcount / soundNames.length) * 100);
					$("#loadingCount").html(thePercent);
					if (soundLoader.loadcount == soundNames.length) {
						if (onCompletion) {
							soundLoader.completetionEvent(onCompletion);
						}
					}

				});

				loader.start();

			}

		});

	},



playSpeechSound : function(filename, thisType) {

		var playing = false;
		characterController.canSpeak = true;
		
		charName = characterController.myCharacterName.replace("gown","");
		
		/*var playfile = soundManager.createSound({
			id : charName + "_" + filename
		});
		*/
		console.log("play it: " + charName + "_" + filename);
		
		soundManager.play(charName + "_" + filename, {
			volume : 100,
			onfinish : function() {
			characterController.canSpeak = false;
			
				$(document).trigger("textFinished");
				$(document).trigger("textFinishedAgain");

				if (thisType == "standard" || thisType == "welcome") {
					$('#footer_button').fadeIn(function() {
						animationController.flashNext.restart();
					});
				}
				
		
			},
			whileplaying : function() {
				if (playing == false && this.duration) {
					console.log(this.duration);
					playing = true;
					characterController.highlightTheText(this.duration);
					characterController.talkIt();
					
				}

			}
		});

	},


	playSound : function(filename, onCompletion, vol, loop) {

		console.log("filename = " + filename);
		console.log("onCompletion = " + onCompletion);
		console.log("vol = " + vol);
		console.log("loop = " + loop);

		soundManager.stop(filename);

		//	alert(gameController.audioOff);

		if (gameController.audioOff) {
			if (onCompletion) {
				soundLoader.completetionEvent(onCompletion);
			}
			return false;
		}

		if (!objectValid(vol)) {
			vol = 100;
		}
		if (!objectValid(loop)) {
			loop = false;
		}

		soundManager.ontimeout(function() {
			alert("audio has failed");
		});

		soundManager.play(filename, {
			volume : vol,

			onfinish : function() {

				$(document).trigger("audioFinished");

				if (loop) {
					soundLoader.playSound(filename, onCompletion, vol, loop);
				} else {

					if (onCompletion) {
						soundLoader.completetionEvent(onCompletion);
					}
				}
			}
		});

	},

	stopSound : function(filename, onCompletion) {

		soundManager.stop(filename);

		if (onCompletion) {
			soundLoader.completetionEvent(onCompletion);
		}

	},

	destroySound : function(soundNames) {
		if ($.isArray(soundNames)) {
			for ( i = 0,
			len = soundNames.length; i < len; i++) {
				soundManager.unload(soundNames[i]);
				soundManager.destroySound(soundNames[i]);
			}
		}

	},

	completetionEvent : function(onCompletion) {

		eval(onCompletion + "()");
	}
};

$(document).ready(soundLoader.init); 