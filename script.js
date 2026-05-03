const playPauseBtn = document.getElementById('play-pause');
let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        playPauseBtn.innerText = "Play";
        console.log("Music Paused");
    } else {
        playPauseBtn.innerText = "Pause";
        console.log("Music Playing");
    }
    isPlaying = !isPlaying;
});
