var countDownDate = new Date("may 27, 2022 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("Days").innerHTML =days;
    document.getElementById("Hours").innerHTML =hours;
    document.getElementById("Minutes").innerHTML =minutes;
    document.getElementById("Seconds").innerHTML =seconds;

    if(timeleft<0){
        clearInterval(x);
        document.getElementById("Days").innerHTML ="HAPPY";
        document.getElementById("Hours").innerHTML ="BIRTHDAY";
        document.getElementById("Minutes").innerHTML ="YUVATHARAK";
        document.getElementById("Seconds").innerHTML ="RAM";
    }
},1000);
