import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', 'london')
      .set('appid', environment.apiKey);

    return this.http.get<Weather>(environment.apiUrl + 'weather', {
      params: options,
    });
  }
}
