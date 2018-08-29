import { Component, OnInit, HostListener } from '@angular/core';
import {APP_CONFIG} from '../app.config';
import {ApiserviceService} from '../apiservice.service';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import { Device } from '../data_modelDeviceInventory';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Location} from '@angular/common';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css'],
  providers: [ApiserviceService],
})
export class UpdateDeviceComponent implements OnInit {
  device: Device;
  public deviceData: any;
  public getDeviceData: any;
  public hostName: any;
  showForm:boolean = true;
  color: String;
  
  constructor(private _apiservice: ApiserviceService, private  http: Http, private modalService: NgbModal, private _location: Location, private utilservice: UtilService) { 
    this.device = new Device();
  }

  ngOnInit() {
    this.getDBServer(1);
  }
  
   open(content){
     this.modalService.open(content);
  }
  
  getDBServer(id){
    this._apiservice.getDBServer(id)
    .subscribe((data:any) => {
      console.log(data);
     this.device = data;
      //console.log(this.getDeviceData);   
    },error => console.log(error));
  }
  
  backClicked() {
    this._location.back();
  }
  
  editorGroup(): void {
  this.showForm = false; 
  }
  
  updateDevice(){
    let url = APP_CONFIG.updateDBServerInfo;
    /*let d = new Date(this.solution.certDt);
        this.selectDate = {
           year: d.getFullYear(),
          month: d.getMonth() + 1,
          day: d.getDate()
        }*/
    console.log(this.device);
    //formData.append('device', JSON.stringify(this.device));
    /*for (let i = 0; i < this.files.length; i++) {
     formData.append('files', this.files[i]);

    }*/
    //console.log(formData.get('device'));
    this.deviceData = JSON.stringify(this.device);
    console.log(this.deviceData);
     this.http.post(url, this.device).subscribe((data: any) => {
              console.log("inside http");
              console.log(data);
            }, error => console.log(error));
    //this._apiservice.saveDBServerInfo(formData);
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

   getColor() {
    return this.color === 'online' ? '#ffffff' : 'white';
  }

  getOpacity() {
    return this.color === 'online' ? 0.8 : 1;
  }

}
