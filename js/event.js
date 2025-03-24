$(function () {
    $("#slide-open").click(function() {
        if($(".burgur").hasClass("on")) {
            $(".burgur").removeClass("on");
            $(".menu").removeClass("on")
        } else {
            $(".burgur").addClass("on");
            $(".menu").addClass("on");
        }
    });

    $("#firstMenu").click(function() {
        $(".burgur").removeClass("on");
        $(".menu").removeClass("on");
    })
    $("#secondMenu").click(function() {
        $(".burgur").removeClass("on");
        $(".menu").removeClass("on");
    })
    $("#thirdMenu").click(function() {
        $(".burgur").removeClass("on");
        $(".menu").removeClass("on");
    })
    $("#fourthMenu").click(function() {
        $(".burgur").removeClass("on");
        $(".menu").removeClass("on");
    })
});

$(document).ready(function () {
    $(document).on("mousedown", function (event) {
        if (event.which === 1) { // 마우스 좌클릭 (1: 좌클릭, 2: 휠클릭, 3: 우클릭)
            var scrollPosition = $(window).scrollTop();
            console.log("현재 스크롤 위치: " + scrollPosition + "px");
        }
    });
});


$(document).ready(function () {
    function addClassOnScroll() {
        var scrollPoint1 = 400; // 스크롤 기준값
        var scrollPoint2 = 2500; // 스크롤 기준값
        var scrollPoint3 = 3600; // 스크롤 기준값
        var scrollPoint4 = 7100; // 스크롤 기준값
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







