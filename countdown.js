let countDownDate = new Date("Aug 15, 2022 00:00:00").getTime();

let x = setInterval(function () {

    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let daysString = '00';
    let hoursString = '00';
    let minutesString = '00';
    let secondsString = '00';
    if (distance < 0) {
        clearInterval(x);
    } else {
        daysString = days.toString();
        hoursString = hours.toString();
        minutesString = minutes.toString();
        secondsString = seconds.toString();
    }


    document.getElementById("doms-countdown__days").innerHTML = daysString;
    document.getElementById("doms-countdown__hours").innerHTML = hoursString;
    document.getElementById("doms-countdown__minutes").innerHTML = minutesString;
    document.getElementById("doms-countdown__seconds").innerHTML = secondsString;

}, 1000);
