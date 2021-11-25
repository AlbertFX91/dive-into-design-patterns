import Builder from "../builders/builder";
import CarType from "../car/carType";
import Engine from "../components/engine";
import GPSNavigator from "../components/gpsNavigator";
import Transmission from "../components/transmission";
import TripComputer from "../components/tripComputer";

export default class Director {
    public constructSportsCar(builder: Builder) {
        builder.setCarType(CarType.SPORTS_CAR)
            .setSeats(2)
            .setEngine(new Engine(3.0, 0))
            .setTransmission(Transmission.SEMI_AUTOMATIC)
            .setTripComputer(new TripComputer())
            .setGPSNavigator(new GPSNavigator());
    }
    public constructCityCar(builder: Builder) {
        builder.setCarType(CarType.CITY_CAR)
            .setSeats(2)
            .setEngine(new Engine(1.2, 0))
            .setTransmission(Transmission.AUTOMATIC)
            .setTripComputer(new TripComputer())
            .setGPSNavigator(new GPSNavigator());
    }
    public constructSUV(builder: Builder) {
        builder.setCarType(CarType.SUV)
            .setSeats(4)
            .setEngine(new Engine(2.5, 0))
            .setTransmission(Transmission.MANUAL)
            .setGPSNavigator(new GPSNavigator())
    }
}