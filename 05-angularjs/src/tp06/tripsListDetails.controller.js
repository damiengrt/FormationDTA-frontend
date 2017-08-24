export default class TripsDetailListCtrl {
    constructor($resource) {
        this.$resource = $resource;
        this.tripShown = "";
        this.TripResource = this.$resource('http://localhost:3000/trips-details/:tripId', { tripId: '@id' }, {
            'update': { method: 'PUT' }
        })
        this.findAllTripsDetail();
    }

    findAllTripsDetail() {
        let TripsResource = this.$resource('http://localhost:3000/trips-details')
        this.trips = TripsResource.query()
    }

    displayDescrById(id) {
        if (id !== this.tripShown.id) {
            this.tripShown = this.TripResource.get({ tripId: id })
        }
    }

    updateDescrOf(trip) {
        this.tripShown = this.TripResource.get({ tripId: trip.id }, (tripFound) => {
            if (trip.description !== tripFound.description) {
                tripFound.description = trip.description;
                tripFound.$update();
                console.log(`Trip's description of [${tripFound.name}] was updated successfully`);
            }
        })
    }
}