(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1920,
	height: 2000,
	fps: 24,
	manifest: [
		{src:"img/Group.png", id:"Group"},
		{src:"img/Group_1.png", id:"Group_1"},
		{src:"img/Group_2.png", id:"Group_2"},
		{src:"img/Group_3.png", id:"Group_3"},
		{src:"img/Path.png", id:"Path"},
		{src:"img/eye_open_left.png", id:"eye_open_left"},
		{src:"img/eye_right_open.png", id:"eye_right_open"},
		{src:"img/eyeball.png", id:"eyeball"},
		{src:"img/RightEye.png", id:"RightEye"},
		{src:"img/RightEye_1.png", id:"RightEye_1"},
		{src:"img/younggirl.png", id:"younggirl"}
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


(lib.younggirl = function() {
	this.initialize(img.younggirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,548,1297);


(lib.ClipGroup = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgtNHQgUgJghgaQgygqgLhRQgGgoAEhoQARmgAChvQAEkqgZjkQgIg3gBgcQgEgvAJgiQAVhMBug1QA2gbAzgLQAfAWAWA6QAMAeASBFQAOA3ACBAQACA7gDB+QgCB5ADBAQAOFhgPFoQgDBFgFApQgHA8gPAvQgRA1g5AcQghAQgeAAQgXAAgWgJg");
	mask.setTransform(21.5,84.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC72A5").s().p("AgrEJQARi+AHhbQADgoAGjXQAEieAPhgIAEgUQAEgEAGABQAFABAEAFQAFAGACANQAkDpgHDgQgGDKgsD6QgKA8gJAcQgXA6gsARIAZkcg");
	this.shape.setTransform(35.6,112.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0255F").s().p("AghKkIgIgxQAIlUgEkAQgElAgZkSQgEgvAAgZQABgoAJgfQALgmAbgbQAXgaAhgFQgqBOANB5QAGA3AXBwQAWBuAGA6QAMB2gECuIgGEnQABC8gEBxIgBBWQgCA0gKAiIgEALQg6hBgTg+g");
	this.shape_1.setTransform(7.1,84.9);

	this.shape.mask = this.shape_1.mask = mask;

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4,4.6,35,162.9);


(lib.upperarmleft = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D55795").s().p("AAGNPQgTgIgigYQg0gmgQhQQgIgngChnQgFmVgFhzQgMkmgljgIgPhdQgGg1AHgpQAKg4ALgeQASgvAfgYQAegXApgCQAngDAiAQQA1AZAbA2QAMAZAXBTQARA+AKBcQAJBoAFAyQAVC5AGD9QADCTABEmQABBDgDApQgEA8gMAvQgPA1g2AfQgjAUgjAAQgUAAgUgHg");
	this.shape.setTransform(-3.9,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhANTQhCgfgbgyQgYgrgHg9QgFglAAhKQgCorg8ojQgFg1gBgUQgCgqAFggQAOhbBEg1QBGg2BZATQBMARAzA7QAcAgAVAsQAVAsAIAqQAqDZAME7QAHCwAKFlQAFBvgBAhQgDBTgaA5QgfBGgkAnQgxA1g9ADIgKAAQg1AAg6gcg");
	this.shape_1.setTransform(-2.2,-1.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.5,-89.1,52.7,180.3);


(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AhNmgQgjnXgjlXIBOEwQBlH7BENMQAiGmAOFCIiyA+QAWq7hFu0g");
	this.shape.setTransform(14.8,123.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.7,246.3);


(lib.ClipGroup_1 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Am+YTQiBgghWgmQhQgigHgXQgFgRACgWQACgOAGgaQA6j9AskEQANhPAWixIASiiICIDkQgahUg/j7Qg1jTgth4Qg2iUhai7IiNkmIgthmQgTgoghg6IgOgbQg2hpgPhLQgUhqAxhHQAqg9BignIBTgeQAygSAdgPQBVgrBchDQA1goBlhTIBGA0QBYA8BUArQA6AdB8AoQA8AUAyAOICzDzIAIj7IApgqQArg2AQg6QgJAjDIBkICTBHQBIAkALALQApAsATBVQAMA4gBBiQgDBsAHAtIA5GeIAyFcQAdDLANCQQA8KJAaFrIABDVQhPAgiSAhQkmBDlVAHIg9ABQlLAAkxhLg");
	mask_1.setTransform(111.3,166.5);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0255F").s().p("Al/CwQCeg5DEhXIE6jTQBkBDgBABQkcDSkNA8QhgAVhDAAQgcAAgXgEg");
	this.shape_2.setTransform(38.5,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0255F").s().p("AiJQrIDAwtIAAieImFwlICfBvQB6DQB7EhQD7JAAOGRQgKD7g/gCQgTgBgXgaIgTgZIgPCWQgSDSgQEtg");
	this.shape_3.setTransform(42.4,203.7);

	this.shape_2.mask = this.shape_3.mask = mask_1;

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,3.5,76.8,322.4);


(lib.Path_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.6)").s().p("AhWEQICtogIgYIgg");
	this.shape_1.setTransform(8.7,27.6);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.3,17.5,54.6);


(lib.ClipGroup_2 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("ABCItQh/gMhsg5Qh1g+g/hjQgkg3gCgwQgBgoAagnQAQgYApglIASgTQA4g+AVheQALguAEg9IAFhtQgBg9ADgdQAFgwAZgkQAXggAjgUQAigUAngFQAlgEAwALQAwALAWAXQATASALAfQAGAVAGAmQAVCFgFCJQgDBDAKA9QAMBGAbAzQAUAlAxAvQA6A5AQAWQAOAUgCAiQgBAUgKAlQgUBLgyAsQhDA5h3AAQgaAAgcgDg");
	mask_2.setTransform(41.4,57.5);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC28E").s().p("AkvG5QgThEgDgfQgCgMACgIQACgHAKgOQAlgwAxhMIBRiAIAMh6QABgPAEhYQADg/AHgnQAPhNAygoQAUgQAigNQArgRAvAAQAxABApATQBAAfAZBMQAGAPAWB9QATBtgBBmIAMCCQhNAShxgbQifguAGgNQhkDCilCMQgKAJgHAAIgFgBg");
	this.shape_4.setTransform(32.8,44.2);

	this.shape_4.mask = mask_2;

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.6,1.5,63,87);


(lib.ClipGroup_3 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgiRaQg8mPhumLIgtiiQgZhdgNhFQgjjCAOjuQALivArkBQALg/AKgiQAQg0AagjQAhgsA1gPQA2gQAxAWQAjASAeAvQATAeAXA4QARArAUBcQApC+AQBfQAaCgAACBQAABlgXDYQgXDPADBwQAHFABnEsIAVBAQhJAWgXAEQhMAMg2AEQgZACgXAAQgnAAgigFg");
	mask_3.setTransform(35.9,115.6);

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C0255F").s().p("ABTRwQgikNh+omQg/kTg5jbQgFhkAHh3QAEhNANiNQAKiTAJhHQAPh8AqhXQAOgdA7gnQA6goAdADQgtBigHAeQgcCEgOCFQgMB0gFCjQgGDeAHB1QAJCbAnCxQArDKChLwg");
	this.shape_5.setTransform(20,114.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DC72A5").s().p("AgdI9QgLhugGiyIgJmSQgJllgzjZQgZhtgYglQhOkLBOgKQAcgEAnAhQAlAfARAjQArBJAnCSQBNEkgdFrQgrIZBMGUQAlDLAvBeIhmAXQhqk3gZjog");
	this.shape_6.setTransform(51.6,115.5);

	this.shape_5.mask = this.shape_6.mask = mask_3;

	this.addChild(this.shape_6,this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.6,3.7,62.7,223.8);


(lib.ClipGroup_4 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgdQDQg6l1hllmIgqiVQgXhVgMhAQghizAMjbQAKihAnjtQAKg6AJgfQAPgwAYghQAegoAwgPQAzgPAsAVQAhAQAcAsQARAcAVAzQAQAnATBVQAnCzAOBUQAYCTABB3QAABdgVDGQgUC/ADBoQAHEmBfEVIAUA6QhDAUgWAEQhgAQhIAAQghAAgdgDg");
	mask_4.setTransform(33.2,106.4);

	// Layer 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0255F").s().p("ABOQXQghj4h0n7Qg7j9g1jJQgFhcAGhuQAEhKAMh/QAIiHAIhCQAOhyAmhQQANgbA2gkQA1glAbADQgpBagGAcQgaB5gMB7QgMBsgDCVQgFDMAHBsQAJCPAkCjIC+Nug");
	this.shape_7.setTransform(18.7,105.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DC72A5").s().p("AgZIQQgLhrgPoQQgJlJgvjIQgYhkgWgiQhJj2BIgKQAagDAkAeQAiAcAQAhQApBDAiCGQBJENgaFPQgnHuBHF1QAkC6ArBXIhfAUQhikegXjVg");
	this.shape_8.setTransform(47.6,106.3);

	this.shape_7.mask = this.shape_8.mask = mask_4;

	this.addChild(this.shape_8,this.shape_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.2,3.4,58.1,206.1);


(lib.Path_1_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AARDDQlZkthGkhIBEgsQA3B8B3CmQDrFLFADWIgyAsQifheitiXg");
	this.shape.setTransform(40,44);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79.9,88);


(lib.Path_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AFuMLQldgCkwiRQilhXhTgqQiUhLhtgWQADARAIBIQAHA9AGAcQgsgLhagyQhXgvgEgLQg3ioA3lCIAwkMQAbidAEhpQADhSAKgnQARhBAugYQAngVA4ANQAlAIA5AeQg4BagkBmQgfBXgTBsQA/AFBBAwQBDAxAvBPQBBBtgDBnQgCBqhEApQg2AghKgZQhIgYhAhFQAEBwAPB1QDsAvDNB8QAeASA7AmQA1AhAnASQBWAqByATQBSAOCDAHQD4ANCjgbQDeglCOh0QADA6ALA2QkvCLlVAAIgMAAg");
	this.shape.setTransform(102.4,78);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0,204.4,155.9);


(lib.Path_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("AlTN9QgigKgtgWQgdgOgtgaQgUgLgGgIQgJgLgHgXQhJj6gNkvQgLkTAokbQAFgkAZiCQAThnAEg+QAHhmABgJQAJg7AdguQAPgYAqACQAlABAaASQAgAWAAAdQABAWgVAnQgnBIgUBjQgMA7gMB5QgYDrgGB0QgLDBAPCcQAIBcAbBMIBBCaQBxBKC1AjQFnBGFUjDIgOBqQkpCrlNgiQiogQhsgzIARBMQASBNAHAIIhVgUg");
	this.shape_2.setTransform(62.4,91.4);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,124.8,182.8);


(lib.ClipGroup_1_1 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABDG2QhDgKgrgbQgogYACgVQgejngtk6Qgkj1ABAAQA1AKBLAEQCTAJBsgbIgQGiIgBGuQgRAJgWAHQglANgWAAIgKgBg");
	mask.setTransform(26,48.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFECCC").s().p("AgvHUIgBucIBhgXIgWOrQgTAKgRAFQgPAFgJAAQgOAAAAgMg");
	this.shape.setTransform(44.1,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBD93").s().p("ABGHYIhGggIiFufICkAYQBfOPAIAfQACAJgLAAQgPAAgogQg");
	this.shape_1.setTransform(13.5,48.9);

	this.shape.mask = this.shape_1.mask = mask;

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.8,4.8,38.5,87.8);


(lib.ClipGroup_0 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAfHDQg6AHgvAMIhchvQAkiJgllqQgSi2gaiaQAyAKBHAHQCLANBpgPQgHCKgGCXQgKEqAHA8QAHA9AiB5QARA8AQAxQg9glh4ALg");
	mask.setTransform(25.4,51.3);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFBD93").s().p("AgiGRIgQmyQAAgggom2IB9ASIA4Pdg");
	this.shape.setTransform(9.1,50.5);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.2,3.6,14.1,95.4);


(lib.ClipGroup_5 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AvoewQhSgIhBgOQhNmGgHgwQgijcAWiJQD4mRB+jAQAQgjARiOQAikcAEoUQAFoXBlorQAzkWAxirQF3ArGbAaQM7A1DDhTQAcBbAHC/QAHDEgVCUQg0HIkWLUQiLFoiAEPIgQK/IiFJxQg1AGhTACQimAEiYgWQgkimgzkgIgukAIGGrxIhFsFICYmxIA6giQBGgqA9gsQDDiNAahkQhUBHhBAtQh5BVh+AVQAYipAEg8QACglgdgDIgdAFQghB/g1CvQhqFdhkDvQhjDvjxGsQh5DYhkCnIgpLDQjVI0gHABQgzAPhOAAQg2AAhCgHg");
	mask_5.setTransform(130.2,207.1);

	// Layer 3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8DC736").s().p("Ak4O3QAHizgCigQgBh5gDgDQGzt5CGtrQApkRAHjwQADh3gFhCIBngIIAbKNQiCKlj7J2Qh7E4hkCzIAALVIisL+IhbAYQBjnVAWo0g");
	this.shape_9.setTransform(216.1,207);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8DC736").s().p("AppaMIDcsOIAfqUQGfphEZq0QCMlaA5jgIBbgtQgsIamTL3QjIF8jBEOQgmJ2AAAXQAAAOh9F5Ih+F2g");
	this.shape_10.setTransform(108.6,248.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C6B12").s().p("EgSQAgKIiBugIFPoEIBYjOIBP26IC3wHQDVAyFVAiQKlBCJ2hUIAwCUQmMDlqig6QlPgckChKQh2FnhOGzQhwJ0hJPHIhDBlQhPCEg8CgQi8ICBVJYg");
	this.shape_11.setTransform(129.8,209.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C6B12").s().p("AhZXFIhIgVIivt5IGLrXIg9siICknsICvgfQh8FbgaIXQgNEMAMDGQjxJDgGI4QgCCxAWCgQALBRAMA0QAAAGgPAAQgSAAgmgJg");
	this.shape_12.setTransform(148.9,259.8);

	this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = mask_5;

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.9,9.6,250.7,395.1);


(lib.ClipGroup_6 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AEAL/IgfgJQgSg+gahSQg1ikgphjIgghMQgWg0gMgXQgHgOgcgmQgfgngWgWQAuBpAmB2QAdBSAwCgQg/gpgfgcQgugrgdg3Iggg7QgQgggMgeQgPglgdguQgTgdgjgyQAVBRAfBSIA+CdQACAFAvA0IAuA0IhGgeQg2gggogwQgkgrgeg/QgYgxgbhIIguh+QABAwAIAmQADATAUBLQgRAAgagVQgZgUgHgRQgQg5gbhVIgYhHIAsiNIBMj9QAmiCAah/QAZhSBUgKQBXgMBDBWIAXBBQAGARAWAuQARAkA4BIQA2BGAgAdQApAmBVA+IAQBZQAXBvAhBoQAHAWAbArQAcAuAGATQhHBEhBgkQg1gegZhQQgTg7gthOQgphFgCgGQAMBCAgCbQAeCOANBRQAKA6AiCZQAeCGALBPQgRAOgYAAIgQgCg");
	mask_6.setTransform(48.9,81.2);

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFC28E").s().p("AgEC+IhQmyIBeC5IBKEwg");
	this.shape_13.setTransform(53,118.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFC28E").s().p("ACiKlIiChQIh7ilIhQgtIgjhVIhBj/ICWoaIA8iHICPgyICMB9IAyBkQhzAei3AeQgeBEgfBnQg8DQgGC2IBUDaIA6iNICFEsIB4CCg");
	this.shape_14.setTransform(27.3,67.8);

	this.shape_13.mask = this.shape_14.mask = mask_6;

	this.addChild(this.shape_14,this.shape_13);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.7,4.3,58.9,138.8);


(lib.Path_1_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhtItIgMg3IgBiYIBjkOIAqk7QATjeAthiQAWgxASgFQhNE2gDEDQgBCBAOBDIAZAgIilGmg");
	this.shape_1.setTransform(12.4,61);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.8,122);


(lib.Path_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhgClIgGkuIAtg8IAyE8IBuA4IhyAXg");
	this.shape_3.setTransform(10.4,19.9);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.8,39.7);


(lib.ClipGroup_7 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AhWUHQk7gQj+grQgrhhhHjsIg/jZQgrCUgPCzQgHBaABA8Qhmgog+gpIgpghQjBvwFcr6QBtjvCVi6QBLhdA1gtQE8AZFlBKQH+BpD/CWQA/BcCFC4QBlCZgFBXQgKDMjAC8QhgBbhdA1QAFDpB3FeQA7CvA6CAQg1gMhogtIhdgqQAFBWAmBrQASA1ASAkQj4BunLAAQhtAAh3gGg");
	mask_7.setTransform(121.3,132.1);

	// Layer 3
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AB412B").s().p("AC/RVQj6gJjIgnQgqAGguABQhaABgQgbIgIg7IgJg7QgQh/gliPQgchvgxiVIgWhBQg6gVgdgRQgwgbgugtQgvgwgYgtQhBh5gRhjQgUh4AqhvQAXg+AIgPQAFgKASgYIARgVIAXAAQAZAAALAFQAdhOA2hPQA9hcBahXQBShPBehCQB8hWCKguQCOgwCPADQC5ADDeBdQBoAsBDAzQBWA/AnBQQAXAvALBAQAHApAFBLQAhHegoHbIgPCuQgFBnASBHQALApAXBLQAaBSAKAiQjrB/mmAAQg4AAg7gCg");
	this.shape_15.setTransform(113.3,153.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AB412B").s().p("Aj7RmQjhxUFlrzQBvjsCaitQBOhXA4gnIA7AtQn1JEggOGQgKEaAnEYQATCNAVBUQAVg0BBiQIA8iGIAhAvIgbICg");
	this.shape_16.setTransform(33.8,127.3);

	this.shape_15.mask = this.shape_16.mask = mask_7;

	this.addChild(this.shape_16,this.shape_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.2,2.8,205.5,258.7);


(lib.Path_1_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("AmiLOQhEg+g0g9IglgwIiNjjQiggyg2icQgWhCAVhAIAag1IBLAhIF5v5IDxCgIDQAxQDnA7CBA0QExB7CrCMQBWBGAYAtQhQgwh0g8Qjph4i1g7QjhhJjegrQjEglgFAQQilHvAcGOQAXFBCRD1QBnCvCaB5QBBA0AzAaQkmiNjUjDg");
	this.shape_2.setTransform(94.3,105.4);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,188.6,210.9);


(lib.mouthopensmiling = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8402A").s().p("AlBAeIgbAHQgfAIgRAKQAEgSANgZQAZgxApgnIAvAUIggAeQAqAPBsAOQDWAhFLAGQhPAWiBAJQg8AEg8AAQjEAAjCgvg");
	this.shape.setTransform(0,-6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAsA5QgigCgJgFQgdgHhQgyQgogagigZQBIAVCZABQBNABA/gEQgQAqgMAQQgRAXghAMQgOAFgWAAIgZgCg");
	this.shape_1.setTransform(2.6,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A8402A").s().p("AAzBdQgaAAgPgEQgwghjxiUQBzAhDoAFQB2ACBegEQgCAvgdAiQghAog9AQQguAMguAAIgMAAg");
	this.shape_2.setTransform(-0.9,5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.7,-14.4,79.6,28.8);


(lib.eyerightopen = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.RightEye();
	this.instance.setTransform(-29,-23.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29,-23.1,58,47);


(lib.eyeopenleft = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_1();
	this.instance.setTransform(-25,-21);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-21,51,43);


(lib.Path_2_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AgUCKIirh5QApgDAvgOQBcgcAShSIAUgBQAagCAVgHQAqgOABgFIBLBxQgMAPgQAOQgQAQgwAIQACAfgPAfQgbAzg8AAIgUgCg");
	this.shape.setTransform(22.8,21.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.6,7.3,38.5,28.1);


(lib.Path_1_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9933").s().p("AA7BpQgxg0gggvQgeAIgwABQheAChXgiQAxh+AxhOQASATAnANQBQAbBpgbQAmBDBVBEQBJA4AbADIg7DZQhEgQhghlg");
	this.shape_3.setTransform(7.6,19);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.6,-3.2,56.4,44.4);


(lib.Path_0_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.298)").s().p("AhYiBQgriwgSiLQAaCdCFEpQBICfBEB+IgGCWQiNjLhblzg");
	this.shape_1.setTransform(15.3,46.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,1.9,30.2,89.2);


(lib.Path_5 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("AK2D0QhnhujGh7QmMj0ngg+Ik3j6QAJAECdBKICbBLQCEARCzAvQFhBcDjCPQCzBwB0CFQA7BCAXAsIgUBZQgbBrgrBXg");
	this.shape_4.setTransform(79.6,54.6);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,159.1,109.2);


(lib.upperarmright = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(142,107.6,1,1,0,0,0,21.2,84.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D55795").s().p("AgtNHQgUgJghgaQgygqgLhRQgGgoAEhoQARmgAChvQAEkqgZjkQgIg3gBgcQgEgvAJgiQAVhMBug1QA2gbAzgLQAfAWAWA6QAMAeASBFQAOA3ACBAQACA7gDB+QgCB5ADBAQAOFhgPFoQgDBFgFApQgHA8gPAvQgRA1g5AcQghAQgeAAQgXAAgWgJg");
	this.shape.setTransform(142.3,107.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhYMrQg7gagng2QgagkgJg2QgFgjAAhAQgBmPgBiRQgDkygIjvQgCg+ACgfQAFg0ASgkQAXgyAsgbQAugdA0AHQA8AHAuAvQAcAcAQApQAMAfAJAwQAIAsAQCZQANB6AUBIQATBIAKBfQANCBAGAnQAOBTACBmQABA2gDCDQgCBHgEAlQgGA8gRAtQgYA+gzAnQgvAkg9AHQgOABgNAAQgsAAgsgSg");
	this.shape_1.setTransform(142,104.6);

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(117.9,21.7,48.3,170.8);


(lib.torso = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8FCFF").s().p("AhSBkQgygVgKgtQgKgqAjgpQAjgqA7gPQA5gPAyAWQAxAVAKAtQAKAqgjAqQgjAqg7AOQgYAGgUAAQghAAgdgNg");
	this.shape.setTransform(8.8,-35.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8FCFF").s().p("AAaCBQgzgGgtgqQgugqgKg0QgLg1AegiQAegiA1AGQAzAGAtAqQAtAqALA0QAKA1gdAiQgaAdgqAAIgPgBg");
	this.shape_1.setTransform(12.8,-64.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8FCFF").s().p("AhkBbQgbggALgxQALgvAqgmQAqgmAvgEQAwgEAbAfQAbAggLAxQgLAvgqAmQgqAmguAEIgMAAQgpAAgXgbg");
	this.shape_2.setTransform(62.7,-60.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8FCFF").s().p("AgSBjQg3gMghgmQghgkAIgnQAJgqAsgUQAsgVA1AMQA3ALAhAlQAhAmgIAnQgIAogtAWQgdANggAAQgSAAgSgEg");
	this.shape_3.setTransform(67.2,-32.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8FCFF").s().p("AgTCFQgxgZgcg5Qgcg3AIg3QAJg4AogVQAogVAvAZQAwAZAdA5QAcA3gIA4QgJA3goAVQgTAKgUAAQgXAAgZgOg");
	this.shape_4.setTransform(52.1,-10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8FCFF").s().p("Ag6COQgqgTgMg2QgMg3AZg5QAYg7AvgcQAtgdApATQAqASAMA3QAMA2gYA5QgZA7guAcQgdASgZAAQgRAAgQgHg");
	this.shape_5.setTransform(24,-11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8FCFF").s().p("AhMBtQggguAAg/QAAg/AggtQAggtAsAAQAtAAAgAtQAgAtAAA/QAAA/ggAuQggAtgtAAQgsAAgggtg");
	this.shape_6.setTransform(38.6,-75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFA2CF").s().p("AhYBlQglgqAAg7QAAg6AlgqQAlgqAzAAQA0AAAlAqQAlAqAAA6QAAA7glAqQglAqg0AAQgzAAglgqg");
	this.shape_7.setTransform(38.6,-41);

	this.instance = new lib.Path_1();
	this.instance.setTransform(98.7,32.2,1,1,0,0,0,14.8,123.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3).p("AlkieQA9A8B6BFQDxCKEtAy");
	this.shape_8.setTransform(-20.1,-146);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3).p("AhaBzIBDg7QBJhNAkhj");
	this.shape_9.setTransform(31.9,-142.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3).p("Au6hiQAtAZBVAgQCrA+DNAkQKPB1L3jL");
	this.shape_10.setTransform(14.8,142.7);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(-2.7,-3,1,1,0,0,0,111.2,164.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D55795").s().p("Am+YTQiBgghWgmQhQgigHgXQgFgRACgWQACgOAGgaQA6j9AskEQANhPAWixIASiiICIDkQgahUg/j7Qg1jTgth4Qg2iUhai7IiNkmIgthmQgTgoghg6IgOgbQg2hpgPhLQgUhqAxhHQAqg9BignQBxglAxgaQBVgrBchDQA1goBlhTQAbAWArAeQBYA8BUArQA6AdB8AoQA8AUAyAOICzDzIAIj7IApgqQArg2AQg6QgJAjDIBkICTBHQBIAkALALQApAsATBVQAMA4gBBiQgDBsAHAtIA5GeIAyFcQAdDLANCQQA8KJAaFrIABDVQhPAgiSAhQkmBDlVAHIg9ABQlLAAkxhLg");
	this.shape_11.setTransform(-2.7,-1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ak+aYQjTgfishGQkOhwBCiSQBHk+AxkOQAsjyAqkiQgJgugOg4QgchvgWg0Qk/rrgrhzQhtkoAmh0IDlhhQDohiARgMQBjhFCVh8QAzAxBkA8QDJB6D1BAIBHBqIgFhqIALgHQAPgKAQgSQAzg7Aph5QA5A5CIBOQB+BHBNAZQAlAMAJBKQADBXAIAfICWI8QBwHKAtFHQAvFRAzIbQAxILgLAFQhTAqh3AlQhxAihiARQjTAjieAMQhlAIhrAAQj7AAkjgrg");
	this.shape_12.setTransform(0.1,0);

	this.addChild(this.shape_12,this.shape_11,this.instance_1,this.shape_10,this.shape_9,this.shape_8,this.instance,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-121.5,-173.1,243.3,346.2);


(lib.ClipGroup_8 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AlCJLQk8gpkvhdQjihFhgg1QAmiiBMi+QB0klC3kuQCjA+DHAoQEpA7FDAAQC9AADzgtQB+gXE8hLQCAGFCCIrQnvEPqFAAQjWAAjogeg");
	mask_8.setTransform(130.6,66.3);

	// Layer 3
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E66B51").s().p("AhsinQhIkRgWg2ICBgoQB9D1BZGSQAsDJASCYIimBGQgwlHhhl4g");
	this.shape_17.setTransform(242,55.7);

	this.instance = new lib.Path_2();
	this.instance.setTransform(143.9,104.9,1,1,0,0,0,8.7,27.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CD160C").s().p("AieH3QhVgmhNgjQAhilBHjRQCOmgDBjhIDKA1Qg2Cog8DgQh3G+geEYQgvgJiphKg");
	this.shape_18.setTransform(32.1,58.6);

	this.shape_17.mask = this.instance.mask = this.shape_18.mask = mask_8;

	this.addChild(this.shape_18,this.instance,this.shape_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.2,4.6,252.9,123.5);


(lib.neck = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(-0.5,0.3,1,1,0,0,0,40.1,56.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD6B2").s().p("ABCItQh/gMhsg5Qh1g+g/hjQgkg3gCgwQgBgoAagnQAQgYApglIASgTQA4g+AVheQALguAEg9IAFhtIAChaQAFgwAZgkQAXggAjgUQAigUAngFQAlgEAwALQAwALAWAXQATASALAfQAGAVAGAmQAVCFgFCJQgDBDAKA9QAMBGAbAzQAUAlAxAvQA6A5AQAWQAOAUgCAiQgBAUgKAlQgUBLgyAsQhDA5h3AAQgaAAgcgDg");
	this.shape.setTransform(0.7,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhRJMQgpgOgfgQQhLgkg+g6Qg+g6grhIQgnhCgHg5QgJhKAsgxQAHgJAOgMIAVgTQApgnAihGQAag5ADhSQACgvgBhfQAEhLAOgvQAUhDAsgkQAggaAxgLQAlgJA3gCQBGgDAyAUQA7AXAjA2QATAfALAxQADASAKBEQAHA2gDBvQgCBtAIA3QAPBiA1A+QAKAMAZAYQAYAXALAOQAuA7gEBHQgDBAgqA+QgoA7g+ApQg+AphAAIQglAFgkAAQhbAAhXgdg");

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.4,-61.7,88.8,123.5);


(lib.NEck = function() {
	this.initialize();

	// Layer 1
	this.neck = new lib.neck();
	this.neck.setTransform(0,-61.7);

	this.addChild(this.neck);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.4,-123.4,88.8,123.5);


(lib.legs = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_1_1();
	this.instance.setTransform(70.5,210.4,1,1,0,0,0,40,44);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AACA/QgWgNgRgbQgRgZgBgaQgBgZAQgLQAPgJAXAMQAWALARAbQARAZACAaQABAagQALQgHAEgJAAQgKAAgNgGg");
	this.shape.setTransform(-9.9,210.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8ED3FD").s().p("AgDCvQhAghgthLQgthIAChJQABhJAwgcQAugcA/AhQBCAhAsBKQAsBKgBBIQgBBJgvAcQgWANgZAAQgeAAgigSg");
	this.shape_1.setTransform(-13.7,215.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEDsQhXgsg9hlQg8hjADhiQAChiA/gmQA/gmBWAtQBXAsA8BlQA8BjgCBiQgCBig/AmQgdARgjAAQgoAAgtgYg");
	this.shape_2.setTransform(-12.7,215.7);

	this.instance_1 = new lib.Path_0();
	this.instance_1.setTransform(58.8,225.3,1,1,0,0,0,102.4,78);

	this.instance_2 = new lib.Path_3();
	this.instance_2.setTransform(-102.4,252.3,1,1,0,0,0,62.4,91.4);

	this.instance_3 = new lib.ClipGroup_1_1();
	this.instance_3.setTransform(-1.7,107.5,1,1,0,0,0,24.6,48.9);

	this.instance_4 = new lib.ClipGroup_0();
	this.instance_4.setTransform(-122.7,121.7,1,1,0,0,0,23.4,50.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag9g8IBaAbIAhBGIg3AYg");
	this.shape_3.setTransform(34.1,155.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQCQQhGgagbgjQgDgdACguQAEhYAXhSIAcBmQAoB5BGBmQgegGglgNg");
	this.shape_4.setTransform(-29.8,239.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#41A8E2").s().p("AAbDVQk3kSh2k1IAOgOQATgRAVgKQBBghA6ArIA4BdQBFByBLBqQDrFSDBCGIhYAqQiEhMiciJg");
	this.shape_5.setTransform(73.9,208.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlChfQhciKg/iUIgth5QAygMA+AHQB7AOA7BcQBwE/FKEdQCmCQCPBQQgiAVgeAhQgOARgJAMQnSinkkm2g");
	this.shape_6.setTransform(49.6,212.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#41A8E2").s().p("ADBIrIhwgiQg+gSgkgFQhNgKg4AdQgcAPgMAQQgygbhTgkIhKgeQgug2guhPQheicgEh5QgEh3AekEIAfjsIArgUQATAbA6AYQAcANAZAGQBrHpGtFVQCGBrCXBQQBLAnAxATQgBAGgTAHQgmAOhYAHIgiACQhbAAh8gkg");
	this.shape_7.setTransform(27.7,212.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AioAQQhKgeg+goIgxggIAbgPQAigPAhABQAbACB1AcQCKAhA6AKQBMANBqgYQA1gMAmgOQgWBGgFBEQgBAjACAVIgTABQj5AAjkhkg");
	this.shape_8.setTransform(52,279.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AknDEQgKhFAYhUQAxilCxhJIE/C5QAWALAIAnQAFAUAAARQgaAfhXAfQiiA5kVAAIgqAAg");
	this.shape_9.setTransform(124.2,271.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAaEDQipgoi3hMIjvhsQiPg+iUg2QhKgbgtgPIgQi3QAAAFBTAhQAfAOAxAOIBTAXQBQAYAmAQQA+AaCQBSQCABHBTAcQDQBFC2ANQGhAdDmhKQBzglAfgpQARBgACBGQABAjgDAPQkTBmkgAAQjFAAjMgwg");
	this.shape_10.setTransform(60.2,284.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3EA6E2").s().p("AgPA4IhBgcIgCjAQBhCUAtBoQAVA1ACAXQgehChEgqg");
	this.shape_11.setTransform(-53.1,284.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABNHnQhRi5hJmsQgXiHgUiOIgOh0QAgAsAeBoQAYBRAuDNQAhCYAxCGQAZBDASAkIAMDYg");
	this.shape_12.setTransform(-79.1,232.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#41A8E2").s().p("AiBCnQhomSgGj4QAigWAzgKQBkgUBMA9IAPBuQAUCHAYCCQBLGcBUDEIg/gKQhXgFh1AbQgyiYg0jKg");
	this.shape_13.setTransform(-101.4,231);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ai1jFQgQiRAEiNIAIhwQADgEAUgCQAagDAZAJQBMAcAcB2QAAEABkGUQAzDLAzCYQg/AigPADQj0lQg2nQg");
	this.shape_14.setTransform(-131,230);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3EA6E2").s().p("AhaEpQgjgjgaglIgSgeQgUihAbj+IAejgQgCFGCbE6QBPCdBPBcQihgnhshtg");
	this.shape_15.setTransform(-140.9,248.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AmbBgQAkhEBNhBQCYiHDDACQBsACBbAvQB1A8AvB1Ig0AgQhGAlhXAVQhlAZhrAAQi+AAjYhLg");
	this.shape_16.setTransform(-89.2,304.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhwgtQgUgsgNgsIgKgkQBFBzB/A4QAoASApALIAiAHQgvAkgiA0QgSAagIASQhjhOg+iJg");
	this.shape_17.setTransform(-141.7,293.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AigDWQjIgsiIhRQgUg1ggiQIgbiHQDYFNHogqQCZgNCigwICEguIgLC1QjbB6j8AAQh6AAiEgeg");
	this.shape_18.setTransform(-100.8,322.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFD6B2").s().p("ABDG2QhDgKgrgbQgogYACgVQgejngtk6Qgkj1ABAAQA1AKBLAEQCTAJBsgbIgQGiIgBGuQgRAJgWAHQglANgWAAIgKgBg");
	this.shape_19.setTransform(-0.3,107.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFD6B2").s().p("AAfHEQg6AFgvANIhchwQAkiJgllpQgSi1gaiaQAyAJBHAGQCLANBpgOIgNEgQgKEqAHA9QAHA8AiB5QARA9AQAxQg9glh4AMg");
	this.shape_20.setTransform(-120.7,122.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6F9C26").s().p("AhBAzQhNgGg1gLIgThXQBFAIBZAFQCvAKBggSIgNBUQhQAShhAAQgrAAgvgDg");
	this.shape_21.setTransform(-2,52.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6F9C26").s().p("AhGAvQhKgJg0gPIgEhNQA/ALBSAIQCiARBegRIgLBMQhAAOhMAAQg4AAhAgIg");
	this.shape_22.setTransform(-123.5,63.9);

	this.instance_5 = new lib.ClipGroup_5();
	this.instance_5.setTransform(-29.2,-137.6,1,1,0,0,0,129.8,209.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6F9C26").s().p("AvoewQhSgIhBgOQhNmGgHgwQgijcAWiJQD4mRB+jAIAKgkQANg0AKhZQAikcAEoUQAFoXBlorQAzkWAxirQF3ArGbAaQM7A1DDhTQAcBbAHC/QAHDEgVCUQg0HIkWLUQiLFoiAEPIgQK/IiFJxQg1AGhTACQimAEiYgWQg4kJhNm9IGGrxIhFsFICYmxIA6giQBGgqA9gsQDDiNAahkQhUBHhBAtQh5BVh+AVIAPhyQALhPACgkQACglgdgDIgdAFQghB/g1CvQhqFdhkDvQhjDvjxGsQh5DYhkCnIgpLDQjVI0gHABQgzAPhOAAQg2AAhCgHg");
	this.shape_23.setTransform(-28.8,-139.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("EgWIA2FQh0gwg+gwQgniGgejNQg6mYAxlfQAvlFAJjMIAAiLQAVgWAdgZQA4gyAmgNQAKhsgilHQgRikgTiPIhMoIIgwnUIGpqTIAwsKIAGilQAJjSARjfQA1rHBxo0QE1BGGSAmQMiBLHVilQAXByARChQAiFDgcDrQgeDwjeKxQhMDshNDaQhDDCgEABQgKADhYDpIgRLIIiDI7IhKPQICmBPIA6B4IBSAyICEDCQCSDVBIBaQBIBbCNCCQBGBBA4AuIGGEAIAbBsQAcCLAICaQhhBHkJAvQk0A3jwgwQjdgslCiDQighBhzg5ImRiyIBUDWIAKCcQADCvgiBZIgZAYQgjAdgzAZQikBOkNAEIgWAAQkAAAjfhbgAlvzpQjrHhhRBWQgJBTgOGNIgDC6IiQF9IhdGDIgbEnQgYE5APBeQAvAvA6BXQAdArATAiIBRGTIBqGEICiDxIgVlWIBNlYIA+naIA7hIIB0g1QidsOg6k2QgljCgajdQgNhwgGhJIGBr1IgwqjQhmDfh2Dwg");

	this.addChild(this.shape_24,this.shape_23,this.instance_5,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-169.5,-355.2,339.2,710.6);


(lib.ClipGroup_9 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AgxKPQBBjCA4jDQiHgZhthXQACAChSCuIgiBWQgTAzgGAlQgEgyAIg0QAIgsASg4QAohsARg2QASg2AUhpQAMhAAOh+QAOiAALg+QANhFAUgtQAbg7AtghQAMgIAFgFIAIgNQALgWASgPQAVgRAXgCQAbgDAUAIQAZAJALAWQAEAKAHAUQAFALAJANIASAWQAzBBAaBkQARBCANB3QAHBGADAoQAEA8gCAyQgGCGg6CWQguB4hXCRQgdAxgVAcQgeApggAbg");
	mask_9.setTransform(33.2,69);

	// Layer 3
	this.instance_1 = new lib.Path_4();
	this.instance_1.setTransform(40,79.3,1,1,0,0,0,10.3,19.9);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_1_2();
	this.instance_2.setTransform(12.3,72,1,1,0,0,0,12.3,61);
	this.instance_2.alpha = 0.5;

	this.instance_1.mask = this.instance_2.mask = mask_9;

	this.addChild(this.instance_2,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.8,11,48.7,122);


(lib.ClipGroup_10 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AElSIQhvgFh/g7QhXgqh7hTQiDhYi4jaIidjJQhFALgdgHQgsgMgvgoQgtglgYgqIgshPQgXgsgKgnQgvi0A9hRQAgAGA+AhQA/AgAVAVQhvmjCJlrQAuh4BMhZQBUhhBsgrQBggmB9AEQBfAECBAeQEaBBCuBLQD6BsCHCjQBVBmARAhQAiBCgLBeQgKBSgdDNQgZC5gCBjQgBAhAHCMQAGBpgLBCQgZChh4CzQh8C7iXBYQhWAxhhAAIgUAAg");
	mask_10.setTransform(98.4,116.1);

	// Layer 3
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFC28E").s().p("AmiLOQhEg+g0g9IglgwIiNjjQiggyg2icQgWhCAVhAIAag1IBLAhIF5v5IDxCgIDQAxQDnA7CBA0QExB7CrCMQBWBGAYAtQhQgwh0g8Qjph4i1g7QjhhJjegrQjEglgFAQQilHvAcGOQAXFBCRD1QBnCvCaB5QBBA0AzAaQkmiNjUjDg");
	this.shape_19.setTransform(101.1,124.6);

	this.instance_3 = new lib.Path_1_3();
	this.instance_3.setTransform(101.1,124.6,1,1,0,0,0,94.2,105.4);

	this.shape_19.mask = this.instance_3.mask = mask_10;

	this.addChild(this.instance_3,this.shape_19);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.9,19.2,188.6,210.9);


(lib.hairfront = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2A0C7").s().p("AhFBhIgbgYQAghQAxg9QAXgfATgOIAaAKQAeAOAOASQgBATgUAxQgXA2gjA9QgOACgKAAQgjAAgcgRg");
	this.shape.setTransform(62.8,-32.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhgCVQgXgPgSgTIgPgRQAziCBPhXQAmgsAegRIAqAaQAsAhAVAdQgCAtgSA8QgcBcg2BGQgYAGgXAAQgzAAgxggg");
	this.shape_1.setTransform(61.7,-33.3);

	this.instance = new lib.Path_2_1();
	this.instance.setTransform(72,-38.7,1,1,0,0,0,21.3,17.9);
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.Path_1_4();
	this.instance_1.setTransform(-78.7,-34.7,1,1,0,0,0,18.8,20.6);
	this.instance_1.alpha = 0.602;

	this.instance_2 = new lib.Path_0_1();
	this.instance_2.setTransform(-86.4,37.1,1,1,0,0,0,15.3,46.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AuYCFQgvjVABiLQA1FJCBE5QBBCcA2BaQgzoLBxm4QA5jeBDh1Ih8ktIFYDsQJbBMF0EfQB0BaBPBkQAoAyAQAgQlVlLntiWQj0hMizgJIjUi2IBgDCQi6EdgMKVQgHFMAfETQj0l1hgmug");
	this.shape_2.setTransform(-5.5,8.2);

	this.instance_3 = new lib.Path_5();
	this.instance_3.setTransform(15.4,-30.1,1,1,0,0,0,79.5,54.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F15C3C").s().p("AvSEJQgnirABhqQAumhBzkcQAnhfAohAQAggyAJAAQC8gIELAmQISBLHFDoQCWC6A9BmQBNCAAbCEQgVBbhCB/QgiBAgdAtQAThJAIhFQAGgvABABQlGlpnqiVQjzhLi1gDIkIjHIBdDoQijE/geIwQgPEZARDZQjIk9hOlWg");
	this.shape_3.setTransform(0.5,-9.3);

	this.addChild(this.shape_3,this.instance_3,this.shape_2,this.instance_2,this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.1,-101.8,220.5,203.6);


(lib.facesmile = function() {
	this.initialize();

	// Layer 1
	this.hair_front = new lib.hairfront();
	this.hair_front.setTransform(8,-144.5);

	this.eye_open_left = new lib.eyeopenleft();
	this.eye_open_left.setTransform(69.5,-109,1,1,0,0,0,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTgsQAIgMALgIIAHgEIAdAWQgjAOgSAzQgJAbgDAXQgPhKAZgng");
	this.shape.setTransform(-87.8,-100.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAzBWQgMgYgaghQgxhBhDgxIAUAEQAZAGAZAMQBQAlA5BLIgRAUQgSARgPAAIgDAAg");
	this.shape_1.setTransform(-88.4,-107);

	this.eye_right_open = new lib.eyerightopen();
	this.eye_right_open.setTransform(-7,-116.1,1,1,0,0,0,0,0.4);

	this.mouth_open_smiling = new lib.mouthopensmiling();
	this.mouth_open_smiling.setTransform(19,-46.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsBwQApgpAMgqQAGgjgPgzQgXhDgCgTIAfAyQAnA6AfAoIAHALQADAQgMAVQgPAZgyAdQgwAcgsAJQASgMAVgUg");
	this.shape_2.setTransform(53.7,-80.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhFAAQBWgvBVACIAUAVQATAaAAAiQgegPgjgBQgTgBhkAOIhhANg");
	this.shape_3.setTransform(76.3,-144.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Aj5ASQA6hFA/ggIAhABQAqADAwAKQCXAgCWBYIizgUQi4gSggAEQggAFhVAfIhPAfQARgdAdglg");
	this.shape_4.setTransform(-6.9,-152.9);

	this.instance = new lib.ClipGroup_10();
	this.instance.setTransform(-6.2,-123.1,1,1,0,0,0,98.4,116);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD6B2").s().p("AElSIQhvgFh/g7QhXgqh7hTQiDhYi4jaIidjJQhFALgdgHQgsgMgvgoQgtglgYgqIgshPQgXgsgKgnQgvi0A9hRQAgAGA+AhQA/AgAVAVQhvmjCJlrQAuh4BMhZQBUhhBsgrQBggmB9AEQBfAECBAeQEaBBCuBLQD6BsCHCjQBVBmARAhQAiBCgLBeQgKBSgdDNQgZC5gCBjQgBAhAHCMQAGBpgLBCQgZChh4CzQh8C7iXBYQhWAxhhAAIgUAAg");
	this.shape_5.setTransform(-6.2,-123.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AEDRwQiUgNg9ggQmOjRkHlfQgMgQgVgjIgSgfQhHgDgagFQg1gNhJhDQhmhdgpiRQgoiMAjiFQAGgTAOgbIAagrQAkAFA1AUIBXAjQgVhCADhWQADg4ARhjQAYiQAZhQQAlh6A/hRQBEhYBtg4QBlg1B4gSQBqgQB9AKQBiAHCBAaQDhAtClBHQDJBXCDCGQBbBdAbBxQAYBggQCRQgHBAgqCmQgUBTgUBEIAJBZQAJBigBAxQgEDBg0CAQgzB9iJChQhlB2hdA2QhpA8h6AAQgYAAgYgDg");
	this.shape_6.setTransform(-5.1,-113.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag2AVQggAEgcAJIgVAHQgJgBAhgcQAlgcApgQQB6gxAxB/QhfglhhAMg");
	this.shape_7.setTransform(73.7,-110.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhjAWQg6AEg2AKIgqAIQATgPAfgSQA/gjBAgSQDJg4CBCcQiogwi5AMg");
	this.shape_8.setTransform(-7.9,-117);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTgsQAIgMALgIIAHgEIAdAWQgjAOgSAzQgJAbgDAXQgPhKAZgng");
	this.shape_9.setTransform(-87.8,-100.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAzBWQgMgYgaghQgxhBhDgxIAUAEQAZAGAZAMQBQAlA5BLIgRAUQgSARgPAAIgDAAg");
	this.shape_10.setTransform(-88.4,-107);

	this.mouth_open_smiling_1 = new lib.mouthopensmiling();
	this.mouth_open_smiling_1.setTransform(19,-46.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgsBwQApgpAMgqQAGgjgPgzQgXhDgCgTIAfAyQAnA6AfAoIAHALQADAQgMAVQgPAZgyAdQgwAcgsAJQASgMAVgUg");
	this.shape_11.setTransform(53.7,-80.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhFAAQBWgvBVACIAUAVQATAaAAAiQgegPgjgBQgTgBhkAOIhhANg");
	this.shape_12.setTransform(76.3,-144.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Aj5ASQA6hFA/ggIAhABQAqADAwAKQCXAgCWBYIizgUQi4gSggAEQggAFhVAfIhPAfQARgdAdglg");
	this.shape_13.setTransform(-6.9,-152.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFD6B2").s().p("AElSIQhvgFh/g7QhXgqh7hTQiDhYi4jaIidjJQhFALgdgHQgsgMgvgoQgtglgYgqIgshPQgXgsgKgnQgvi0A9hRQAgAGA+AhQA/AgAVAVQhvmjCJlrQAuh4BMhZQBUhhBsgrQBggmB9AEQBfAECBAeQEaBBCuBLQD6BsCHCjQBVBmARAhQAiBCgLBeQgKBSgdDNQgZC5gCBjQgBAhAHCMQAGBpgLBCQgZChh4CzQh8C7iXBYQhWAxhhAAIgUAAg");
	this.shape_14.setTransform(-6.2,-123.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AEDRwQiUgNg9ggQmOjRkHlfQgMgQgVgjIgSgfQhHgDgagFQg1gNhJhDQhmhdgpiRQgoiMAjiFQAGgTAOgbIAagrQAkAFA1AUIBXAjQgVhCADhWQADg4ARhjQAYiQAZhQQAlh6A/hRQBEhYBtg4QBlg1B4gSQBqgQB9AKQBiAHCBAaQDhAtClBHQDJBXCDCGQBbBdAbBxQAYBggQCRQgHBAgqCmQgUBTgUBEIAJBZQAJBigBAxQgEDBg0CAQgzB9iJChQhlB2hdA2QhpA8h6AAQgYAAgYgDg");
	this.shape_15.setTransform(-5.1,-113.9);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.mouth_open_smiling_1,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.instance,this.shape_4,this.shape_3,this.shape_2,this.mouth_open_smiling,this.eye_right_open,this.shape_1,this.shape,this.eye_open_left,this.hair_front);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.2,-246.3,220.5,246.4);


(lib.skirt = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ClipGroup_8();
	this.instance.setTransform(0.8,0.3,1,1,0,0,0,131.2,66.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E04424").s().p("AlCJLQk8gpkvhdQjihFhgg1QAmiiBMi+QB0klC3kuQCjA+DHAoQEpA7FDAAQC9AADzgtQB+gXE8hLQCAGFCCIrQnvEPqFAAQjWAAjogeg");
	this.shape.setTransform(0.2,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA+LeQnhgJoMinQkGhUimhSQAPhxBDjGQCImJEKmmQAvAWBZAdQCzA4DTAgQKiBkLsi+QA8CfBCDbQBoFVBRFuQiHBXjnBWQm3CinJAAIgwgBg");

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.2,-73.5,274.5,147.1);


// stage content:
(lib.girlHTML5test = function() {
	this.initialize();

	// upperarm-right
	this.upperarm_right = new lib.upperarmright();
	this.upperarm_right.setTransform(230.2,489.8,1,1,0,0,0,142,107);

	// lowerarm-right
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("Ai4AYIAcADQAjACApgCQCAgGCFgx");
	this.shape.setTransform(248.9,760.4);

	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(237.3,658.6,1,1,0,0,0,36,114.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D55795").s().p("AgiRaQg8mPhumLIgtiiQgZhdgNhFQgjjCAOjuQALivArkBQALg/AKgiQAQg0AagjQAhgsA1gPQA2gQAxAWQAjASAeAvQATAeAXA4QARArAUBcQApC+AQBfQAaCgAACBQAABlgXDYQgXDPADBwQAHFABnEsIAVBAQhJAWgXAEQhMAMg2AEQgZACgXAAQgnAAgigFg");
	this.shape_1.setTransform(237.1,659.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLSjIhTgFIgJg3Qg+mBhvl7IgRg4QgdhZgOgyQgVhNgIg5QgpjVAKjjQAJjPA1j+QAThZAGgUQAUhEAjguQAggrAygaQAxgaA1gDQA4gCAvAWQA2AZAoA7QAcAoAdBIQAuBxAWBcQA2DiAEFBQAABHgIBXIgRCYQgNBsgFA3QgHBYABBHQAGEuBiEaQAHAVAbBdQgMAPglAQQhJAhh6ALQgqAEgzAAQgjAAgmgCg");
	this.shape_2.setTransform(237,659.3);

	// hand-right
	this.instance_1 = new lib.ClipGroup_6();
	this.instance_1.setTransform(266,834.5,1,1,0,0,0,47.6,79);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD6B2").s().p("AEAL/IgfgJQgSg+gahSQg1ikgphjIgghMQgWg0gMgXQgHgOgcgmQgfgngWgWQAuBpAmB2QAdBSAwCgQg/gpgfgcQgugrgdg3Iggg7QgQgggMgeQgPglgdguQgTgdgjgyQAVBRAfBSIA+CdQACAFAvA0IAuA0IhGgeQg2gggogwQgkgrgeg/QgYgxgbhIIguh+QABAwAIAmQADATAUBLQgRAAgagVQgZgUgHgRQgQg5gbhVIgYhHIAsiNIBMj9QAmiCAah/QAZhSBUgKQBXgMBDBWIAXBBQAGARAWAuQARAkA4BIQA2BGAgAdQApAmBVA+IAQBZQAXBvAhBoQAHAWAbArQAcAuAGATQhHBEhBgkQg1gegZhQQgTg7gthOQgphFgCgGQAMBCAgCbQAeCOANBRQAKA6AiCZQAeCGALBPQgRAOgYAAIgQgCg");
	this.shape_3.setTransform(267.3,836.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACzM4IgdgTIgIgZIgoh5Ihmg7QgegGgogNQhRgbgyglQgcgVg4hPIgzhNQgmgCgngfQgigagMgbQgJgVgJgfIgMg2QgFgWgOgrQgNgrgFgWQgOg3AKg/QAHgvAYhGQAyiUAnigIAnidQAShLAugnQAZgVAjgMQAigMAiAAQAwAAAuAVQBRAnAgBNQAMAbAVA2QA1B6B6BsQAmAhBeBFIAOBcQAWB1AsCCIBXCbQgDAKgMANQgWAbglATQgyAagsAAQgjAAgfgUQgWgOgZgeQA+ErAuEEIgQAXQgbAYgyABIgFABQgwAAglgSg");
	this.shape_4.setTransform(268.6,836.3);

	// torso
	this.torso = new lib.torso();
	this.torso.setTransform(344.1,536,1,1,0,0,0,0.1,0);

	// skirt
	this.skirt = new lib.skirt();
	this.skirt.setTransform(351.3,747.3);

	// face smile
	this.instance_2 = new lib.facesmile();
	this.instance_2.setTransform(350,223,1,1,0,0,0,0,-123.2);

	// neck
	this.instance_3 = new lib.NEck();
	this.instance_3.setTransform(337.6,354.2,1,1,0,0,0,0,-61.8);

	// legs
	this.legs = new lib.legs();
	this.legs.setTransform(361.5,1023);

	// upperarm-left
	this.upperarm_left = new lib.upperarmleft();
	this.upperarm_left.setTransform(427.2,482.4,0.959,0.959,-4.5,0,0,-2.2,1);

	// lowerarm-left
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2.8).p("AiqAXIBfADQB2gHB7gt");
	this.shape_5.setTransform(454.8,719.4);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.setTransform(444,625.7,1,1,0,0,0,33.4,105.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D55795").s().p("AgdQDQg6l1hllmIgqiVQgXhVgMhAQghizAMjbQAKihAnjtQAKg6AJgfQAPgwAYghQAegoAwgPQAzgPAsAVQAhAQAcAsQARAcAVAzQAQAnATBVQAnCzAOBUQAYCTABB3QAABdgVDGQgUC/ADBoQAHEmBfEVIAUA6QhDAUgWAEQhgAQhIAAQghAAgdgDg");
	this.shape_6.setTransform(443.8,626.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIRGIhNgFIgIgzQg5leholhIgQgzQgchXgMgqQgUhHgGg0QgnjEAIjRQAIi+AwjrQAQhPAHgVQASg/AggrQAfgoAtgXQAtgYAxgDQAygDAsAVQAzAXAlA2QAZAlAbBCQAsBtAUBQQAyDQAFEnQgBBBgHBRQgDAqgMBiQgMBngEAvQgHBSACBBQAGEWBbEEQAHASAYBXQgLANgiAPQhDAfhwAKQgoAEgyAAIg/gBg");
	this.shape_7.setTransform(443.6,626.3);

	// hand-left
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAqDfQg0gCgqgRQgvgTgQibQgPiQAXgzIAfABIABByQAIB+AgBHIAPAQQAUANAngIQABg4AFhJQALiQAYhRIAqgkIgkG7QgPACgVAAIgIAAg");
	this.shape_8.setTransform(466.6,804.7);

	this.instance_5 = new lib.ClipGroup_9();
	this.instance_5.setTransform(453.9,797.7,1,1,0,0,0,32.3,69);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD6B2").s().p("AhlDRIgJgWICQmXIBNASIilGjQgMAEgJAAQgQAAgKgMg");
	this.shape_9.setTransform(446,849);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFD6B2").s().p("AhNDLQgQgOgCgZQgDgaBCixIBAitIBBAlIifGEQgHgCgIgIg");
	this.shape_10.setTransform(436.1,841.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFD6B2").s().p("AgxKPQBBjCA4jDQiHgZhthXQACAChSCuIgiBWQgTAzgGAlQgEgyAIg0QAIgsASg4QAohsARg2QASg2AUhpQAMhAAOh+QAOiAALg+QANhFAUgtQAbg7AtghQAMgIAFgFIAIgNQALgWASgPQAVgRAXgCQAbgDAUAIQAZAJALAWQAEAKAHAUQAFALAJANIASAWQAzBBAaBkQARBCANB3QAHBGADAoQAEA8gCAyQgGCGg6CWQguB4hXCRQgdAxgVAcQgeApggAbg");
	this.shape_11.setTransform(454.7,797.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AjXLtQgwgfgCgLIhQhqIgOhuQgGhTAAgKQABgGAOgzIBbkJQAKhzATiMQATiEAQhNQAOhGALglQARg6AYgrQAWgnAcgaQANgMAEgFQAEgFAKgUQAbgxArgPQAlgNAsAGQAkAGAWARQAJAHAOARIAPATQAWAaAUAoIAfBJQAeBJAXBXQA6DmgYD0QgFA6gKA5QgzDQiQDDQhIBhg+A4IhLggIhqBJQgYgNgZgPg");
	this.shape_12.setTransform(455.1,800.8);

	// hair-back
	this.instance_6 = new lib.ClipGroup_7();
	this.instance_6.setTransform(335.7,229,1,1,0,0,0,119.1,132.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F15C3C").s().p("AhWUHQjFgKjOgZIimgYQgrhhhHjsIg/jZQgrCUgPCzQgHBaABA8Qhmgog+gpIgpghQjBvwFcr6QBtjvCVi6QBLhdA1gtQE8AZFlBKQH+BpD/CWQA/BcCFC4QBlCZgFBXQgKDMjAC8QhgBbhdA1QAFDpB3FeQA7CvA6CAQg1gMhogtIhdgqQAFBWAmBrQASA1ASAkQj4BunLAAQhtAAh3gGg");
	this.shape_13.setTransform(337.9,228.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgtVzQjggGjggcQi2gXhLgWQgPgigjimIggifIgFBtIgJDoQhxgch5hSIhihMQiOpMA7oLQAwmgCtlnQB8kBCvjIQBXhlA/gxQHRg+I7DPQEeBnDBB0QCAB0B+EEQA/CDAmBqQhSEXhvCmQgiA0ghAkIgaAYIiNCkIBNErQBiFRBmC/QhkgXhpgyIhWgtIAWBNQAaBYAZA1QkiCYosAAIhugBg");
	this.shape_14.setTransform(339.7,226.8);

	this.addChild(this.shape_14,this.shape_13,this.instance_6,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.instance_5,this.shape_8,this.shape_7,this.shape_6,this.instance_4,this.shape_5,this.upperarm_left,this.legs,this.instance_3,this.instance_2,this.skirt,this.torso,this.shape_4,this.shape_3,this.instance_1,this.shape_2,this.shape_1,this.instance,this.shape,this.upperarm_right);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1151.9,1087.1,339.2,1291.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;