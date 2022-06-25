import { Component, OnInit } from '@angular/core';

import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  isFeatching: boolean = false;
  weather: Weather | undefined;
  hasError: boolean = false;
  errorMessage: { cod: string; message: string } = { cod: '', message: '' };

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  search(city: string): void {
    this.hasError = false;
    this.isFeatching = true;
    this.weatherService.getWeather(city).subscribe({
      next: (weather) => {
        this.weather = weather;
        this.isFeatching = false;
      },
      error: (error) => {
        console.log(error);
        this.hasError = true;
        this.isFeatching = false;
        this.errorMessage = error.error;
      },
    });
  }
}
