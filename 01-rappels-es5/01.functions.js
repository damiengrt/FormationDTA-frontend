console.log("01 - Functions");

var nombre1 = 10;
var nombre2 = 20;

// Définition d’une fonction
function additionner(nb1, nb2) {
    return nb1 + nb2;
}

resultat1 = additionner(nombre1, nombre2);
console.log("resultat1 ==", resultat1);

// Variable de type fonction
var somme = additionner;

resultat2 = somme(nombre1, nombre2);
console.log("resultat2 ==", resultat2);

function multiplier(nb1, nb2) {
    return nb1 * nb2;
}

resultat3 = multiplier(nombre1, nombre2);
console.log("resultat3 ==", resultat3);

// Fonction comme élément du 1er ordre
var afficherOperation = function (nomOperation, operation, nb1, nb2) {
    console.log(nomOperation, '[nb1 ==', nb1, 'nb2 ==', nb2, '] ==', operation(nb1, nb2));
}

afficherOperation('Somme', somme, 20, 40);
afficherOperation('Multiplier', multiplier, 10, 20);
afficherOperation('Soustraction', function (nb1, nb2) {
    return nb1 - nb2;
}, 15, 5);