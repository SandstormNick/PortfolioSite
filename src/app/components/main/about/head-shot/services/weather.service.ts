import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { fetchWeatherApi } from 'openmeteo';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    private _weather = new BehaviorSubject<Weather>(null!);
    public readonly weather$ = this._weather.asObservable();

    constructor() { 
        this.fetchWeatherData();
    }

    private async fetchWeatherData() {
        try {
            const params = {
                latitude: [-33.92],
                longitude: [18.43],
                current: 'temperature_2m,weather_code,wind_speed_10m,wind_direction_10m',
                hourly: 'temperature_2m,precipitation',
                daily: 'weather_code,temperature_2m_max,temperature_2m_min'
              };

            // Helper function to form time ranges
            const range = (start: number, stop: number, step: number) =>
                Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

            const url = 'https://api.open-meteo.com/v1/forecast';
            const responses = await fetchWeatherApi(url, params);
            const response = responses[0];

            // Attributes for timezone and location
            const utcOffsetSeconds = response.utcOffsetSeconds();
            const timezone = response.timezone();
            const timezoneAbbreviation = response.timezoneAbbreviation();
            const latitude = response.latitude();
            const longitude = response.longitude();

            const current = response.current()!;
            const hourly = response.hourly()!;
            const daily = response.daily()!;

            const weatherData = {
                current: {
                    time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
                    temperature: current.variables(0)!.value(), // Current is only 1 value, therefore `.value()`
                    weatherCode: current.variables(1)!.value(),
                    windSpeed: current.variables(2)!.value(),
                    windDirection: current.variables(3)!.value()
                },
                hourly: {
                    time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
                        (t) => new Date((t + utcOffsetSeconds) * 1000)
                    ),
                    temperature: hourly.variables(0)!.valuesArray()!, // `.valuesArray()` get an array of floats
                    precipitation: hourly.variables(1)!.valuesArray()!,
                },
                daily: {
                    time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
                        (t) => new Date((t + utcOffsetSeconds) * 1000)
                    ),
                    weatherCode: daily.variables(0)!.valuesArray()!,
                    temperatureMax: daily.variables(1)!.valuesArray()!,
                    temperatureMin: daily.variables(2)!.valuesArray()!,
                }
            };

            let weather = new Weather();
            weather.currentTemp = weatherData.current;

            this._weather.next(weather);
        }
        catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    getWeatherData() {
        return this._weather.asObservable();
      }

}
