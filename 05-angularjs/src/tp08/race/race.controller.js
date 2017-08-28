export default class RaceController {
    constructor($interval, raceService, simulatorService) {
        this.$interval = $interval
        this.raceService = raceService
        this.simulatorService = simulatorService
        this.walkers = raceService.list()
    }

    start() {
        this.reset()
        
        if (this.raceService.list().find(walker => walker.progress >= 100)) {
            console.log("Race is finished");
        } else {
            this.$interval(this.simulatorService.start.bind(this), 1000).then(
                console.log("test:", this.walkers)
            )
        }
    }

    reset() {
        this.raceService.list().forEach((walker) => {
            this.raceService.update(walker.name, 0)
        })
    }
}