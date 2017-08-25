export default class TripsCommentsCtrl {
    constructor(apiUrlsService, tripsService, commentsService, stepsService) {
        this.stepsService = stepsService
        this.commentsService = commentsService

        this.tripsLight = tripsService.findAll()
    }

    loadTripData(tripId) {
        this.loadStepsImages(tripId)
        this.loadComments(tripId)
    }

    loadStepsImages(tripId) {
        this.stepsService.findStepsByTripId(tripId).then((steps) => {
            this.stepsImages = steps
        })
    }

    loadComments(tripId) {
        this.commentsService.findByTripId(tripId).then((steps) => {
            this.comments = steps
        })
    }

    submitComment(tripId, comment) {
        this.commentsService.addComment(tripId, comment).then(() => {
            this.loadComments(tripId)
        })
    }
}