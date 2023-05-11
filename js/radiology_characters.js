(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1000,
	height: 2000,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"img/arm_back_bottom_boygown.png", id:"arm_back_bottom_boygown"},
		{src:"img/arm_back_top_boygown.png", id:"arm_back_top_boygown"},
		{src:"img/arm_lower_left.png", id:"arm_lower_left"},
		{src:"img/arm_lower_left_1.png", id:"arm_lower_left_1"},
		{src:"img/arm_lower_right.png", id:"arm_lower_right"},
		{src:"img/arm_lower_right_1.png", id:"arm_lower_right_1"},
		{src:"img/arm_upper_left.png", id:"arm_upper_left"},
		{src:"img/arm_upper_left_1.png", id:"arm_upper_left_1"},
		{src:"img/arm_upper_right.png", id:"arm_upper_right"},
		{src:"img/arm_upper_right_1.png", id:"arm_upper_right_1"},
		{src:"img/armback_bottom_girlgown.png", id:"armback_bottom_girlgown"},
		{src:"img/armback_bottom_teenboy.png", id:"armback_bottom_teenboy"},
		{src:"img/armback_bottom_teenboygown.png", id:"armback_bottom_teenboygown"},
		{src:"img/armback_bottom_teengirl.png", id:"armback_bottom_teengirl"},
		{src:"img/armback_bottom_teengirlgown.png", id:"armback_bottom_teengirlgown"},
		{src:"img/armback_top_girlgown.png", id:"armback_top_girlgown"},
		{src:"img/armback_top_teenboy.png", id:"armback_top_teenboy"},
		{src:"img/armback_top_teenboygown.png", id:"armback_top_teenboygown"},
		{src:"img/armback_top_teengirl.png", id:"armback_top_teengirl"},
		{src:"img/armback_top_teengirlgown.png", id:"armback_top_teengirlgown"},
		{src:"img/armfront_bottom_boygown.png", id:"armfront_bottom_boygown"},
		{src:"img/armfront_bottom_girlgown.png", id:"armfront_bottom_girlgown"},
		{src:"img/armfront_bottom_teenboy.png", id:"armfront_bottom_teenboy"},
		{src:"img/armfront_bottom_teenboygown.png", id:"armfront_bottom_teenboygown"},
		{src:"img/armfront_bottom_teengirl.png", id:"armfront_bottom_teengirl"},
		{src:"img/armfront_bottom_teengirlgown.png", id:"armfront_bottom_teengirlgown"},
		{src:"img/armfront_top_boygown.png", id:"armfront_top_boygown"},
		{src:"img/armfront_top_girlgown.png", id:"armfront_top_girlgown"},
		{src:"img/armfront_top_teenboy.png", id:"armfront_top_teenboy"},
		{src:"img/armfront_top_teenboygown.png", id:"armfront_top_teenboygown"},
		{src:"img/armfront_top_teengirl.png", id:"armfront_top_teengirl"},
		{src:"img/armfront_top_teengirlgown.png", id:"armfront_top_teengirlgown"},
		{src:"img/body_mum.png", id:"body_mum"},
		{src:"img/eyebrow_left_boy.png", id:"eyebrow_left_boy"},
		{src:"img/eyebrow_right_boy.png", id:"eyebrow_right_boy"},
		{src:"img/eyebrows_girl.png", id:"eyebrows_girl"},
		{src:"img/eyebrows_teenboy.png", id:"eyebrows_teenboy"},
		{src:"img/eyebrows_teengirl.png", id:"eyebrows_teengirl"},
		{src:"img/eyes_blink.png", id:"eyes_blink"},
		{src:"img/eyes_closed_mum.png", id:"eyes_closed_mum"},
		{src:"img/eyes_closed_teenboy.png", id:"eyes_closed_teenboy"},
		{src:"img/eyes_closed_teengirl.png", id:"eyes_closed_teengirl"},
		{src:"img/eyes_open.png", id:"eyes_open"},
		{src:"img/eyes_open_mum.png", id:"eyes_open_mum"},
		{src:"img/eyes_open_teengirl.png", id:"eyes_open_teengirl"},
		{src:"img/eyes_teenboy.png", id:"eyes_teenboy"},
		{src:"img/face_girl.png", id:"face_girl"},
		{src:"img/face_mum.png", id:"face_mum"},
		{src:"img/face_teenboy.png", id:"face_teenboy"},
		{src:"img/face_teengirl.png", id:"face_teengirl"},
		{src:"img/gown_mum.png", id:"gown_mum"},
		{src:"img/hair_back.png", id:"hair_back"},
		{src:"img/hair_back_ponytail_teengirl.png", id:"hair_back_ponytail_teengirl"},
		{src:"img/hair_back_teengirl.png", id:"hair_back_teengirl"},
		{src:"img/hair_front_teengirl.png", id:"hair_front_teengirl"},
		{src:"img/hairback_mum.png", id:"hairback_mum"},
		{src:"img/hairfront_mum.png", id:"hairfront_mum"},
		{src:"img/hand_back_gesture1_teengirl.png", id:"hand_back_gesture1_teengirl"},
		{src:"img/hand_back_indicate_boy.png", id:"hand_back_indicate_boy"},
		{src:"img/hand_back_point_teengirl.png", id:"hand_back_point_teengirl"},
		{src:"img/hand_back_rest_boy.png", id:"hand_back_rest_boy"},
		{src:"img/hand_back_rest_teenboy.png", id:"hand_back_rest_teenboy"},
		{src:"img/hand_back_rest_teengirl.png", id:"hand_back_rest_teengirl"},
		{src:"img/hand_front_rest_boygown.png", id:"hand_front_rest_boygown"},
		{src:"img/hand_front_rest_teenboy.png", id:"hand_front_rest_teenboy"},
		{src:"img/hand_front_rest_teengirl.png", id:"hand_front_rest_teengirl"},
		{src:"img/hand_front_rest_teengirlgown.png", id:"hand_front_rest_teengirlgown"},
		{src:"img/hand_gesture_teengirl.png", id:"hand_gesture_teengirl"},
		{src:"img/hand_left_idle.png", id:"hand_left_idle"},
		{src:"img/hand_left_rest.png", id:"hand_left_rest"},
		
		{src:"img/hand_right_idle_cream.png", id:"hand_front_cream"},
		{src:"img/hand_right_idle_cannula.png", id:"hand_front_cannula"},

		{src:"img/hand_right_idle_cream_teen.png", id:"hand_front_cream_teen"},
		{src:"img/hand_right_idle_cannula_teen.png", id:"hand_front_cannula_teen"},


		{src:"img/hand_right_idle_cream_boy.png", id:"hand_front_cream_boy"},
		{src:"img/hand_right_idle_cannula_boy.png", id:"hand_front_cannula_boy"},

		
		{src:"img/hand_point_teengirl.png", id:"hand_point_teengirl"},
		{src:"img/hand_rest_teengirl.png", id:"hand_rest_teengirl"},
		{src:"img/hand_right_indicate.png", id:"hand_right_indicate"},
		{src:"img/head_boy.png", id:"head_boy"},
		{src:"img/legs_boy.png", id:"legs_boy"},
		{src:"img/legs_boygown.png", id:"legs_boygown"},
		{src:"img/legs_girl.png", id:"legs_girl"},
		{src:"img/legs_girlgown.png", id:"legs_girlgown"},
		{src:"img/legs_teenboy.png", id:"legs_teenboy"},
		{src:"img/legs_teenboygown.png", id:"legs_teenboygown"},
		{src:"img/legs_teengirl.png", id:"legs_teengirl"},
		{src:"img/legs_teengirlgown.png", id:"legs_teengirlgown"},
		{src:"img/mouth_phenome_th_teengirl.png", id:"mouth_phenome_th_teengirl"},
		{src:"img/mouth_ah_girl.png", id:"mouth_ah_girl"},
		{src:"img/mouth_ee_girl.png", id:"mouth_ee_girl"},
		{src:"img/mouth_oh_girl.png", id:"mouth_oh_girl"},
		{src:"img/mouth_phenome_ah_boy.png", id:"mouth_phenome_ah_boy"},
		{src:"img/mouth_phenome_ah_teenboy.png", id:"mouth_phenome_ah_teenboy"},
		{src:"img/mouth_phenome_ah_teengirl.png", id:"mouth_phenome_ah_teengirl"},
		{src:"img/mouth_phenome_ee_boy.png", id:"mouth_phenome_ee_boy"},
		{src:"img/mouth_phenome_ee_teenboy.png", id:"mouth_phenome_ee_teenboy"},
		{src:"img/mouth_phenome_ee_teengirl.png", id:"mouth_phenome_ee_teengirl"},
		{src:"img/mouth_phenome_oh_boy.png", id:"mouth_phenome_oh_boy"},
		{src:"img/mouth_phenome_oh_teenboy.png", id:"mouth_phenome_oh_teenboy"},
		{src:"img/mouth_phenome_oh_teengirl.png", id:"mouth_phenome_oh_teengirl"},
		{src:"img/mouth_phenome_th_boy.png", id:"mouth_phenome_th_boy"},
		{src:"img/mouth_phenome_th_teenboy.png", id:"mouth_phenome_th_teenboy"},
		{src:"img/mouth_smile_boy.png", id:"mouth_smile_boy"},
		{src:"img/mouth_smiling_girl.png", id:"mouth_smiling_girl"},
		{src:"img/mouth_smiling_teenboy.png", id:"mouth_smiling_teenboy"},
		{src:"img/mouth_smiling_teengirl.png", id:"mouth_smiling_teengirl"},
		{src:"img/mouth_th_girl.png", id:"mouth_th_girl"},
		{src:"img/neck_girl.png", id:"neck_girl"},
		{src:"img/neck_mum.png", id:"neck_mum"},
		{src:"img/neck_teenboygown.png", id:"neck_teenboygown"},
		{src:"img/neck_teengirl.png", id:"neck_teengirl"},
		{src:"img/skirt_girl.png", id:"skirt_girl"},
		{src:"img/torso_boy.png", id:"torso_boy"},
		{src:"img/torso_boygown.png", id:"torso_boygown"},
		{src:"img/torso_girl.png", id:"torso_girl"},
		{src:"img/torso_girlgown.png", id:"torso_girlgown"},
		{src:"img/torso_teenboy.png", id:"torso_teenboy"},
		{src:"img/torso_teenboygown.png", id:"torso_teenboygown"},
		{src:"img/torso_teengirl.png", id:"torso_teengirl"},
		{src:"img/torso_teengirlgown.png", id:"torso_teengirlgown"}
	]
};



// symbols:



(lib.arm_back_bottom_boygown = function() {
	this.initialize(img.arm_back_bottom_boygown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,224);


(lib.arm_back_top_boygown = function() {
	this.initialize(img.arm_back_top_boygown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,178);


(lib.arm_lower_left = function() {
	this.initialize(img.arm_lower_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,242);


(lib.arm_lower_left_1 = function() {
	this.initialize(img.arm_lower_left_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,216);


(lib.arm_lower_right = function() {
	this.initialize(img.arm_lower_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,223);


(lib.arm_lower_right_1 = function() {
	this.initialize(img.arm_lower_right_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,184);


(lib.arm_upper_left = function() {
	this.initialize(img.arm_upper_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,174);


(lib.arm_upper_left_1 = function() {
	this.initialize(img.arm_upper_left_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,190);


(lib.arm_upper_right = function() {
	this.initialize(img.arm_upper_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,181);


(lib.arm_upper_right_1 = function() {
	this.initialize(img.arm_upper_right_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,180);


(lib.armback_bottom_girlgown = function() {
	this.initialize(img.armback_bottom_girlgown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,224);


(lib.armback_bottom_teenboy = function() {
	this.initialize(img.armback_bottom_teenboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,255);


(lib.armback_bottom_teenboygown = function() {
	this.initialize(img.armback_bottom_teenboygown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,272);


(lib.armback_bottom_teengirl = function() {
	this.initialize(img.armback_bottom_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,311);


(lib.armback_bottom_teengirlgown = function() {
	this.initialize(img.armback_bottom_teengirlgown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,316);


(lib.armback_top_girlgown = function() {
	this.initialize(img.armback_top_girlgown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,189);


(lib.armback_top_teenboy = function() {
	this.initialize(img.armback_top_teenboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,309);


(lib.armback_top_teenboygown = function() {
	this.initialize(img.armback_top_teenboygown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,278);


(lib.armback_top_teengirl = function() {
	this.initialize(img.armback_top_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,222);


(lib.armback_top_teengirlgown = function() {
	this.initialize(img.armback_top_teengirlgown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,232);


(lib.armfront_bottom_boygown = function() {
	this.initialize(img.armfront_bottom_boygown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,245);


(lib.armfront_bottom_girlgown = function() {
	this.initialize(img.armfront_bottom_girlgown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,244);


(lib.armfront_bottom_teenboy = function() {
	this.initialize(img.armfront_bottom_teenboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,264);


(lib.armfront_bottom_teenboygown = function() {
	this.initialize(img.armfront_bottom_teenboygown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,277);


(lib.armfront_bottom_teengirl = function() {
	this.initialize(img.armfront_bottom_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,311);


(lib.armfront_bottom_teengirlgown = function() {
	this.initialize(img.armfront_bottom_teengirlgown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,319);


(lib.armfront_top_boygown = function() {
	this.initialize(img.armfront_top_boygown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,219);


(lib.armfront_top_girlgown = function() {
	this.initialize(img.armfront_top_girlgown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,187);


(lib.armfront_top_teenboy = function() {
	this.initialize(img.armfront_top_teenboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,297);


(lib.armfront_top_teenboygown = function() {
	this.initialize(img.armfront_top_teenboygown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,314);


(lib.armfront_top_teengirl = function() {
	this.initialize(img.armfront_top_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,229);


(lib.armfront_top_teengirlgown = function() {
	this.initialize(img.armfront_top_teengirlgown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,245);


(lib.body_mum = function() {
	this.initialize(img.body_mum);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,366,1566);


(lib.eyebrow_left_boy = function() {
	this.initialize(img.eyebrow_left_boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,22);


(lib.eyebrow_right_boy = function() {
	this.initialize(img.eyebrow_right_boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,14);


(lib.eyebrows_girl = function() {
	this.initialize(img.eyebrows_girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,22);


(lib.eyebrows_teenboy = function() {
	this.initialize(img.eyebrows_teenboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,30);


(lib.eyebrows_teengirl = function() {
	this.initialize(img.eyebrows_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,24);


(lib.eyes_blink = function() {
	this.initialize(img.eyes_blink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,17);


(lib.eyes_closed_mum = function() {
	this.initialize(img.eyes_closed_mum);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,13);


(lib.eyes_closed_teenboy = function() {
	this.initialize(img.eyes_closed_teenboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,15);


(lib.eyes_closed_teengirl = function() {
	this.initialize(img.eyes_closed_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,12);


(lib.eyes_open = function() {
	this.initialize(img.eyes_open);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,33);


(lib.eyes_open_mum = function() {
	this.initialize(img.eyes_open_mum);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,41);


(lib.eyes_open_teengirl = function() {
	this.initialize(img.eyes_open_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,47);


(lib.eyes_teenboy = function() {
	this.initialize(img.eyes_teenboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,53);


(lib.face_girl = function() {
	this.initialize(img.face_girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,247);


(lib.face_mum = function() {
	this.initialize(img.face_mum);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,263);


(lib.face_teenboy = function() {
	this.initialize(img.face_teenboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,302);


(lib.face_teengirl = function() {
	this.initialize(img.face_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,276);


(lib.gown_mum = function() {
	this.initialize(img.gown_mum);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,406,1021);


(lib.hair_back = function() {
	this.initialize(img.hair_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,280);


(lib.hair_back_ponytail_teengirl = function() {
	this.initialize(img.hair_back_ponytail_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,306);


(lib.hair_back_teengirl = function() {
	this.initialize(img.hair_back_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,202);


(lib.hair_front_teengirl = function() {
	this.initialize(img.hair_front_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,214,157);


(lib.hairback_mum = function() {
	this.initialize(img.hairback_mum);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,357);


(lib.hairfront_mum = function() {
	this.initialize(img.hairfront_mum);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,190);


(lib.hand_back_gesture1_teengirl = function() {
	this.initialize(img.hand_back_gesture1_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,212);


(lib.hand_back_indicate_boy = function() {
	this.initialize(img.hand_back_indicate_boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,122);


(lib.hand_back_point_teengirl = function() {
	this.initialize(img.hand_back_point_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,190);


(lib.hand_back_rest_boy = function() {
	this.initialize(img.hand_back_rest_boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,168);


(lib.hand_back_rest_teenboy = function() {
	this.initialize(img.hand_back_rest_teenboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,214);


(lib.hand_back_rest_teengirl = function() {
	this.initialize(img.hand_back_rest_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,172);


(lib.hand_front_rest_boygown = function() {
	this.initialize(img.hand_front_rest_boygown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,170);


(lib.hand_front_rest_teenboy = function() {
	this.initialize(img.hand_front_rest_teenboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,187);


(lib.hand_front_rest_teengirl = function() {
	this.initialize(img.hand_front_rest_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,240);


(lib.hand_front_rest_teengirlgown = function() {
	this.initialize(img.hand_front_rest_teengirlgown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,241);


(lib.hand_gesture_teengirl = function() {
	this.initialize(img.hand_gesture_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,208);


(lib.hand_left_idle = function() {
	this.initialize(img.hand_left_idle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,140);


(lib.hand_left_rest = function() {
	this.initialize(img.hand_left_rest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,171);


(lib.hand_cream = function() {
	this.initialize(img.hand_front_cream);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,171);


(lib.hand_cream_teen = function() {
	this.initialize(img.hand_front_cream_teen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,171);


(lib.hand_cream_boy = function() {
	this.initialize(img.hand_front_cream_boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,171);



(lib.hand_cannula = function() {
	this.initialize(img.hand_front_cannula);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,171);


(lib.hand_cannula_teen = function() {
	this.initialize(img.hand_front_cannula_teen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,171);


(lib.hand_cannula_boy = function() {
	this.initialize(img.hand_front_cannula_boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,171);



(lib.hand_point_teengirl = function() {
	this.initialize(img.hand_point_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,190);


(lib.hand_rest_teengirl = function() {
	this.initialize(img.hand_rest_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,172);


(lib.hand_right_indicate = function() {
	this.initialize(img.hand_right_indicate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,173);


(lib.head_boy = function() {
	this.initialize(img.head_boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,270);


(lib.legs_boy = function() {
	this.initialize(img.legs_boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,419,719);


(lib.legs_boygown = function() {
	this.initialize(img.legs_boygown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,368,696);


(lib.legs_girl = function() {
	this.initialize(img.legs_girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,711);


(lib.legs_girlgown = function() {
	this.initialize(img.legs_girlgown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,325,696);


(lib.legs_teenboy = function() {
	this.initialize(img.legs_teenboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,610,1023);


(lib.legs_teenboygown = function() {
	this.initialize(img.legs_teenboygown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,583,832);


(lib.legs_teengirl = function() {
	this.initialize(img.legs_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,1075);


(lib.legs_teengirlgown = function() {
	this.initialize(img.legs_teengirlgown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,1070);


(lib.mouth_phenome_th_teengirl = function() {
	this.initialize(img.mouth_phenome_th_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,37);


(lib.mouth_ah_girl = function() {
	this.initialize(img.mouth_ah_girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,33);


(lib.mouth_ee_girl = function() {
	this.initialize(img.mouth_ee_girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,33);


(lib.mouth_oh_girl = function() {
	this.initialize(img.mouth_oh_girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.mouth_phenome_ah_boy = function() {
	this.initialize(img.mouth_phenome_ah_boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,34);


(lib.mouth_phenome_ah_teenboy = function() {
	this.initialize(img.mouth_phenome_ah_teenboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,36);


(lib.mouth_phenome_ah_teengirl = function() {
	this.initialize(img.mouth_phenome_ah_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,39);


(lib.mouth_phenome_ee_boy = function() {
	this.initialize(img.mouth_phenome_ee_boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,34);


(lib.mouth_phenome_ee_teenboy = function() {
	this.initialize(img.mouth_phenome_ee_teenboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,36);


(lib.mouth_phenome_ee_teengirl = function() {
	this.initialize(img.mouth_phenome_ee_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,39);


(lib.mouth_phenome_oh_boy = function() {
	this.initialize(img.mouth_phenome_oh_boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,22);


(lib.mouth_phenome_oh_teenboy = function() {
	this.initialize(img.mouth_phenome_oh_teenboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,24);


(lib.mouth_phenome_oh_teengirl = function() {
	this.initialize(img.mouth_phenome_oh_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,27);


(lib.mouth_phenome_th_boy = function() {
	this.initialize(img.mouth_phenome_th_boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,25);


(lib.mouth_phenome_th_teenboy = function() {
	this.initialize(img.mouth_phenome_th_teenboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,26);


(lib.mouth_smile_boy = function() {
	this.initialize(img.mouth_smile_boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,25);


(lib.mouth_smiling_girl = function() {
	this.initialize(img.mouth_smiling_girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,29);


(lib.mouth_smiling_teenboy = function() {
	this.initialize(img.mouth_smiling_teenboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,28);


(lib.mouth_smiling_teengirl = function() {
	this.initialize(img.mouth_smiling_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,37);


(lib.mouth_th_girl = function() {
	this.initialize(img.mouth_th_girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,25);


(lib.neck_girl = function() {
	this.initialize(img.neck_girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,124);


(lib.neck_mum = function() {
	this.initialize(img.neck_mum);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,148);


(lib.neck_teenboygown = function() {
	this.initialize(img.neck_teenboygown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,152);


(lib.neck_teengirl = function() {
	this.initialize(img.neck_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,158);


(lib.skirt_girl = function() {
	this.initialize(img.skirt_girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,148);


(lib.torso_boy = function() {
	this.initialize(img.torso_boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,418);


(lib.torso_boygown = function() {
	this.initialize(img.torso_boygown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,665);


(lib.torso_girl = function() {
	this.initialize(img.torso_girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,347);


(lib.torso_girlgown = function() {
	this.initialize(img.torso_girlgown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,597);


(lib.torso_teenboy = function() {
	this.initialize(img.torso_teenboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,356,603);


(lib.torso_teenboygown = function() {
	this.initialize(img.torso_teenboygown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,398,883);


(lib.torso_teengirl = function() {
	this.initialize(img.torso_teengirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,419);


(lib.torso_teengirlgown = function() {
	this.initialize(img.torso_teengirlgown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,307,777);


(lib.girlshair = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hair_back();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,256,280);


(lib.armback_top_teengirlgown_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.armback_top_teengirlgown();
	this.instance.setTransform(-51.3,-110.9,1,1,-6.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.3,-119.6,102.7,239.2);


(lib.armback_bottom_teengirlgown_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.armback_bottom_teengirlgown();
	this.instance.setTransform(-36,-158);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36,-158,72,316);


(lib.hand_rest_teengirl_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hand_rest_teengirl();
	this.instance.setTransform(-50,-86);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-86,100,172);


(lib.hand_gesture_teengirl_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hand_back_gesture1_teengirl();
	this.instance.setTransform(-48,-106);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48,-106,96,212);


(lib.hand_back_point_teengirl_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hand_point_teengirl();
	this.instance.setTransform(-42.5,-95);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.5,-95,85,190);


(lib.hand_back_gesture_teengirl = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hand_gesture_teengirl();
	this.instance.setTransform(-63.5,-104);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.5,-104,127,208);


(lib.hair_ponytail_teengirl = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hair_back_ponytail_teengirl();
	this.instance.setTransform(-87,-153);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87,-153,174,306);


(lib.eyebrows_teengirl_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eyebrows_teengirl();
	this.instance.setTransform(-71,-12);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71,-12,142,24);


(lib.hand_teengirl = function(mode,startPosition,loop) {
this.initialize(mode,startPosition,loop,{"rest":0,"cream":1,"cannula":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// hands
	this.rest = new lib.hand_front_rest_teengirl();
	this.rest.setTransform(-51.9,107.4);
	
	this.cream = new lib.hand_cream_teen();
	this.cream.setTransform(-51.9,107.4);
	
	this.cannula = new lib.hand_cannula_teen();
	this.cannula.setTransform(-51.9,107.4);
	
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rest}]}).to({state:[{t:this.cream}]},1).to({state:[{t:this.cannula}]},1).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.1,-347.4,126.2,694.8);





(lib.arm_front_teengirl = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.armfront_top_teengirl();
	this.instance.setTransform(-51,-347.4);

	this.instance_1 = new lib.armfront_bottom_teengirl();
	this.instance_1.setTransform(-63.1,-168.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.1,-347.4,126.2,694.8);




(lib.arm_back_top_teengirl = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.armback_top_teengirl();
	this.instance.setTransform(-27.5,-111);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-111,55,222);


(lib.arm_back_bottom_teengirl = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.armback_bottom_teengirl();
	this.instance.setTransform(-39,-155.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39,-155.5,78,311);


(lib.armfront_teenboygown = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hand_front_rest_teenboy();
	this.instance.setTransform(-37.1,149);

	this.instance_1 = new lib.armfront_top_teenboygown();
	this.instance_1.setTransform(-77.9,-336);

	this.instance_2 = new lib.armfront_bottom_teenboygown();
	this.instance_2.setTransform(-78.9,-84.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78.9,-336,157.8,672);


(lib.armback_top_teenboygown_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.armback_top_teenboygown();
	this.instance.setTransform(-82,-121);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82,-121,170,278);


(lib.armback_bottom_teenboygown_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.armback_bottom_teenboygown();
	this.instance.setTransform(-44,-127.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44,-127.5,88,272);


(lib.face_teenboy_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.face_teenboy();
	this.instance.setTransform(-148,-151);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-148,-151,296,302);


(lib.eyes_open_teenboy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eyes_teenboy();
	this.instance.setTransform(-69,-26.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69,-26.5,138,53);


(lib.eyes_closed_teenboy_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eyes_closed_teenboy();
	this.instance.setTransform(-64,-7.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-7.5,128,15);


(lib.eyebrows_teenboy_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eyebrows_teenboy();
	this.instance.setTransform(-77.5,-15);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.5,-15,155,30);


(lib.armfront_teengirlgown = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hand_front_rest_teengirlgown();
	this.instance.setTransform(-49.2,107);

	this.instance_1 = new lib.armfront_top_teengirlgown();
	this.instance_1.setTransform(-65.7,-348);

	this.instance_2 = new lib.armfront_bottom_teengirlgown();
	this.instance_2.setTransform(-53.7,-159);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.7,-348,131.5,696);


(lib.armback_top_teenboy_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.armback_top_teenboy();
	this.instance.setTransform(-62.5,-154.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.5,-154.5,125,309);


(lib.armback_bottom_teenboy_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.armback_bottom_teenboy();
	this.instance.setTransform(-59.1,-133.4,1,1,5.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.3,-133.4,164.6,266.9);


(lib.arm_front_teenboy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.armfront_top_teenboy();
	this.instance.setTransform(-77.2,-323);

	this.instance_1 = new lib.armfront_bottom_teenboy();
	this.instance_1.setTransform(-80.7,-91.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.7,-323,161.5,646);



(lib.hand_teenboy = function(mode,startPosition,loop) {
this.initialize(mode,startPosition,loop,{"rest":0,"cream":1,"cannula":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// hands
	this.rest = new lib.hand_front_rest_teenboy();
	this.rest.setTransform(-35.2,136);
	
	this.cream = new lib.hand_cream_teen();
	this.cream.setTransform(-35.2,136);
	
	this.cannula = new lib.hand_cannula_teen();
	this.cannula.setTransform(-35.2,136);
	
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rest}]}).to({state:[{t:this.cream}]},1).to({state:[{t:this.cannula}]},1).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,-323,161.5,646);








(lib.hand_back_indicate_shared = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hand_right_indicate();
	this.instance.setTransform(-67,-86.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67,-86.5,134,173);


(lib.body_mum_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.body_mum();
	this.instance.setTransform(-183,-783);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183,-783,366,1566);


(lib.armback_top_girlgown_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.armback_top_girlgown();
	this.instance.setTransform(-59,-94.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59,-94.5,118,189);


(lib.armback_bottom_girlgown_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.armback_bottom_girlgown();
	this.instance.setTransform(-34,-112);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34,-112,68,224);


(lib.neck_girl_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.neck_girl();
	this.instance.setTransform(-51,-61);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-61,90,124);


(lib.legs_girl_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.skirt_girl();
	this.instance.setTransform(-139.8,-356.5);

	this.instance_1 = new lib.legs_girl();
	this.instance_1.setTransform(-170,-355.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-170,-356.5,340,712);


(lib.hand_back_rest_girl = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hand_back_rest_boy();
	this.instance.setTransform(-42.5,-84);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.5,-84,85,168);


(lib.face_girl_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.face_girl();
	this.instance.setTransform(-111,-246);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111,-246,222,247);


(lib.eyebrows_girl_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eyebrows_girl();
	this.instance.setTransform(-63.5,-11);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.5,-11,127,22);


(lib.armfront_girlgown = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.armfront_top_girlgown();
	this.instance.setTransform(-90.8,-262.4);

	this.instance_1 = new lib.armfront_bottom_girlgown();
	this.instance_1.setTransform(-77.7,-123,1,1,-4);

	this.instance_2 = new lib.hand_left_rest();
	this.instance_2.setTransform(-41.5,86.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90.8,-262.4,162.4,519.9);


(lib.hand_girl = function(mode,startPosition,loop) {
this.initialize(mode,startPosition,loop,{"rest":0,"cream":1,"cannula":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// hands
	this.rest = new lib.hand_left_rest();
	this.rest.setTransform(-41.5,86.5);
	
	this.cream = new lib.hand_cream();
	this.cream.setTransform(-41.5,86.5);
	
	this.cannula = new lib.hand_cannula();
	this.cannula.setTransform(-41.5,86.5);
	
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rest}]}).to({state:[{t:this.cream}]},1).to({state:[{t:this.cannula}]},1).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.4,-257.4,143,514.9);


(lib.arm_front_girl = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arm_upper_left();
	this.instance.setTransform(-60.8,-257.4);

	this.instance_1 = new lib.arm_lower_left();
	this.instance_1.setTransform(-71.4,-126.3);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.4,-257.4,143,514.9);


(lib.arm_front_bottom_girl = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arm_lower_right_1();
	this.instance.setTransform(-5.7,-144,1,1,48.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-142.6,-144,285.3,288.1);


(lib.arm_back_top_girl = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arm_upper_right();
	this.instance.setTransform(-29.4,-99.1,1,1,12.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.2,-99.1,136.5,198.2);


(lib.armfront_boygown = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hand_front_rest_boygown();
	this.instance.setTransform(-45,90,1,1,-1.2);

	this.instance_1 = new lib.armfront_top_boygown();
	this.instance_1.setTransform(-61,-272);

	this.instance_2 = new lib.armfront_bottom_boygown();
	this.instance_2.setTransform(-45.5,-115.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61,-272,124.6,531.9);


(lib.arm_back_top_boygown_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arm_back_top_boygown();
	this.instance.setTransform(-44.5,-89);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.5,-89,89,178);


(lib.arm_back_bottom_boygown_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arm_back_bottom_boygown();
	this.instance.setTransform(-39.7,-110.1,1,1,-3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.7,-113.6,79.5,227.2);


(lib.hand_back_point_boy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hand_back_indicate_boy();
	this.instance.setTransform(43.8,-102.7,1,1,80);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.4,-102.7,152.8,205.4);



(lib.hand_boy = function(mode,startPosition,loop) {
this.initialize(mode,startPosition,loop,{"rest":0,"cream":1,"cannula":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// hands
	this.rest = new lib.hand_left_rest();
	this.rest.setTransform(-32.8,96.3,1,1,5.2);
	
	this.cream = new lib.hand_cream_boy();
	this.cream.setTransform(-32.8,96.3,1,1,5.2);
	
	this.cannula = new lib.hand_cannula_boy();
	this.cannula.setTransform(-32.8,96.3,1,1,5.2);
	
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rest}]}).to({state:[{t:this.cream}]},1).to({state:[{t:this.cannula}]},1).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.7,-245.4,147.5,490.9);




(lib.frontarm_boy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arm_upper_left_1();
	this.instance.setTransform(-45.7,-245.4,1,1,5);

	this.instance_1 = new lib.arm_lower_left_1();
	this.instance_1.setTransform(-73.7,-84.6,1,1,-6.7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.7,-245.4,147.5,490.9);






(lib.eyebrows_boy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eyebrow_right_boy();
	this.instance.setTransform(35.5,-4.9);

	this.instance_1 = new lib.eyebrow_left_boy();
	this.instance_1.setTransform(-65.5,-11);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.5,-11,131,22);


(lib.arm_back_top_boy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arm_upper_right_1();
	this.instance.setTransform(-40.2,-97.2,1,1,8.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.6,-97.2,135.1,194.5);


(lib.arm_back_bottom_boy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arm_lower_right();
	this.instance.setTransform(-45.9,-107.3,1,1,-6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.9,-114.5,91.9,229);


(lib.neck_mum_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.neck_mum();
	this.instance.setTransform(-50.5,-74);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.5,-74,101,148);


(lib.mum_face = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.face_mum();
	this.instance.setTransform(-121.5,-131.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-121.5,-131.5,243,263);


(lib.hairfront_mum_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hairfront_mum();
	this.instance.setTransform(-132.5,-95);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-132.5,-95,265,190);


(lib.hairback_mum_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hairback_mum();
	this.instance.setTransform(-151,-178.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-151,-178.5,320,357);


(lib.mouth_teengirl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{smile:0,th:1,oh:2,ee:3,ah:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// mouths
	this.instance = new lib.mouth_smiling_teengirl();
	this.instance.setTransform(-40,-18.5);

	this.instance_1 = new lib.mouth_phenome_th_teengirl();
	this.instance_1.setTransform(-38.5,-17.5);

	this.instance_2 = new lib.mouth_phenome_oh_teengirl();
	this.instance_2.setTransform(-1.5,-8.5);

	this.instance_3 = new lib.mouth_phenome_ee_teengirl();
	this.instance_3.setTransform(-34.5,-18);

	this.instance_4 = new lib.mouth_phenome_ah_teengirl();
	this.instance_4.setTransform(-36,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-18.5,80,37);


(lib.mouth_teenboy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"smile":0,"th":1,"oh":2,"ee":3,"ah":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// mouths
	this.instance = new lib.mouth_smiling_teenboy();
	this.instance.setTransform(-45.5,-14);

	this.instance_1 = new lib.mouth_phenome_th_teenboy();
	this.instance_1.setTransform(-39.5,-13);

	this.instance_2 = new lib.mouth_phenome_oh_teenboy();
	this.instance_2.setTransform(5.5,0);

	this.instance_3 = new lib.mouth_phenome_ee_teenboy();
	this.instance_3.setTransform(-43,-17);

	this.instance_4 = new lib.mouth_phenome_ah_teenboy();
	this.instance_4.setTransform(-43,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-14,91,28);


(lib.mouth_girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"smile":0,"th":1,"oh":2,"ee":3,"ah":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// mouths
	this.instance = new lib.mouth_smiling_girl();
	this.instance.setTransform(-41,-13.5);

	this.instance_1 = new lib.mouth_th_girl();
	this.instance_1.setTransform(-40,-12.5);

	this.instance_2 = new lib.mouth_oh_girl();
	this.instance_2.setTransform(2,-2);

	this.instance_3 = new lib.mouth_ee_girl();
	this.instance_3.setTransform(-34,-14.5);

	this.instance_4 = new lib.mouth_ah_girl();
	this.instance_4.setTransform(-34,-14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-13.5,80,29);


(lib.mouth_boy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"smile":0,"th":1,"oh":2,"ee":3,"ah":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// mouths
	this.instance = new lib.mouth_smile_boy();
	this.instance.setTransform(-41,-11.5);

	this.instance_1 = new lib.mouth_phenome_th_boy();
	this.instance_1.setTransform(-40.7,-11);

	this.instance_2 = new lib.mouth_phenome_oh_boy();
	this.instance_2.setTransform(2.8,0);

	this.instance_3 = new lib.mouth_phenome_ee_boy();
	this.instance_3.setTransform(-36.7,-12.5);

	this.instance_4 = new lib.mouth_phenome_ah_boy();
	this.instance_4.setTransform(-37,-12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-11.5,82,25);


(lib.eyes_teengirl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{open:0,closed:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// eyes
	this.instance = new lib.eyes_open_teengirl();
	this.instance.setTransform(-66,-23.5);

	this.instance_1 = new lib.eyes_closed_teengirl();
	this.instance_1.setTransform(-61,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-23.5,132,47);


(lib.eyes_mum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"open":0,"closed":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// eyes
	this.instance = new lib.eyes_open_mum();
	this.instance.setTransform(-67.5,-20.5);

	this.instance_1 = new lib.eyes_closed_mum();
	this.instance_1.setTransform(-61.5,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-20.5,143,41);


(lib.eyes_blink_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"open":0,"closed":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// eyes_blink
	this.instance = new lib.eyes_open();
	this.instance.setTransform(-66.5,-17);

	this.instance_1 = new lib.eyes_blink();
	this.instance_1.setTransform(-67,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-17,127,33);


(lib.hand_back_rest2_teenboy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hand_rest_teengirl_1();
	this.instance.setTransform(-2,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-86,100,172);


(lib.arm_back_bottom_teenboy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.armback_bottom_teenboy_1();
	this.instance.setTransform(-34.5,-92.4,1,1,-3.2,0,0,-29.3,-94.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.6,-137.9,179.4,275.8);


(lib.hair_back_girl = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.girlshair();
	this.instance.setTransform(0,0,1,1,0,0,0,128,140);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128,-140,256,280);


(lib.eyes_teenboy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"open":0,"closed":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// eyes
	this.instance = new lib.eyes_open_teenboy();

	this.instance_1 = new lib.eyes_closed_teenboy_1();
	this.instance_1.setTransform(-4,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-26.5,138,53);


(lib.eyebrows_teengirl_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{raised:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// eyebrows
	this.instance_1 = new lib.eyebrows_teengirl_1("synched",0);
	this.instance_1.setTransform(-3,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-3},4).to({y:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-11,142,24);


(lib.eyebrows_raise_teenboy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"raised":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// eyebrows
	this.instance = new lib.eyebrows_teenboy_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-6,mode:"synched",startPosition:0},4).to({y:0,mode:"independent"},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-15,155,30);


(lib.eyebrows_girl_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"raised":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// eyebrows
	this.instance_1 = new lib.eyebrows_girl_1("synched",0);
	this.instance_1.setTransform(-3,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-3},4).to({y:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-10,127,22);


(lib.eyebrows_boy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"raised":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// eyebrows
	this.instance_2 = new lib.eyebrows_boy("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-6},4).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-11,131,22);


(lib.arm_back_teengirlgown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{comp:0,point_down:1,point_up:21,point_backdown:30,gesture_large:41,gesture_small:98});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.stop();
	}
	this.frame_97 = function() {
		this.stop();
	}
	this.frame_133 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(9).call(this.frame_29).wait(11).call(this.frame_40).wait(57).call(this.frame_97).wait(36).call(this.frame_133).wait(1));

	// arm_top
	this.instance = new lib.armback_top_teengirlgown_1();
	this.instance.setTransform(-11,-301,1,1,9.4,0,0,-20.9,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-302},0).to({rotation:-0.3,y:-301},9).to({rotation:9.4},10).to({y:-302},1).to({rotation:-27,y:-301.9},9).to({rotation:9.4,y:-302},10).to({rotation:9.4},1).wait(9).to({rotation:-4},11).to({rotation:-5.7,x:-10.9},5).wait(20).to({rotation:9.4,x:-11},11).to({rotation:9.4},1).to({rotation:-18},14).wait(7).to({rotation:9.4},14).wait(1));

	// arm_bottom
	this.instance_1 = new lib.armback_bottom_teengirlgown_1();
	this.instance_1.setTransform(-4.9,-99,1,1,-2.2,0,0,0.5,-124.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:-109},0).to({rotation:-25.7,x:27.1,y:-111},9).to({rotation:-2.2,x:-4.9,y:-109},10).to({rotation:-2.2},1).to({regY:-124.5,rotation:-94.8,x:109,y:-154.6},9).to({regY:-124.6,rotation:-2.2,x:-4.9,y:-109},10).to({rotation:-2.2},1).to({regX:0.4,rotation:-26.2,x:-6,y:-109.1},9).to({rotation:-49.4,x:36.9,y:-119},11).to({x:41.9,y:-124},5).to({regY:-124.5,rotation:-47.5},10).to({regX:0.5,regY:-124.6,rotation:-48.4,x:43.9,y:-121},10).to({rotation:-2.2,x:-5.9,y:-119},11).to({rotation:-2.2},1).to({regY:-124.5,rotation:-49.3,x:80,y:-133.6},14).wait(7).to({regY:-124.6,rotation:-2.2,x:-5.9,y:-109},14).wait(1));

	// hand
	this.instance_2 = new lib.hand_rest_teengirl_1();
	this.instance_2.setTransform(14,150,1,1,0,0,0,-16,-72);

	this.instance_3 = new lib.hand_back_point_teengirl_1();
	this.instance_3.setTransform(65,141,1,1,0,0,0,-2,-88);
	this.instance_3._off = true;

	this.instance_4 = new lib.hand_gesture_teengirl_1();
	this.instance_4.setTransform(126,124,0.999,0.999,-19.7,0,0,4.7,-87.3);
	this.instance_4._off = true;

	this.instance_5 = new lib.hand_back_gesture_teengirl();
	this.instance_5.setTransform(161,107,0.999,0.999,4.7,0,0,-51.5,-65.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:true,regX:-2,regY:-88,x:65,y:141},3).wait(6).to({_off:false,regX:-16,regY:-72,x:54,y:146},7).to({x:14,y:150},3).wait(1).to({_off:true,regX:-2,regY:-88,rotation:-41.2,x:176,y:85},3).wait(12).to({_off:false,regX:-16,regY:-72,rotation:-12.2,x:171,y:94.1},1).to({rotation:0,x:14,y:150},3).wait(1).to({_off:true,regX:4.7,regY:-87.3,scaleX:1,scaleY:1,rotation:-19.7,x:126,y:124},9).wait(42).to({_off:false,regX:-16,regY:-72,scaleX:1,scaleY:1,rotation:0,x:14,y:150},5).wait(1).to({x:142,y:118},6).to({_off:true,regX:-50.1,regY:-62,rotation:16.9,x:166,y:113.9},1).wait(14).to({_off:false,regX:-16,regY:-72,rotation:0,x:164,y:107},7).to({x:14,y:150},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},3).to({rotation:-41.2,x:143,y:115},6).to({_off:true,regX:-16,regY:-72,rotation:0,x:54,y:146},7).wait(4).to({_off:false,regX:-2,regY:-88,rotation:-41.2,x:176,y:85},3).to({scaleX:1,scaleY:1,rotation:-70.2,x:264.7,y:17.1},2).to({rotation:-120.1,x:353.4,y:-129.1},3).to({regX:1.6,regY:-66.3,scaleX:1,scaleY:1,rotation:-136.8,x:383,y:-197.9,mode:"synched",startPosition:0},1).to({scaleX:1,scaleY:1,rotation:-95.6,x:337,y:-51.3},3).to({rotation:-23.8,x:223.4,y:78.9},3).to({_off:true,regX:-16,regY:-72,scaleX:1,scaleY:1,rotation:-12.2,x:171,y:94.1,mode:"independent"},1).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41).to({_off:false},9).to({_off:true,regX:-51.5,regY:-65.2,rotation:4.7,x:161,y:107},3).wait(38).to({_off:false,regX:1.7,regY:-66.2,scaleX:1,scaleY:1,rotation:-25.2,x:136.6,y:142,mode:"synched",startPosition:0},1).to({_off:true,regX:-16,regY:-72,rotation:0,x:14,y:150,mode:"independent"},5).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50).to({_off:false},3).to({regX:-50.1,regY:-62,scaleX:1,scaleY:1,rotation:9.5,x:185.8,y:91.6},2).to({rotation:-14,x:249.9,y:42.6},6).to({rotation:-13.2,x:256,y:42.1},5).to({rotation:-6.3,x:248.8,y:44.6},10).to({regX:-50,rotation:-3.5,x:254.9,y:43.7},10).to({regX:-50.1,rotation:8,x:154.5,y:116.9},5).to({_off:true,regX:1.7,regY:-66.2,rotation:-25.2,x:136.6,y:142,mode:"synched",startPosition:0},1).wait(12).to({_off:false,regX:-50.1,regY:-62,rotation:16.9,x:166,y:113.9,mode:"independent"},1).to({rotation:-1.8,x:291,y:26.1},7).to({rotation:3.2,y:26},7).to({_off:true,regX:-16,regY:-72,rotation:0,x:164,y:107},7).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.9,-338.1,154.9,646.2);


(lib.arm_back_teengirl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"comp":0,"point_down":1,"point_up":21,"point_backdown":30,"gesture_large":41,"gesture_small":98});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.stop();
	}
	this.frame_97 = function() {
		this.stop();
	}
	this.frame_132 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(9).call(this.frame_29).wait(11).call(this.frame_40).wait(57).call(this.frame_97).wait(35).call(this.frame_132).wait(1));

	// arm_top
	this.instance = new lib.arm_back_top_teengirl("synched",0);
	this.instance.setTransform(-24.9,-289,1,1,0,0,0,-19.4,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5,x:-25},9).to({rotation:0,x:-24.9},10).to({startPosition:0},1).to({rotation:-34.2,x:-25},9).to({rotation:0,x:-24.9},10).wait(1).to({startPosition:0},0).to({startPosition:0},9).to({rotation:-7.5,y:-289.1},11).to({startPosition:0},5).to({startPosition:0},10).to({startPosition:0},10).to({rotation:0,y:-289},11).to({startPosition:0},1).to({rotation:-24.9,x:-25},14).to({startPosition:0},7).to({rotation:0,x:-24.9},14).wait(1));

	// arm_bottom
	this.instance_1 = new lib.arm_back_bottom_teengirl("synched",0);
	this.instance_1.setTransform(-2,-82,1,1,0,0,0,-7.8,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-24.7,x:27.7,y:-87.5},9).to({rotation:0,x:-2,y:-82},10).to({regY:-130.5,y:-128},1).to({regX:-0.7,regY:-134.3,rotation:-93.5,x:93,y:-163},9).to({regX:-7.8,regY:-130.5,rotation:0,x:-2,y:-128},10).wait(1).to({startPosition:0},0).to({regY:-130.6,rotation:-23.9},9).to({rotation:-47.6,x:18,y:-132.1},11).to({rotation:-49.3,x:17.9,y:-132},5).to({startPosition:0},10).to({startPosition:0},10).to({regY:-130.5,rotation:0,x:-2,y:-128},11).to({startPosition:0},1).to({regY:-130.4,rotation:-48.5,x:66.3,y:-140.4},14).to({startPosition:0},7).to({regY:-130.5,rotation:0,x:-2,y:-128},14).wait(1));

	// hand
	this.instance_2 = new lib.hand_rest_teengirl_1();
	this.instance_2.setTransform(14,150,1,1,0,0,0,-16,-72);

	this.instance_3 = new lib.hand_back_point_teengirl_1();
	this.instance_3.setTransform(65,141,1,1,0,0,0,-2,-88);
	this.instance_3._off = true;

	this.instance_4 = new lib.hand_gesture_teengirl_1();
	this.instance_4.setTransform(128,119,0.999,0.999,-19.7,0,0,4.7,-87.3);
	this.instance_4._off = true;

	this.instance_5 = new lib.hand_back_gesture_teengirl();
	this.instance_5.setTransform(161,99,0.999,0.999,4.7,0,0,-51.5,-65.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,regX:-2,regY:-88,x:65,y:141},3).wait(6).to({_off:false,regX:-16,regY:-72,x:54,y:146},7).to({x:14,y:150},3).wait(1).to({_off:true,regX:-2,regY:-88,rotation:-41.2,x:186,y:84},3).wait(12).to({_off:false,regX:-16,regY:-72,rotation:-12.2,x:172,y:103.1},1).to({rotation:0,x:14,y:150},3).wait(1).to({_off:true,regX:4.7,regY:-87.3,scaleX:1,scaleY:1,rotation:-19.7,x:128,y:119},9).wait(42).to({_off:false,regX:-16,regY:-72,scaleX:1,scaleY:1,rotation:0,x:14,y:150},5).wait(1).to({x:142,y:118},6).to({_off:true,regX:-50.1,regY:-62,rotation:16.9,x:166,y:113.9},1).wait(14).to({_off:false,regX:-16,regY:-72,rotation:0,x:162,y:118},7).to({x:14,y:150},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},3).to({rotation:-41.2,x:143,y:115},6).to({_off:true,regX:-16,regY:-72,rotation:0,x:54,y:146},7).wait(4).to({_off:false,regX:-2,regY:-88,rotation:-41.2,x:186,y:84},3).to({scaleX:1,scaleY:1,rotation:-70.2,x:274.7,y:8.1},2).to({regX:1.6,regY:-66.3,scaleX:1,scaleY:1,rotation:-136.8,x:386,y:-205.9,mode:"synched",startPosition:0},4).to({scaleX:1,scaleY:1,rotation:-95.6,x:338,y:-45.3},3).to({rotation:-23.8,x:223.4,y:79.9},3).to({_off:true,regX:-16,regY:-72,scaleX:1,scaleY:1,rotation:-12.2,x:172,y:103.1,mode:"independent"},1).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({_off:false},9).to({_off:true,regX:-51.5,regY:-65.2,rotation:4.7,x:161,y:99},3).wait(38).to({_off:false,regX:1.7,regY:-66.2,scaleX:1,scaleY:1,rotation:-25.2,x:136.6,y:133,mode:"synched",startPosition:0},1).to({_off:true,regX:-16,regY:-72,rotation:0,x:14,y:150,mode:"independent"},5).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({_off:false},3).to({regX:-50.1,regY:-62,scaleX:1,scaleY:1,rotation:9.5,x:185.8,y:88.6},2).to({rotation:-14,x:240.9,y:36.6},6).to({rotation:-13.2,x:247,y:35.1},5).to({rotation:-6.3,x:247.8,y:32.6},10).wait(10).to({rotation:8,x:154.5,y:111.9},5).to({_off:true,regX:1.7,regY:-66.2,rotation:-25.2,x:136.6,y:133,mode:"synched",startPosition:0},1).wait(12).to({_off:false,regX:-50.1,regY:-62,rotation:16.9,x:166,y:113.9,mode:"independent"},1).to({rotation:-1.8,x:291,y:26.1},7).to({rotation:3.2,y:26},7).to({_off:true,regX:-16,regY:-72,rotation:0,x:162,y:118},7).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.2,-334.5,113.2,642.6);


(lib.arm_back_teenboygown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"comp":0,"point_down":1,"point_up":20,"point_backdown":30,"gesture_large":40,"gesture_small":97});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_96 = function() {
		this.stop();
	}
	this.frame_132 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(57).call(this.frame_96).wait(36).call(this.frame_132).wait(1));

	// arm_upper
	this.instance = new lib.armback_top_teenboygown_1();
	this.instance.setTransform(-62.8,-302.8,1,1,15.2,0,0,-49,-88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.4,x:-62.9,y:-302.9},9).to({rotation:15.2,x:-62.8,y:-302.8},10).wait(1).to({rotation:-15.6,x:-62.9},9).to({rotation:15.2,x:-62.8},10).wait(1).to({regX:-49.1,rotation:8.7,x:-63},9).to({regX:-49,rotation:1.4,x:-62.9,y:-302.7},11).to({rotation:5.2,x:-62.8,y:-302.8},5).to({rotation:1.5,x:-62.9},10).to({rotation:2.4,x:-62.8},10).to({rotation:15.2},11).wait(1).to({rotation:-5.3,x:-62.9},14).to({rotation:-9.8},7).to({rotation:15.2,x:-62.8},14).wait(1));

	// hand
	this.instance_1 = new lib.hand_back_rest2_teenboy();
	this.instance_1.setTransform(34,146,1,1,6.2,0,0,-15.7,-72.4);

	this.instance_2 = new lib.hand_back_point_teengirl_1();
	this.instance_2.setTransform(59,132,1,1,0,0,0,-18,-82);
	this.instance_2._off = true;

	this.instance_3 = new lib.hand_gesture_teengirl_1();
	this.instance_3.setTransform(113,107,0.999,0.999,-19.7,0,0,4.7,-87.3);
	this.instance_3._off = true;

	this.instance_4 = new lib.hand_back_gesture_teengirl();
	this.instance_4.setTransform(141,99,0.999,0.999,4.7,0,0,-51.5,-65.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,regX:-18,regY:-82,rotation:0,x:59,y:132},3).wait(12).to({_off:false,regX:-15.8,regY:-72.4,rotation:4.2,x:68,y:128},1).to({regX:-15.7,rotation:6.2,x:34,y:146},3).wait(1).to({_off:true,regX:-2,regY:-88,rotation:-41.2,x:146,y:85},3).wait(12).to({_off:false,regX:-15.8,regY:-72.4,rotation:-22.2,x:137,y:83},1).to({regX:-15.7,rotation:6.2,x:34,y:146},3).wait(1).to({rotation:6.2},0).to({_off:true,regX:4.7,regY:-87.3,scaleX:1,scaleY:1,rotation:-19.7,x:113,y:107},9).wait(42).to({_off:false,regX:-15.8,regY:-72.4,scaleX:1,scaleY:1,rotation:0,x:34,y:146},5).wait(1).to({x:131,y:98},6).to({_off:true,regX:-50.1,regY:-62,rotation:16.9,x:146,y:96.9},1).wait(20).to({_off:false,regX:-15.8,regY:-72.5,rotation:-5.5,x:155,y:87},1).to({regY:-72.4,rotation:0,x:34,y:146},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},3).to({regY:-81.9,rotation:-37.6,x:124.8,y:110.4},6).to({regX:-18.1,rotation:-3.8,x:61.4,y:130.7},6).to({_off:true,regX:-15.8,regY:-72.4,rotation:4.2,x:68,y:128},1).wait(4).to({_off:false,regX:-2,regY:-88,rotation:-41.2,x:146,y:85},3).to({scaleX:1,scaleY:1,rotation:-70.2,x:206.7,y:38.1},2).to({regX:1.6,regY:-66.3,scaleX:1,scaleY:1,rotation:-120.8,x:324.8,y:-100.5,mode:"synched",startPosition:0},4).to({scaleX:1,scaleY:1,rotation:-95.6,x:270,y:-5.3},3).to({rotation:-23.8,x:173.4,y:81.9},3).to({_off:true,regX:-15.8,regY:-72.4,scaleX:1,scaleY:1,rotation:-22.2,x:137,y:83,mode:"independent"},1).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({_off:false},9).to({regX:4.6,rotation:-20.8,x:125.7,y:99.8},2).to({_off:true,regX:-51.5,regY:-65.2,rotation:4.7,x:141,y:99},1).wait(38).to({_off:false,regX:1.7,regY:-66.2,scaleX:1,scaleY:1,rotation:-25.2,x:128.6,y:130,mode:"synched",startPosition:0},1).to({_off:true,regX:-15.8,regY:-72.4,rotation:0,x:34,y:146,mode:"independent"},5).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(51).to({_off:false},1).to({regX:-50.1,regY:-62,scaleX:1,scaleY:1,rotation:9.5,x:154.8,y:89.6},2).to({regY:-62.1,rotation:-5.3,x:192.8,y:64.5},6).to({regY:-62,rotation:-13.2,x:192,y:51.1},5).to({rotation:-6.3,x:209.8,y:34.6},10).to({x:214.8,y:26.6},10).to({rotation:8,x:140.5,y:93.9},5).to({_off:true,regX:1.7,regY:-66.2,rotation:-25.2,x:128.6,y:130,mode:"synched",startPosition:0},1).wait(12).to({_off:false,regX:-50.1,regY:-62,rotation:16.9,x:146,y:96.9,mode:"independent"},1).to({rotation:-1.8,x:249,y:26.1},7).to({rotation:3.2,x:254,y:21},7).to({rotation:-1.8,x:197.5,y:68.9},4).to({rotation:0.4,x:166.1,y:93.6},2).to({_off:true,regX:-15.8,regY:-72.5,rotation:-5.5,x:155,y:87},1).wait(8));

	// arm_lower
	this.instance_5 = new lib.armback_bottom_teenboygown_1();
	this.instance_5.setTransform(-23.9,-60.9,1,1,-11.2,0,0,-2,-93);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-93.1,rotation:-29.3,x:25.3,y:-73.5},9).to({regY:-93,rotation:-11.2,x:-23.9,y:-60.9},10).wait(1).to({rotation:-81.7,x:95,y:-112.2},9).to({rotation:-11.2,x:-23.9,y:-60.9},10).wait(1).to({rotation:-11.2},0).to({rotation:-28.9,x:0.3,y:-67.5},9).to({regY:-93.1,rotation:-44.3,x:31.2,y:-79.6},11).to({regY:-93,rotation:-48.8,x:17.3,y:-77.5},5).to({rotation:-52.8,x:28.3},10).to({rotation:-55.6,x:27.3},10).to({rotation:-11.2,x:-23.9,y:-60.9},11).to({rotation:-11.2},1).to({regY:-93.1,rotation:-54.3,x:63,y:-85.4},14).to({rotation:-51.1,x:80,y:-95.4},7).to({regY:-93,rotation:-11.2,x:-23.9,y:-60.9},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.9,-342.8,257.7,653.3);


(lib.arm_back_teenboy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"comp":0,"point_down":1,"point_up":20,"point_backdown":30,"gesture_large":40,"gesture_small":97});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_96 = function() {
		this.stop();
	}
	this.frame_132 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(57).call(this.frame_96).wait(36).call(this.frame_132).wait(1));

	// arm_upper
	this.instance = new lib.armback_top_teenboy_1();
	this.instance.setTransform(-65,-307,1,1,1.7,0,0,-37.7,-130.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-130.3,rotation:-9.8,x:-64.9,y:-306.9},9).to({regY:-130.4,rotation:1.7,x:-65,y:-307},10).to({rotation:1.7},1).to({regX:-37.8,rotation:-30.7,y:-306.9},9).to({regX:-37.7,rotation:1.7,y:-307},10).wait(1).to({rotation:1.7},0).to({rotation:-5.3},9).to({rotation:-12.7,x:-64.9,y:-306.9},11).to({regX:-37.8,regY:-130.3,rotation:-10,x:-65},5).to({regX:-37.7,regY:-130.4,rotation:-13.2,y:-307},10).to({rotation:-12.5},10).to({rotation:1.7},11).to({rotation:1.7},1).to({regX:-37.6,rotation:-19.7,x:-64.9},14).to({regX:-37.7,rotation:-23.5,y:-306.9},7).to({rotation:1.7,x:-65,y:-307},14).wait(1));

	// arm_lower
	this.instance_1 = new lib.arm_back_bottom_teenboy();
	this.instance_1.setTransform(-17,-43,1,1,0,0,0,-20.5,-88.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-88.3,rotation:-16.5,x:29.8,y:-66.9},9).to({regY:-88.4,rotation:0,x:-17,y:-43},10).wait(1).to({regX:-20.6,rotation:-72.2,x:113.2,y:-110.8},9).to({regX:-20.5,rotation:0,x:-17,y:-43},10).wait(1).to({regX:-20.6,rotation:-17.2,x:13,y:-56},9).to({regX:-20.5,rotation:-32.4,x:43.3,y:-71},11).to({regX:-20.4,rotation:-38.2,x:28.3,y:-68.9},5).to({rotation:-40.2,x:47.3,y:-67.9},10).to({regX:-20.5,rotation:-43.2,y:-63.9},10).to({rotation:0,x:-17,y:-43},11).wait(1).to({rotation:-40.5,x:75.2,y:-80.9},14).to({regX:-20.6,regY:-88.3,rotation:-38.5,x:91.2,y:-88.8},7).to({regX:-20.5,regY:-88.4,rotation:0,x:-17,y:-43},14).wait(1));

	// hand
	this.instance_2 = new lib.hand_back_rest2_teenboy();
	this.instance_2.setTransform(34,146,1,1,0,0,0,-15.8,-72.4);

	this.instance_3 = new lib.hand_back_point_teengirl_1();
	this.instance_3.setTransform(59,132,1,1,0,0,0,-18,-82);
	this.instance_3._off = true;

	this.instance_4 = new lib.hand_gesture_teengirl_1();
	this.instance_4.setTransform(122,107,0.999,0.999,-19.7,0,0,4.7,-87.3);
	this.instance_4._off = true;

	this.instance_5 = new lib.hand_back_gesture_teengirl();
	this.instance_5.setTransform(141,99,0.999,0.999,4.7,0,0,-51.5,-65.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,regX:-18,regY:-82,x:59,y:132},3).wait(12).to({_off:false,regX:-15.8,regY:-72.4,x:68,y:128},1).to({x:34,y:146},3).wait(1).to({_off:true,regX:-2,regY:-88,rotation:-41.2,x:146,y:85},3).wait(12).to({_off:false,regX:-15.8,regY:-72.4,rotation:-22.2,x:139,y:82},1).to({rotation:0,x:34,y:146},3).wait(1).to({_off:true,regX:4.7,regY:-87.3,scaleX:1,scaleY:1,rotation:-19.7,x:122,y:107},9).wait(42).to({_off:false,regX:-15.8,regY:-72.4,scaleX:1,scaleY:1,rotation:0,x:34,y:146},5).wait(1).to({x:139,y:98},6).to({_off:true,regX:-50.1,regY:-62,rotation:16.9,x:148,y:101.9},1).wait(20).to({_off:false,regX:-15.8,regY:-72.5,rotation:-5.5,x:155,y:87},1).to({regY:-72.4,rotation:0,x:34,y:146},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},3).to({regX:-18.1,regY:-81.9,rotation:-26.7,x:119.8,y:104.5},6).to({rotation:-3.8,x:64.4,y:124.7},6).to({_off:true,regX:-15.8,regY:-72.4,rotation:0,x:68,y:128},1).wait(4).to({_off:false,regX:-2,regY:-88,rotation:-41.2,x:146,y:85},3).to({scaleX:1,scaleY:1,rotation:-70.2,x:206.7,y:38.1},2).to({regX:1.6,regY:-66.3,scaleX:1,scaleY:1,rotation:-120.8,x:331.8,y:-101.5,mode:"synched",startPosition:0},4).to({scaleX:1,scaleY:1,rotation:-95.6,x:270,y:-5.3},3).to({rotation:-23.8,x:191.4,y:80.9},3).to({_off:true,regX:-15.8,regY:-72.4,scaleX:1,scaleY:1,rotation:-22.2,x:139,y:82,mode:"independent"},1).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({_off:false},9).to({regX:4.6,rotation:-20.8,x:135.7,y:99.8},2).to({_off:true,regX:-51.5,regY:-65.2,rotation:4.7,x:141,y:99},1).wait(38).to({_off:false,regX:1.7,regY:-66.2,scaleX:1,scaleY:1,rotation:-25.2,x:136.6,y:133,mode:"synched",startPosition:0},1).to({_off:true,regX:-15.8,regY:-72.4,rotation:0,x:34,y:146,mode:"independent"},5).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(51).to({_off:false},1).to({regX:-50.1,regY:-62,scaleX:1,scaleY:1,rotation:9.5,x:157.8,y:88.6},2).to({rotation:-14,x:194.9,y:67.6},6).to({rotation:-13.2,x:193,y:51.1},5).to({rotation:-6.3,x:219.8,y:43.6},10).to({x:226.8,y:37.6},10).to({rotation:8,x:149.5,y:103.9},5).to({_off:true,regX:1.7,regY:-66.2,rotation:-25.2,x:136.6,y:133,mode:"synched",startPosition:0},1).wait(12).to({_off:false,regX:-50.1,regY:-62,rotation:16.9,x:148,y:101.9,mode:"independent"},1).to({rotation:-1.8,x:249,y:26.1},7).to({rotation:3.2,x:261,y:26},7).to({rotation:-1.8,x:200.5,y:70.9},4).to({rotation:0.4,x:166.1,y:93.6},2).to({_off:true,regX:-15.8,regY:-72.5,rotation:-5.5,x:155,y:87},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.3,-331.8,196.1,636.3);


(lib.arm_back_girlgown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"comp":0,"point_down":1,"point_up":20,"point_backdown":29,"gesture_large":40,"gesture_small":97});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_96 = function() {
		this.stop();
	}
	this.frame_132 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(9).call(this.frame_28).wait(11).call(this.frame_39).wait(57).call(this.frame_96).wait(36).call(this.frame_132).wait(1));

	// arm_top
	this.instance = new lib.armback_top_girlgown_1("synched",0);
	this.instance.setTransform(-36.9,-225.9,1,1,8.2,0,0,-39.1,-62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-62.5,rotation:6},9).to({regY:-62.6,rotation:8.2},10).to({startPosition:0},1).to({regX:-39.2,rotation:-18.8,x:-37},9).to({regX:-39.1,rotation:8.2,x:-36.9},10).to({startPosition:0},1).to({rotation:7.2,y:-226},9).to({rotation:-7.8,x:-37,y:-225.9},11).to({rotation:-11.3,x:-36.9,y:-226},5).to({regX:-39.2,rotation:-8,y:-225.9},10).to({regX:-39.1,rotation:-7.6,x:-36.8},10).to({rotation:8.2,x:-36.9},11).to({startPosition:0},1).to({regX:-39.2,regY:-62.5,rotation:-1.3,x:-37},8).to({rotation:-1.3},12).to({regY:-62.6,rotation:-2.3,x:-36.9,y:-226},7).to({regX:-39.1,rotation:8.2,y:-225.9},8).wait(1));

	// arm_bottom
	this.instance_1 = new lib.armback_bottom_girlgown_1("synched",0);
	this.instance_1.setTransform(-1.9,-84.9,1,1,-5,0,0,2.4,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-32.1,x:4.7,y:-77.4},9).to({rotation:-5,x:-1.9,y:-84.9},10).to({regX:2.3,rotation:-11,x:-2},1).to({regX:2.4,rotation:-101.5,x:62.7,y:-111.9},9).to({rotation:-5,x:-1.9,y:-84.9},10).to({startPosition:0},1).to({regX:2.5,rotation:-32.4},9).to({rotation:-56.4,x:40.6,y:-96},11).to({x:45.6,y:-102},5).to({x:40.6,y:-96},10).to({rotation:-55.2,y:-95.9},10).to({regX:2.4,rotation:-5,x:-1.9,y:-84.9},11).to({startPosition:0},1).to({rotation:-44.4,x:25,y:-87},8).to({rotation:-36.4},12).to({rotation:-32.2,x:23.1,y:-93.4},7).to({rotation:-5,x:-1.9,y:-84.9},8).wait(1));

	// hand
	this.instance_2 = new lib.hand_back_rest_girl("synched",0);
	this.instance_2.setTransform(28.1,99,1,1,0,0,0,1.7,-66.3);

	this.instance_3 = new lib.hand_back_point_boy("synched",0);
	this.instance_3.setTransform(55.7,95.5,1,1,-32.5,0,0,1.7,-66.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.hand_back_indicate_shared("synched",0);
	this.instance_4.setTransform(114,62,1,1,0,0,0,-48,-42);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,regY:-66.2,rotation:-32.5,x:55.7,y:95.5},3).wait(6).to({_off:false,regY:-66.3,rotation:-10.9,x:57,y:99},7).to({rotation:0,x:28.1},3).to({scaleX:1,scaleY:1,rotation:-8.5,x:45.7,y:93.4},1).to({regX:1.6,rotation:-17,x:83.4,y:85.8},1).to({_off:true,regX:1.7,rotation:-34.1,x:152.8,y:37.6},2).wait(12).to({_off:false,scaleX:1,scaleY:1,rotation:0,x:28.1,y:99},4).to({startPosition:0},1).to({regY:-66.2,rotation:-40.5,x:99,y:74.9},8).to({_off:true,regX:-48,regY:-42,rotation:0,x:114,y:62},1).wait(41).to({_off:false,regX:1.7,regY:-66.2,rotation:-25.2,x:116.6,y:66},1).to({regY:-66.3,rotation:0,x:28.1,y:99},5).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:-15.2,x:101.9,y:71.9},4).to({_off:true,regX:-53.4,regY:-38.1,scaleX:1,scaleY:1,rotation:15.7,x:114.6,y:67.9},1).wait(22).to({_off:false,regX:1.7,regY:-66.3,scaleX:1,scaleY:1,rotation:-15.2,x:127.4,y:66.9},1).to({scaleX:1,scaleY:1,rotation:0,x:28.1,y:99},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},3).to({rotation:-40.5,x:110,y:68.9},6).to({_off:true,regY:-66.3,rotation:-10.9,x:57,y:99},7).wait(5).to({_off:false,scaleX:1,scaleY:1,rotation:-34.1,x:152.8,y:37.6},2).to({regY:-66.2,scaleX:1,scaleY:1,rotation:-56.7,x:197,y:-23.6},2).to({regY:-66.3,scaleX:1,scaleY:1,rotation:-113.3,x:242.7,y:-120.8},3).to({regX:1.6,scaleX:1,scaleY:1,rotation:-136.8,x:249.3,y:-152.8},1).to({regX:1.7,regY:-66.2,scaleX:1,scaleY:1,rotation:-56.7,x:221.4,y:-62.9},3).to({scaleX:1,scaleY:1,rotation:-32.3,x:162.4,y:25.4},3).to({_off:true,regY:-66.3,scaleX:1,scaleY:1,rotation:0,x:28.1,y:99},4).wait(94));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48).to({_off:false},1).to({regX:-53.3,regY:-38.1,x:203,y:-8},11).to({scaleX:1,scaleY:1,rotation:8.3,x:215.1,y:-13.7},5).to({regX:-53.4,scaleX:1,scaleY:1,rotation:5.9,x:205.6,y:-9.2},10).to({x:204.6,y:-8.2},10).to({scaleX:1,scaleY:1,rotation:15.7,x:134.6,y:56.9},5).to({_off:true,regX:1.7,regY:-66.2,scaleX:1,scaleY:1,rotation:-25.2,x:116.6,y:66},1).wait(10).to({_off:false,regX:-53.4,regY:-38.1,scaleX:1,scaleY:1,rotation:15.7,x:114.6,y:67.9},1).to({regX:-53.3,rotation:14.2,x:164.3,y:33.2},3).to({regX:-53.4,scaleX:1,scaleY:1,rotation:19.5,x:143.8,y:49.5},12).to({regX:-53.3,regY:-38.3,scaleX:1,scaleY:1,rotation:20,x:135.4,y:54.4},7).to({_off:true,regX:1.7,regY:-66.3,rotation:-15.2,x:127.4,y:66.9},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.9,-260.4,147.8,509.7);


(lib.arm_back_girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"comp":0,"point_down":1,"point_up":20,"point_backdown":30,"gesture_large":40,"gesture_small":97});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_96 = function() {
		this.stop();
	}
	this.frame_132 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(57).call(this.frame_96).wait(36).call(this.frame_132).wait(1));

	// arm_top
	this.instance = new lib.arm_back_top_girl("synched",0);
	this.instance.setTransform(-36.9,-226,1,1,0,0,0,-19.4,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.7,x:-37,y:-225.9},9).to({rotation:0,x:-36.9,y:-226},10).to({startPosition:0},1).to({rotation:-26.5},9).to({rotation:0},10).to({startPosition:0},1).to({rotation:-2.7,x:-37,y:-225.9},9).to({rotation:-16.7,y:-226},11).to({regY:-65.4,scaleX:1,scaleY:1,rotation:-20.6,x:-36.9},5).to({regY:-65.5,scaleX:1,scaleY:1,rotation:-16.7,x:-37},10).to({startPosition:0},10).to({rotation:0,x:-36.9},11).to({startPosition:0},1).to({regY:-65.4,scaleX:1,scaleY:1,rotation:-11.6},8).to({regX:-19.5,regY:-65.3,scaleX:1,scaleY:1,rotation:-11.5,y:-225.9},12).to({regX:-19.4,regY:-65.4,scaleX:1,scaleY:1,rotation:-11.6,y:-226},7).to({regY:-65.5,scaleX:1,scaleY:1,rotation:0},8).wait(1));

	// arm_bottom
	this.instance_1 = new lib.arm_front_bottom_girl("synched",0);
	this.instance_1.setTransform(-2,-82,1,1,0,0,0,-7.8,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-24.7,x:6},9).to({rotation:0,x:-2},10).to({startPosition:0},1).to({rotation:-93.5,x:61,y:-114.8},9).to({rotation:0,x:-2,y:-82},10).to({startPosition:0},1).to({rotation:-24.7,x:6},9).to({rotation:-49.9,x:39.7,y:-98.3},11).to({scaleX:1,scaleY:1,x:51.8,y:-105.2},5).to({scaleX:1,scaleY:1,x:39.7,y:-98.3},10).to({startPosition:0},10).to({rotation:0,x:-2,y:-82},11).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:-37.2,x:29.8,y:-95.2},8).to({scaleX:1,scaleY:1,rotation:-31.1},12).to({regX:-7.7,regY:-84.4,scaleX:1,scaleY:1,rotation:-25.7,x:29.9},7).to({regX:-7.8,regY:-84.5,scaleX:1,scaleY:1,rotation:0,x:-2,y:-82},8).wait(1));

	// hand
	this.instance_2 = new lib.hand_back_rest_girl("synched",0);
	this.instance_2.setTransform(28.1,99,1,1,0,0,0,1.7,-66.3);

	this.instance_3 = new lib.hand_back_point_boy("synched",0);
	this.instance_3.setTransform(55.7,95.5,1,1,-32.5,0,0,1.7,-66.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.hand_back_indicate_shared("synched",0);
	this.instance_4.setTransform(118,71,1,1,0,0,0,-48,-42);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,regY:-66.2,rotation:-32.5,x:55.7,y:95.5},3).wait(6).to({_off:false,regY:-66.3,rotation:-10.9,x:57,y:99},7).to({rotation:0,x:28.1},3).to({scaleX:1,scaleY:1,rotation:-8.5,x:29.2,y:99.9},1).to({regX:1.6,rotation:-17,x:66.4,y:90.8},1).to({_off:true,regX:1.7,rotation:-34.1,x:142.8,y:42.6},2).wait(12).to({_off:false,scaleX:1,scaleY:1,rotation:0,x:28.1,y:99},4).to({startPosition:0},1).to({regY:-66.2,rotation:-40.5,x:99,y:74.9},8).to({_off:true,regX:-48,regY:-42,rotation:0,x:118,y:71},1).wait(41).to({_off:false,regX:1.7,regY:-66.2,rotation:-25.2,x:116.6,y:66},1).to({regY:-66.3,rotation:0,x:28.1,y:99},5).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:-15.2,x:101.9,y:71.9},4).to({_off:true,regX:-53.4,regY:-38.1,scaleX:1,scaleY:1,rotation:15.7,x:118.6,y:66.9},1).wait(22).to({_off:false,regX:1.7,regY:-66.3,scaleX:1,scaleY:1,rotation:-15.2,x:127.4},1).to({scaleX:1,scaleY:1,rotation:0,x:28.1,y:99},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},3).to({rotation:-40.5,x:110,y:68.9},6).to({_off:true,regY:-66.3,rotation:-10.9,x:57,y:99},7).wait(5).to({_off:false,scaleX:1,scaleY:1,rotation:-34.1,x:142.8,y:42.6},2).to({regY:-66.2,scaleX:1,scaleY:1,rotation:-56.7,x:197,y:-13.6},2).to({regX:1.6,regY:-66.3,scaleX:1,scaleY:1,rotation:-75.7,x:212.2,y:-44.6},1).to({regX:1.7,rotation:-113.3,x:242.7,y:-106.8},2).to({regX:1.6,scaleX:1,scaleY:1,rotation:-136.8,x:249.3,y:-152.8},1).to({regX:1.7,regY:-66.2,scaleX:1,scaleY:1,rotation:-56.7,x:221.4,y:-62.9},3).to({scaleX:1,scaleY:1,rotation:-32.3,x:162.4,y:25.4},3).to({_off:true,regY:-66.3,scaleX:1,scaleY:1,rotation:0,x:28.1,y:99},4).wait(94));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48).to({_off:false},1).to({regX:-53.3,regY:-38.1,x:203,y:-8},11).to({scaleX:1,scaleY:1,rotation:8.3,x:215.1,y:-13.7},5).to({regX:-53.4,scaleX:1,scaleY:1,rotation:5.9,x:205.6,y:-9.2},10).to({x:204.6,y:-8.2},10).to({scaleX:1,scaleY:1,rotation:15.7,x:134.6,y:56.9},5).to({_off:true,regX:1.7,regY:-66.2,scaleX:1,scaleY:1,rotation:-25.2,x:116.6,y:66},1).wait(10).to({_off:false,regX:-53.4,regY:-38.1,scaleX:1,scaleY:1,rotation:15.7,x:118.6,y:66.9},1).to({regX:-53.3,rotation:14.2,x:168.3,y:31.2},3).to({regX:-53.4,scaleX:1,scaleY:1,rotation:19.5,x:155.8,y:47.5},12).to({regX:-53.3,regY:-38.3,scaleX:1,scaleY:1,rotation:20,x:140.4,y:57.4},7).to({_off:true,regX:1.7,regY:-66.3,rotation:-15.2,x:127.4,y:66.9},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.8,-259.6,285.3,508.9);


(lib.arm_back_boygown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"comp":0,"point_down":1,"point_up":20,"point_backdown":30,"gesture_large":40,"gesture_small":97});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_96 = function() {
		this.stop();
	}
	this.frame_132 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(57).call(this.frame_96).wait(36).call(this.frame_132).wait(1));

	// arm_top
	this.instance = new lib.arm_back_top_boygown_1();
	this.instance.setTransform(-36.1,-224,1,1,-3,0,0,-21.1,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-21,rotation:-8.7,x:-36},9).to({regX:-21.1,rotation:-3,x:-36.1},10).wait(1).to({regX:-21,rotation:-32.4,x:-36},9).to({regX:-21.1,rotation:-3,x:-36.1},10).wait(1).to({regX:-21,rotation:-8.7,x:-36},9).to({regX:-20.9,rotation:-22.9},11).to({regX:-21,rotation:-28.2},5).to({rotation:-23.7,x:-36.1},10).to({regX:-20.9,x:-36},10).to({regX:-21.1,rotation:-3,x:-36.1},11).wait(1).to({regX:-21,rotation:-19.7,x:-36},8).to({rotation:-19.2},12).wait(7).to({regX:-21.1,rotation:-3,x:-36.1},8).wait(1));

	// arm_bottom
	this.instance_1 = new lib.arm_back_bottom_boygown_1();
	this.instance_1.setTransform(-11,-78,1,1,1,0,0,-11.8,-82.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-22.7,x:5.9},9).to({rotation:1,x:-11},10).wait(1).to({rotation:-94.4,x:64.9,y:-107.8},9).to({rotation:1,x:-11,y:-78},10).wait(1).to({regY:-82.8,rotation:-24.2,x:6,y:-77.9},9).to({regX:-11.7,regY:-82.9,rotation:-50.7,x:41,y:-87.9},11).to({x:51,y:-97.9},5).to({x:41,y:-87.9},10).wait(10).to({regX:-11.8,rotation:1,x:-11,y:-78},11).wait(1).to({regX:-11.9,rotation:-36.2,x:32.9,y:-87.9},8).to({regX:-11.8,rotation:-31,x:31,y:-87},12).to({rotation:-24.3,x:33,y:-88},7).to({rotation:1,x:-11,y:-78},8).wait(1));

	// hand
	this.instance_2 = new lib.hand_back_point_boy("synched",0);
	this.instance_2.setTransform(21.1,99,1,1,0,0,0,1.7,-66.3);

	this.instance_3 = new lib.hand_back_indicate_shared("synched",0);
	this.instance_3.setTransform(111,76,1,1,0,0,0,-48,-42);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-66.2,rotation:-40.5,x:102,y:77.9},9).to({regY:-66.3,rotation:0,x:21.1,y:99},10).to({startPosition:0},1).to({regX:1.6,scaleX:1,scaleY:1,rotation:-34.1,x:131.7,y:52.7},3).to({regX:1.7,regY:-66.2,scaleX:1,scaleY:1,rotation:-56.7,x:195,y:-2.6},2).to({regY:-66.3,scaleX:1,scaleY:1,rotation:-113.3,x:242.7,y:-106.8},3).to({regX:1.6,scaleX:1,scaleY:1,rotation:-136.8,x:252.3,y:-145.8},1).to({regX:1.7,regY:-66.2,scaleX:1,scaleY:1,rotation:-56.7,x:221.4,y:-49.9},3).to({scaleX:1,scaleY:1,rotation:-32.3,x:153.4,y:35.4},3).to({regY:-66.3,scaleX:1,scaleY:1,rotation:0,x:21.1,y:99},4).to({startPosition:0},1).to({regY:-66.2,rotation:-40.5,x:93,y:78.9},8).to({_off:true,regX:-48,regY:-42,rotation:0,x:111,y:76},1).wait(41).to({_off:false,regX:1.7,regY:-66.2,rotation:-25.2,x:110.6,y:69},1).to({regY:-66.3,rotation:0,x:21.1,y:99},5).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:-15.2,x:95.9,y:72.9},4).to({_off:true,regX:-53.4,regY:-38.1,scaleX:1,scaleY:1,rotation:15.7,x:114.6,y:66.9},1).wait(22).to({_off:false,regX:1.7,regY:-66.3,scaleX:1,scaleY:1,rotation:-15.2,x:120.4,y:67.9},1).to({scaleX:1,scaleY:1,rotation:0,x:21.1,y:99},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},1).to({regX:-53.3,regY:-38.1,x:201,y:0},11).to({scaleX:1,scaleY:1,rotation:8.3,x:215.1,y:-9.7},5).to({regX:-53.4,scaleX:1,scaleY:1,rotation:5.9,x:201.6,y:-3.2},10).to({x:200.6},10).to({scaleX:1,scaleY:1,rotation:15.7,x:124.6,y:58.9},5).to({_off:true,regX:1.7,regY:-66.2,scaleX:1,scaleY:1,rotation:-25.2,x:110.6,y:69},1).wait(10).to({_off:false,regX:-53.4,regY:-38.1,scaleX:1,scaleY:1,rotation:15.7,x:114.6,y:66.9},1).to({regX:-53.3,rotation:14.2,x:165.3,y:36.2},3).to({regX:-53.4,scaleX:1,scaleY:1,rotation:19.5,x:151.8,y:47.5},12).to({regX:-53.3,regY:-38.3,scaleX:1,scaleY:1,rotation:20,x:135.4,y:62.4},7).to({_off:true,regX:1.7,regY:-66.3,rotation:-15.2,x:120.4,y:67.9},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-247.4,156.2,515.4);


(lib.arm_back_boy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"comp":0,"point_down":1,"point_up":20,"point_backdown":30,"gesture_large":40,"gesture_small":97});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_96 = function() {
		this.stop();
	}
	this.frame_132 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(57).call(this.frame_96).wait(36).call(this.frame_132).wait(1));

	// arm_top
	this.instance = new lib.arm_back_top_boy("synched",0);
	this.instance.setTransform(-36.9,-226,1,1,0,0,0,-19.4,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.7,x:-37,y:-225.9},9).to({rotation:0,x:-36.9,y:-226},10).to({startPosition:0},1).to({rotation:-26.5},9).to({rotation:0},10).to({startPosition:0},1).to({rotation:-2.7,x:-37,y:-225.9},9).to({rotation:-16.7,y:-226},11).to({regY:-65.4,scaleX:1,scaleY:1,rotation:-20.6,x:-36.9},5).to({regY:-65.5,scaleX:1,scaleY:1,rotation:-16.7,x:-37},10).to({startPosition:0},10).to({rotation:0,x:-36.9},11).to({startPosition:0},1).to({regY:-65.4,scaleX:1,scaleY:1,rotation:-11.6},8).to({regX:-19.5,regY:-65.3,scaleX:1,scaleY:1,rotation:-11.5,y:-225.9},12).to({regX:-19.4,regY:-65.4,scaleX:1,scaleY:1,rotation:-11.6,y:-226},7).to({regY:-65.5,scaleX:1,scaleY:1,rotation:0},8).wait(1));

	// arm_bottom
	this.instance_1 = new lib.arm_back_bottom_boy("synched",0);
	this.instance_1.setTransform(-2,-82,1,1,0,0,0,-7.8,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-24.7,x:6},9).to({rotation:0,x:-2},10).to({startPosition:0},1).to({rotation:-93.5,x:61,y:-114.8},9).to({rotation:0,x:-2,y:-82},10).to({startPosition:0},1).to({rotation:-24.7,x:6},9).to({rotation:-49.9,x:39.7,y:-98.3},11).to({scaleX:1,scaleY:1,x:51.8,y:-105.2},5).to({scaleX:1,scaleY:1,x:39.7,y:-98.3},10).to({startPosition:0},10).to({rotation:0,x:-2,y:-82},11).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:-37.2,x:29.8,y:-95.2},8).to({scaleX:1,scaleY:1,rotation:-31.1},12).to({regX:-7.7,regY:-84.4,scaleX:1,scaleY:1,rotation:-25.7,x:29.9},7).to({regX:-7.8,regY:-84.5,scaleX:1,scaleY:1,rotation:0,x:-2,y:-82},8).wait(1));

	// hand
	this.instance_2 = new lib.hand_back_point_boy("synched",0);
	this.instance_2.setTransform(21.1,99,1,1,0,0,0,1.7,-66.3);

	this.instance_3 = new lib.hand_back_indicate_shared("synched",0);
	this.instance_3.setTransform(111,76,1,1,0,0,0,-48,-42);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-66.2,rotation:-40.5,x:102,y:77.9},9).to({regY:-66.3,rotation:0,x:21.1,y:99},10).to({startPosition:0},1).to({regX:1.6,scaleX:1,scaleY:1,rotation:-34.1,x:131.7,y:52.7},3).to({regX:1.7,regY:-66.2,scaleX:1,scaleY:1,rotation:-56.7,x:195,y:-2.6},2).to({regY:-66.3,scaleX:1,scaleY:1,rotation:-113.3,x:242.7,y:-106.8},3).to({regX:1.6,scaleX:1,scaleY:1,rotation:-136.8,x:252.3,y:-145.8},1).to({regX:1.7,regY:-66.2,scaleX:1,scaleY:1,rotation:-56.7,x:221.4,y:-49.9},3).to({scaleX:1,scaleY:1,rotation:-32.3,x:153.4,y:35.4},3).to({regY:-66.3,scaleX:1,scaleY:1,rotation:0,x:21.1,y:99},4).to({startPosition:0},1).to({regY:-66.2,rotation:-40.5,x:93,y:78.9},8).to({_off:true,regX:-48,regY:-42,rotation:0,x:111,y:76},1).wait(41).to({_off:false,regX:1.7,regY:-66.2,rotation:-25.2,x:110.6,y:69},1).to({regY:-66.3,rotation:0,x:21.1,y:99},5).to({startPosition:0},1).to({scaleX:1,scaleY:1,rotation:-15.2,x:95.9,y:72.9},4).to({_off:true,regX:-53.4,regY:-38.1,scaleX:1,scaleY:1,rotation:15.7,x:114.6,y:66.9},1).wait(22).to({_off:false,regX:1.7,regY:-66.3,scaleX:1,scaleY:1,rotation:-15.2,x:120.4,y:67.9},1).to({scaleX:1,scaleY:1,rotation:0,x:21.1,y:99},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},1).to({regX:-53.3,regY:-38.1,x:201,y:0},11).to({scaleX:1,scaleY:1,rotation:8.3,x:215.1,y:-9.7},5).to({regX:-53.4,scaleX:1,scaleY:1,rotation:5.9,x:201.6,y:-3.2},10).to({x:200.6},10).to({scaleX:1,scaleY:1,rotation:15.7,x:124.6,y:58.9},5).to({_off:true,regX:1.7,regY:-66.2,scaleX:1,scaleY:1,rotation:-25.2,x:110.6,y:69},1).wait(10).to({_off:false,regX:-53.4,regY:-38.1,scaleX:1,scaleY:1,rotation:15.7,x:114.6,y:66.9},1).to({regX:-53.3,rotation:14.2,x:165.3,y:36.2},3).to({regX:-53.4,scaleX:1,scaleY:1,rotation:19.5,x:151.8,y:47.5},12).to({regX:-53.3,regY:-38.3,scaleX:1,scaleY:1,rotation:20,x:135.4,y:62.4},7).to({_off:true,regX:1.7,regY:-66.3,rotation:-15.2,x:120.4,y:67.9},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.1,-257.8,180.9,525.8);


(lib.face_teengirl_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.hair_front_teengirl();
	this.instance.setTransform(-112.1,-132.4);

	// Layer 1
	this.eyebrows = new lib.eyebrows_teengirl_2();
	this.eyebrows.setTransform(28.4,-19,1,1,0,0,0,-3,1);

	this.eyes = new lib.eyes_teengirl();
	this.eyes.setTransform(33,25.4);

	this.mouth = new lib.mouth_teengirl();
	this.mouth.setTransform(23,96.4);

	this.instance_1 = new lib.face_teengirl();
	this.instance_1.setTransform(-120.6,-131.1);

	this.instance_2 = new lib.hair_back_teengirl();
	this.instance_2.setTransform(-146.5,-144.9);

	this.addChild(this.instance_2,this.instance_1,this.mouth,this.eyes,this.eyebrows,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-146.5,-144.9,293,289.9);


(lib.mum_head = function() {
	this.initialize();

	// hairfront
	this.instance = new lib.hairfront_mum_1();
	this.instance.setTransform(34.3,-95.4,1,1,-0.5);

	// eyebrows
	this.eyebrows = new lib.eyebrows_teengirl_2();
	this.eyebrows.setTransform(45.2,-55.8,1,1,0,0,0,-3,1);

	// eyes
	this.eyes = new lib.eyes_mum();
	this.eyes.setTransform(40.4,-21.4,1,1,-0.5);

	// mouth
	this.mouth = new lib.mouth_teengirl();
	this.mouth.setTransform(40.8,69,1,1,-0.5);

	// face
	this.instance_1 = new lib.mum_face();
	this.instance_1.setTransform(4,-9.1,1,1,-0.5);

	this.addChild(this.instance_1,this.mouth,this.eyes,this.eyebrows,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.6,-191.5,286.2,314.9);


(lib.head_boy_1 = function() {
	this.initialize();

	// eyebrows
	this.eyebrows = new lib.eyebrows_boy_1();
	this.eyebrows.setTransform(21,-142);

	// eyes
	this.eyes = new lib.eyes_blink_1();
	this.eyes.setTransform(23.2,-111.2,1,1,0,0,0,-3,-0.5);

	// mouth
	this.mouth = new lib.mouth_boy();
	this.mouth.setTransform(15,-45.5);

	// head
	this.instance = new lib.head_boy();
	this.instance.setTransform(-124,-270);

	this.addChild(this.instance,this.mouth,this.eyes,this.eyebrows);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124,-270,248,270);


(lib.mumgown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"comp":0,slow_nod:1,quick_nod:20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		thist.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(1));

	// head
	this.head = new lib.mum_head();
	this.head.setTransform(1,-673,1,1,0,0,0,-19.2,79.4);

	this.timeline.addTween(cjs.Tween.get(this.head).to({regX:-19.3,rotation:6.2,x:0.9},9).to({regX:-19.2,rotation:0,x:1},10).wait(1).to({regX:-19.3,rotation:6.2,x:0.9},4).to({regX:-19.2,rotation:0,x:1},5).wait(1));

	// gown
	this.instance = new lib.gown_mum();
	this.instance.setTransform(-233.5,-617);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// body
	this.instance_1 = new lib.body_mum_1();
	this.instance_1.setTransform(-5.7,162.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// neck
	this.instance_2 = new lib.neck_mum_1();
	this.instance_2.setTransform(1.7,-635.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// hair
	this.instance_3 = new lib.hairback_mum_1();
	this.instance_3.setTransform(23,-837,1,1,0,0,0,25.9,-72.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:26,rotation:5.7,x:41,y:-835},9).to({regX:25.9,rotation:0,x:23,y:-837},10).wait(1).to({regX:26,rotation:5.7,x:41,y:-835},4).to({regX:25.9,rotation:0,x:23,y:-837},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.5,-943.9,421.3,1889.2);


(lib.mum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"comp":0,"slow_nod":1,"quick_nod":20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(1));

	// head
	this.head = new lib.mum_head();
	this.head.setTransform(1,-673,1,1,0,0,0,-19.2,79.4);

	this.timeline.addTween(cjs.Tween.get(this.head).to({regX:-19.3,rotation:6.2,x:0.9},9).to({regX:-19.2,rotation:0,x:1},10).wait(1).to({regX:-19.3,rotation:6.2,x:0.9},4).to({regX:-19.2,rotation:0,x:1},5).wait(1));

	// body
	this.instance = new lib.body_mum_1();
	this.instance.setTransform(-5.7,162.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// neck
	this.instance_1 = new lib.neck_mum_1();
	this.instance_1.setTransform(1.7,-635.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// hair
	this.instance_2 = new lib.hairback_mum_1();
	this.instance_2.setTransform(23,-837,1,1,0,0,0,25.9,-72.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:26,rotation:5.7,x:41,y:-835},9).to({regX:25.9,rotation:0,x:23,y:-837},10).wait(1).to({regX:26,rotation:5.7,x:41,y:-835},4).to({regX:25.9,rotation:0,x:23,y:-837},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-943.9,376.6,1889.2);


(lib.head_teengirlgown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"comp":0,"quick_nod":1,"slow_nod":20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(40).call(this.frame_59).wait(1));

	// hair_front
	this.head = new lib.face_teengirl_1();
	this.head.setTransform(28,67.1,1,1,0,0,0,-20.7,115.1);

	this.timeline.addTween(cjs.Tween.get(this.head).to({rotation:6.7},10,cjs.Ease.get(1)).to({rotation:0},9,cjs.Ease.get(1)).wait(1).to({rotation:6.7},19,cjs.Ease.get(1)).to({rotation:0},20,cjs.Ease.get(1)).wait(1));

	// torso
	this.instance = new lib.torso_teengirlgown();
	this.instance.setTransform(-137.5,126.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// neck
	this.instance_1 = new lib.neck_teengirl();
	this.instance_1.setTransform(-18.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// ponytail
	this.instance_2 = new lib.hair_ponytail_teengirl("synched",0);
	this.instance_2.setTransform(-56.9,-35,1,1,0,0,0,49,-116.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:49.1,regY:-116.7,rotation:17.5,x:-42.5,y:-49.6},10).to({regX:49,regY:-116.6,rotation:0,x:-56.9,y:-35},9,cjs.Ease.get(0.99)).to({startPosition:0},1).to({regX:49.1,regY:-116.7,rotation:13.3,x:-42.6,y:-49.6},15).to({regY:-116.6,rotation:12.8},4,cjs.Ease.get(0.99)).to({regX:49,rotation:0,x:-56.9,y:-35},20,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.9,-193,388.2,1096.6);


(lib.head_teengirl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"comp":0,head_nod_quick_teengirl:1,head_nod_slow_teengirl:20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(40).call(this.frame_59).wait(1));

	// head
	this.head = new lib.face_teengirl_1();
	this.head.setTransform(28,67.1,1,1,0,0,0,-20.7,115.1);

	this.timeline.addTween(cjs.Tween.get(this.head).to({rotation:1.3,y:67},1,cjs.Ease.get(1)).to({rotation:6.7,y:67.1},9).to({rotation:0},9,cjs.Ease.get(1)).wait(1).to({rotation:6.7},19,cjs.Ease.get(1)).to({rotation:0},20,cjs.Ease.get(1)).wait(1));

	// torso
	this.instance = new lib.torso_teengirl();
	this.instance.setTransform(-98,120.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// neck
	this.instance_1 = new lib.neck_teengirl();
	this.instance_1.setTransform(-18.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// ponytail
	this.instance_2 = new lib.hair_ponytail_teengirl("synched",0);
	this.instance_2.setTransform(-56.9,-35,1,1,0,0,0,49,-116.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:49.1,regY:-116.7,rotation:17.5,x:-42.5,y:-49.6},10).to({regX:49,regY:-116.6,rotation:0,x:-56.9,y:-35},9,cjs.Ease.get(0.99)).to({startPosition:0},1).to({regX:49.1,regY:-116.7,rotation:13.3,x:-42.6,y:-49.6},15).to({regY:-116.6,rotation:12.8},4,cjs.Ease.get(0.99)).to({regX:49,rotation:0,x:-56.9,y:-35},20,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.9,-193,388.2,732.7);


(lib.head_teenboy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"comp":0,"slow_nod":1,"quick_nod":19});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(11).call(this.frame_29).wait(1));

	// eyebrows
	this.eyebrows = new lib.eyebrows_raise_teenboy();
	this.eyebrows.setTransform(12,-17);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:5.7,x:24.3,y:-10.7},9).to({rotation:0,x:12,y:-17},9).wait(1).to({rotation:5.7,x:24.3,y:-10.7},5).to({rotation:0,x:12,y:-17},5).wait(1));

	// eyes
	this.eyes = new lib.eyes_teenboy_1();
	this.eyes.setTransform(20.5,15);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:5.7,x:29.5,y:21.9},9).to({rotation:0,x:20.5,y:15},9).wait(1).to({rotation:5.7,x:29.5,y:21.9},5).to({rotation:0,x:20.5,y:15},5).wait(1));

	// mouth
	this.mouth = new lib.mouth_teenboy();
	this.mouth.setTransform(10,96);

	this.timeline.addTween(cjs.Tween.get(this.mouth).to({rotation:5.7,x:11,y:101.5},9).to({rotation:0,x:10,y:96},9).wait(1).to({rotation:5.7,x:11,y:101.5},5).to({rotation:0,x:10,y:96},5).wait(1));

	// head
	this.instance = new lib.face_teenboy_1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.7,x:10.6,y:5},9).to({rotation:0,x:0,y:0},9).to({startPosition:0},1).to({rotation:5.7,x:10.6,y:5},5).to({rotation:0,x:0,y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-151,296,302);


(lib.head_girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"comp":0,"slow_nod":1,"quick_nod":20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.gotoAndStop("comp");
	}
	this.frame_29 = function() {
		this.gotoAndStop("comp");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(1));

	// eyebrows
	this.eyebrows = new lib.eyebrows_girl_2();
	this.eyebrows.setTransform(41.9,-53.7);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:5.4,x:53.8,y:-47.6},10).to({rotation:0,x:41.9,y:-53.7},9).wait(1).to({rotation:5.4,x:53.8,y:-47.6},5).to({rotation:0,x:41.9,y:-53.7},4).wait(1));

	// eyes
	this.eyes = new lib.eyes_blink_1();
	this.eyes.setTransform(37.2,-21.2,1,1,0,0,0,-3,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:5.4,x:46,y:-15.7},10).to({rotation:0,x:37.2,y:-21.2},9).wait(1).to({rotation:5.4,x:46,y:-15.7},5).to({rotation:0,x:37.2,y:-21.2},4).wait(1));

	// mouth
	this.mouth = new lib.mouth_girl();
	this.mouth.setTransform(29.4,48.3);

	this.timeline.addTween(cjs.Tween.get(this.mouth).to({rotation:5.4,x:31.7,y:52.8},10).to({rotation:0,x:29.4,y:48.3},9).wait(1).to({rotation:5.4,x:31.7,y:52.8},5).to({rotation:0,x:29.4,y:48.3},4).wait(1));

	// face
	this.instance = new lib.face_girl_1();
	this.instance.setTransform(-2.8,84.6,1,1,0,0,0,-12,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-10.2,rotation:5.4,x:-3.8,y:85.9},10).to({regY:-10.3,rotation:0,x:-2.8,y:84.6},9).wait(1).to({regY:-10.2,rotation:5.4,x:-3.8,y:85.9},5).to({regY:-10.3,rotation:0,x:-2.8,y:84.6},4).wait(1));

	// neck
	this.instance_1 = new lib.neck_girl_1();
	this.instance_1.setTransform(2.2,100.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// hair
	this.instance_2 = new lib.hair_back_girl();
	this.instance_2.setTransform(0.6,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:5.4,x:9.2,y:-20.7,mode:"synched",startPosition:0},10).to({rotation:0,x:0,y:-22.7},9).to({startPosition:0},1).to({rotation:5.4,x:9.2,y:-20.7},5).to({rotation:0,x:0,y:-22.7},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.4,-162.5,256,326.4);


(lib.boygown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"comp":0,"slow_nod":1,"quick_nod":20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.gotoAndStop("comp");
	}
	this.frame_29 = function() {
		this.gotoAndStop("comp");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(1));

	// boy_head
	this.head = new lib.head_boy_1();
	this.head.setTransform(194,583.9,1,1,0,0,0,0,-135);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1).to({regX:-12,regY:-11.9,x:182,y:707},0).to({rotation:1.5},2).to({rotation:6.5},6).to({rotation:0},10).wait(1).to({rotation:6.5},4).to({rotation:0},5).wait(1));

	// arm_front
	this.instance = new lib.armfront_boygown();
	this.instance.setTransform(74.3,1040.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// torso
	this.instance_1 = new lib.torso_boygown();
	this.instance_1.setTransform(40.3,672.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// legs
	this.instance_2 = new lib.legs_boygown();
	this.instance_2.setTransform(23.8,1065.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// arm_back
	this.backarm = new lib.arm_back_boygown();
	this.backarm.setTransform(268,804,1,1,0,0,0,-18,-217.8);

	this.timeline.addTween(cjs.Tween.get(this.backarm).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.3,448.9,378.5,1312.3);


(lib.boy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"comp":0,"slow_nod":1,"quick_nod":20});

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
	this.frame_19 = function() {
		this.gotoAndStop("comp");
	}
	this.frame_29 = function() {
		this.gotoAndStop("comp");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(1));

	// boy_head
	this.head = new lib.head_boy_1();
	this.head.setTransform(194,583.9,1,1,0,0,0,0,-135);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1).to({regX:-12,regY:-11.9,x:182,y:707},0).to({rotation:1.5},2).to({rotation:6.5},6).to({rotation:0},10).wait(1).to({rotation:6.5},4).to({rotation:0},5).wait(1));


	// arm_front
	this.arm_front = new lib.frontarm_boy();
	this.arm_front.setTransform(70.1,1033.4);

	this.timeline.addTween(cjs.Tween.get(this.arm_front).wait(30));


	// hand
	this.hand = new lib.hand_boy();
	this.hand.setTransform(70.1,1033.4);
	this.timeline.addTween(cjs.Tween.get(this.hand).wait(30));


	// torso
	this.instance = new lib.torso_boy();
	this.instance.setTransform(50.1,675.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// legs
	this.instance_1 = new lib.legs_boy();
	this.instance_1.setTransform(-11.6,1053.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// arm_back
	this.backarm = new lib.arm_back_boy();
	this.backarm.setTransform(300,1014.8);

	this.timeline.addTween(cjs.Tween.get(this.backarm).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,448.9,419,1323.2);


(lib.teengirlgown = function() {
	this.initialize();

	// armfront
	this.instance = new lib.armfront_teengirlgown();
	this.instance.setTransform(-74.2,-169.3);

	// torso
	this.torso = new lib.head_teengirlgown();
	this.torso.setTransform(0,-324.3,1,1,0,0,0,1.1,355.3);

	// legs
	this.instance_1 = new lib.legs_teengirlgown();
	this.instance_1.setTransform(-150.4,-197.3);

	// armback
	this.backarm = new lib.arm_back_teengirlgown();
	this.backarm.setTransform(134.5,-182.8,1,1,-2.5);

	this.addChild(this.backarm,this.instance_1,this.torso,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-194,-872.6,421.7,1745.3);


(lib.teengirl = function() {
	this.initialize();


	// arm front
	this.hand = new lib.hand_teengirl();
	this.hand.setTransform(139.7,714.6);

	// arm front
	this.instance = new lib.arm_front_teengirl();
	this.instance.setTransform(139.7,714.6);

	// head
	this.torso = new lib.head_teengirl();
	this.torso.setTransform(184.8,194.5);

	// legs
	this.instance_1 = new lib.legs_teengirl();
	this.instance_1.setTransform(36,693.6);

	// arm back
	this.backarm = new lib.arm_back_teengirl();
	this.backarm.setTransform(310.5,704.7);

	this.addChild(this.backarm,this.instance_1,this.torso,this.hand,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.1,1.5,398.6,1767.1);


(lib.teenboygown = function() {
	this.initialize();

	// armfront
	this.instance = new lib.armfront_teenboygown();
	this.instance.setTransform(-193.1,-187);

	// head
	this.head = new lib.head_teenboy();
	this.head.setTransform(2.5,-741);

	// torso
	this.instance_1 = new lib.torso_teenboygown();
	this.instance_1.setTransform(-231.5,-594);

	this.instance_2 = new lib.neck_teenboygown();
	this.instance_2.setTransform(-91,-663);

	// legs
	this.instance_3 = new lib.legs_teenboygown();
	this.instance_3.setTransform(-291.5,60);

	// armback
	this.backarm = new lib.arm_back_teenboygown();
	this.backarm.setTransform(144.6,-191.6);

	this.addChild(this.backarm,this.instance_3,this.instance_2,this.instance_1,this.head,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-291.5,-892,583,1784);


(lib.teenboy = function() {
	this.initialize();


	// labels
	this.hand = new lib.hand_teenboy();
	this.hand.setTransform(-155.7,-195.2);


	// labels
	this.instance = new lib.arm_front_teenboy();
	this.instance.setTransform(-155.7,-195.2);

	this.head = new lib.head_teenboy();
	this.head.setTransform(23.5,-746.7);

	this.instance_1 = new lib.torso_teenboy();
	this.instance_1.setTransform(-200,-683.2);

	// armback
	this.backarm = new lib.arm_back_teenboy();
	this.backarm.setTransform(167.3,-209.1);

	// legs
	this.instance_2 = new lib.legs_teenboy();
	this.instance_2.setTransform(-288,-126.2);

	this.addChild(this.instance_2,this.backarm,this.instance_1,this.head,this.hand,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288,-897.7,610,1794.5);


(lib.girlgown = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.armfront_girlgown();
	this.instance.setTransform(-80.3,-70.6);

	this.instance_1 = new lib.torso_girlgown();
	this.instance_1.setTransform(-135.5,-364.4);

	this.head = new lib.head_girl();
	this.head.setTransform(-0.7,-476.9);

	this.backarm = new lib.arm_back_girlgown();
	this.backarm.setTransform(102.3,-85.2);

	this.instance_2 = new lib.legs_girlgown();
	this.instance_2.setTransform(-158.9,-56.1);

	this.addChild(this.instance_2,this.backarm,this.head,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-171.1,-639.4,342.3,1279.3);


(lib.girl = function() {
	this.initialize();


	// front_hand
	this.hand = new lib.hand_girl();
	this.hand.setTransform(107.2,1040.1);


	// front_arm
	this.instance = new lib.arm_front_girl();
	this.instance.setTransform(107.2,1040.1);

	// torso
	this.instance_1 = new lib.torso_girl();
	this.instance_1.setTransform(68,745.2);

	// head
	this.head = new lib.head_girl();
	this.head.setTransform(186.8,633.7);

	// legs
	this.instance_2 = new lib.legs_girl_1();
	this.instance_2.setTransform(199,1411.5);

	// arm_back
	this.backarm = new lib.arm_back_girl();
	this.backarm.setTransform(289.8,1025.5);

	this.addChild(this.backarm,this.instance_2,this.head,this.instance_1,this.instance,this.hand);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(29,471.2,409.2,1295.8);


// stage content:
(lib.radiology_characters = function() {
	this.initialize();

	// boy
	this.boy = new lib.boy();
	this.boy.setTransform(405,1274.9,1,1,0,0,0,302.3,1113.8);

	// boygown
	this.boygown = new lib.boygown();
	this.boygown.setTransform(405,1274.9,1,1,0,0,0,302.3,1113.8);

	// girl
	this.girl = new lib.girl();
	this.girl.setTransform(404,1277.9,1,1,0,0,0,313.2,1118.9);

	// girlgown
	this.girlgown = new lib.girlgown();
	this.girlgown.setTransform(277.9,1269.7);

	// teenboygown
	this.teenboygown = new lib.teenboygown();
	this.teenboygown.setTransform(324.5,1046);

	// teenboy
	this.teenboy = new lib.teenboy();
	this.teenboy.setTransform(304,1050.8);

	// teengirlgown
	this.teengirlgown = new lib.teengirlgown();
	this.teengirlgown.setTransform(271,1035.4);

	// teengirl
	this.teengirl = new lib.teengirl();
	this.teengirl.setTransform(273,1043.1,1,1,0,0,0,190.5,884.3);

	// mumgown
	this.mumgown = new lib.mumgown();
	this.mumgown.setTransform(244.9,980.8);

	// mum
	this.mum = new lib.mum();
	this.mum.setTransform(244.9,980.8,0.953,0.953);

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#69C0FF").s().p("EhQwCgPMAAAlAdMChhAAAMAAAFAdg");
	this.shape.setTransform(517,1025.4);

	this.addChild(this.shape,this.mum,this.mumgown,this.teengirl,this.teengirlgown,this.teenboy,this.teenboygown,this.girlgown,this.girl,this.boygown,this.boy);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(500,999.9,1033.9,2051.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;