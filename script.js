console.log("Welcome to Spotify");
let songIndex=0;
let audioEliment = new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songs=[
    {songName:"bgm",filePath:"1.mp3",coverPath:"covers1.jpg"},
    {songName:"bgm",filePath:"1.mp3",coverPath:"covers1.jpg"},
    {songName:"bgm",filePath:"1.mp3",coverPath:"covers1.jpg"},
    {songName:"bgm",filePath:"1.mp3",coverPath:"covers1.jpg"},
    {songName:"bgm",filePath:"1.mp3",coverPath:"covers1.jpg"},
    {songName:"bgm",filePath:"1.mp3",coverPath:"covers1.jpg"},
    {songName:"bgm",filePath:"1.mp3",coverPath:"covers1.jpg"},
    {songName:"bgm",filePath:"1.mp3",coverPath:"covers1.jpg"},
    {songName:"bgm",filePath:"1.mp3",coverPath:"covers1.jpg"},
]

masterPlay.addEventListener('click',()=>{
    if(audioEliment.paused || audioEliment.currentTime <=0){
        audioEliment.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioEliment.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

})

audioEliment.addEventListener('timeupdate',()=>{
   console.log('timeupdate');
   progress=parseInt((audioEliment.currentTime/audioEliment.duration)*100);
   //console.log(progress);
   myProgressBar.value=progress
})
myProgressBar.addEventListener('change',()=>{
    audioEliment.currentTime=myProgressBar.value *audioEliment.duration/100;
})
 