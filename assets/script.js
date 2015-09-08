
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ms = today.getMilliseconds();
    if (s < 10){
        s = "0" + s;
    }
    if (h < 10){
        h = "0" + h;
    }
    if (m < 10){
        m = "0" + m;
    }
    var partSecond = ((ms/1000)*100);
    var pctSecond = (partSecond + "%");
    var partMinute = ((s/60)*100);
    var pctMinute = (partMinute + "%");
    var hexValue = parseInt(h + m + s).toString(16);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    document.getElementById("second-fraction").innerHTML = pctSecond;

    console.log (h + ":" + m + ":" + s);
    console.log (((s/60)*100) + "%");
    console.log (hexValue);

document.getElementById("progress-bar").style.width = pctMinute;
document.getElementById("time").style.background = "#" + hexValue;

}


t = window.setInterval(startTime, 500);

