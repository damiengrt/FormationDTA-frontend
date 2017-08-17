var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function (element, index, array) {
    console.log(element);
});

console.log('lettreADansToutesLesVilles ==', villes.every(function (el) {
    return el.indexOf('a') !== -1;
}));

console.log('auMoinsUneVilleAvecUnTiret ==', villes.some(function (el) {
    return el.indexOf('-') !== -1;
}));

console.log('villesSansTiretSansEspace ==', villes.filter(function (el) {
    return el.indexOf('-') === -1 && el.indexOf(' ') === -1;
}));

console.log('villesMajusculeSeTerminantParS ==', villes.filter(function (el) {
    return el[el.length - 1] == 's'
}).map(function (el) {
    return el.toUpperCase();
}));