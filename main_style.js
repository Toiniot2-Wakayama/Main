$(".openbtn").click(function(){  //ボタンがクリックされたら
    $(this).toggleClass('active');  //ボタン自身にactiveクラスを付与し
    $("#g-nav").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function(){ //ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');    //ボタンのactiveクラスを除去し
    $("#g-nav").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスも除去
});


$(".art-img").click(function(){  //ボタンがクリックされたら
    $(".background").toggleClass('active');  //ボタン自身にactiveクラスを付与し
    $(".art-img-popup").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
    $(".xmark").toggleClass('active');
    
});

$(".xmark").click(function(){ //ナビゲーションのリンクがクリックされたら
    $(".background").removeClass('active');    //ボタンのactiveクラスを除去し
    $(".art-img-popup").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスも除去
    $(".xmark").removeClass('active'); //ナビゲーションのpanelactiveクラスも除去
});


$(".art-img2").click(function(){  //ボタンがクリックされたら
    $(".background").toggleClass('active');  //ボタン自身にactiveクラスを付与し
    $(".art-img2-popup").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
    $(".xmark").toggleClass('active');
    
});


$(".xmark").click(function(){ //ナビゲーションのリンクがクリックされたら
    $(".background").removeClass('active');    //ボタンのactiveクラスを除去し
    $(".art-img2-popup").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスも除去
    $(".xmark").removeClass('active'); //ナビゲーションのpanelactiveクラスも除去
});

$(".art-img3").click(function(){  //ボタンがクリックされたら
    $(".background").toggleClass('active');  //ボタン自身にactiveクラスを付与し
    $(".art-img3-popup").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
    $(".xmark").toggleClass('active');
    
});

$(".xmark").click(function(){ //ナビゲーションのリンクがクリックされたら
    $(".background").removeClass('active');    //ボタンのactiveクラスを除去し
    $(".art-img3-popup").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスも除去
    $(".xmark").removeClass('active'); //ナビゲーションのpanelactiveクラスも除去
});


$(".art-img4").click(function(){  //ボタンがクリックされたら
    $(".background").toggleClass('active');  //ボタン自身にactiveクラスを付与し
    $(".art-img4-popup").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
    $(".xmark").toggleClass('active');
    
});

$(".xmark").click(function(){ //ナビゲーションのリンクがクリックされたら
    $(".background").removeClass('active');    //ボタンのactiveクラスを除去し
    $(".art-img4-popup").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスも除去
    $(".xmark").removeClass('active'); //ナビゲーションのpanelactiveクラスも除去
});


$(".art-img5").click(function(){  //ボタンがクリックされたら
    $(".background").toggleClass('active');  //ボタン自身にactiveクラスを付与し
    $(".art-img5-popup").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
    $(".xmark").toggleClass('active');
    
});

$(".xmark").click(function(){ //ナビゲーションのリンクがクリックされたら
    $(".background").removeClass('active');    //ボタンのactiveクラスを除去し
    $(".art-img5-popup").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスも除去
    $(".xmark").removeClass('active'); //ナビゲーションのpanelactiveクラスも除去
});





$(".code").click(function(){  //ボタンがクリックされたら
    $(".programcontainer").toggleClass('active');  //ボタン自身にactiveクラスを付与
    $(".code").toggleClass('active');  //ボタン自身にactiveクラスを付与
    $(".codeclose").toggleClass('active');  //ボタン自身にactiveクラスを付与
    
});

$(".codeclose").click(function(){ //ナビゲーションのリンクがクリックされたら
    $(".programcontainer").removeClass('active');    //ボタンのactiveクラスを除去
    $(".code").removeClass('active');    //ボタンのactiveクラスを除去
    $(".codeclose").removeClass('active');    //ボタンのactiveクラスを除去
});