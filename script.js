const playPauseBtn = document.getElementById('play-pause');
let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        playPauseBtn.innerText = "▶️"; 
        console.log("Music Paused");
    } else {
        playPauseBtn.innerText = "⏸️"; 
        console.log("Music Playing");
    }
    isPlaying = !isPlaying;
});
