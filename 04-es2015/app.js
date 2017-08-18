// let
let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

// const
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
// citiesId = [];
citiesId.push("tokyo");

// Création d’objet
function getWeather(cityId) {
    let city = cityId;
    let temperature = 20;
    return { city, temperature };
}

const weather = getWeather(favoriteCityId);
console.log(weather);

// Affectation destructurée
const { city, temperature } = weather;
console.log(city);
console.log(temperature);

// Rest operator
let [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

// Classe
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString() {
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`;
    }

    set price(price) {
        this._price = price;
    }

    get price() {
        return this._price;
    }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }
}

const parisTrip = new Trip("paris", "PARIS", "img/paris.jpg");
console.log(parisTrip);
console.log(parisTrip.name);

parisTrip.price = 100;
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

// Héritage
class FreeTrip extends Trip {
    constructor(id, name, imageUrl, price = 0) {
        super(id, name, imageUrl);
        this.price = price;
    }

    toString() {
        return `Free${super.toString()}`;
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nanges.jpg");
console.log(freeTrip.toString());

// Promise, Set, Map, Arrow Function
class TripService {
    constructor() {
        this.trips = [
            new Trip('paris', 'Paris', 'img/paris.jpg'),
            new Trip('nantes', 'Nantes', 'img/nanges.jpg'),
            new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
        ];
    }
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let tripFound = this.trips.find(t => { return t.name === tripName });
                if (tripFound) {
                    resolve(tripFound);
                } else {
                    reject("No trip with name " + tripName);
                }
            }, 2000);
        });
    }
}
class PriceService {
    constructor() {
        this.trips = new Map([
            ["paris", 100],
            ["rio-de-janeiro", 800],
            ["nantes"]
        ]);
    }
    findPriceByTripId(tripId) {
        // TODO return promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let tripPrice = this.trips.get(tripId);
                if (tripPrice) {
                    resolve(tripPrice);
                } else {
                    reject("No price for id " + tripId);
                }
            }, 2000);
        });
    }
}

let tripService = new TripService();
let priceService = new PriceService();

console.log("**********************************");
console.log("**********************************");

tripService.findByName("Paris")
    .then((trip) => console.log("Trip found :", trip))
    .catch((err) => console.log(err));

tripService.findByName("Toulouse")
    .then((trip) => console.log("Trip found :", trip))
    .catch((err) => console.log(err));

tripService.findByName("Rio de Janeiro")
    .then((trip) => priceService.findPriceByTripId(trip.id))
    .then((tripPrice) => console.log("Price found :", tripPrice))
    .catch((err) => console.log(err));

tripService.findByName("Nantes")
    .then((trip) => priceService.findPriceByTripId(trip.id))
    .then((tripPrice) => console.log("Price found :", tripPrice))
    .catch((err) => console.log(err));

tripService.findByName("Angers")
    .then((trip) => priceService.findPriceByTripId(trip.id))
    .then((tripPrice) => console.log("Price found :", tripPrice))
    .catch((err) => console.log(err));