import CarBuilder from "./builders/carBuilder";
import CarManualBuilder from "./builders/carManualBuilder";
import Car from "./car/car";
import Manual from "./car/manual";
import Director from "./director/director";

const director: Director = new Director();

const carBuilder: CarBuilder = new CarBuilder();



director.constructSportsCar(carBuilder);
const sportCar: Car = carBuilder.getResult();
console.log(`Car built: ${sportCar.getCarType()}`);
console.log(sportCar);

const manualBuilder: CarManualBuilder = new CarManualBuilder();
director.constructSportsCar(manualBuilder);
const carManual: Manual = manualBuilder.getResult();
console.log(`Car manual built: ${carManual.print()}`)


