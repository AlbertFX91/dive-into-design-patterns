import CarType from "../car/carType";
import Engine from "../components/engine";
import GPSNavigator from "../components/gpsNavigator";
import Transmission from "../components/transmission";
import TripComputer from "../components/tripComputer";

export default interface Builder {
    setCarType(type: CarType): Builder;
    setSeats(seats: number): Builder;
    setEngine(engine: Engine): Builder;
    setTransmission(transmission: Transmission): Builder;
    setTripComputer(tripComputer: TripComputer): Builder;
    setGPSNavigator(gpsNavigator: GPSNavigator): Builder;
};