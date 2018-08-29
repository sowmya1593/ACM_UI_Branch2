import { Component, OnInit, ViewChild, ElementRef, TemplateRef, } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {ApiserviceService} from '../../apiservice.service';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {UtilService} from '../../util.service';
@Component({
  selector: 'app-system-add-component',
  templateUrl: './system-add-component.component.html',
  styleUrls: ['./system-add-component.component.css'],
  providers: [ApiserviceService]
})
export class SystemAddComponentComponent implements OnInit {
 
  public showForm:string;
  public titus: string;
  public system: any;
  public acronyms: any;
  
	@ViewChild('content') content:TemplateRef<any>;
  constructor( private router: Router,private _apiservice: ApiserviceService,  private modalService: NgbModal,private utilService: UtilService ) {
  UtilService.active = false;

  }

  ngOnInit() {

    this.getAppAcronyms();
  }
  
  selectLocal(system){
  if(system === 'Choose...'){
  
  }
  else{
  this.system = system;
  let ngbModalOptions: NgbModalOptions = {
	      backdrop : 'static',
	      keyboard : false
	      };
    this._apiservice.viewApplication(system)
      .subscribe((data: any) => {
      console.log(data);
      if(data.applicationViewDTO === null){
        this.modalService.open(this.content, ngbModalOptions);
      }
      else{
      this.router.navigate(['/system/tab/info/' + system]);
      
      }},error => {console.log(error);});
      }
   
     
}

redirect(condition)
{

if(condition === 'yes')
{
this.router.navigate(['/system/tab/info/' + this.system]);
}

else{

this.router.navigate(['/system/map']);

}

}

fetchSystem(system)
{
this.system = system;
let ngbModalOptions: NgbModalOptions = {
	      backdrop : 'static',
	      keyboard : false
	      };
    this._apiservice.viewApplication(system)
      .subscribe((data: any) => {
      console.log(data);
      if(data.applicationViewDTO === null){
        this.modalService.open(this.content, ngbModalOptions);
      }
      else{
      this.router.navigate(['/system/tab/info/' + system]);
      
      }},error => {console.log(error);});
      }

  
      getAppAcronyms(){
        this._apiservice.getAppAcronyms()
          .subscribe((data: any) => {
            this.acronyms=data;
            console.log("this is checking for sytems");
            console.log(this.acronyms);
      },error => { console.log(error);});

    }
}
