import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
@Component({
  selector: 'app-vendors-component',
  templateUrl: './vendors-component.component.html',
  styleUrls: ['./vendors-component.component.css'], 
  providers: [ApiserviceService]
  
})
export class VendorsComponentComponent implements OnInit {
  @ViewChild('content') content:TemplateRef<any>;
  constructor( private _apiservice: ApiserviceService,private modalService: NgbModal,private router: Router) { }

  ngOnInit() {
  }
  submitClicked(value): void {
  console.log(value);
   //this.modalService.open(this.content);
   this._apiservice.postVendorData(value)
      .subscribe((data: any) => {
        console.log(data);
        this.modalService.open(this.content);
        open(data.responseString);
      }, error => console.log(error));
  }
  
  goToPage(){
  this.router.navigate(['/vendorsView']);
  console.log("333333333333333333333333333");
  }
}
