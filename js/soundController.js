// JavaScript Document


var SWF_PATH = gameController.baseUrl + "/swf";
var mySoundManager = new MySoundManager();

function MySoundManager() {
	this.canPlayAudio = true;
	this.sounds = new Array();
	this.playingSounds = new Array();
	this.path = "";

	this.Init = function() {
		soundManager.setup( {
			url: SWF_PATH,
			preferFlash: true,
			onready: function() {
				mySoundManager.canPlayAudio = true;
			}
		});	
		
		mySoundManager.path = getAbsolutePath();
	};
	
	this.PlayingSoundFromId = function(id) {
		
		console.log("sounds log = " + mySoundManager.sounds.length);
		for (var i = 0; i < mySoundManager.sounds.length; i++) {
			var sound = mySoundManager.sounds[i];
			if (sound.id === id) {
				return sound;
			}
		}
		return null;
	};
	
	this.PlaySound = function(id, onCompletion, vol, loop) {
		if (!objectValid(vol)) {
			vol = 100;
		}
		if (!objectValid(loop)) {
			loop = false;
		}
		var newSound = soundManager.createSound({
			id: id,
			url: mySoundManager.path+"audio/"+id+".mp3",
			//autoLoad: true,
			onload: function() {
				mySoundManager.playingSounds.push(id);
				this.play({ volume: vol });
			},
			onfinish: function() {
				
		
				
				if (loop) {
					mySoundManager.PlaySound(id, onCompletion, vol, loop);
				} else {
							
							console.log("does this trigger???");
							$(document).trigger("soundFinished");
					mySoundManager.SoundEnded(id);
				}
			}
		})
		
		newSound.play({ volume: vol });
		
//		delayCall(mySoundManager.ForcePlaySound, 50, id);
		
		newSound.ourCompletionFunction = onCompletion;
		mySoundManager.sounds.push(newSound);
		return newSound;
	};
	
	this.ForcePlaySound = function(id) {
		var playingIndex = mySoundManager.playingSounds.indexOf(id);
		if (playingIndex > -1) {
			return;
		}
		
		soundManager.play(id);
	};
	
	this.StopSound = function(id, skipOnCompletes) {
		
		
		
		var sound = mySoundManager.PlayingSoundFromId(id);
		if (!objectValid(sound)) {
		return;
		}

		sound.pause(id);
		mySoundManager.SoundEnded(id, skipOnCompletes);
		sound.destruct();
	};
	
	this.SoundEnded = function(id, skipOnCompletes) {



		var sound = mySoundManager.PlayingSoundFromId(id);
		if (!objectValid(sound)) {
			return;
		}
		
		if(sound.ourCompletionFunction){
		questionController[sound.ourCompletionFunction]();
	
	
		
		}
		/*if (objectValid(sound.ourCompletionFunction)) {
			if (!objectValid(skipOnCompletes) || !skipOnCompletes) {
				eval(sound.ourCompletionFunction);
			}
		}*/
		var index = mySoundManager.sounds.indexOf(sound);
		if (index > -1) {
			mySoundManager.sounds.splice(index, 1);
		}

		var playingIndex = mySoundManager.playingSounds.indexOf(id);
		if (playingIndex > -1) {
			mySoundManager.playingSounds.splice(playingIndex, 1);
		}
	};
};