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

/* 스크롤위치값 뽑기 --> 작업용입니다 */
$(document).ready(function () {
    $(document).on("mousedown", function (event) {
        if (event.which === 1) { // 마우스 좌클릭 (1: 좌클릭, 2: 휠클릭, 3: 우클릭)
            var scrollPosition = $(window).scrollTop();
            console.log("현재 스크롤 위치: " + scrollPosition + "px");
        }
    });
});


$(document).ready(function () {
    if ($(window).width() >= 1024) {
        function addClassOnScroll() {
            var scrollPoint1 = 450; // 스크롤 기준값
            var scrollPoint2 = 2600; // 스크롤 기준값
            var scrollPoint3 = 3860; // 스크롤 기준값
            var scrollPoint4 = 7200; // 스크롤 기준값
            var $target1 = $("#about-me .section-title"); // 클래스를 추가할 요소
            var $target2 = $("#myskills .section-title"); // 클래스를 추가할 요소
            var $target3 = $("#portfolio .section-title"); // 클래스를 추가할 요소
            var $target4 = $("#contact .section-title"); // 클래스를 추가할 요소

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
        $(window).on("scroll", addClassOnScroll); // 스크롤 이벤트에 함수 연결
    }
        
});

$(document).ready(function () {
    if ($(window).width() < 1024) {
        function addClassOnScroll() {
            var scrollPoint1 = 260; // 스크롤 기준값
            var scrollPoint2 = 2000; // 스크롤 기준값
            var scrollPoint3 = 3200; // 스크롤 기준값
            var scrollPoint4 = 4900; // 스크롤 기준값
            var $target1 = $("#about-me .section-title"); // 클래스를 추가할 요소
            var $target2 = $("#myskills .section-title"); // 클래스를 추가할 요소
            var $target3 = $("#portfolio .section-title"); // 클래스를 추가할 요소
            var $target4 = $("#contact .section-title"); // 클래스를 추가할 요소

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
        $(window).on("scroll", addClassOnScroll); // 스크롤 이벤트에 함수 연결
    };
});


$(document).ready(function () {
    $("#firstMenu").on("click", function (event) {
        event.preventDefault(); // 기본 앵커 기능 제거

        var targetScroll = 800; // 이동할 스크롤 위치(px)

        $("html, body").animate(
            { scrollTop: targetScroll },
            500 // 애니메이션 속도 (ms)
        );
    });
    $("#secondMenu").on("click", function (event) {
        event.preventDefault(); // 기본 앵커 기능 제거

        var targetScroll = 3040; // 이동할 스크롤 위치(px)

        $("html, body").animate(
            { scrollTop: targetScroll },
            500 // 애니메이션 속도 (ms)
        );
    });
    $("#thirdMenu").on("click", function (event) {
        event.preventDefault(); // 기본 앵커 기능 제거

        var targetScroll = 4190; // 이동할 스크롤 위치(px)

        $("html, body").animate(
            { scrollTop: targetScroll },
            500 // 애니메이션 속도 (ms)
        );
    });
    $("#fourthMenu").on("click", function (event) {
        event.preventDefault(); // 기본 앵커 기능 제거

        var targetScroll = 7700; // 이동할 스크롤 위치(px)

        $("html, body").animate(
            { scrollTop: targetScroll },
            500 // 애니메이션 속도 (ms)
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
    /* skills 호버 효과 */
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

    //웹
    //모달 열려려
    $(".btn-list").find("a").click(function() {
        $(".blur-bg").addClass("on");
        $("#modal").fadeIn();
        $("body").css("overflow", "hidden");
        $("#topbtn").css("display", "none");
    });
    $(".btn-list li:last-child a").click(function() {
        $(".blur-bg").removeClass("on");
        $("#modal").hide();
        $("body").css("overflow", "scroll");
        $("#topbtn").css("display", "block");
    })
    //각 버튼마다 이미지 바꾸기
    //고요화
    $(".web-work-list > .goyohwa #project > a").click(function() {
        $("#modal img").attr({
            "src": "./images/project_GOYOHWA.jpg",
            "alt": "project_GOYOHWA"
        })
    });
    $(".web-work-list > .goyohwa #design-guide > a").click(function() {
        $("#modal img").attr({
            "src": "./images/Designguide_GOYOWHA.png",
            "alt": "DesignGuide_GOYOHWA"
        })
    })
    //다락
    $(".web-work-list > .darak #project > a").click(function() {
        $("#modal img").attr({
            "src": "./images/project_Darak.png",
            "alt": "project_DARAK"
        });
    });

    //디자인
    /* 모달 열기 */
    $(".design-work-list").find("a").click(function() {
        $(".blur-bg").addClass("on");
        $("#modal").fadeIn();
        $("body").css("overflow", "hidden");
        $("#topbtn").css("display", "none");
    })

    // 각 이미지 바꾸기
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

    /* 모달 닫기 */
    $("#close-btn").click(function() {
        $(".blur-bg").removeClass("on");
        $("#modal").fadeOut();
        $("body").css("overflow", "scroll");
    })

})







