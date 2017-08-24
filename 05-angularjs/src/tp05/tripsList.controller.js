export default class TripsListCtrl {
    constructor($http) {
        this.$http = $http;

        this.$http({ method: 'GET', url: 'http://localhost:3000/trips' })
            .then((response) => {
                this.tripsListParent = response.data
                this.reset();
            }, (response) => {
                this.tripsListParent = "error"
                this.reset();
            })
    }

    save(trip) {
        let tripFound = this.tripsList.filter(t => t.id === trip.id);
        tripFound.name = trip.name;
        tripFound.price = trip.price;

        this.tripsListParent = angular.copy(this.tripsList)
    }

    reset() {
        this.tripsList = angular.copy(this.tripsListParent)
    }
}