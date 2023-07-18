$(".category-choice").click(function() {
    $(".category-choice").removeClass("current");
    $(this).addClass("current");

    if($("#c1").hasClass("current")){
        $(".category").removeClass("active");
        $("#hardware").addClass("active")
    }
    else if($("#c2").hasClass("current")){
        $(".category").removeClass("active");
        $("#software").addClass("active")
    }
    else if($("#c3").hasClass("current")){
        $(".category").removeClass("active");
        $("#circuit").addClass("active")
    }
    else if($("#c4").hasClass("current")){
        $(".category").removeClass("active");
        $("#display").addClass("active")
    }
    else if($("#c5").hasClass("current")){
        $(".category").removeClass("active");
        $("#days").addClass("active")
    }
    else if($("#c6").hasClass("current")){
        $(".category").removeClass("active");
        $("#note").addClass("active")
    }
    else if($("#c7").hasClass("current")){
        $(".category").removeClass("active");
        $("#transition").addClass("active")
    }
});
