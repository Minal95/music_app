console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Let Me Love You", filePath: "2.mp3", coverPath: "c2.jpg"},
    {songName: "Rom Rom", filePath: "3.mp3", coverPath: "c3.jpg"},
    {songName: "Rihaayi", filePath: "4.mp3", coverPath: "c4.jpg"},
    {songName: "Zinda hun toh", filePath: "5.mp3", coverPath: "c5.jpg"},
    {songName: "Besharam Rang", filePath: "6.mp3", coverPath: "c6.jpg"},
    {songName: "Badmosh Chora", filePath: "7.mp3", coverPath: "c7.jpg"},
    {songName: "Baby mere bdy pe", filePath: "8.mp3", coverPath: "c8.jpg"},
    {songName: "Kesariya", filePath: "9.mp3", coverPath: "c9.jpg"},
    {songName: "Achi Maza Aayi", filePath: "10.mp3", coverPath: "c10.jpg"},

]

songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})



// audioElement.play();

// Handle Play Pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;

    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");

    })
    

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target)
        makeAllPlays()
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `songs/${songIndex+2}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex = 0
    }
    else{
    songIndex += 1;
}
audioElement.src = `songs/${songIndex+2}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
    songIndex -= 1;
}
audioElement.src = `songs/${songIndex+2}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})