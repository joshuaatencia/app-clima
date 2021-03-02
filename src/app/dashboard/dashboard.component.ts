import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  city: string = '';
  temperature = 0;
  humidity = '';
  wheater = '';
  checkCityAgain = '';

  urlImg = 'https://facultades.unab.cl/educacionycssociales/wp-content/uploads/2016/10/icono-clima.png';

  constructor(private climaService: ClimaService) { }

  ngOnInit(): void {
    console.log(this.dataEmpty());
  }

  getWeather(city: string): void {
    if (this.checkCityAgain === city) { return; }
    this.climaService.getNameCity(city).subscribe(data => {
      console.log(data);
      this.temperature = data['main']['temp'] - 273;
      this.humidity = data['main']['humidity'];
      this.wheater = data['weather'][0]['main'];
      this.checkCityAgain = city;
    }, error => {
      alert('Error about their result');
    });
  }

  dataEmpty = (): boolean => this.temperature === 0 && this.humidity === '' && this.wheater === '';

}
