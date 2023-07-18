$(".openbtn").click(function (){
    $(this).toggleClass('active');
    $("#blackover").toggleClass('active');

    $("#menu").toggleClass('panelactive');
    $(".circle-bg").toggleClass('circleactive');
});

$("#blackover").click(function (){
    $(".openbtn").removeClass('active');
    $("#blackover").removeClass('active');
    $("#menu").removeClass('panelactive');
    $(".circle-bg").removeClass('circleactive');
});

$("#menu ul li a").click(function (){
    $(".openbtn").removeClass('active');
    $("#menu").removeClass('panelactive');
    $(".circle-bg").removeClass('circleactive');
    $("#blackover").removeClass('active');
});

function PageTopAnime() {
    var scroll = $(window).scrollTop();

    if(scroll >= 400){   //上から400pxスクロールしたら
        $('#page-top').removeClass('DownMove');
        $('#page-top').addClass('UpMove');
    }
    else{
        if($('#page-top').hasClass('UpMove')){
            $('#page-top').removeClass('UpMove');
            $('#page-top').addClass('DownMove');
        }
    }
}

$(window).scroll(function (){
    PageTopAnime();
});

$(window).on('load', function() {
    PageTopAnime();
    var memo;
    memo =
`・サムネイル画像は必ず縦横比4:9で揃えること
・記事ページの下部にハートマークのボタンを設け、押された数だけいいねがつく
・プロフィールページにTwitterとGitHubのアカウントへのリンクを貼付すること
・インデックスぺージの最新記事で5本または6本記事を並べると下の「次の記事へ」ボタンなどの位置がずれる

From asset-common/js/theme.js`;

    alert(memo);
})
