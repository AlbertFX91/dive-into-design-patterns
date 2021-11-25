import Engine from "../components/engine";
import GPSNavigator from "../components/gpsNavigator";
import Transmission from "../components/transmission";
import TripComputer from "../components/tripComputer";
import CarType from "./carType";

export default class Manual {
    private carType: CarType;
    private seats: number;
    private engine: Engine;
    private transmission: Transmission;
    private tripComputer: TripComputer;
    private gpsNavigator: GPSNavigator;

    constructor(carType: CarType, seats: number, engine: Engine, transmission: Transmission,
        tripComputer: TripComputer, gpsNavigator: GPSNavigator) {
            this.carType = carType;
            this.seats = seats;
            this.engine = engine;
            this.transmission = transmission;
            this.tripComputer = tripComputer;
            this.gpsNavigator = gpsNavigator;
        }

    public print(): string {
        return `
        Type of car: ${this.carType}
        Count of seats: ${this.seats}
        Engine: volume - ${this.engine.getVolume()}; mileage - ${this.engine.getMileage()}
        Trip Computer: ${this.tripComputer ? 'Functional' : 'N/A'}
        GPS Navigator: ${this.gpsNavigator ? 'Functional' : 'N/A'}
        `
    }
}