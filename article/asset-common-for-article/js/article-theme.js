function disableScroll(event) {
    event.preventDefault();
}

// 要素を取得
const zoom = document.querySelectorAll(".zoom");
const zoomback = document.getElementById("zoomback");
const zoomimg = document.getElementById("zoomimg");

// 一括でイベントリスナ
zoom.forEach(function(value) {
    value.addEventListener("click",kakudai);
});

function kakudai(e) {
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.addEventListener('mousewheel', disableScroll, { passive: false });
    
    // 拡大領域を表示
    zoomback.style.display = "flex";
    // 押された画像のリンクを渡す
    zoomimg.setAttribute("src",e.target.getAttribute("src"));
    zoomimg.classList.add("deka");
}


// 元に戻すイベントリスナを指定
zoomback.addEventListener("click",modosu);

// 拡大領域を無きものに
function modosu() {
    zoomback.style.display = "none";
    zoomimg.classList.remove("deka")

    document.removeEventListener('touchmove', disableScroll, { passive: false });
    document.removeEventListener('mousewheel', disableScroll, { passive: false });
}
