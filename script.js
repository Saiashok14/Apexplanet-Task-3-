const images = [
    "images/IMG-20250612-WA0003.jpg",
    "images/IMG-20250612-WA0004.jpg",
    "images/IMG-20250612-WA0006.jpg",
    "images/IMG-20250612-WA0005.jpg"
];

let currentImageIndex = 0;
const carouselImage = document.getElementById("carousel-image");

function showImage(index) {
    carouselImage.src = images[index];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").innerText = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            document.getElementById("joke").innerText = "Oops! Could not fetch a joke.";
            console.error("Error fetching joke:", error);
        });
}

function submitQuiz() {
    const answers = {
        q1: "c",
        q2: "b",
        q3: "b"
    };

    let score = 0;
    for (let q in answers) {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === answers[q]) {
            score++;
        }
    }

    document.getElementById("quiz-result").innerText = `You scored ${score}/3!`;
    document.getElementById("quiz-completion").style.display = "block";
}

showImage(currentImageIndex);
