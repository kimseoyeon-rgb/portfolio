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
})