// Récupérer les éléments de la page
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const specialCheckbox = document.getElementById("special");
const generateButton = document.getElementById("generate");
const passwordInput = document.getElementById("password");
const copyIcon = document.getElementById("copy-icon");

// Fonction pour générer un mot de passe aléatoire à partir de 15 jusqu'à 20 caractères
function generatePassword() {
const minLength = 15;
const maxLength = 20;
let length = parseInt(lengthInput.value);
if (length < minLength) {
alert("heyyy boul doff mots de passe bii 15 caractères la wara nek !");
return;
} else if (length > maxLength) {
length = maxLength;
}
// Le reste du code pour générer le mot de passe

const uppercase = uppercaseCheckbox.checked;
const lowercase = lowercaseCheckbox.checked;
const numbers = numbersCheckbox.checked;
const special = specialCheckbox.checked;
const charset = [];
if (uppercase) charset.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
if (lowercase) charset.push(..."abcdefghijklmnopqrstuvwxyz");
if (numbers) charset.push(..."0123456789");
if (special) charset.push(..."!@#$%^&*()_+-=");
let password = "";
for (let i = 0; i < length; i++) {
password += charset[Math.floor(Math.random() * charset.length)];
}
return password;
}

// Mettre à jour l'état du bouton Générer Mot de passe
function updateGenerateButton() {
const atLeastOneChecked = uppercaseCheckbox.checked || lowercaseCheckbox.checked || numbersCheckbox.checked || specialCheckbox.checked;
generateButton.disabled = !atLeastOneChecked;
}

// Mettre à jour le champ de texte avec le mot de passe généré
function updatePasswordInput(password) {
passwordInput.value = password;
const length = parseInt(lengthInput.value);
if (password.length === length) {
passwordInput.style.color = "black";
} else {
passwordInput.style.color = "red";
}
}

// Ajouter le tooltip copy au champ de texte
passwordInput.addEventListener("mouseover", () => {
passwordInput.setAttribute("title", "Copier le mot de passe");
passwordInput.style.cursor = "pointer";
});

// Copier le mot de passe dans le presse-papier
copyIcon.addEventListener("click", () => {
passwordInput.select();
document.execCommand("copy");
const notification = document.createElement("div");
notification.textContent = "Mot de passe copié !";
notification.style.position = "absolute";
notification.style.bottom = "20%";
notification.style.right = "40%";
notification.style.backgroundColor = "yellow";
notification.style.color = "blue";
notification.style.padding = "10px";
document.body.appendChild(notification);
setTimeout(() => {
notification.remove();
}, 2000);
});

// Écouter les changements sur les cases à cocher pour mettre à jour l'état du bouton Générer Mot de passe
uppercaseCheckbox.addEventListener("change", updateGenerateButton);
lowercaseCheckbox.addEventListener("change", updateGenerateButton);
numbersCheckbox.addEventListener("change", updateGenerateButton);
specialCheckbox.addEventListener("change", updateGenerateButton);

// Générer un mot de passe lorsque le bouton Générer Mot de passe est cliqué
generateButton.addEventListener("click", () => {
const password = generatePassword();
updatePasswordInput(password);
});