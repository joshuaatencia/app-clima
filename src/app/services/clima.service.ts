import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private _key = 'fe41a7df5f82e637e20e7e4c374a7f7f';
  constructor(private http: HttpClient) { }

  getNameCity(city: string): Observable<any> {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this._key}`;
    return this.http.get(url);
  }
}
