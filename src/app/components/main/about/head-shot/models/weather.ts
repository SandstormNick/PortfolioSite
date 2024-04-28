export class Current {
    time: Date;
    temperature: number;
    windSpeed: number;
    windDirection: number;

}

export class Weather {
    isLoaded: boolean;
    currentTemp: Current;
}