// JavaScript Document



function addspans(textstring){
return "<span>" + textstring.replace(/ /g, "</span> <span>"); + "</span>";
}




function setUpListeners(myItem,myAction,myFunction){
	$(myItem).off(myAction, myFunction);
	$(myItem).on(myAction, myFunction);
}


function getAbsolutePath() {
    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
}

function objectValid(theObject) {
	if (theObject == null) {
		return false;
	}
	if (typeof(theObject) == "undefined") {
		return false;
	}
	return true;
}


function is_touch_device() {
	
	
  return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
};


function ismobile(){
var check = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
check = true
}
return check;	
}

function loadStyleSheet(styleSheet){
	
	alert(styleSheet);
	
$('<link>')
  .appendTo($('head'))
  .attr({type : 'text/css', rel : 'stylesheet'})
  .attr('href', 'css/'+styleSheet+'.css');
}

function setButtonPings(setval){


if(gameController.audioOff){
        $(".pinger").off(gameController.touchType, function(){
			soundLoader.playSound("c1", null, 30, false);
			});
}
else
{
	console.log("set pinger");
	   $(".pinger").on(gameController.touchType, function(){
			soundLoader.playSound("c1", null, 30, false);
			});
}
	
}


function getRandom(lower,higher){

return Math.floor((Math.random() * higher) + lower);
	
}

function uwyBody(bodyType){
	var bodyList = ["folded","thumbsdown","thumbsup","surprised","pointlow","pointhigh","itsme"];
var bodyIndex = bodyList.indexOf(bodyType);
bodyIndex++;

console.log('body img = #uwy'+bodyIndex);


	$('.uwyChar').removeClass('uwySHow');
	$('#uwy'+bodyIndex).addClass('uwySHow');
}

function uwyHead(headType){
	var headList = ["default","annoyed","smile","cool","eyesshut","nervous","pleased","shouty","surprised","talk"];
var headIndex = headList.indexOf(headType);
headIndex++;
	$('.uwyHead').removeClass('uwyHeadShow');
	$('#uwy'+headIndex+'Head').addClass('uwyHeadShow');
}


function easeItemH(thisItem,movementV,movementH){
	
	if(movementH){
	startLocH = panoController.pano.get("hotspot["+thisItem+"].ath");	
	}
	
	if(movementV){
	startLocV = panoController.pano.get("hotspot["+thisItem+"].atv");	
	}
	
	var iteration = 0;
	var totalIterations = 120;

	//console.log(startLoc);
//	console.log(endLoc);
	moveIt();
	function moveIt(){

		if(movementH){
		var newPosH = easeOutCirc(iteration, startLocH, movementH, totalIterations);
		panoController.pano.set("hotspot["+thisItem+"].ath", newPosH);	
		}

		if(movementV){
		var newPosV = easeOutCirc(iteration, startLocV, movementV, totalIterations);
		panoController.pano.set("hotspot["+thisItem+"].atv", newPosV);	
		}
	
	
	
		setTimeout(function() {
	
		if (iteration < totalIterations) {
				iteration += .5;
				moveIt();
			}

}, 5);
		
		
		
		
		
	}
	
	


	
	
}


jQuery.fn.center = function ()
{
    this.css("position","fixed");
    this.css("top", ($(window).height() / 2) - (this.outerHeight() / 2));
    this.css("left", ($(window).width() / 2) - (this.outerWidth() / 2));
    return this;
}