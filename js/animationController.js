// JavaScript Document
var animationController = {

    init: function () {

        animationController.setListeners();
        animationController.badgeAnimation();
        animationController.flashFooterNext();
    },

    kerryIn: function (playVid) {

        $('#kerrybox').fadeIn(function () {
            if (playVid) {
                kerryController.playVideo();
            }

        });


    },

    kerryOut: function () {
        //TweenLite.to($('#kerrybox'), .5, {right:-276,opacity:0});
        $('#kerrybox').hide();
        kerryController.pauseVideo();
    },

    kerryHide: function () {
        $('#kerrybox').css({
            "bottom": "-276px",
            "opacity": "0"
        });
        kerryController.pauseVideo();
    },

    lightOff: function () {
        TweenLite.to($('#lightsOff'), 1, {
            opacity: .8
        });
    },
    lightOn: function () {
        TweenLite.to($('#lightsOff'), 1, {
            opacity: 0
        });
    },

    soundwave: function () {
        TweenMax.to($('#soundwavePicture'), 20, {
            css: {
                'background-position': "6000px 0px"
            },
            repeat: 0,
            repeatDelay: 0,
            ease: Linear.easeNone,
            onComplete: resetGraphic
        });

        function resetGraphic() {
            $('#soundwavePicture').css("background-position", "0px 0px");
        }

    },

    titleIn: function () {
        setTimeout(function () {
            $('#roomTitle').show();
            $('#roomTitle').css({
                "top": "8%",
                "height": "8%"
            });
            TweenLite.from($('#roomTitle'), 3, {
                scaleX: 0,
                scaleY: 0,
                opacity: 0,
                ease: Elastic.easeOut,
                onComplete: stageTwo
            });
        }, 1000);

        function stageTwo() {

            TweenLite.to($('#roomTitle'), .5, {
                top: 0,
                height: 44,
                onComplete: isComplete
            });
            $('#navNumbers').fadeIn();

        }

        function isComplete() {
            if (gameController.nextFunction) {
                eval(gameController.nextFunction + "()");
                gameController.nextFunction = null;
            }
        }

    },

    footerIn: function () {

        TweenLite.to($('#footer'), 1, {
            bottom: 0
        });

    },

    footerOut: function () {
        TweenLite.to($('#footer'), 1, {
            bottom: -300
        });
    },

    footerHide: function () {
        console.log("hide this");
        $('#footer').css("bottom", "-300");
    },

    characterIn: function (triggeritem, ismum) {

        if (ismum) {
            mybox = "mumbox";
            TweenLite.to($('#' + mybox), 1, {
                left: "0%",
                onComplete: isCompleted
            });
        } else {
            mybox = "characterbox";
            TweenLite.to($('#' + mybox), 1, {
                left: "7%",
                onComplete: isCompleted
            });

        }

        function isCompleted() {

            if (triggeritem) {
                $(document).trigger(triggeritem);
            }

        }

    },

    characterOut: function (triggeritem, ismum) {

        if (ismum) {
            mybox = "mumbox";
        } else {
            mybox = "characterbox";
        }

        TweenLite.to($('#' + mybox), 1, {
            left: -700,
            onComplete: isCompleted
        });

        function isCompleted() {
            if (triggeritem) {
                $(document).trigger(triggeritem);
            }

        }

    },

    characterHide: function (ismum) {
        $('#characterbox').css("left", "-700");
    },

    badgeAnimation: function () {

        animationController.badge = new TimelineMax({
            paused: true
        });

        animationController.badge.to($("#roomTitlebar"), 0, {
            display: 'block'
        });
        animationController.badge.to($("#badge"), 0, {
            display: 'block'
        });
        animationController.badge.from($("#badge"), 3, {
            css: {
                scaleX: 0,
                scaleY: 0,
                opacity: 0
            },
            ease: Elastic.easeOut
        });
        animationController.badge.from($("#roomTitlebar"), 3, {
            css: {
                scaleX: 0,
                scaleY: 0,
                opacity: 0
            },
            ease: Elastic.easeOut
        }, "-=3");
        animationController.badge.from($("#badgeflash"), 6, {
            rotation: 360
        }, "-=3");
        animationController.badge.to($("#badge"), 1, {
            css: {
                scaleX: 0,
                scaleY: 0,
                opacity: 0
            }
        });

        animationController.badge.call(isOut);

        function isOut() {

            $(document).trigger("badgeComplete");
            sceneController.getNext();
        }

    },

    setListeners: function () {
        $('#button1').on("click", animationController.charOut);

    },

    flashFooterNext: function () {
        animationController.flashNext = new TimelineMax({
            paused: true
        });
        animationController.flashNext.to($(".flashbutton"), .5, {
            css: {
                opacity: 0
            }
        });
        animationController.flashNext.to($(".flashbutton"), .5, {
            css: {
                opacity: 1
            }
        });

    }
};

