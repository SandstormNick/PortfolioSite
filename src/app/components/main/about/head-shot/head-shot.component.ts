import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { CommonModule } from '@angular/common';
import { Weather } from './models/weather';
import { filter } from 'rxjs';

@Component({
  selector: 'app-head-shot',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './head-shot.component.html',
  styleUrl: './head-shot.component.scss'
})
export class HeadShotComponent implements OnInit {
    public weather: Weather;
    public turnOffTemp: boolean = false;
    public currentTemp = '';

    constructor(private weatherService: WeatherService) { }

    ngOnInit(): void {
        this.weatherService.weather$.pipe(
            filter<Weather>(Boolean)
        ).subscribe(weather => {
            this.weather = weather;
            if (!this.turnOffTemp) {
                if (!this.weather.isLoaded)
                    this.loadWeatherData();
                else
                    this.currentTemp = this.getTempDisplay(this.weather.currentTemp.temperature);
            }
        });
    }

    public getTempDisplay(currentTemp: number): string {
        let tempDisplay = '';

        if (!this.turnOffTemp) {
            tempDisplay = this.roundTempartureValue(currentTemp);
            if (tempDisplay != null && tempDisplay != '') {
                tempDisplay = `${tempDisplay}\u00B0C`;
            }
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
                        this.currentTemp = this.getTempDisplay(this.weather.currentTemp.temperature);
                        this.weather.isLoaded = true;
                    } 
                }
            });
        }
    }

}
