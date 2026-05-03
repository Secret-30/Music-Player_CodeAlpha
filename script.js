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
input[type=range] {
    width: 100%;
    margin: 15px 0;
    cursor: pointer;
}
/* Style the labels */
label { font-size: 12px; color: #555; }
