import Engine from "../components/engine";
import GPSNavigator from "../components/gpsNavigator";
import Transmission from "../components/transmission";
import TripComputer from "../components/tripComputer";
import CarType from "./carType";

export default class Car {
    private carType: CarType;
    private seats: number;
    private engine: Engine;
    private transmission: Transmission;
    private tripComputer: TripComputer;
    private gpsNavigator: GPSNavigator;
    private fuel: number = 0;

    constructor(carType: CarType, seats: number, engine: Engine, transmission: Transmission,
        tripComputer: TripComputer, gpsNavigator: GPSNavigator) {
            this.carType = carType;
            this.seats = seats;
            this.engine = engine;
            this.transmission = transmission;
            this.tripComputer = tripComputer;
            this.gpsNavigator = gpsNavigator;
            if (this.tripComputer != null) {
                this.tripComputer.setCar(this);
            }
        }
    
    public getCarType(): CarType {
        return this.carType;
    }

    public getFuel(): number {
        return this.fuel;
    }

    public setFuel(fuel: number): void {
        this.fuel = fuel;
    }

    public getSeats(): number {
        return this.seats;
    }

    public getEngine(): Engine {
        return this.engine;
    }

    public getTransmission(): Transmission {
        return this.transmission;
    }

    public getTripComputer(): TripComputer {
        return this.tripComputer;
    }

    public getGpsNavigator(): GPSNavigator {
        return this.gpsNavigator;
    }
}