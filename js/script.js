$(function () {
    $("#slide-open").click(function() {
        if($(".burgur").hasClass("on")) {
            $(".burgur").removeClass("on");
            $(".menu").removeClass("on");
            $(".blur-bg").removeClass("on");
        } else {
            $(".burgur").addClass("on");
            $(".menu").addClass("on");
            $(".blur-bg").addClass("on");
        }
    });

    $("#firstMenu").click(function() {
        $(".burgur").removeClass("on");
        $(".menu").removeClass("on");
        $(".blur-bg").removeClass("on");
    })
    $("#secondMenu").click(function() {
        $(".burgur").removeClass("on");
        $(".menu").removeClass("on");
        $(".blur-bg").removeClass("on");
    })
    $("#thirdMenu").click(function() {
        $(".burgur").removeClass("on");
        $(".menu").removeClass("on");
        $(".blur-bg").removeClass("on");
    })
    $("#fourthMenu").click(function() {
        $(".burgur").removeClass("on");
        $(".menu").removeClass("on");
        $(".blur-bg").removeClass("on");
    })
});

$(document).ready(function () {
    if ($(window).width() >= 1024) {
        function addClassOnScroll() {
            var scrollPoint1 = 450;
            var scrollPoint2 = 2600;
            var scrollPoint3 = 3860;
            var scrollPoint4 = 7200;
            var $target1 = $("#about-me .section-title"); 
            var $target2 = $("#myskills .section-title"); 
            var $target3 = $("#portfolio .section-title"); 
            var $target4 = $("#contact .section-title"); 

            if ($(window).scrollTop() >= scrollPoint1) {
                $target1.addClass("active");
            } else {
                $target1.removeClass("active");
            }
    
            if ($(window).scrollTop() >= scrollPoint2) {
                $target2.addClass("active");
            } else {
                $target2.removeClass("active");
            }
    
            if ($(window).scrollTop() >= scrollPoint3) {
                $target3.addClass("active");
            } else {
                $target3.removeClass("active");
            }
    
            if ($(window).scrollTop() >= scrollPoint4) {
                $target4.addClass("active");
            } else {
                $target4.removeClass("active");
            }
        }
        $(window).on("scroll", addClassOnScroll); 
    }
        
});

$(document).ready(function () {
    if ($(window).width() < 1024) {
        function addClassOnScroll() {
            var scrollPoint1 = 260; 
            var scrollPoint2 = 2000; 
            var scrollPoint3 = 3200; 
            var scrollPoint4 = 4900; 
            var $target1 = $("#about-me .section-title"); 
            var $target2 = $("#myskills .section-title"); 
            var $target3 = $("#portfolio .section-title"); 
            var $target4 = $("#contact .section-title"); 

            if ($(window).scrollTop() >= scrollPoint1) {
                $target1.addClass("active");
            } else {
                $target1.removeClass("active");
            }
    
            if ($(window).scrollTop() >= scrollPoint2) {
                $target2.addClass("active");
            } else {
                $target2.removeClass("active");
            }
    
            if ($(window).scrollTop() >= scrollPoint3) {
                $target3.addClass("active");
            } else {
                $target3.removeClass("active");
            }
    
            if ($(window).scrollTop() >= scrollPoint4) {
                $target4.addClass("active");
            } else {
                $target4.removeClass("active");
            }
        }
        $(window).on("scroll", addClassOnScroll); 
    };
});


$(document).ready(function () {
    $("#firstMenu").on("click", function (event) {
        event.preventDefault(); 

        var targetScroll = 800; 

        $("html, body").animate(
            { scrollTop: targetScroll },
            500 
        );
    });
    $("#secondMenu").on("click", function (event) {
        event.preventDefault(); 

        var targetScroll = 3040; 

        $("html, body").animate(
            { scrollTop: targetScroll },
            500 
        );
    });
    $("#thirdMenu").on("click", function (event) {
        event.preventDefault(); 

        var targetScroll = 4190; 

        $("html, body").animate(
            { scrollTop: targetScroll },
            500 
        );
    });
    $("#fourthMenu").on("click", function (event) {
        event.preventDefault(); 

        var targetScroll = 7700; 

        $("html, body").animate(
            { scrollTop: targetScroll },
            500 
        );
    });
});

$(document).ready(function() {
    $("#topbtn").click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 700);
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            $("#topbtn").fadeIn();
        } else {
            $("#topbtn").fadeOut();
        }
    });
});

$(function() {
    /* skills box hover */
    $(".squared-box").mouseover(function() {
        $(this).children(".black-square").addClass("skillHover");
        $(this).find(".skill-title").addClass("skillHover");
        $(this).find(".skill-title").children("strong").addClass("skillHover");
        $(this).find(".skill-title").children("h3").addClass("skillHover");
        $(this).find(".icon").addClass("skillHover");
        $(this).find(".hover-txt").addClass("skillHover");
        $(this).find(".hover-txt").children("p").addClass("skillHover");

    });
    $(".squared-box").mouseout(function() {
        $(this).children(".black-square").removeClass("skillHover");
        $(this).find(".skill-title").removeClass("skillHover");
        $(this).find(".skill-title").children("strong").removeClass("skillHover");
        $(this).find(".skill-title").children("h3").removeClass("skillHover");
        $(this).find(".hover-txt").removeClass("skillHover");

    })

    /* design-work-hover */
    $(".design-work-list").find("a").mouseover(function() {
        $(this).find(".hover-black-box").stop().addClass("hoverstyle");
    })
    $(".design-work-list").find("a").mouseout(function() {
        $(this).find(".hover-black-box").stop().removeClass("hoverstyle");
    })

    $(".design-work-list").find("a").mouseover(function() {
        $(this).find(".bgImg").stop().css("background-size", "110%");
    })
    $(".design-work-list").find("a").mouseout(function() {
        $(this).find(".bgImg").stop().css("background-size", "100%");
    })

    //web
    //modal open
    $(".btn-list").find("a").click(function() {
        $(".blur-bg").addClass("on");
        $("#modal").fadeIn();
        $("#modal").scrollTop(0);
        $("body").css("overflow", "hidden");
        $("#topbtn").css("display", "none");
    });
    $(".btn-list li:last-child a").click(function() {
        $(".blur-bg").removeClass("on");
        $("#modal").hide();
        $("body").css("overflow", "scroll");
        $("#topbtn").css("display", "block");
    })
    //img attr
    //web1
    $(".web-work-list > .goyohwa .project > a").click(function() {
        $("#modal img").attr({
            "src": "./images/project_GOYOHWA.jpg",
            "alt": "project_GOYOHWA"
        })
    });
    $(".web-work-list > .goyohwa .design-guide > a").click(function() {
        $("#modal img").attr({
            "src": "./images/Designguide_GOYOWHA.png",
            "alt": "DesignGuide_GOYOHWA"
        })
    })
    //web2
    $(".web-work-list > .darak .project > a").click(function() {
        $("#modal img").attr({
            "src": "./images/project_Darak.png",
            "alt": "project_DARAK"
        });
    });
    $(".web-work-list > .darak .design-guide > a").click(function() {
        $("#modal img").attr({
            "src": "./images/darak_designguide.jpg",
            "alt": "DesignGuide_DARAK"
        });
    });
    //web3
    $(".web-work-list > .salady .project > a").click(function() {
        $("#modal img").attr({
            "src": "./images/salady_pageview.png",
            "alt": "project_salady"
        });
    });
    $(".web-work-list > .salady .design-guide > a").click(function() {
        $("#modal img").attr({
            "src": "./images/salady_pageview.png",
            "alt": "DesignGuide_salady"
        });
    });

    //design
    /* modal open */
    $(".design-work-list").find("a").click(function() {
        $(".blur-bg").addClass("on");
        $("#modal").fadeIn();
        $("#modal").scrollTop(0);
        $("body").css("overflow", "hidden");
        $("#topbtn").css("display", "none");
    })

    // img attr
    $("#detail").closest("a").click(function() {
        $("#modal").find("img").attr({
            "src": "./images/work_detailpage.png",
            "alt": "work_detialpage"
        });
    });
    $("#package").closest("a").click(function() {
        $("#modal").find("img").attr({
            "src": "./images/work_Package.jpg",
            "alt": "work_Package"
        });
    });
    $("#banner").closest("a").click(function() {
        $("#modal").find("img").attr({
            "src": "./images/work_banner.png",
            "alt": "work_banner"
        });
    });
    $("#cardnews").closest("a").click(function() {
        $("#modal").find("img").attr({
            "src": "./images/work_cardnews.jpg",
            "alt": "work_cardnews"
        });
    });
    $("#characterDrawing").closest("a").click(function() {
        $("#modal").find("img").attr({
            "src": "./images/work_drawing.jpg",
            "alt": "work_Drawing"
        });
    });
    $("#infographic").closest("a").click(function() {
        $("#modal").find("img").attr({
            "src": "./images/work_infographic.jpg",
            "alt": "work_infographic"
        });
    });

    /* close btn */
    $("#close-btn").click(function() {
        $(".blur-bg").removeClass("on");
        $("#modal").fadeOut();
        $("body").css("overflow", "scroll");
    })

})







