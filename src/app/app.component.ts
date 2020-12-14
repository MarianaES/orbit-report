import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';

  sourceList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satelliteUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satelliteUrl).then(function(response) {
        response.json().then(function(data) {
        let fetchedSatellites = data.satellites;
        // console.log(fetchedSatellites);
        fetchedSatellites.forEach(satellite => {this.sourceList.push(satellite)})
      }.bind(this));
    }.bind(this));
  }
}
