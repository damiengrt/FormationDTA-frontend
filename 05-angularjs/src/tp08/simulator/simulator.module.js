import SimulatorService from './simulator.service'

const simulatorModule = angular
    .module('simulatorModule', [])
    .service('simulatorService', SimulatorService)

export default simulatorModule