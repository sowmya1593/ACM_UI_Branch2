import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-navigation',
  templateUrl: './edit-navigation.component.html',
  styleUrls: ['./edit-navigation.component.css']
})
export class EditNavigationComponent implements OnInit {
  color: String;

  @Output() editClick = new EventEmitter<any>();
  @Output() cancelClick = new EventEmitter<any>();
@Output() submitClick = new EventEmitter<any>();
    constructor(private _location: Location) { }

  ngOnInit() {
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.color = 'online';
      console.log('You are 100px from the top to bottom');
    } else {
        this.color = 'offline';
        console.log('You are 500px from the top to bottom');
      
      
    }

  }
  x
  getColor() {
    return this.color === 'online' ? '#ffffff' : 'white';
  }

  getOpacity() {
    return this.color === 'online' ? 0.8 : 1;
  }
  
  backClicked() {
        this._location.back();
    }


}
