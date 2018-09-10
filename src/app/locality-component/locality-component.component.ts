import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-locality-component',
  templateUrl: './locality-component.component.html',
  styleUrls: ['./locality-component.component.css']
})
export class LocalityComponentComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }
 backClicked() {
        this._location.back();
    }
  
}
