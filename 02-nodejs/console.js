var moduleService = require('./service.js');
var moduleReadline = require('readline');
rl = moduleReadline.createInterface(process.stdin, process.stdout),
    prefix = "\n *** Application Conférence *** \n"
    + "1. Liste de tous les présentateurs \n"
    + "2. Top présentateurs \n"
    + "3. Liste des sessions \n"
    + "4. Détail d'une session \n"
    + "choice> ";

rl.on('line', function (line) {
    var entry = line.split(" ")[0];
    var param = line.split(" ")[1];
    switch (entry) {
        case '1':
            console.log(moduleService.listerTousLesPresentateurs());
            break;
        case '2':
            console.log(moduleService.listerTopPresentateurs());
            break;
        case '3':
            console.log(moduleService.listerToutesLesSessions());
            break;
        case '4':
            console.log(moduleService.trouverUneSession(param));
            break;
        case '99':
            rl.close();
            break;
        default:
            console.log("Wrong choice. Try again...")
            break;
    }
    rl.prompt();
}).on('close', function () {
    console.log('Have a great day!');
    process.exit(0);
});
rl.setPrompt(prefix, prefix.length);
rl.prompt();