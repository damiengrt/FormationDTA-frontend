import RaceService from './race.service'
import RaceController from './race.controller'

const raceModule = angular
    .module('raceModule', [])
    .service('raceService', RaceService)
    .controller('raceController', RaceController)

export default raceModule