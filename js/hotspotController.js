// JavaScript Document
var hotspotController = {

    init: function () {
        console.log("test close");
        $('.boxCloser').on(gameController.touchType, function () {
            //	panoController.unfreezeScene();
            $('#pictureBox').fadeOut();
            $('#audioBox').fadeOut();
            $('#videoBox').fadeOut();
            animationController.kerryOut();
        });

    },

    ctChanging: function () {

        $(document).off("kerryFinished");
        $(document).off("gownChanged");

        resetForHotspot();
        gameController.nextFunction = "characterController.changeIntoGown";
        kerryController.setVideo("xray_hotspot1");
        animationController.kerryIn(true);
        var changeCountup = 0;
        $(document).on("gownChanged", function () {

            changeCountup++;
            if (changeCountup == 1) {
                characterController.actions("gesture_small");
                kerryController.setVideo("ct_change_2");
                kerryController.playVideo();
                $(document).on("kerryFinished", function () {
                    $(document).off("kerryFinished");
                    mumController.changeIntoGown();
                });

                animationController.characterIn("actionCompleted", true);
            } else {
                $(document).off("gownChanged");
                sceneController.getNext();
            }
        });

    },

    ctTable: function () {
        resetForHotspot();
        $('#ftext').empty();
        kerryController.setVideo("ct_hotspot2");
        animationController.kerryIn(true);
        kerryController.playVideo();

        $('#pictureTitle').css("background-image", "url(img/box_ct_scanner_table.png)");
        $('#picture').css("background-image", "url(img/scene_" + characterController.myCharacterGender + "_ct.png)");
        $('#pictureNext').hide();

        $('#pictureBox').fadeIn();

        $(document).on("kerryFinished", function () {
            $(document).off("kerryFinished");
            $('#pictureNext').fadeIn();
            $('#pictureNext').on(gameController.touchType, function () {
                $('#pictureNext').hide();

                kerryController.setVideo("ct_hotspot2a");
                animationController.kerryIn(true);
                kerryController.playVideo();

                $(document).on("kerryFinished", function () {
                    $(document).off("kerryFinished");
                    sceneController.toggleHotspots(false);
                    sceneController.getNext();

                });

            });

        });

    },

    ctDoughnut: function () {
        resetForHotspot();
        videoController.setVideo("ct_video");
        $('#pictureNext').off();
        $('#ftext').html("");
        $('#pictureBox').hide();
        $('#videoNext').hide();
        $('#videoClose').hide();
        $('#videoBox').show();
        $('#videoText h1').html("");
        $('#ftext').html(addspans("Watch this video to see how the machine moves."));
        soundLoader.playSpeechSound("ct_9");
        $(document).on("textFinished", function () {
            $(document).off("textFinished");
            playVideo();
        });

        function playVideo() {
            videoController.playVideo();
            $('#videoNext, #videoClose').on(gameController.touchType, endVideo);
            $(document).on("videoFinished", function () {
                $('#videoNext').fadeIn();
                // endVideo()
            });
            $(document).on("videoPlaying", function () {
                $(document).off("videoPlaying");
                $('#videoClose').fadeIn();
                $('#footer_button').hide();
            });

        }

        function endVideo() {

            console.log("function endVideo");

            $('#videoBox').hide();
            $('#videoNext').off(gameController.touchType, endVideo);
            $('#videoClose').off(gameController.touchType, endVideo);

            videoController.pauseVideo();
            $(document).off("videoFinished");

            firstKerry();
        }

        function firstKerry() {

            $('#ftext').empty();
            kerryController.setVideo("ct_hotspot3");
            animationController.kerryIn(true);
            kerryController.playVideo();

            $(document).on("kerryFinished", function () {
                $(document).off("kerryFinished");
                animationController.kerryOut();
                holdBreathAudio();
            });

        }

        function holdBreathAudio() {

            $('#audioClose').hide();
            $('#audioBox').fadeIn();

            $('#ftext').empty();

            $('#ftext').html(addspans("Try breathing in and holding your breath"));
            soundLoader.playSpeechSound("ct_10");

            $(document).on("textFinished", function () {
                $(document).off("textFinished");
                characterController.canSpeak = false;
                soundLoader.playSound("ct", null, 100, false);
                $(document).on("audioFinished", function () {
                    $(document).off("audioFinished");
                    audioEnded();
                });

            });

        }

        function audioEnded() {

            $('#audioBox').fadeOut();

            $('#ftext').html(addspans("Well done!"));
            soundLoader.playSpeechSound("ct_11");


            $(document).on("textFinished", function () {
                $(document).off("textFinished");
                setTimeout(secondKerry, 1000);
            });

        }

        function secondKerry() {

            kerryController.setVideo("ct_hotspot3a");
            animationController.kerryIn(true);
            kerryController.playVideo();

            $(document).on("kerryFinished", function () {
                $(document).off("kerryFinished");

                kerryController.setVideo("ct_hotspot3b");
                kerryController.playVideo();

                $(document).on("kerryFinished", function () {
                    $(document).off("kerryFinished");
                    animationController.kerryOut();
                    showPicture();

                });

            });

        }

        function showPicture() {

            $('#ftext').html(addspans("This is what the picture looks like"));
            soundLoader.playSpeechSound("ct_12");
            $('#picture').css("background-image", "url(img/scene_CT_cross_section.png)");
            $('#pictureNext').show();

            $('#pictureBox').fadeIn();

            $('#pictureNext').on(gameController.touchType, function () {
                $('#pictureNext').off(gameController.touchType);
                $('#pictureBox').fadeOut();
                sceneController.getNext();
            });

        }

    },

    nuclearStartStep1: function () {

        kerryController.setVideo("nuclear_hotspot2");
        animationController.kerryIn(true);

        animationController.characterOut("actionCompleted", false);
        $(document).on("actionCompleted", function () {
            $(document).off("actionCompleted");
            characterController.actions("hand_cream");
            animationController.characterIn(null, false);
        });

        console.log(characterController.currentCharacter);

        $('#pictureTitle').css("background-image", "url(img/box_special_cream.png)");
        $('#picture').css("background-image", "url(img/scene_cream_on_hand.png)");
        $('#pictureNext').hide();
        $('#pictureBox').fadeIn();
        kerryController.playVideo();

        $(document).on("kerryFinished", function () {
            $(document).off("kerryFinished");
            $('#pictureNext').fadeIn();
            $('#pictureNext').on(gameController.touchType, function () {
                $('#pictureNext').off(gameController.touchType);
                $('#pictureNext').fadeOut();
                hotspotController.nuclearStartStep2();
            });

        });

    },

    nuclearStartStep2: function () {

        kerryController.setVideo("nuclear_hotspot3");

        $('#pictureTitle').css("background-image", "url(img/box_cannula.png)");
        $('#picture').css("background-image", "url(img/scene_cannula_in_hand.png)");

        $('#pictureBox').fadeIn();
        kerryController.playVideo();

        animationController.characterOut("actionCompleted", false);
        $(document).on("actionCompleted", function () {
            $(document).off("actionCompleted");
            characterController.actions("hand_cannula");
            animationController.characterIn(null, false);
        });

        $(document).on("kerryFinished", function () {
            $(document).off("kerryFinished");
            $('#pictureNext').fadeIn();
            $('#pictureNext').on(gameController.touchType, function () {
                $('#pictureNext').off(gameController.touchType);
                $('#pictureBox').fadeOut();
                sceneController.getNext();
            });

        });
    },

    nuclearWaitingStep1: function () {
        resetForHotspot();
        kerryController.setVideo("nuclear_hotspot4");
        animationController.kerryIn(true);
        $('#ftext').empty();

        $('#pictureTitle').css("background-image", "url(img/box_waiting_room.png)");

        if (characterController.myCharacterGender == "boy") {
            imgType = "girl";
        } else {
            imgType = "boy";
        }

        $('#picture').css("background-image", "url(img/scene_" + imgType + "_waving.png)");
        $('#pictureNext').hide();

        kerryController.playVideo();

        setTimeout(function () {
            $('#pictureBox').fadeIn();
        }, 5000);

        $(document).on("kerryFinished", function () {
            $('#pictureNext').fadeIn();

            $(document).off("kerryFinished");
            $('#pictureNext').on(gameController.touchType, function () {
                $('#pictureNext').off(gameController.touchType);
                $('#pictureNext').fadeOut();
                sceneController.getNext();
            });

        });

    },

    nuclearInjectLoad: function () {
        panoController.loadView("scene_view_Nuclear_Injecting");

    },

    nuclearInjectStep1: function () {
        //	resetForHotspot();

        $('#ftext').empty();
        //	$('#roomTitleText').css("background-image", "url(img/name_injecting_room.png)");
        kerryController.setVideo("nuclear_hotspot5");

        animationController.kerryIn(true);


        kerryController.playVideo();

        $(document).on("kerryFinished", function () {
            $(document).off("kerryFinished");


            $('#pictureTitle').css("background-image", "url(img/box_butterfly_needle.png)");
            $('#picture').css("background-image", "url(img/scene_" + characterController.myCharacterGender + "_butterfly_needle.png)");

            $('#pictureBox').fadeIn();

            $('#pictureNext').fadeIn();
            $('#pictureNext').on(gameController.touchType, function () {
                $('#pictureNext').off(gameController.touchType);
                $('#pictureBox').fadeOut();
                sceneController.getNext();
            });

        });

    },

    nuclearScanningLoad: function () {
        panoController.loadView("scene_view_Nuclear_Scanning");

    },

    nuclearScanningStep1: function () {

        $('#pictureNext').hide();
        $('#ftext').empty();
        $('#roomTitleText').css("background-image", "url(img/name_nuclear_medicine_room.png)");
        kerryController.setVideo("nuclear_hotspot6");
        animationController.kerryIn(true);

        $('#pictureTitle').css("background-image", "url(img/box_the_scanning_bed.png)");
        $('#picture').css("background-image", "url(img/scene_" + characterController.myCharacterGender + "_nuc_med.png)");

        $('#pictureBox').fadeIn();
        kerryController.playVideo();

        $(document).on("kerryFinished", function () {
            $(document).off("kerryFinished");
            $('#pictureNext').fadeIn();
            $('#pictureNext').on(gameController.touchType, function () {
                $('#pictureNext').off(gameController.touchType);
                $('#pictureBox').fadeOut();
                hotspotController.nuclearScanningStep2();
            });

        });

    },

    nuclearScanningStep2: function () {

        $('#pictureBox').fadeOut();
        kerryController.setVideo("nuclear_hotspot7");

        kerryController.playVideo();

        $(document).on("kerryFinished", function () {
            $(document).off("kerryFinished");
            thisCount = 0;
            var mouthArray = ["th", "oh", "ee", "ah"];
            numberArray = ["one...", "two...", "three...", "four...", "five...", "six...", "seven...", "eight...", "nine...", "ten..."];

            countingPractice();

            function countingPractice() {
                $(document).off("kerryFinished");
                animationController.kerryOut();
                $('#ftext').html(addspans("Try lying completely still for 10 seconds. I'll count! "));
                soundLoader.playSpeechSound("nuclear_9");
                $(document).on("textFinished", function () {
                    $(document).off("textFinished");

                    setTimeout(function () {
                        soundLoader.playSpeechSound("nuclear_10");
                        characterController.canSpeak = false;
                        countup();
                    }, 1000);

                });
            }

            function countup() {
                if (thisCount < numberArray.length) {
                    $('#ftext').html("<span class='highlightText'>" + numberArray[thisCount] + "</span>");
                    console.log("nod when counting");
                    characterController.actions("quick_nod");
                    thismouth = mouthArray[Math.floor(Math.random() * mouthArray.length) + 0];
                    characterController.actions(thismouth);
                    thisCount++;
                    setTimeout(countup, 1000);
                } else {
                    setTimeout(function () {
                        $('#ftext').html(addspans("Well done!"));
                        soundLoader.playSpeechSound("nuclear_11");
                        setTimeout(function () {
                            hotspotController.nuclearScanningStep3();
                            $('#ftext').empty();
                        }, 2000);
                    }, 1000);
                }
            }

        });
    },

    nuclearScanningStep3: function () {

        kerryController.setVideo("nuclear_hotspot8");
        animationController.kerryIn(true);
        kerryController.playVideo();

        $('#pictureTitle').css("background-image", "url(img/box_watch_a_dvd.png)");
        $('#picture').css("background-image", "url(img/scene_dvd_covers.png)");
        $('#pictureBox').fadeIn();

        $(document).on("kerryFinished", function () {

            $(document).off("kerryFinished");

            $('#pictureNext').show();

            $('#pictureNext').on(gameController.touchType, function () {
                $('#pictureNext').off(gameController.touchType);

                $('#pictureTitle').hide();
                $('#ftext').html(addspans("This is what the picture looks like"));
                soundLoader.playSpeechSound("nuclear_12");
                $('#picture').css("background-image", "url(img/Nuc-Med-scan.gif)");
                $('#pictureNext').show();
                $('#pictureBox').fadeIn();
                $('#pictureNext').on(gameController.touchType, function () {
                    $('#pictureNext').off(gameController.touchType);
                    $('#pictureBox').fadeOut();
                    characterController.actions("hand_rest");
                    panoController.loadView("scene_view_Nuclear");
                    sceneController.getNext();
                });


            });

        });









    },

    ultrasoundMachine: function () {

        resetForHotspot();

        $('#soundwaveBoxTitle').css("background-image", "url(img/box_ultrasoundmachine.png)");

        kerryController.setVideo("ultra_hotspot1");

        $('#ftext').html(addspans("This is a soundwave!"));
        soundLoader.playSpeechSound("ultrasound_5");
        $('#soundwaveBox').fadeIn();
        animationController.soundwave();

        $(document).on("textFinished", function () {
            $(document).off("textFinished");
            animationController.kerryIn(true);
        });

        $(document).on("kerryFinished", function () {
            $(document).off("kerryFinished");
            $('#soundwaveBox').fadeOut();
            sceneController.getNext();
        });
    },

    ultrasoundLights: function () {
        kerryController.setVideo("ultra_hotspot2");
        resetForHotspot();
        animationController.kerryIn(true);
        setTimeout(function () {
            animationController.lightOff();
        }, 2000);
        $(document).on("kerryFinished", videoFinish);

        function videoFinish() {
            $(document).off("kerryFinished");
            animationController.kerryOut();
            $('#ftext').html(addspans("For now we'll turn the lights back on!"));
            soundLoader.playSpeechSound("ultrasound_7");
            $(document).on("textFinished", function () {
                $(document).off("textFinished");
                animationController.lightOn();

                setTimeout(function () {
                    sceneController.getNext();

                }, 2000);

            });
        }

    },

    ultrasoundBed: function () {
        resetForHotspot();
        kerryController.setVideo("ultra_hotspot3");
        animationController.kerryIn(true);
        $('#pictureTitle').css("background-image", "url(img/box_ultrasoundbed.png)");
        $('#picture').css("background-image", "url(img/scene_" + characterController.myCharacterGender + "_ultrasound.png)");
        $('#pictureNext').hide();
        $('#pictureBox').fadeIn();
        $(document).on("kerryFinished", starter);

        function starter() {
            $(document).off("kerryFinished");
            $('#pictureNext').fadeIn();
            $('#pictureNext').on(gameController.touchType, imageOne);
        }

        function imageOne() {
            $('#pictureNext').fadeOut();
            $('#pictureNext').off(gameController.touchType);
            $('#picture').css("background-image", "url(img/ultrasoundgel.JPG)");
            $('#pictureTitle').css("background-image", "url(img/box_ultrasound_gel.png)");
            kerryController.setVideo("ultra_hotspot4");
            kerryController.playVideo();
            $(document).on("kerryFinished", function () {
                $(document).off("kerryFinished");
                $('#pictureNext').fadeIn();
                $('#pictureNext').on(gameController.touchType, imageTwo);

            });
        }

        function imageTwo() {
            $('#pictureNext').fadeOut();
            $('#pictureNext').off(gameController.touchType);
            $('#pictureTitle').css("background-image", "url(img/box_ultrasound_probe.png)");
            $('#picture').css("background-image", "url(img/ultrasoundprobe.JPG)");
            kerryController.setVideo("ultra_hotspot5");
            kerryController.playVideo();
            $(document).on("kerryFinished", function () {
                $(document).off("kerryFinished");
                $('#pictureNext').fadeIn();
                $('#pictureNext').on(gameController.touchType, imageThree);

            });
        }

        function imageThree() {
            $('#pictureNext').fadeOut();
            $('#pictureNext').off(gameController.touchType);
            $(document).off("kerryFinished");
            $('#picture').css("background-image", "url(img/wiki_ultrasound.jpg)");
            $('#pictureTitle').css("background-image", "url(img/box_kidney_scan.png)");
            $('#ftext').html(addspans("This is what the picture looks like!"));
            soundLoader.playSpeechSound("ultrasound_10");
            $(document).on("textFinished", finishSpeech);
        }

        function finishSpeech() {
            console.log("function finishSpeech");
            $(document).off("textFinished");
            $('#pictureNext').show();
            $('#pictureNext').on(gameController.touchType, showWebLink);

        }

        function showWebLink() {
            $('#pictureNext').off(gameController.touchType);
            $('#pictureNext').fadeIn();
            $('#pictureNext').show();
            console.log("function showWebLink");
            $(document).off("textFinished");

            $('#pictureNext').off(gameController.touchType);
            console.log("this is a charname = " + characterController.myCharacterName);
            if (characterController.myCharacterName == "boy" || characterController.myCharacterName == "girl") {
                sceneController.getNext();
                //

            } else {
                showlink();
            }

        }

        function showlink() {
            $('#pictureBox').fadeOut();
            console.log("function showlink");
            thislink = "http://www.ducksters.com/science/sound102.php";

            $('#link a').text(thislink);
            $('#link a').attr("href", thislink);

            $('#ftext').html(addspans("If you would like to find out more about Ultrasound, have a look at this website."));
            soundLoader.playSpeechSound("ultrasound_16");
            $('#linkNext').hide();
            $('#linkBox').fadeIn();

            $(document).on("textFinished", showTheNext);

        }

        function showTheNext() {
            $(document).off("textFinished");

            console.log("function showTheNext");

            $('#linkNext').show();
            $('#linkNext').on(gameController.touchType, function () {
                console.log("has link next click");
                $('#linkNext').off(gameController.touchType);
                golinkend();
            });

        }

        function golinkend() {

            console.log("function goend");

            $('#linkBox').fadeOut();
            $('#linkBox').hide();
            console.log("this link box should be hidden");
            $('#pictureNext').off(gameController.touchType);
            sceneController.getNext();
        }

    },

    xrayChangingRoom: function () {
        resetForHotspot();
        gameController.nextFunction = "characterController.changeIntoGown";
        kerryController.setVideo("xray_hotspot1");

        $(document).off("kerryFinished");
        $(document).off("gownChanged");

        animationController.kerryIn(true);
        var changeCountup = 0;
        $(document).on("gownChanged", function () {
            changeCountup++;
            if (changeCountup == 1) {
                characterController.actions("gesture_small");
                kerryController.setVideo("xray_hotspot2");
                kerryController.playVideo();
                $(document).on("kerryFinished", function () {
                    $(document).off("kerryFinished");
                    mumController.changeIntoGown();
                });
                animationController.characterIn("actionCompleted", true);
            } else {
                $(document).off("gownChanged");
                sceneController.getNext();
            }
        });

    },

    xrayChestXray: function () {
        resetForHotspot();
        kerryController.setVideo("xray_hotspot3");
        animationController.kerryIn(true);
        countupAudio = 0;

        $('#ftext').html("");
        $('#pictureTitle').css("background-image", "url(img/box_xraymachine.png)");
        $('#audioTitle').css("background-image", "url(img/box_xraymachine.png)");
        $('#picture').css("background-image", "url(img/scene_" + characterController.myCharacterGender + "_xray1.png)");
        $('#pictureNext').hide();
        $('.boxCloser').hide();
        $('#pictureBox').fadeIn();

        setTimeout(function () {
            $('#picture').css("background-image", "url(img/scene_" + characterController.myCharacterGender + "_xray2.png)");
        }, 5000);

        $(document).on("kerryFinished", function () {
            $(document).off("kerryFinished");
            $('#pictureNext').fadeIn();
            animationController.kerryOut();
        });

        $('#pictureNext').on(gameController.touchType, function () {
            $('#pictureNext').off(gameController.touchType);
            $('#pictureBox').fadeOut();
            $('#ftext').html(addspans("The X-Ray machine makes a ping pong sound when the picture is being taken."));
            soundLoader.playSpeechSound("xray_7");

            $(document).on("textFinished", function () {

                $(document).off("textFinished");
                playSound();
                $('#audioClose').hide();
                $('#audioBox').fadeIn();
                $('#audioButton').on(gameController.touchType, playSound);

                $('#footer_button').off();
                $('#footer_button').on(gameController.touchType, function () {
                    $('#footer_button').off(gameController.touchType);
                    stopSound();
                });

            });
        });
        function playSound() {
            characterController.canSpeak = false;
            soundLoader.playSound("ping", null, 100, false);
        }


        $(document).on("audioFinished", function () {
            $(document).off("audioFinished");
            $('#footer_button').fadeIn();

        });

        function stopSound() {
            soundLoader.stopSound("ping", null);
            $(document).off("audioFinished");
            $('#audioClose').off();
            closeHotSpot();
            sceneController.getNext();
        }

        function closeHotSpot() {
            $('#pictureBox').fadeOut();
            $('#audioBox').fadeOut();

            $('#footer_button').on(gameController.touchType, function () {
                sceneController.getNext();

            });

        }

    },

    xrayBed: function () {
        resetForHotspot();

        $('#pictureTitle').css("background-image", "url(img/box_xraybed.png)");
        $('#videoTitle').css("background-image", "url(img/box_xraybed.png)");

        kerryController.setVideo("xray_hotspot4");
        animationController.kerryIn(true);
        $(document).on("kerryFinished", function () {
            $(document).off("kerryFinished");
            //  sceneController.getNext();
            animationController.kerryOut();

            setVideo();

        });

        function setVideo() {

            videoController.setVideo("xray");

            $('#pictureNext').off();
            $('#ftext').html("");
            $('#pictureBox').hide();
            $('#videoNext').hide();
            $('#videoClose').hide();
            $('#videoBox').show();
            $('#videoText h1').html("");
            $('#ftext').html(addspans("Watch this video to see how the X-Ray machine moves."));
            soundLoader.playSpeechSound("xray_10");

            $(document).on("textFinished", function () {
                $(document).off("textFinished");
                playVideo();
            });

        }

        function playVideo() {
            videoController.playVideo();
            $('#videoNext').on(gameController.touchType, endVideo);
            $('#videoClose').on(gameController.touchType, endVideo);
            $(document).on("videoFinished", function () {
                $('#videoNext').fadeIn();
                // endVideo()
            });
            $(document).on("videoPlaying", function () {
                $(document).off("videoPlaying");
                $('#videoClose').fadeIn();
                $('#footer_button').hide();
            });

        }

        function endVideo() {

            console.log("function endVideo");

            $('#videoBox').hide();
            $('#videoNext').off(gameController.touchType, endVideo);
            $('#videoClose').off(gameController.touchType, endVideo);

            videoController.pauseVideo();
            $(document).off("videoFinished");

            showPicture();

        }

        function showPicture() {

            console.log("function showPicture");

            $('#pictureNext').off(gameController.touchType);

            $('#pictureTitle').css("background-image", "url(img/box_chest_x_ray.png)");
            $('#audioTitle').css("background-image", "url(img/box_chest_x_ray.png)");

            $('#picture').css("background-image", "url(img/xray.jpg)");
            $('#pictureNext').hide();
            $('#pictureBox').fadeIn();

            $('#ftext').html(addspans("This is what the picture looks like."));
            soundLoader.playSpeechSound("xray_11");

            //			characterController.speak("hotspot");
            $(document).on("textFinished", finishSpeech);
        }

        function finishSpeech() {
            console.log("function finishSpeech");
            $(document).off("textFinished");
            $('#pictureNext').fadeIn();
            $('#pictureNext').on(gameController.touchType, showWebLink);

        }

        function showWebLink() {

            $('#pictureNext').off(gameController.touchType);
            $('#pictureNext').fadeIn();
            $('#pictureNext').show();
            console.log("function showWebLink");
            $(document).off("textFinished");

            $('#pictureNext').off(gameController.touchType);
            console.log("this is a charname = " + characterController.myCharacterName);
            if (characterController.myCharacterName == "boygown" || characterController.myCharacterName == "girlgown") {
                sceneController.getNext();
                //

            } else {
                showlink();
            }

        }

        function showlink() {

            //	$('#linkTitle').css("background-image", "url(img/box_xraymachine.png)");
            $('#pictureBox').fadeOut();
            console.log("function showlink");
            thislink = "http://en.wikipedia.org/wiki/Radiography";

            $('#link a').text(thislink);
            $('#link a').attr("href", thislink);

            $('#ftext').html(addspans("If you would like to find out more about X-rays, have a look at this website."));
            soundLoader.playSpeechSound("xray_17");

            $('#linkNext').hide();
            $('#linkBox').fadeIn();

            $(document).on("textFinished", showTheNext);

        }

        function showTheNext() {
            $(document).off("textFinished");

            console.log("function showTheNext");

            $('#linkNext').show();
            $('#linkNext').on(gameController.touchType, function () {
                console.log("has link next click");
                $('#linkNext').off(gameController.touchType);
                golinkend();
            });

        }

        function golinkend() {

            console.log("function goend");

            $('#linkBox').fadeOut();
            $('#linkBox').hide();
            console.log("this link box should be hidden");
            $('#pictureNext').off(gameController.touchType);
            sceneController.getNext();
        }

    },

    fluoroscopyChanging: function () {
        resetForHotspot();
        gameController.nextFunction = "characterController.changeIntoGown";
        kerryController.setVideo("fluro_hotspot1");
        animationController.kerryIn(true);
        var changeCountup = 0;
        $(document).on("gownChanged", function () {
            changeCountup++;
            if (changeCountup == 1) {
                characterController.actions("gesture_small");
                kerryController.setVideo("fluro_hotspot3");
                kerryController.playVideo();
                $(document).on("kerryFinished", function () {
                    $(document).off("kerryFinished");
                    mumController.changeIntoGown();
                });
                animationController.characterIn("actionCompleted", true);
            } else {
                $(document).off("gownChanged");
                sceneController.getNext();
            }
        });
    },

    fluoroscopyMachine: function () {
        resetForHotspot();
        kerryController.setVideo("fluro_hotspot2");
        animationController.kerryIn(true);
        var screencount = 0;
        $(document).on("kerryFinished", imageOne);

        function imageOne() {
            $(document).off("kerryFinished");
            animationController.kerryOut();
            $('#pictureTitle').css("background-image", "url(img/box_xraymachine.png)");
            $('#videoTitle').css("background-image", "url(img/box_xraymachine.png)");
            $('#picture').css("background-image", "url(img/scene_" + characterController.myCharacterGender + "_fluoroscopy2.png)");
            $('#ftext').html(addspans("The camera moves around but it won't touch you."));
            soundLoader.playSpeechSound("fluoroscopy_8");
            $('.boxCloser').hide();
            $('#pictureNext').hide();
            $('#pictureBox').fadeIn();

            $('#pictureNext').on(gameController.touchType, imageTwo);

            $(document).on("textFinished", function () {
                $(document).off("textFinished");
                $('#pictureNext').fadeIn();

            });

        }

        function imageTwo() {
            $('#pictureNext').off();
            $('#pictureNext').hide();
            $('#picture').css("background-image", "url(img/scene_" + characterController.myCharacterGender + "_fluoroscopy1.png)");
            $('#ftext').html(addspans("It moves up and down and side to side and you will move too."));
            soundLoader.playSpeechSound("fluoroscopy_9");
            videoController.setVideo("fluoroscopy");
            $(document).on("textFinished", function () {
                $(document).off("textFinished");
                $('#pictureNext').fadeIn();
                $('#pictureNext').on(gameController.touchType, setVideo);
            });

        }

        function setVideo() {

            $('#pictureNext').off();
            $('#ftext').html("");
            $('#pictureBox').hide();
            $('#videoNext').hide();
            $('#videoClose').hide();
            $('#videoBox').show();
            $('#videoText h1').html("");
            $('#ftext').html(addspans("Watch this video to see how the machine works."));
            soundLoader.playSpeechSound("fluoroscopy_10");
            $(document).on("textFinished", function () {
                $(document).off("textFinished");
                playVideo();
            });

        }

        function playVideo() {
            videoController.playVideo();
            $('#videoClose').on(gameController.touchType, stopVideo);
            $(document).on("videoFinished", function () {
                endVideo();
            });
            $(document).on("videoPlaying", function () {
                $(document).off("videoPlaying");
                $('#videoClose').fadeIn();
                $('#footer_button').hide();
            });

        }

        function stopVideo() {
            $('#videoClose').off(gameController.touchType);
            $('#videoClose').fadeOut();
            endVideo();
        }

        function endVideo() {
            videoController.pauseVideo();
            $(document).off("videoFinished");
            sceneController.getNext();

        }

    },

    fluoroscopyDrink: function () {
        resetForHotspot();
        $('#pictureTitle').css("background-image", "url(img/box_specialdrink.png)");
        $('#picture').css("background-image", "url(img/scene_specialdrink.jpg)");
        $('#pictureNext').hide();
        $('.boxCloser').hide();
        $('#pictureBox').fadeIn();
        kerryController.setVideo("fluro_hotspot4");
        animationController.kerryIn(true);
        $(document).off("textFinished");
        $(document).on("kerryFinished", imageOne);

        function imageOne() {
            $(document).off("kerryFinished");
            animationController.kerryOut();
            $('#ftext').html(addspans("There's strawberry, raspberry or chocolate!"));
            soundLoader.playSpeechSound("fluoroscopy_12");
            $(document).on("textFinished", function () {
                $(document).off("textFinished");
                $('#pictureNext').fadeIn();
                $('#pictureNext').on(gameController.touchType, imageTwo);
            });
        }

        function imageTwo() {
            $('#pictureNext').off(gameController.touchType);
            $('#pictureNext').fadeOut();
            $('#picture').css("background-image", "url(img/scene_" + characterController.myCharacterGender + "_fluoroscopy1.png)");
            $('#ftext').html(addspans("You need to stand still, no wriggling, so the doctor can get the best picture of you."));
            soundLoader.playSpeechSound("fluoroscopy_13");
            $(document).on("textFinished", function () {
                $(document).off("textFinished");
                $('#pictureNext').fadeIn();
                $('#pictureNext').on(gameController.touchType, finalSpeech);
            });
        }

        function finalSpeech() {
            $('#pictureNext').off(gameController.touchType);
            $('#pictureNext').fadeOut();
            $('#ftext').html(addspans("The doctor will ask you to take a big mouthful of the special drink and will tell you when to swallow."));
            soundLoader.playSpeechSound("fluoroscopy_14");
            $(document).on("textFinished", function () {
                $(document).off("textFinished");
                $('#pictureNext').fadeIn();
                $('#pictureNext').on(gameController.touchType, setVideo);
            });
        }

        function setVideo() {
            videoController.setVideo("12yrsap");
            $('#pictureNext').off();
            $('#ftext').html("");
            $('#pictureBox').hide();
            $('#videoClose').hide();
            $('#videoNext').hide();
            $('#videoBox').show();
            $('#videoText h1').html("");
            $('#ftext').html(addspans("This is what the doctor sees."));
            soundLoader.playSpeechSound("fluoroscopy_15");
            $(document).on("textFinished", function () {
                $(document).off("textFinished");
                setTimeout(playVideo, 1000);
            });

        }

        function playVideo() {
            videoController.playVideo();
            $('#videoClose').on(gameController.touchType, stopVideo);

            $('#videoNext').on(gameController.touchType, function () {
                $('#videoNext').off(gameController.touchType);
                sceneController.getNext();
            });

            $(document).on("videoFinished", function () {
                endVideo();
            });
            $(document).on("videoPlaying", function () {
                $(document).off("videoPlaying");
                $('#videoClose').fadeIn();
                $('#footer_button').hide();
            });

        }

        function stopVideo() {
            $('#videoClose').off(gameController.touchType);
            $('#videoClose').fadeOut();
            //	endVideo()
            $('#videoNext').fadeIn();

        }

        function endVideo() {
            videoController.pauseVideo();
            $(document).off("videoFinished");
            //	sceneController.getNext();
            $('#videoNext').fadeIn();

        }

    },

    ultraSoundLiedown: function () {
        resetForHotspot();
        kerryController.setVideo("ultra_hotspot3");
        $('#pictureTitle').css("background-image", "url(img/name_ultrasound.png)");
        $('#picture').css("background-image", "url(img/scene_younggirl_ultra.png)");
        animationController.kerryIn(true);
        $('#pictureBox').fadeIn();
    },

    mriChanging: function () {

        console.log(characterController.myCharacterName);

        resetForHotspot();
        gameController.nextFunction = "characterController.changeIntoGown";
        kerryController.setVideo("mri_hotspot1");
        animationController.kerryIn(true);
        var changeCountup = 0;

        $(document).on("gownChanged", function () {

            $(document).off("gownChanged");

            //     characterController.actions("gesture_small");
            animationController.kerryOut();
            $('#ftext').html(addspans("Your Mum and Dad can come in too!"));
            soundLoader.playSpeechSound("mri_5");

            animationController.characterIn("actionCompleted", true);

            $(document).on("textFinished", function () {
                $(document).off("textFinished");

                setTimeout(function () {
                    sceneController.getNext();
                }, 2000);

            });

        });
    },

    mriScanroom: function () {

        resetForHotspot();

        $('#audioClose').off();

        $('#pictureNext').hide();
        $('#pictureTitle').css("background-image", "url(img/box_mriroom.png)");
        $('#audioTitle').css("background-image", "url(img/box_mriroom.png)");
        $('#ftext').html("");
        kerryController.setVideo("mri_hotspot2");
        animationController.kerryIn(true);
        $(document).on("kerryFinished", countingPractice);
        thisCount = 0;
        var mouthArray = ["th", "oh", "ee", "ah"];
        numberArray = ["one...", "two...", "three...", "four...", "five...", "six...", "seven...", "eight...", "nine...", "ten..."];

        function countingPractice() {
            $(document).off("kerryFinished");
            animationController.kerryOut();
            $('#ftext').html(addspans("Try lying completely still for 10 seconds. I'll count! "));
            soundLoader.playSpeechSound("mri_8");

            $(document).on("textFinished", function () {
                $(document).off("textFinished");

                setTimeout(function () {
                    soundLoader.playSpeechSound("mri_9");
                    characterController.canSpeak = false;
                    countup();
                }, 1000);

            });
        }

        function countup() {
            if (thisCount < numberArray.length) {
                $('#ftext').html("<span class='highlightText'>" + numberArray[thisCount] + "</span>");
                console.log("nod when counting");
                characterController.actions("quick_nod");
                thismouth = mouthArray[Math.floor(Math.random() * mouthArray.length) + 0];
                characterController.actions(thismouth);
                thisCount++
                setTimeout(countup, 1000);
            } else {
                setTimeout(function () {
                    $('#ftext').html(addspans("Well done!"));
                    soundLoader.playSpeechSound("mri_10");
                    setTimeout(function () {
                        kerryVideo2();
                    }, 2000);
                }, 1000);
            }
        }

        function kerryVideo2() {
            $('#ftext').html("");
            kerryController.setVideo("mri_hotspot3");
            animationController.kerryIn(true);
            kerryController.playVideo();
            $('#pictureTitle').css("background-image", "url(img/box_headphones.png)");
            $('#picture').css("background-image", "url(img/headphones.jpg)");
            $('#pictureBox').fadeIn();
            $(document).on("kerryFinished", showAudioSpot);
        }

        function showAudioSpot() {
            $(document).off("kerryFinished");
            animationController.kerryOut();
            $('#pictureBox').fadeOut();
            $('#ftext').html(addspans("What do you think the scanner will sound like?"));
            soundLoader.playSpeechSound("mri_11");

            $(document).on("textFinished", function () {
                $(document).off("textFinished");
                $('#audioClose').hide();
                $('#audioBox').fadeIn();
                $('#ftext').html(addspans("Click on the button to listen!"));
                soundLoader.playSpeechSound("mri_12");
                playMRIsound();
            });

        }

        function playMRIsound() {
            $('#audioClose').off();
            $('#audioButton').on(gameController.touchType, function () {
                $('#audioClose').fadeIn();
                soundLoader.playSound("MRI", null, 50, false);
                $('#audioClose').on(gameController.touchType, function () {
                    $('#audioClose').off();
                    $('#audioButton').off();
                    characterController.canSpeak = false;
                    soundLoader.stopSound("MRI", null);
                    endSound();
                    $('#audioClose').fadeOut();
                });
                $(document).on("audioFinished", function () {
                    endSound();
                });

            });
        }

        function endSound() {
            $(document).off("audioFinished");
            $('#audioClose').off();
            $('#audioButton').off();
            characterController.canSpeak = false;

            setTimeout(function () {
                sceneController.getNext();
            }, 2000);

        }

    },

    mriMachine: function () {
        resetForHotspot();
        kerryController.setVideo("mri_hotspot4a");
        console.log("video 1 playing");

        animationController.kerryIn(true);
        $('#picture').css("background-image", "url(img/scene_" + characterController.myCharacterGender + "_mri.png)");
        $('#pictureNext').hide();
        $('#pictureTitle').css("background-image", "url(img/box_mrimachine.png)");
        $('#pictureBox').fadeIn();
        $(document).on("kerryFinished", kerrySecond);
        function kerrySecond() {
            $(document).off("kerryFinished");
            kerryController.setVideo("mri_hotspot4b");
            kerryController.playVideo();
            console.log("video 2 playing");
            $(document).on("kerryFinished", function () {
                $(document).off("kerryFinished");
                console.log("video 2 end");
                //sceneController.getNext();
                //					showImage();
                console.log("when did it show?");
                $('#pictureNext').show();
                $('#pictureNext').on(gameController.touchType, showPic);

            });

        }

        function showPic() {
            $('#pictureNext').off(gameController.touchType);
            $('#pictureNext').fadeOut();

            animationController.kerryOut();

            console.log(characterController.myCharacterName);

            if (characterController.myCharacterName == "boygown" || characterController.myCharacterName == "girlgown") {
                myimg = "child";
            } else {
                myimg = "adult";
            }

            console.log(myimg);
            $('#pictureTitle').css("background-image", "url(img/box_mri_head_scan.png)");
            $('#picture').css("background-image", "url(img/mrihead" + myimg + ".jpg)");
            $('#pictureBox').fadeIn();

            $('#ftext').html(addspans("This is what the picture looks like."));
            soundLoader.playSpeechSound("mri_15");

            $(document).on("textFinished", showWebLink);
        }

        function showWebLink() {
            $('#pictureNext').fadeIn();
            $('#pictureNext').show();

            console.log("this speech end");
            $(document).off("textFinished");
            $('#pictureNext').on(gameController.touchType, function () {
                $('#pictureNext').off(gameController.touchType);
                console.log("this is a charname = " + characterController.myCharacterName);
                if (characterController.myCharacterName == "boygown" || characterController.myCharacterName == "girlgown") {
                    showAppBlock();
                    //showlink();
                } else {
                    showlink();
                }

            });

        }

        function showlink() {
            $('#pictureBox').fadeOut();

            thislink = "http://www.nhs.uk/conditions/mri-scan/Pages/Introduction.aspx";

            $('#link a').text(thislink);
            $('#link a').attr("href", thislink);

            $('#ftext').html(addspans("If you would like to find out more about MRI, have a look at this website."));
            soundLoader.playSpeechSound("mri_21");

            $('#linkNext').hide();
            $('#linkBox').fadeIn();

            $(document).on("textFinished", showTheNext);

        }

        function showTheNext() {
            $(document).off("textFinished");
            console.log("fade in next link");
            $('#linkNext').show();
            $('#linkNext').on(gameController.touchType, function () {
                $('#linkNext').off(gameController.touchType);
                goend();
            });

        }

        function goend() {
            $('#linkBox').fadeOut();
            $('#pictureNext').off(gameController.touchType);
            showAppBlock();
        }

        function showAppBlock() {
            $('#pictureBox').fadeOut();
            $('#siemensappblock').fadeIn();

            $('#ftext').html("");

            $('#siemensappblock').on("click", function () {
                window.open('http://www.healthcare.siemens.co.uk/magnetic-resonance-imaging/mri-scan-experience', '_blank');
            });

            $('#footer_button').fadeIn();


            $('#footer_button').off(gameController.touchType);

            $('#footer_button').on(gameController.touchType, function () {
                $('#siemensappblock').off();
                $('#siemensappblock').fadeOut();
                $('#footer_button').off(gameController.touchType);
                $('#siemensappblock').fadeOut();
                sceneController.getNext();
                $('#footer_button').on(gameController.touchType, sceneController.getNext);


            });

        }

    }
};

function resetForHotspot() {
    clearTimeout(sceneController.naveHelpTimeOut);
    $('#hintbox').hide();
    $('#ftext').html("");
    characterController.canSpeak = false;
    $('#footer_home_button').hide();
    $('#footer_button').hide();
    sceneController.toggleHotspots(false);
}

