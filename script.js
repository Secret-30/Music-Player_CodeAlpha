// Get all buttons
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const volDown = document.getElementById('vol-down');
const volUp = document.getElementById('vol-up');
const volumeSlider = document.getElementById('volume-slider');

let isPlaying = false;

// Play/Pause logic
playPauseBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playPauseBtn.innerText = isPlaying ? "⏸️" : "▶️";
    console.log(isPlaying ? "Music Playing" : "Music Paused");
});

// Previous/Next logic
prevBtn.addEventListener('click', () => console.log("Previous song"));
nextBtn.addEventListener('click', () => console.log("Next song"));

// Volume logic
volDown.addEventListener('click', () => {
    volumeSlider.value = parseInt(volumeSlider.value) - 10;
});
volUp.addEventListener('click', () => {
    volumeSlider.value = parseInt(volumeSlider.value) + 10;
});
