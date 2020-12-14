import { Component, Input, OnInit } from '@angular/core';
import { count } from 'console';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  
  @Input() satellites: Satellite[];
  types: string[] = ["Space Debris", "Communication", "Probe", "Positioning", "Space Station", "Telescope"];

  constructor() { }

  ngOnInit() {
  }

  getTotal(selectedType: string): number {
    let count = 0;
    this.satellites.map(satellite => {
      if (satellite.type === selectedType) {
        count += 1;
      }
    });
    return count;
  }



}
