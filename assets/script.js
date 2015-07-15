function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if (s < 10){
        s = "0" + s;
    }
    if (h < 10){
        h = "0" + h;
    }
    if (m < 10){
        m = "0" + m;
    }

    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startTime();
    }, 500);
console.log (h + ":" + m + ":" + s);
console.log (((s/60)*100) + "%");
console.log (parseInt((h + m + s), 16));
}
startTime();

