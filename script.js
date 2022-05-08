console.log("page loaded...");


function playVid(x) {
    x.play();
}

function pauseVid(x) {
    x.pause();
    x.currentTime = 0;
}