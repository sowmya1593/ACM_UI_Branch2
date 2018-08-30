import { Component, OnInit } from '@angular/core';
import {APP_CONFIG} from '../app.config';
import {ApiserviceService} from '../apiservice.service';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import { Device } from '../data_modelDeviceInventory';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
  providers: [ApiserviceService],
})
export class DeviceComponent implements OnInit {
  public showForm: boolean = false;
  device: Device;
  getDevice: Device;
  
  constructor(private _apiservice: ApiserviceService, private  http: Http, private modalService: NgbModal, private utilservice: UtilService) { 
    this.device = new Device();
    this.getDevice = new Device();
  }

  ngOnInit() {
    //for(let i = 1;i <= UtilService.noIds;i++){
      //this.getDBServer(1);
    //}
  }
  
  changeForm(){
    if(this.showForm === false){
      this.showForm = true; 
    }
    else{
      this.showForm = false;
    }
  }
  
   open(content){
     this.modalService.open(content);
  }
  
  /*getDBServer(id){
    this._apiservice.getDBServer(id)
    .subscribe((data:any) => {
      this.getDevice = data
      console.log(this.getDevice);
    },error => console.log(error));
  }*/
  
  submitDevice(){
    console.log("inside submit");
    let url = APP_CONFIG.saveDBServerInfo;
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
     this.http.post(url, this.device).subscribe((data: any) => {
              //UtilService.noIds = UtilService.noIds + 1;
              //console.log(UtilService.noIds);
              console.log(data);
            }, error => console.log(error));
    
  }

}
