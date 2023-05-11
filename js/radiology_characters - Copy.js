(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 2000,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"img/arm_lower_left.png", id:"arm_lower_left"},
		{src:"img/arm_lower_left_1.png", id:"arm_lower_left_1"},
		{src:"img/arm_lower_left_2.png", id:"arm_lower_left_2"},
		{src:"img/arm_lower_right.png", id:"arm_lower_right"},
		{src:"img/arm_lower_right_1.png", id:"arm_lower_right_1"},
		{src:"img/arm_lower_right_2.png", id:"arm_lower_right_2"},
		{src:"img/arm_upper_left.png", id:"arm_upper_left"},
		{src:"img/arm_upper_left_1.png", id:"arm_upper_left_1"},
		{src:"img/arm_upper_left_2.png", id:"arm_upper_left_2"},
		{src:"img/arm_upper_right.png", id:"arm_upper_right"},
		{src:"img/arm_upper_right_1.png", id:"arm_upper_right_1"},
		{src:"img/arm_upper_right_2.png", id:"arm_upper_right_2"},
		{src:"img/eyes_blink.png", id:"eyes_blink"},
		{src:"img/eyes_open.png", id:"eyes_open"},
		{src:"img/face_smile_blink.png", id:"face_smile_blink"},
		{src:"img/face_smiling.png", id:"face_smiling"},
		{src:"img/face_smiling_1.png", id:"face_smiling_1"},
		{src:"img/face_smiling_2.png", id:"face_smiling_2"},
		{src:"img/hair_back.png", id:"hair_back"},
		{src:"img/hair_back_1.png", id:"hair_back_1"},
		{src:"img/hand_left_grip.png", id:"hand_left_grip"},
		{src:"img/hand_left_idle.png", id:"hand_left_idle"},
		{src:"img/hand_left_rest.png", id:"hand_left_rest"},
		{src:"img/hand_left_rest_1.png", id:"hand_left_rest_1"},
		{src:"img/hand_right_indicate.png", id:"hand_right_indicate"},
		{src:"img/hand_right_indicate_1.png", id:"hand_right_indicate_1"},
		{src:"img/hand_right_rest.png", id:"hand_right_rest"},
		{src:"img/hand_right_rest_1.png", id:"hand_right_rest_1"},
		{src:"img/legs.png", id:"legs"},
		{src:"img/legs_1.png", id:"legs_1"},
		{src:"img/legs_2.png", id:"legs_2"},
		{src:"img/neck.png", id:"neck"},
		{src:"img/neck_1.png", id:"neck_1"},
		{src:"img/skirt.png", id:"skirt"},
		{src:"img/torso.png", id:"torso"},
		{src:"img/torso_1.png", id:"torso_1"},
		{src:"img/torso_2.png", id:"torso_2"}
	]
};

// stage content:
(lib.radiology_characters = function() {
	this.initialize();

	// Layer 3
	this.young_boy = new lib.young_boy();
	this.young_boy.setTransform(485,1174.9,1,1,0,0,0,302.3,1113.8);

	// Layer 2
	this.young_girl = new lib.young_girl();
	this.young_girl.setTransform(484,1178.9,1,1,0,0,0,313.2,1118.9);

	// Layer 1
	this.teen_girl = new lib.teen_girl();
	this.teen_girl.setTransform(353,944.1,1,1,0,0,0,190.5,884.3);

	this.addChild(this.teen_girl,this.young_girl,this.young_boy);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(450,996.9,1033.9,2051.2);


// symbols:
(lib.arm_lower_left = function() {
	this.initialize(img.arm_lower_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,242);


(lib.arm_lower_left_1 = function() {
	this.initialize(img.arm_lower_left_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,216);


(lib.arm_lower_left_2 = function() {
	this.initialize(img.arm_lower_left_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,311);


(lib.arm_lower_right = function() {
	this.initialize(img.arm_lower_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,223);


(lib.arm_lower_right_1 = function() {
	this.initialize(img.arm_lower_right_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,184);


(lib.arm_lower_right_2 = function() {
	this.initialize(img.arm_lower_right_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,311);


(lib.arm_upper_left = function() {
	this.initialize(img.arm_upper_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,174);


(lib.arm_upper_left_1 = function() {
	this.initialize(img.arm_upper_left_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,190);


(lib.arm_upper_left_2 = function() {
	this.initialize(img.arm_upper_left_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,229);


(lib.arm_upper_right = function() {
	this.initialize(img.arm_upper_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,181);


(lib.arm_upper_right_1 = function() {
	this.initialize(img.arm_upper_right_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,180);


(lib.arm_upper_right_2 = function() {
	this.initialize(img.arm_upper_right_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,222);


(lib.eyes_blink = function() {
	this.initialize(img.eyes_blink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,17);


(lib.eyes_open = function() {
	this.initialize(img.eyes_open);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,52);


(lib.face_smile_blink = function() {
	this.initialize(img.face_smile_blink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,247);


(lib.face_smiling = function() {
	this.initialize(img.face_smiling);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,270);


(lib.face_smiling_1 = function() {
	this.initialize(img.face_smiling_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,290);


(lib.face_smiling_2 = function() {
	this.initialize(img.face_smiling_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,247);


(lib.hair_back = function() {
	this.initialize(img.hair_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,306);


(lib.hair_back_1 = function() {
	this.initialize(img.hair_back_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,280);


(lib.hand_left_grip = function() {
	this.initialize(img.hand_left_grip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,131);


(lib.hand_left_idle = function() {
	this.initialize(img.hand_left_idle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,140);


(lib.hand_left_rest = function() {
	this.initialize(img.hand_left_rest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,240);


(lib.hand_left_rest_1 = function() {
	this.initialize(img.hand_left_rest_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,171);


(lib.hand_right_indicate = function() {
	this.initialize(img.hand_right_indicate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,111);


(lib.hand_right_indicate_1 = function() {
	this.initialize(img.hand_right_indicate_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,173);


(lib.hand_right_rest = function() {
	this.initialize(img.hand_right_rest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,212);


(lib.hand_right_rest_1 = function() {
	this.initialize(img.hand_right_rest_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,160);


(lib.legs = function() {
	this.initialize(img.legs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,1075);


(lib.legs_1 = function() {
	this.initialize(img.legs_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,419,719);


(lib.legs_2 = function() {
	this.initialize(img.legs_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,711);


(lib.neck = function() {
	this.initialize(img.neck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,158);


(lib.neck_1 = function() {
	this.initialize(img.neck_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,124);


(lib.skirt = function() {
	this.initialize(img.skirt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,148);


(lib.torso = function() {
	this.initialize(img.torso);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,419);


(lib.torso_1 = function() {
	this.initialize(img.torso_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,418);


(lib.torso_2 = function() {
	this.initialize(img.torso_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,347);


(lib.hair_back_2 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.face_smiling_3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.face_smiling_2();
	this.instance.setTransform(-111,-246);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111,-246,222,247);


(lib.young_boy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Code to get the frame number of the current frame
		*/
		
		var frameNumber = this.currentFrame;
		
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop(10);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// face_smiling
	this.instance = new lib.face_smiling();
	this.instance.setTransform(76.4,455.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// arm_upper_left
	this.instance_1 = new lib.arm_upper_left_1();
	this.instance_1.setTransform(24.3,788,1,1,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// arm_lower_left
	this.instance_2 = new lib.arm_lower_left_1();
	this.instance_2.setTransform(-3.6,948.8,1,1,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hand_left_idle
	this.instance_3 = new lib.hand_left_idle();
	this.instance_3.setTransform(37.3,1129.7,1,1,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hand_left_grip
	this.instance_4 = new lib.hand_left_grip();
	this.instance_4.setTransform(64,1119.7,1,1,43.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// torso
	this.instance_5 = new lib.torso_1();
	this.instance_5.setTransform(50.1,675.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// legs
	this.instance_6 = new lib.legs_1();
	this.instance_6.setTransform(-11.6,1053.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// arm_upper_right
	this.instance_7 = new lib.arm_upper_right_1();
	this.instance_7.setTransform(240.8,754.5,1,1,2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// arm_lower_right
	this.instance_8 = new lib.arm_lower_right();
	this.instance_8.setTransform(277.4,944.9,1,1,-59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// hand_right_rest
	this.instance_9 = new lib.hand_right_indicate_1();
	this.instance_9.setTransform(461.7,971.4,1,1,-12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// hand_right_indicate
	this.instance_10 = new lib.hand_right_indicate();
	this.instance_10.setTransform(366.1,1099.4,1,1,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,455.6,656.5,1316.5);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arm_upper_right();
	this.instance.setTransform(-50,-90.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-90.5,100,181);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arm_lower_right_1();
	this.instance.setTransform(-111,-92);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111,-92,222,184);


(lib.teen_girl = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arm_upper_left_2();
	this.instance.setTransform(88.7,373.2);

	this.instance_1 = new lib.arm_lower_left_2();
	this.instance_1.setTransform(76.6,551.9);

	this.instance_2 = new lib.hand_left_rest();
	this.instance_2.setTransform(87.8,828);

	this.instance_3 = new lib.torso();
	this.instance_3.setTransform(88,317.7);

	this.instance_4 = new lib.arm_upper_right_2();
	this.instance_4.setTransform(271.6,367.2);

	this.instance_5 = new lib.legs();
	this.instance_5.setTransform(36,693.6);

	this.instance_6 = new lib.arm_lower_right_2();
	this.instance_6.setTransform(271.7,547.4);

	this.instance_7 = new lib.hand_right_rest();
	this.instance_7.setTransform(268.5,830.3);

	this.instance_8 = new lib.face_smiling_1();
	this.instance_8.setTransform(87,0);

	this.instance_9 = new lib.neck();
	this.instance_9.setTransform(166.3,231);

	this.instance_10 = new lib.hair_back();
	this.instance_10.setTransform(0,117.7);

	this.addChild(this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,381,1768.6);


(lib.right_hand_indicate = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hand_right_indicate_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,134,173);


(lib.eyes_open_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eyes_open();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,131,52);


(lib.eyes_blink_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eyes_blink();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,121,17);


(lib.young_girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_9 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_30 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(21).call(this.frame_30).wait(1));

	// arm_upper_left
	this.instance = new lib.arm_upper_left();
	this.instance.setTransform(46.4,782.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31));

	// arm_lower_left
	this.instance_1 = new lib.arm_lower_left();
	this.instance_1.setTransform(35.8,913.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

	// hand_left_indicate
	this.instance_2 = new lib.hand_left_rest_1();
	this.instance_2.setTransform(65.7,1126.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31));

	// torso
	this.instance_3 = new lib.torso_2();
	this.instance_3.setTransform(68,745.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31));

	// arm_upper_right
	this.instance_4 = new lib.arm_upper_right();
	this.instance_4.setTransform(232.3,770.7);

	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.setTransform(269,795,1,1,0,0,0,-13.3,-66.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_5}]},11).to({state:[{t:this.instance_5}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({regY:-66.3,rotation:-2.7},11).to({regY:-66.2,rotation:0},10).wait(1));

	// arm_lower_right
	this.instance_6 = new lib.arm_lower_right_1();
	this.instance_6.setTransform(269.1,884.9);

	this.instance_7 = new lib.Tween3("synched",0);
	this.instance_7.setTransform(307.1,927,1,1,0,0,0,-73,-49.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},9).to({state:[{t:this.instance_7}]},11).to({state:[{t:this.instance_7}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({regY:-49.8,rotation:-9.4,y:927.1},11).to({regY:-49.9,rotation:0,y:927},10).wait(1));

	// hand_right_indicate
	this.instance_8 = new lib.right_hand_indicate();
	this.instance_8.setTransform(477,1023.1,1,1,1.5,0,0,15,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({regY:51.5,rotation:-17.8,x:490.1,y:994},11).to({regY:51.6,rotation:1.5,x:477,y:1023.1},10).wait(1));

	// face_eyes_open
	this.instance_9 = new lib.eyes_open_1();
	this.instance_9.setTransform(225.5,615,1,1,0,0,0,65.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},3).wait(3).to({_off:false},0).wait(15).to({_off:true},3).wait(3).to({_off:false},0).wait(6));

	// face_smiling_blink
	this.instance_10 = new lib.eyes_blink_1();
	this.instance_10.setTransform(224,611,1,1,0,0,0,60.5,8.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({_off:false},0).to({_off:true},2).wait(21).to({_off:false},0).to({_off:true},2).wait(7));

	// face_smiling
	this.instance_11 = new lib.face_smiling_3();
	this.instance_11.setTransform(184,718.3,1,1,0,0,0,-12,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(31));

	// skirt
	this.instance_12 = new lib.skirt();
	this.instance_12.setTransform(61.8,1058.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(31));

	// legs
	this.instance_13 = new lib.legs_2();
	this.instance_13.setTransform(29,1056);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(31));

	// neck
	this.instance_14 = new lib.neck_1();
	this.instance_14.setTransform(138,672.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(31));

	// hair_back
	this.instance_15 = new lib.hair_back_1();
	this.instance_15.setTransform(58.9,470.9);

	this.instance_16 = new lib.hair_back_2();
	this.instance_16.setTransform(191.8,718.4,1,1,-6.7,0,0,-8,-50.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16,p:{regY:-50.9,y:718.4}},{t:this.instance_15}]}).to({state:[{t:this.instance_16,p:{regY:-50.9,y:718.4}},{t:this.instance_15}]},9).to({state:[{t:this.instance_16,p:{regY:-51,y:718.3}},{t:this.instance_15}]},11).to({state:[{t:this.instance_16,p:{regY:-51,y:718.3}},{t:this.instance_15}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29,470.9,568.3,1296.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;