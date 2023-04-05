/*
    Countdown Timer till 15 APR, 2024 10:00AM
*/

var countDownDate = new Date("Apr 15, 2024 10:00:00").getTime();

var x = setInterval(()=> {
    var now = new Date().getTime();
    var mildistance = countDownDate - now;
    var distance = Math.floor(mildistance/1000);
    var days = Math.floor(distance/(60*60*24));
    var hours = Math.floor((distance%(60*60*24))/(60*60));
    var minutes = Math.floor((distance%(60*60))/(60));
    var seconds = Math.floor((distance%(60)));

    document.getElementById("timer").textContent = 
    `${days} days ${hours} hrs ${minutes} mins ${seconds} secs`

    if(distance < 0) {
        clearInterval(x);
        document.getElementById("timer").textContent = "Married!";

    }
}, 1000);

/*
    NavBar Event Listeners
*/

document.getElementById("home_btn").addEventListener(
    "click",
    ()=>document.location.href="./index.html"
);

document.getElementById("RSVP_btn").addEventListener(
    "click",
    ()=>document.location.href="./rsvp.html"
);
document.getElementById("photos_btn").addEventListener(
    "click",
    ()=>document.location.href="./photos.html"
)