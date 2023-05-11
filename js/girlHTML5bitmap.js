(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 1500,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"img/Group.png", id:"Group"},
		{src:"img/Group_1.png", id:"Group_1"},
		{src:"img/Group_2.png", id:"Group_2"},
		{src:"img/Group_3.png", id:"Group_3"},
		{src:"img/Path.png", id:"Path"},
		{src:"img/Bitmap1.png", id:"Bitmap1"},
		{src:"img/Bitmap10.png", id:"Bitmap10"},
		{src:"img/Bitmap11.png", id:"Bitmap11"},
		{src:"img/Bitmap12.png", id:"Bitmap12"},
		{src:"img/Bitmap2.png", id:"Bitmap2"},
		{src:"img/Bitmap3.png", id:"Bitmap3"},
		{src:"img/Bitmap4.png", id:"Bitmap4"},
		{src:"img/Bitmap5.png", id:"Bitmap5"},
		{src:"img/Bitmap6.png", id:"Bitmap6"},
		{src:"img/Bitmap7.png", id:"Bitmap7"},
		{src:"img/Bitmap8.png", id:"Bitmap8"},
		{src:"img/Bitmap9.png", id:"Bitmap9"},
		{src:"img/eye_open_left.png", id:"eye_open_left"},
		{src:"img/eye_right_open.png", id:"eye_right_open"},
		{src:"img/eyeball.png", id:"eyeball"},
		{src:"img/RightEye.png", id:"RightEye"},
		{src:"img/RightEye_1.png", id:"RightEye_1"}
	]
};



// symbols:



(lib.Group = function() {
	this.initialize(img.Group);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,43);


(lib.Group_1 = function() {
	this.initialize(img.Group_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,43);


(lib.Group_2 = function() {
	this.initialize(img.Group_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,36);


(lib.Group_3 = function() {
	this.initialize(img.Group_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,36);


(lib.Path = function() {
	this.initialize(img.Path);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8,8);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,246);


(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,274,147);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,156);


(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,172);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,279);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,219);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,346);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,123);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,171);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,238);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,168);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,711);


(lib.eye_open_left = function() {
	this.initialize(img.eye_open_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,43);


(lib.eye_right_open = function() {
	this.initialize(img.eye_right_open);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,47);


(lib.eyeball = function() {
	this.initialize(img.eyeball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,36);


(lib.RightEye = function() {
	this.initialize(img.RightEye);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,47);


(lib.RightEye_1 = function() {
	this.initialize(img.RightEye_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,47);


(lib.torso = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-121.6,-173.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-121.6,-173.1,243,346);


(lib.skirt = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(-137.2,-73.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.2,-73.5,274,147);


(lib.rightupperarm = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-24.1,-85.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.1,-85.4,48,171);


(lib.rightlowerarm = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-39.9,-119);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.9,-119,80,238);


(lib.righthand = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.setTransform(-35.5,-16.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.5,-16.2,107,168);


(lib.neck = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-44.4,-123.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.4,-123.4,89,123);


(lib.Legs = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(-169.4,-355);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-169.4,-355,339,711);


(lib.leftupperarm = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(-30.3,-85.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.3,-85.7,60,172);


(lib.leftlowerarm = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-36.9,-109.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.9,-109.5,74,219);


(lib.lefthand = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap11();
	this.instance.setTransform(-36.6,-77.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.6,-77.7,73,156);


(lib.hairback = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,256,279);


(lib.facesmile = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-110.2,-246.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.2,-246.3,220,246);


// stage content:
(lib.girlHTML5test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// upperarm-right
	this.instance = new lib.rightupperarm();
	this.instance.setTransform(228.4,427.9,1,1,0,0,0,-1.8,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

	// lowerarm-right
	this.instance_1 = new lib.rightlowerarm();
	this.instance_1.setTransform(230.1,573.1,1,1,-2.8,0,0,-5.4,-86.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,rotation:-3,x:240,y:659.3},0).wait(15));

	// hand-right
	this.instance_2 = new lib.righthand();
	this.instance_2.setTransform(249.3,702.7,1,1,4.8,0,0,-17.8,-63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:17.9,regY:67.8,rotation:4.9,x:273.6,y:836.4},0).wait(15));

	// torso
	this.instance_3 = new lib.torso();
	this.instance_3.setTransform(344.1,536);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16));

	// skirt
	this.instance_4 = new lib.skirt();
	this.instance_4.setTransform(351.3,747.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16));

	// face smile
	this.instance_5 = new lib.facesmile();
	this.instance_5.setTransform(350,346.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-0.2,regY:-123.3,rotation:0.4,x:350.7,y:222.9},0).wait(1).to({rotation:0.8,x:351.7,y:223},0).wait(1).to({rotation:1.2,x:352.7,y:223.1},0).wait(1).to({rotation:1.6,x:353.6,y:223.2},0).wait(1).to({rotation:2,x:354.6,y:223.3},0).wait(1).to({rotation:2.3,x:355.5,y:223.4},0).wait(1).to({rotation:2.7,x:356.5,y:223.5},0).wait(1).to({rotation:2.2,x:355.1,y:223.4},0).wait(1).to({rotation:1.6,x:353.8,y:223.2},0).wait(1).to({rotation:1.1,x:352.4,y:223.1},0).wait(1).to({rotation:0.5,x:351.1,y:223},0).wait(1).to({rotation:0,x:349.8,y:222.9},0).wait(4));

	// neck
	this.instance_6 = new lib.neck();
	this.instance_6.setTransform(337.6,354.2,1,1,0,0,0,0,-61.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16));

	// legs
	this.instance_7 = new lib.Legs();
	this.instance_7.setTransform(361.5,1023);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16));

	// upperarm-left
	this.instance_8 = new lib.leftupperarm();
	this.instance_8.setTransform(422,422.5,1,1,-3.2,0,0,-5.1,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16));

	// lowerarm-left
	this.instance_9 = new lib.leftlowerarm();
	this.instance_9.setTransform(446.1,626.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16));

	// hand-left
	this.instance_10 = new lib.lefthand();
	this.instance_10.setTransform(457.6,800.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16));

	// hair-back
	this.instance_11 = new lib.hairback();
	this.instance_11.setTransform(339.5,364.4,1,1,0,0,0,127.8,279.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:128,regY:139.5,rotation:0.4,x:340.6,y:224.8},0).wait(1).to({rotation:0.8,x:341.6},0).wait(1).to({rotation:1.2,x:342.5},0).wait(1).to({rotation:1.6,x:343.5,y:224.9},0).wait(1).to({rotation:2,x:344.4,y:224.8},0).wait(1).to({rotation:2.3,x:345.4,y:224.9},0).wait(1).to({rotation:2.7,x:346.3,y:225},0).wait(1).to({rotation:2.2,x:345,y:224.9},0).wait(1).to({rotation:1.6,x:343.7,y:224.8},0).wait(1).to({rotation:1.1,x:342.3},0).wait(1).to({rotation:0.5,x:341},0).wait(1).to({rotation:0,x:339.7},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(592,835.3,339,1293.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;