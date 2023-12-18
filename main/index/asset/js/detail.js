var gridArticle = document.getElementById("grid-article");
var articleCount = gridArticle.childElementCount;
console.log(articleCount);

gridArticle.style.height = String(articleCount * 240)+"px";