import {Component, OnInit} from '@angular/core';
import {RegisterService} from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [ RegisterService]
})

/**
 * New typescript file
 */

export class RegisterComponent implements OnInit{
  public data: any;
  totalRec: number;
  
  constructor(private _service:RegisterService){}
  
  ngOnInit(){
    this._service.registerVendor().subscribe((res) => {
      this.data=res;
      this.totalRec=this.data.length;
      console.log(this.totalRec);

      err=>console.log(err)
    });
  }
  
}
