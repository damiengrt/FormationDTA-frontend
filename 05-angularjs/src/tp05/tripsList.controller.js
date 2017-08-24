export default class TripsListCtrl {
    constructor($http) {
        this.$http = $http;
        this.findAllTrips();
    }

    save(trip) {
        let tripFound = this.tripsList.filter(t => t.id === trip.id)[0];
        tripFound.name = trip.name;
        tripFound.price = trip.price;

        this.$http.patch('http://localhost:3000/trips/' + tripFound.id, angular.toJson(tripFound))
            .then((response) => {
                console.log(`Trip [${tripFound.name}] was updated successfully`);
            }, (response) => {
                console.log(`Update for trip [${tripFound.name}] failed`);
            })
    }

    findAllTrips() {
        this.$http.get('http://localhost:3000/trips')
            .then((response) => {
                this.tripsList = response.data
            }, (response) => {
                this.tripsList = "error"
            })
    }
}