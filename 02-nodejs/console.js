var moduleService = require('./service.js');
var moduleReadline = require('readline');
rl = moduleReadline.createInterface(process.stdin, process.stdout),
    prefix = "\n *** Application Conférence *** \n"
    + "1. Liste de tous les présentateurs \n"
    + "2. Top présentateurs \n"
    + "3. Liste des sessions \n"
    + "4. Détail d'une session (choice: '4 id')\n"
    + "choice> ";

var choices = {
    '1': moduleService.listerTousLesPresentateurs,
    '2': moduleService.listerTopPresentateurs,
    '3': moduleService.listerToutesLesSessions,
    '4': function (param) {
        if (param) {
            return moduleService.trouverUneSession(param);
        } else {
            return 'Please specify an id';
        }
    }
};

rl.on('line', function (line) {
    var entry = line.split(" ")[0];
    var param = line.split(" ")[1];

    if (entry === '99') {
        rl.close();
    } else if (entry >= '1' && entry <= Object.keys(choices).length.toString()) {
        console.log(choices[entry](param));
    } else {
        console.log("Wrong choice. Try again...");
    }
    rl.prompt();
}).on('close', function () {
    console.log('Have a great day!');
    process.exit(0);
});
rl.setPrompt(prefix, prefix.length);
rl.prompt();