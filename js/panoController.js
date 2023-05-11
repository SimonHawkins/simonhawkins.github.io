// JavaScript Document
var panoController = {

	vlookatmax : 68,
	hlookatmax : 0,
	stdFOV : 80,

	init : function() {

		console.log("has this loaded?");
		panoController.pano = document.getElementById("viewer1");

	},

	loadView : function(sceneName, sceneH, sceneV) {
		panoController.pano.call('loadscene(' + sceneName + ', view.fov=' + panoController.stdFOV + ');');
		if (sceneH && sceneV) {
			panoController.pano.call('lookat(' + sceneH + ',' + sceneV + ',' + panoController.stdFOV + ')');
		}
	},

	lookAt : function(sceneH, sceneV) {
		panoController.pano.call('lookat(' + sceneH + ',' + sceneV + ',' + panoController.stdFOV + ')');
	},

	moveTo : function(sceneH, sceneV) {
		panoController.pano.call('moveto(' + sceneH + ',' + sceneV + ',0)');
	},

	freezeScene : function() {
		console.log("freezer");
		panoController.pano.set('view.vlookatmax', panoController.pano.get('view.vlookat'));
		panoController.pano.set('view.vlookatmin', panoController.pano.get('view.vlookat'));
		panoController.pano.set('view.hlookatmax', panoController.pano.get('view.hlookat'));
		panoController.pano.set('view.hlookatmin', panoController.pano.get('view.hlookat'));

	},

	unfreezeScene : function() {

		panoController.pano.set('view.vlookatmax', 68);
		panoController.pano.set('view.vlookatmin', -90);
		panoController.pano.set('view.hlookatmax', 360);
		panoController.pano.set('view.hlookatmin', 0);

	},

	testClick : function() {
		console.log("clicked");

		panoController.freezeScene();

	}
};

