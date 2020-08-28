const video = document.getElementById('video');
const  stop = document.getElementById('stop');
// const pause = document.getElementById('pause');
const play = document.getElementById('play');
const progressBar = document.getElementById('progress');
const volume = document.getElementById('volume');



// Functions
// 1- toggle video to play or pause the video
// pause the video if playing 
// play the video if paused
function toggleVideo(){
    if(video.paused){
        video.play();
        
    }else{
        video.pause();
    }
}


// 2- Update Icon

function UpdateIcon(){
    if(video.paused){
        play.innerHTML = '<li class="fa fa-play fa-2x"></li>';
    }else{
        play.innerHTML = '<li class="fa fa-pause fa-2x"></li>';
    }

}

// 3- update Progress bar and the position of the bar
function updateProgress(){
    progressBar.value = video.currentTime/video.duration*100;
}

// 4- stop the the video and reset to zero
function stopVideo(){
    video.pause();
    video.currentTime =0;
    UpdateIcon();
}

// 5- setProgress change the video frames if progress bar has moved

function setProgress(){
    return true;
}




// Event listeners
// 1- Video Elementts - click to play and pause
video.addEventListener('click',toggleVideo);
// 2- Video Elements - pause to toggle play icon to pause icon
video.addEventListener('pause',UpdateIcon);
// 3- Video Elements -play to toggle pause icon back to play icon
video.addEventListener('play',UpdateIcon);
// 4- video Elements - update progress bar an timestamp
video.addEventListener('timeupdate',updateProgress);
// 5- play Button - click to play and pause the video
play.addEventListener('click',toggleVideo);
// 6- stop Button - click to stop the video
stop.addEventListener('click',stopVideo);
// 7- progress Bar - change position to change of playback
progressBar.addEventListener('change',setProgress);

