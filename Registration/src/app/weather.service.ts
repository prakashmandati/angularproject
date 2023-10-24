import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }
  cities = [
    {
      name: 'Hyderabad',
      country: 'india',
      summary:'overcast clouds',
      temperature: '22°C',
      Humidity:'56%',
      windspeed: '.70km/sec',
    },
    {
      name: 'Vizag',
      country: 'india',
      summary:'overcast clouds',
      temperature: '32°C',
      Humidity:'46%',
      windspeed: '.60km/sec',
    },
    {
      name: 'Chennai',
      country: 'india',
      summary:'overcast clouds',
      temperature: '29°C',
      Humidity:'51%',
      windspeed: '.79km/sec',
    },
    {
      name: 'Delhi',
      country: 'india',
      summary:'overcast clouds',
      temperature: '25°C',
      Humidity:'61%',
      windspeed: '.99km/sec',
    }
    
  ];
}
