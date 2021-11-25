import CarType from "../car/carType";
import Manual from "../car/manual";
import Engine from "../components/engine";
import engine from "../components/engine";
import GPSNavigator from "../components/gpsNavigator";
import gpsNavigator from "../components/gpsNavigator";
import Transmission from "../components/transmission";
import TripComputer from "../components/tripComputer";
import tripComputer from "../components/tripComputer";
import Builder from "./builder";

export default class CarManualBuilder implements Builder {
    private type: CarType;
    private seats: number;
    private engine: Engine;
    private transmission: Transmission;
    private tripComputer: TripComputer;
    private gpsNavigator: GPSNavigator;

    setCarType(type: CarType): Builder {
        this.type = type;
        return this;
    }
    setSeats(seats: number): Builder {
        this.seats = seats;
        return this;
    }
    setEngine(engine: engine): Builder {
        this.engine = engine;
        return this;
    }
    setTransmission(transmission: Transmission): Builder {
        this.transmission = transmission;
        return this;
    }
    setTripComputer(tripComputer: tripComputer): Builder {
        this.tripComputer = tripComputer;
        return this;
    }
    setGPSNavigator(gpsNavigator: gpsNavigator): Builder {
        this.gpsNavigator = gpsNavigator;
        return this;
    }
    getResult(): Manual {
        return new Manual(this.type, this.seats, this.engine, 
            this.transmission, this.tripComputer, this.gpsNavigator);
    }

}