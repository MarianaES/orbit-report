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
        fetchedSatellites.forEach(satellite => {this.sourceList.push(new Satellite(satellite.name, satellite.type, satellite.operational, satellite.orbitType, satellite.launchDate))});
      }.bind(this));
    }.bind(this));
  }
}
