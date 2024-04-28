import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { CommonModule } from '@angular/common';
import { Weather } from './models/weather';

@Component({
  selector: 'app-head-shot',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './head-shot.component.html',
  styleUrl: './head-shot.component.scss'
})
export class HeadShotComponent implements OnInit {
    public weather: Weather;

    constructor(private weatherService: WeatherService) { }

    ngOnInit(): void {
        this.weatherService.weather$.subscribe(weather => {
            this.weather = weather;
            this.loadWeatherData();
        });
    }

    public getTempDisplay(currentTemp: number): string {
        let tempDisplay = '';
        tempDisplay = this.roundTempartureValue(currentTemp);
        if (tempDisplay != null && tempDisplay != '') {
            tempDisplay = `${tempDisplay}\u00B0C`;
        }

        return tempDisplay;
    }

    private roundTempartureValue(temp: number): string {
        const roundedTemp = Math.round(temp);
        return roundedTemp.toString();
    }

    private loadWeatherData() {
        if (!this.weather.isLoaded) {
            this.weatherService.getWeatherData().subscribe({
                next: (weatherResponse) => {
                    this.weather = weatherResponse;
                    if (this.weather != null) {
                        this.weather.isLoaded = true;
                    } 
                }
            });
        }
    }

}
