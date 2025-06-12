// Función para hacer que el botón "No" se mueva
function makeNoButtonMove(btn) {
  btn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    btn.style.position = "absolute";
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
  });
}

// Maneja cada sección de forma genérica
function setupQuestion(wrapperId, gifId, questionId, yesText, gifYesUrl, nextWrapperId) {
  const wrapper = document.getElementById(wrapperId);
  const yesBtn = wrapper.querySelector(".yes-btn");
  const noBtn = wrapper.querySelector(".no-btn");
  const gif = document.getElementById(gifId);
  const question = document.getElementById(questionId);

  makeNoButtonMove(noBtn);

  const continueBtn = document.createElement("button");
  continueBtn.textContent = "Continuar";
  continueBtn.style.marginTop = "20px";
  continueBtn.style.position = "static";
  continueBtn.style.background = "#e94d58";
  continueBtn.style.color = "white";
  continueBtn.style.padding = "10px 20px";
  continueBtn.style.borderRadius = "20px";
  continueBtn.style.border = "none";
  continueBtn.style.cursor = "pointer";
  continueBtn.style.boxShadow = "0 2px 4px gray";

  yesBtn.addEventListener("click", () => {
    question.textContent = yesText;
    gif.src = gifYesUrl;

    if (!wrapper.contains(continueBtn)) {
      wrapper.appendChild(continueBtn);
    }
  });

  continueBtn.addEventListener("click", () => {
    wrapper.style.display = "none";
    const nextWrapper = document.getElementById(nextWrapperId);
    if (nextWrapper) nextWrapper.style.display = "block";
  });
}

// Pregunta 1
setupQuestion(
  "wrapper1",
  "gif1",
  "question1",
  "I knew it 😍",
  "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif",
  "wrapper2"
);

// Pregunta 2
setupQuestion(
  "wrapper2",
  "gif2",
  "question2",
  "Aww, kisses for you 💋",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWR0M2twZ3hpdWtyZnJwazE3OTF3cHZydW12bHRwaGduajNpZ2VzOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT39CXg70nNS0MFNLy/giphy.gif",
  "wrapper3"
);

// Pregunta 3
setupQuestion(
  "wrapper3",
  "gif3",
  "question3",
  "Jajajaja un inge en proceso de conquista ❤️",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmdmOGpkb25ieGJlMmd4b2oyYjM2a2Z6cWFscmF5MjI5NHRkOWRqOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IatVSUS0eex7f5p7uB/giphy.gif",
  "" // No hay siguiente
);
