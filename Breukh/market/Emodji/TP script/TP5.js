// Définition du tableau de questions
const questions = [
  {
    question: "Quel est le Meilleur Langage de Programmation en 2022?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "Quelle est la couleur du cheval blanc d'Henri IV?",
    a: "Rouge",
    b: "Vert",
    c: "Noir",
    d: "Blanc",
    correct: "d"
  },
  {
    question: "Qui est l'auteur de l'œuvre 'Le Petit Prince' ?",
    a: "Antoine de Saint-Exupéry",
    b: "Albert Camus",
    c: "Victor Hugo",
    d: "Jean-Paul Sartre",
    correct: "a"
  },
  {
    question: "Quel est le plus grand animal du monde?",
    a: "Baleine",
    b: "Eléphant",
    c: "Girafe",
    d: "Requin",
    correct: "a"
  },
  {
    question: "Quelle est la capitale du Canada?",
    a: "Toronto",
    b: "Vancouver",
    c: "Montréal",
    d: "Ottawa",
    correct: "d"
  }
];

// Variables pour stocker les éléments de la page web
const questionEl = document.getElementById("question");
const aText = document.getElementById("a-text");
const bText = document.getElementById("b-text");
const cText = document.getElementById("c-text");
const dText = document.getElementById("d-text");
const submitBtn = document.getElementById("submit");
const answersEls = document.getElementsByName("answer");

// Variables pour le jeu
let currentQuestion = 0;
let score = 0;

// Fonction pour charger la question suivante
function loadQuestion() {
  const currentQuestionData = questions[currentQuestion];
  questionEl.textContent = currentQuestionData.question;
  aText.textContent = currentQuestionData.a;
  bText.textContent = currentQuestionData.b;
  cText.textContent = currentQuestionData.c;
  dText.textContent = currentQuestionData.d;
}

// Fonction pour récupérer la réponse choisie par le joueur
function getSelected() {
  let answer = undefined;
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// Fonction pour désactiver le bouton submit
function disableSubmit() {
  submitBtn.disabled = true;
}

// Fonction pour activer le bouton submit
function enableSubmit() {
  submitBtn.disabled = false;
}

// Chargement de la première question
loadQuestion();

// Écouteur d'événement pour le bouton submit
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === questions[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
      disableSubmit();
    } else {
      // Affichage du score final
      document.getElementById("quiz").innerHTML = `<h2>li gua liguey ${score}/${questions.length}</h2>`;
    }
  }
});

// Écouteurs d'événements pour les réponses
answersEls.forEach((answerEl) => {
  answerEl.addEventListener("change", enableSubmit);
  });