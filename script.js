console.log("Welcome to Spotify");



let audioElement = new Audio('songs/2.mp3');

let songs = [
    {filePath:"songs/1.mp3"},
    {filePath:"songs/2.mp3"},
    {filePath:"songs/3.mp3"},
]

// audioElement.play();

masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})

let progress;
let myProgressBar = document.getElementById("myProgressBar");
audioElement.addEventListener('timeupdate', ()=>{
    console.log("timeUpdate");
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/100);
})
