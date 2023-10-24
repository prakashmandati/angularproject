import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  /*
  cityName: string = '';
  cityInfo: any = null; // Store the city information here

  // Simulated city data
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
  ];
  searchCity() {
    // Find the city in the simulated data
    const foundCity = this.cities.find((city) => city.name === this.cityName);

    if (foundCity) {
      this.cityInfo = foundCity;
    } else {
      this.cityInfo = null; // Reset the cityInfo if the city is not found
    }
  }*/
  cityName: string = '';
  cityInfo: any = null; // Store the city information
  
  constructor (private ts:WeatherService){}
  
   citie= this.ts.cities

  searchCity() {
    // Find the city in the simulated data
    const foundCity = this.citie.find((city) => city.name === this.cityName);

    if (foundCity) {
      this.cityInfo = foundCity;
    } else {
      this.cityInfo = null; // Reset the cityInfo if the city is not found
    }
  }

}
