const title = document.getElementById("title");
const subtitle = document.querySelector(".subtitle");
const text = title.textContent;

// Découpe le texte en lettres individuelles (<span>)
function splitLetters() {
  title.innerHTML = "";
  [...text].forEach((char) => {
    const span = document.createElement("span");
    span.className = "letter";
    span.textContent = char === " " ? " " : char;
    title.appendChild(span);
  });
}

// Fait apparaître les lettres une par une
function animateIn() {
  splitLetters();
  subtitle.classList.remove("visible");

  const letters = title.querySelectorAll(".letter");
  letters.forEach((letter, i) => {
    setTimeout(() => letter.classList.add("visible"), i * 80);
  });

  setTimeout(() => subtitle.classList.add("visible"), letters.length * 80 + 400);
}

// Petite vague continue sur les lettres
function wave() {
  const letters = title.querySelectorAll(".letter.visible");
  letters.forEach((letter, i) => {
    letter.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-15px)" },
        { transform: "translateY(0)" },
      ],
      { duration: 600, delay: i * 60, easing: "ease-in-out" }
    );
  });
}

title.addEventListener("click", animateIn);

animateIn();
setInterval(wave, 4000);
