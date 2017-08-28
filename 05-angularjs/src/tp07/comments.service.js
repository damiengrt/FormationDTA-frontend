export default function ($resource, $http, apiUrlsService) {
    let tripsFullResource = $resource(apiUrlsService.full + '/:id', { id: '@id' }, {
        'update': { method: 'PUT' }
    })

    this.findByTripId = (tripId) => {
        return $http.get(apiUrlsService.full + '/' + tripId).then(
            (result) => {
                return result.data.comments
            })
    }

    this.addComment = (tripId, comment) => {
        return $http.get(apiUrlsService.full + '/' + tripId)
            .then((result) => {

                let tripFound = result.data
                let commentFormatted = {
                    "id": "anonymous",
                    "text": comment
                }

                if (tripFound.comments) {
                    tripFound.comments.push(commentFormatted);
                } else {
                    tripFound.comments = [commentFormatted];
                }

                return $http.patch(apiUrlsService.full + '/' + tripId, angular.toJson(tripFound))
            })
            .then((result) => {
                return "Comment added"
            })
    }

    return this
}