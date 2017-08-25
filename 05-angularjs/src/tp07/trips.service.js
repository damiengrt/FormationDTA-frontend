export default class TripsService {
    constructor($resource, apiUrlsService) {
        this.$resource = $resource
        this.apiUrlsService = apiUrlsService
    }

    findAll() {
        return this.$resource(this.apiUrlsService.light).query()
    }
}