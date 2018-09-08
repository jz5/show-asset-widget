const timer = setInterval(timer_tick, 500);
var prevId;
var div = document.createElement("div");
var footer = document.getElementsByTagName("hr")[0];
footer.insertBefore(div, footer.firstChild);

function timer_tick() {
    var result = document.documentElement.innerHTML.match(/assetstore_package_(\d+)/);
    if (!result) return;

    var id = result[1];
    if (prevId === id) return;

    div.innerHTML = '<iframe src="https://api.assetstore.unity3d.com/affiliate/embed/package/' + id + '/widget-wide-light?aid=1011l478Q" style="width:600px; height:130px; border:0px;"></iframe>';
    prevId = id;
}
