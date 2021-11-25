import Car from "../car/car";
import CarType from "../car/carType";
import Engine from "../components/engine";
import engine from "../components/engine";
import GPSNavigator from "../components/gpsNavigator";
import gpsNavigator from "../components/gpsNavigator";
import Transmission from "../components/transmission";
import TripComputer from "../components/tripComputer";
import tripComputer from "../components/tripComputer";
import Builder from "./builder";

export default class CarBuilder implements Builder {
    private type: CarType;
    private seats: number;
    private engine: Engine;
    private transmission: Transmission;
    private tripComputer: TripComputer;
    private gpsNavigator: GPSNavigator;

    setCarType(type: CarType): CarBuilder {
        this.type = type;
        return this;
    }
    setSeats(seats: number): CarBuilder {
        this.seats = seats;
        return this;
    }
    setEngine(engine: engine): CarBuilder {
        this.engine = engine;
        return this;
    }
    setTransmission(transmission: Transmission): CarBuilder {
        this.transmission = transmission;
        return this;
    }
    setTripComputer(tripComputer: tripComputer): CarBuilder {
        this.tripComputer = tripComputer;
        return this;
    }
    setGPSNavigator(gpsNavigator: gpsNavigator): CarBuilder {
        this.gpsNavigator = gpsNavigator;
        return this;
    }

    getResult(): Car {
        return new Car(this.type, this.seats, this.engine, this.transmission, this.tripComputer, this.gpsNavigator);
    }

}