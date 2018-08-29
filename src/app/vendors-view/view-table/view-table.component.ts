import { ApiserviceService } from '../../apiservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css'],
  providers: [ ApiserviceService ]
})
export class ViewTableComponent implements OnInit {
  public vendors:any;
  public vendorsContact:any;
 private desc = false;
 public p:number =1;
  constructor(private _apiservice: ApiserviceService) { }

  ngOnInit() {
//    this.getVendors();
  }
  
   getVendors()
  {
     this._apiservice.getVendors()
    .subscribe((data:any) => {
     this.vendors = data.vendorsDTOs;
      this.vendorsContact=data.vendorsDTOs.vendorContact;
      console.log(data);
      
    },error => console.log(error));
  }
}
