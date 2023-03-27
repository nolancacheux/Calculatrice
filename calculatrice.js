// Définition de la classe Calculator
class Calculator {
    // Constructeur de la classe
    constructor() {
        // Récupération des éléments HTML pour l'affichage de l'input et du résultat
        this.input = document.getElementById("input");
        this.result = document.getElementById("result");
        // Initialisation de l'historique des calculs et de la dernière opération
        this.history = [];
    }

    // Méthode pour ajouter un caractère à l'input
    addToInput(charClicked) {
        // Ajout du caractère à l'input
        this.input.value += charClicked;
    }

    // Méthode pour effacer l'input
    clearInput() {
        this.input.value = "";
    }

    // Méthode pour calculer le résultat de l'opération en cours
    computeResult() {
        try {
            // Calcul du résultat en utilisant eval()
            var result = eval(this.input.value);
            // Affichage du résultat
            this.result.value = this.input.value + " = " + result;
            // Ajout de l'opération et du résultat à l'historique
            this.history.push({ operation: this.input.value, result: result });
        } catch {
            // Affichage d'une erreur si le calcul n'est pas valide
            this.result.value = 'Error';
        }
        // Effacement de l'input
        this.clearInput();
    }

    // Méthode pour revenir en arrière et afficher la dernière opération effectuée
undo() {
    // Si l'input contient des caractères, supprimer le dernier caractère
    if (this.input.value.length > 0) {
        this.input.value = this.input.value.slice(0, -1);
    } else if (this.history.length > 0) {
        // Sinon, si l'historique contient des éléments, afficher la dernière opération de l'historique
        const lastEntry = this.history.pop();
        this.input.value = lastEntry.operation;
    }
}

}

// Création d'une nouvelle instance de la classe Calculator
let calculator = new Calculator();
