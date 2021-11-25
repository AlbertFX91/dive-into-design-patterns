export default class Engine {
    private readonly volume: number;
    private mileage: number;
    private started: boolean;

    constructor(volume: number, mileage: number) {
        this.volume = volume;
        this.mileage = mileage;
    }

    public on(): void {
        this.started = true;
    }
    
    public off(): void {
        this.started = false;
    }

    public isStarted(): boolean {
        return this.started;
    }

    public go(mileage: number): void {
        if (this.started)
            this.mileage += mileage;
        else
            console.error(`The engine is not started`);
    }

    public getVolume(): number {
        return this.volume;
    }

    public getMileage(): number {
        return this.mileage;
    }

}