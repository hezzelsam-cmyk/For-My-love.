const emojis = ["❤️","💖","💘","💍","💕"];

/* ========================= */
/* FLOATING EMOJIS SYSTEM */
/* ========================= */

function spawnEmoji() {
  const e = document.createElement("div");
  e.classList.add("emoji");

  e.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  e.style.left = Math.random() * 100 + "vw";
  e.style.fontSize = (Math.random() * 18 + 18) + "px";
  e.style.animationDuration = (Math.random() * 3 + 3) + "s";

  document.body.appendChild(e);

  setTimeout(() => {
    e.remove();
  }, 6000);
}

setInterval(spawnEmoji, 250);

/* ========================= */
/* ENVELOPE OPEN FUNCTION */
/* ========================= */

function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  const letter = document.querySelector(".letter");

  if (envelope && letter) {
    envelope.style.display = "none";
    letter.style.display = "block";
  }
}
