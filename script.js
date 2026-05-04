const volumeSlider = document.getElementById('volume-slider');
const volDown = document.getElementById('vol-down');
const volUp = document.getElementById('vol-up');

volDown.addEventListener('click', () => {
    volumeSlider.value = parseInt(volumeSlider.value) - 10;
});

volUp.addEventListener('click', () => {
    volumeSlider.value = parseInt(volumeSlider.value) + 10;
});
