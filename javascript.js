let whit1 = new Audio();
let whit2 = new Audio();
let whit3 = new Audio();
let whit4 = new Audio();
let whit5 = new Audio();
let whit6 = new Audio();
let whit7 = new Audio();
const white0 = document.getElementById("w0");
whit1.src = 'pianowhite/piano-ff-010.wav'
white0.addEventListener('click', play1);
function play1(){
    whit1.play();

    setTimeout(function(){
        whit1.pause();
        whit1.currentTime = 0;
    }, 1000)
}
const white1 = document.getElementById("w1");
whit2.src = 'pianowhite/piano-ff-020.wav'
white1.addEventListener('click', play2);
function play2(){
    whit2.play();

    setTimeout(function(){
        whit2.pause();
        whit2.currentTime = 0;
    }, 1000);
}
const white2 = document.getElementById("w2");
whit3.src = 'pianowhite/piano-ff-030.wav'
white2.addEventListener('click', play3);
function play3(){
    whit3.play();

    setTimeout(function(){
        whit3.pause();
        whit3.currentTime = 0;
    }, 1000)
}
const white3 = document.getElementById("w3");
whit4.src = 'pianowhite/piano-ff-040.wav'
white3.addEventListener('click', play4);
function play4(){
    whit4.play();

    setTimeout(function(){
        whit4.pause();
        whit4.currentTime = 0;
    }, 1000)
}
const white4 = document.getElementById("w4");
whit5.src = 'pianowhite/piano-ff-050.wav'
white4.addEventListener('click', play5);
function play5(){
    whit5.play();

    setTimeout(function(){
        whit5.pause();
        whit5.currentTime = 0;
    }, 1000)
}
const white5 = document.getElementById("w5");
whit6.src = 'pianowhite/piano-ff-060.wav'
white5.addEventListener('click', play6);
function play6(){
    whit6.play();

    setTimeout(function(){
        whit6.pause();
        whit6.currentTime = 0;
    }, 1000)
}
const white6 = document.getElementById("w6");
whit7.src = 'pianowhite/piano-ff-064.wav'
white6.addEventListener('click', play7);
function play7(){
    whit7.play();

    setTimeout(function(){
        whit7.pause();
        whit7.currentTime = 0;
    }, 1000)
}

const black1 = document.getElementById("b1");
const black2 = document.getElementById("b2");
const black3 = document.getElementById("b3");
const black4 = document.getElementById("b4");
const black5 = document.getElementById("b5");
