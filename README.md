## Calculatrice JavaScript

Ce projet est une calculatrice simple réalisée en JavaScript, HTML et CSS. Il comprend une interface utilisateur avec des boutons pour effectuer des opérations arithmétiques de base, ainsi qu'une fonctionnalité de retour en arrière pour supprimer le dernier caractère entré ou revenir à l'opération précédente.

## Table des matières
- Installation
- Fonctionnalités
 - Partie 3: Création de la classe Calculator
 - Partie 4: Fonction de retour en arrière


## Installation

- Pour utiliser cette calculatrice, il suffit de cloner ce dépôt et d'ouvrir le fichier index.html dans votre navigateur.

  - `git clone https://github.com/nolancacheux/calculatrice.git`
  - `cd calculatrice`

- Ouvrez ensuite le fichier index.html dans votre navigateur.

## Fonctionnalités

### Partie 3: Création de la classe Calculator

 - La calculatrice est construite à l'aide d'une classe JavaScript Calculator. Cette classe contient les méthodes pour effectuer les opérations de base suivantes :
  - addToInput(charClicked): Ajoute un caractère à l'input.
  - clearInput(): Efface le contenu de l'input.
  - computeResult(): Calcule le résultat de l'opération en cours et l'affiche.
  - La classe Calculator gère également l'historique des calculs effectués.

### Partie 4: Fonction de retour en arrière

 - La fonction de retour en arrière permet de supprimer le dernier caractère entré ou de revenir à l'opération précédente. Cette fonctionnalité est implémentée dans la méthode undo() de la classe Calculator.

 - La méthode undo() fonctionne de la manière suivante :

 - Si l'input contient des caractères, supprime le dernier caractère.
 - Si l'input est vide et que l'historique contient des éléments, affiche la dernière opération de l'historique.