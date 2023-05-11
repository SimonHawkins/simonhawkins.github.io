// JavaScript Document
var preloadController = {

    init: null,
    begin: function () {

        mySoundarray = new Array("1_0", 
"1_1", 
"2_0", 
"2_1", 
"3_0", 
"4_0", 
"4_1", 
"4_2", 
"4_3", 
"4_4", 
"5_0_1", 
"5_0_2", 
"5_0_3", 
"5_0_4", 
"5_0_5", 
"5_0_6", 
"5_0_7", 
"5_0_8", 
"5_0_9", 
"5_0_10", 
"5_1_1", 
"5_1_2", 
"5_1_3", 
"5_1_4", 
"5_1_5", 
"5_1_6", 
"5_1_7", 
"5_1_8", 
"5_1_9", 
"5_1_10", 
"6_0_0", 
"6_0_1", 
"6_0_2", 
"6_0_3", 
"6_0_4", 
"6_0_5", 
"6_0_6", 
"6_0_7", 
"6_1_0", 
"6_1_1", 
"6_1_2", 
"6_1_3", 
"6_1_4", 
"6_1_5", 
"6_1_6", 
"6_1_7", 
"7_0", 
"8_0",
"9_0",
"9_1",
"9_2",
"10_0",
"11_0",
"11_1",
"12_0",
"13_0",
"13_1",
"13_2",
"13_3",
"13_4",
"14_0",
"15_0",
"heartbeat",
"response_negative",
"response_positive",
"sting",
"intromusic",
"c1",
"c2",
"c3",
"c4",
"c5",
"c6",
"c7",
"c8",
"c9",
"c10",
"c11",
"c12",
"upscale",
"countupLoop"
);


        soundLoader.loadSounds(mySoundarray, "preloadController.startButton");



var loader = new PxLoader()
loader.addImage('img/Button_continue_lit.png');
loader.addImage('img/Button_leaderboard_lit.png') ;
loader.addImage('img/Button_Lets_go_lit.png'); 
loader.addImage('img/Button_Play_Again_lit.png'); 
loader.addImage('img/Button_replay_video_lit.png'); 

loader.start(); 

    },



startButton: function (){
		setButtonPings();
	if(gameController.audioOff || !Modernizr.touch){
		preloadController.end();
	}
	else
	{
		$('#loadingScreenLetsGo').fadeIn();
		$('#loadingScreenLetsGo').on(gameController.touchType,preloadController.playBeep);
		 $('#loadingScreen').fadeOut();
	}
},


playBeep: function (){
	
	     soundLoader.playSound("c1", "preloadController.end", 100, false);
	
},



    end: function () {
		$('#loadingScreenLetsGo').fadeOut();
        $('#loadingScreen').fadeOut("slow", gameController.goNext);
	
		
    }




};

