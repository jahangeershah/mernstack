{/* <script src="https://vjs.zencdn.net/7.8.4/video.js"></script> */}

// const videojs = document.querySelector('.video');

const video = document.getElementById('video');
const  stop = document.getElementById('stop');
// const pause = document.getElementById('pause');
const play = document.getElementById('play');
const progressBar = document.getElementById('progress');
const volume = document.getElementById('volume');
const fullScreen = document.getElementById('fullScreen')
const volumeControls = document.getElementById('volume');



// video quality controls
// forward and backword 5 seconds
// full screen function
function toggleFullScreen(){
	if(video.requestFullScreen){
		video.requestFullScreen();
	} else if(video.webkitRequestFullScreen){
		video.webkitRequestFullScreen();
	} else if(video.mozRequestFullScreen){
		video.mozRequestFullScreen();
    }
    // videojs.FullscreenToggle();
}
// 





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
    // sepreting minutes only
    let Minutes = Math.floor(video.currentTime / 60) ;
    if(Minutes<10 ){
        Minutes = `0${Minutes}`;
    }
    // sperating seconds 
    let Seconds = Math.floor(video.currentTime % 60);
    if(Seconds<10 ){
        Seconds = `0${Seconds}`;
    }

    document.querySelector('.timestamp').innerHTML = `${Minutes}:${Seconds}`;
    console.log(Seconds)



}

// 4- stop the the video and reset to zero
function stopVideo(){
    video.pause();
    video.currentTime =0;
    UpdateIcon();
}

// 5- setProgress change the video frames if progress bar has moved

function setProgress(){
   video.currentTime = progressBar.value * video.duration /100 ;

}

function volumeIconUpdate(){
    if(video.muted==false){
        volumeControls.innerHTML = '<i class="fas fa-volume-up fa-2x"></i>'; 
    }else{
        volumeControls.innerHTML = '<i class="fas fa-volume-mute fa-2x"></i>'; 

    }
}
// volume controls Mute and Unmute
function toggleVolume(){
    if(video.muted){
        video.muted = false;
        volumeIconUpdate();
    }else{
        video.muted = true;
        volumeIconUpdate();
    }
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
fullScreen.addEventListener('click',toggleFullScreen);
volumeControls.addEventListener('click',toggleVolume);

