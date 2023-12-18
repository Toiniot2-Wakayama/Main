var gridArticle = document.getElementById("grid-article");
var articleCount = gridArticle.childElementCount;
console.log(articleCount);

var windowWidth = $(window).width();
var windowSm = 768;
if (windowWidth <= windowSm) {
    gridArticle.style.height = String(articleCount * 260)+"px";
}
else{
    gridArticle.style.height = String(Math.ceil(articleCount / 2) * 500)+"px";
}
