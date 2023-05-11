(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.Untitled1 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


// symbols:
(lib.redsqaure = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AmFmnIMLAAIAANPIsLAAg");
	this.shape.setTransform(4,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AmFGoIAAtPIMLAAIAANPg");
	this.shape_1.setTransform(4,3.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36,-40,80,87);


(lib.bluecircle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AHbnqQB0CdAADOQAAD/i1C2Qi2C1j/AAQkBAAi1i1QhQhQgthf");
	this.shape.setTransform(12.8,38.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000CC").s().p("Am1G2QgkgkgdgnQh1ieABjNQAAj/C1i2QC2i2D/ABQEAgBC2C2QBQBQAtBfQA4B4AACOQAAEBi1C1Qi2C1kAABQj/gBi2i1g");
	this.shape_1.setTransform(4,16);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58,-46,131,135);


(lib.ani2 = function() {
	this.initialize();

	// Layer 1
	this.rs1 = new lib.redsqaure();
	this.rs1.setTransform(-6,8.1,1,1,0,0,0,4,3.5);

	this.addChild(this.rs1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-34.9,79,86);


(lib.ani1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.bluecircle();
	this.instance.setTransform(65.3,67.3,1,1,0,0,0,7.3,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:380.3,y:-15.7},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.5,134.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;