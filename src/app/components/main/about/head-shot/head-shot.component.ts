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
    public tempDisplay = '';

    constructor(private weatherService: WeatherService) { }

    ngOnInit(): void {
        this.weatherService.getWeatherData().subscribe({
            next: (weatherResponse) => {
                this.weather = weatherResponse;
                if (this.weather != null)
                    this.setTempDisplay(this.roundTempartureValue(this.weather.currentTemp.temperature));
            }
        });
    }

    setTempDisplay(currentTemp: string): void {
        if (currentTemp != null && currentTemp != '') {
            this.tempDisplay = `${currentTemp}\u00B0C`;
        }
    }

    roundTempartureValue(temp: number): string {
        const roundedTemp = Math.round(temp);
        return roundedTemp.toString();
    }

}
