export default class RaceService {
    constructor() {
        // la valeur de shirt est inspirée de la codification Bootstrap pour un choix aisée des couleurs
        this.walkers = [
            { name: 'Paul', progress: 40, shirt: 'info' },
            { name: 'Jean', progress: 30, shirt: 'success' },
            { name: 'Julie', progress: 20, shirt: 'danger' }
        ]
    }

    update(name, progress) {
        this.walkers.find(walker => walker.name === name).progress = progress
    }

    list() {
        return this.walkers
    }
}