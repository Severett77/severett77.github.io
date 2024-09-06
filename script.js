const canvas = document.getElementById('binaryCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const binary = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;

// Create array for rain drops
const rainDrops = Array(Math.floor(columns)).fill(1);

const draw = () => {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Fade effect for smooth transition
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00BFFF'; // Blue color for binary
  ctx.font = `${fontSize}px monospace`;

  // Loop through the drops and draw binary code
  rainDrops.forEach((y, index) => {
    const text = binary[Math.floor(Math.random() * binary.length)];
    const x = index * fontSize;
    ctx.fillText(text, x, y * fontSize);

    // Randomly reset rain drops when they reach the bottom
    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[index] = 0;
    }

    rainDrops[index]++;
  });
};

// Animate the falling binary
setInterval(draw, 33);

// Resize canvas when window is resized
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
