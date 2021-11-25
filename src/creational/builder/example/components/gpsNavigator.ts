export default class GPSNavigator {
    private route: string;

    constructor();
    constructor(route?: string) {
        this.route = route ? route : " C. Trinidad Grund, 29, 29001 Málaga";
    }

    public getRoute(): string {
        return this.route;
    }
}