export default class StepsService {
    constructor($http, $q, apiUrlsService) {
        this.$http = $http
        this.apiUrlsService = apiUrlsService
    }

    findStepsByTripId(tripId) {
        return this.$http.get(this.apiUrlsService.full + '/' + tripId).then(
            (result) => {
                return result.data.steps
            })
    }
}