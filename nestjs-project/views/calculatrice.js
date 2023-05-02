// Définition de la classe BaseCalculator
class BaseCalculator {
    constructor() {
        this.out = document.getElementById("output"); // Élément de sortie pour afficher les calculs
        this.curentCalcul = []; // Stocke le calcul en cours
        this.totalCalcul = []; // Stocke les calculs effectués
    }

    // Méthode pour effacer le calcul en cours
    efface() {
        this.out.innerHTML = "0";
        this.curentCalcul = [];
    }

    // Méthode pour gérer le clic sur un caractère
    clique(carac) {
        // Remplacement des caractères r et l par les parenthèses
        if (carac == "r") carac = ")";
        if (carac == "l") carac = "(";

        // Ajout du caractère au calcul en cours
        this.curentCalcul.push(carac);

        // Mise à jour de l'affichage du calcul
        if (this.out.innerHTML == "0") {
            this.out.innerHTML = carac;
            // Exemple de requête fetch
            fetch('http://localhost:3000/annonces')
                .then(function (res) {
                    console.log(res)
                })
                .catch(function (res) { console.log(res) })
        }
        else this.out.innerHTML += carac;
    }

    // Méthode pour effectuer le calcul
    calcul() {
        try {
            let equation = this.out.innerHTML;
            let equa = eval(equation);
            this.totalCalcul.push(this.curentCalcul);
            document.getElementById('output_solve').innerHTML = this.out.innerHTML + " = " + equa;
            this.efface();
            // Envoi du calcul effectué en requête POST
            fetch('http://localhost:3000/annonces', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ calcul: equation })
            })
                .then(async function (res) {
                    let obj = await res.json();
                    alert(`temps d'éxecution : ${obj.annonce.temps}ms        temps moyen : ${obj.moyenne}ms   pourcentage plus rapide : ${obj.pourc}%`);
                })
                .catch(function (res) { console.log(res) })

        } catch (error) {
            this.out.innerHTML = "Error";
            // Gestion des erreurs
            fetch('http://localhost:3000/erreur')
                .then(async function (res) {
                    let obj = await res.json();
                    console.log(obj);
                    alert(`dernière erreur : ${obj.lasterror.created}  nombre d'erreur : ${obj.nberror}`);
                })
                .catch(function (res) { console.log(res) })
        }
    }

    // Méthode pour revenir en arrière dans le calcul
    retour() {
        try {
            if (this.curentCalcul.length == 0) { // Si aucun calcul en cours, affiche le précédent effectué
                if (this.totalCalcul.length == 0) this.out.innerHTML = "0";
                else this.out.innerHTML = "";
                this.curentCalcul = this.totalCalcul[this.totalCalcul.length - 1];
                this.curentCalcul.forEach(e => {
                    this.out.innerHTML += e;
                });
            }
            else { // Sinon, enlève le dernier caractère du calcul en cours
                this.out.innerHTML = "";
                this.curentCalcul.pop();
                this.curentCalcul.forEach(e => {

                    this.out.innerHTML += e;
                });
            }
        } catch (error) {
            this.out.innerHTML = "Error";
        }
    }
}

// Création d'une instance de la classe BaseCalculator
let baseCalculator = new BaseCalculator();