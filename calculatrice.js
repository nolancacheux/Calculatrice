
// On récupère toutes les touches de la calculatrice (éléments HTML)
const buttons = Array.from(document.querySelectorAll(".button"));
// On crée un tableau qui contient les valeurs des touches (attribut data-key)
const keyValues = buttons.map((button) => button.dataset.key);
// On récupère l'écran de la calculatrice (élément HTML)
const screen = document.querySelector(".screen");

// On écoute les événements de type "keydown" sur tout le document
document.addEventListener("keydown", (event) => {
// On récupère la valeur de la touche pressée (keyCode) sous forme de chaîne de caractères
const value = event.keyCode.toString();
// On appelle la fonction "calculate" avec la valeur de la touche pressée
calculate(value);
});

// On ajoute un écouteur d'événements "click" sur chaque touche de la calculatrice
buttons.forEach((button) => {
button.addEventListener("click", (event) => {
// On récupère la valeur de la touche cliquée (attribut data-key)
const value = event.target.dataset.key;
// On appelle la fonction "calculate" avec la valeur de la touche cliquée
calculate(value);
});
});

// Fonction qui effectue le calcul en fonction de la valeur de la touche pressée ou cliquée
const calculate = (value) => {
// Si la valeur de la touche est présente dans le tableau "keyValues"
if (keyValues.includes(value)) {
switch (value) {
// Si la touche correspond au bouton "C" (effacer)
case "8":
// On efface l'écran en mettant son contenu à une chaîne de caractères vide
screen.textContent = "";
break;
// Si la touche correspond au bouton "=" (égal)
case "13":
// On évalue le contenu de l'écran (en utilisant la fonction "eval")
const calculation = eval(screen.textContent);
// On affiche le résultat dans l'écran
screen.textContent = calculation;
break;
case "46":
// On récupère le contenu de l'écran
let text = screen.textContent;
// On supprime le dernier caractère
text = text.slice(0, -1);
// On affiche le nouveau contenu de l'écran
screen.textContent = text;
break;
// Si la touche correspond à une touche de chiffre ou d'opération
default:
// On récupère l'indice de la touche dans le tableau "keyValues"
const index = keyValues.indexOf(value);
// On récupère l'élément HTML correspondant à la touche
const button = buttons[index];
// On ajoute le contenu de la touche à l'écran
screen.textContent += button.innerHTML;
}
}
};

// On écoute les erreurs dans le script
window.addEventListener("error", (event) => {
// On affiche un message d'erreur avec le message d'erreur associé à l'événement
alert("Une erreur est survenue dans votre calcul : " + event.error.message);
});