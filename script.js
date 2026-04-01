const videoElement = document.getElementById("kittenVideo");
const nextButton = document.getElementById("nextKitten");

// Public kitten videos
const kittenVideos = [
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/bee.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4"
];

function playRandomKitten() {
    const randomIndex = Math.floor(Math.random() * kittenVideos.length);
    videoElement.src = kittenVideos[randomIndex];
    videoElement.play();
}

// First video on load
playRandomKitten();

// Next kitten on button click
nextButton.addEventListener("click", playRandomKitten);
