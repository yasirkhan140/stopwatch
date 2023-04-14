// initial the value
var seconds=0;
var min =0;
var tens =0;
// get the html element
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var appendMin = document.getElementById("min");
// get the btn from html by id
var startBtn = document.getElementById("btn-start");
var stopBtn = document.getElementById("btn-stop");
var resetBtn = document.getElementById("btn-reset");
// store the time 
var timer;

// this function  is start the timer
function startTimer(){
    // increase the tens
    tens++;
    // if tens in one digit
    if(tens<9){
        // change the tens value to 10.
        appendTens.innerHTML = 0+tens;
    }
    // if tend in two digit
    if(tens>9){
        // change the tens value to 99
        appendTens.innerHTML = tens;
    }
    // if tens is 100 then tens is zero and chamge the second
    if(tens>99){
        // increase the second
        seconds++;
        //change the second the value
        appendSeconds.innerHTML= "0"+seconds;
        // tens value =  zero.
        tens =0;
        // change the tens to zero;
        appendTens.innerHTML= "0"+0;
    }
    // if second value is in two digit .
    if(seconds>9){
        // change the second value
        appendSeconds.innerHTML =0+seconds;
    }
    // if second is greater than 59 or equal to 60.
    if(seconds>59){
        // increasre the tens value
        min++;
        // change the min value
        appendMin.innerHTML = "0"+min;
        // set the second value to zero
        seconds=0;
        // change the second value to zero.
        appendSeconds.innerHTML="0"+0
    }
}
// om click the start btn set the interval and call the startTimer function 
startBtn.onclick=function(){
    timer = setInterval(startTimer,10);
}
// on click the stop the btn claer the interval.
stopBtn.onclick= function(){
    clearInterval(timer);
}
// on click the reset btn clear the interval and change and set the value to zero for all second, tens and min in variable as well as in html.
resetBtn.onclick= function(){
    clearInterval(timer);
    tens=00;
    min=00;
    seconds=00;
    appendMin.innerHTML="0"+min;
    appendSeconds.innerHTML ="0"+seconds;
    appendTens.innerHTML="0"+tens;
}