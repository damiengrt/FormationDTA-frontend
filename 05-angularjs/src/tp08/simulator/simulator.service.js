export default class SimulatorService {
    constructor(raceService) {
        this.raceService = raceService
    }

    start() {
        // TODO modifier de manière aléatoire la position des compétiteurs toutes les secondes
        // Utiliser le service RaceService
        return this.raceService.list().forEach((walker) => {
            // parseInt(Math.random() * 10000 + 1)
            walker.progress += 10
        })
    }
}