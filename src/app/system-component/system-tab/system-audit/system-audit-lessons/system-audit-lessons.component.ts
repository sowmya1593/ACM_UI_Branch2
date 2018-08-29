import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from '../../../../app.config';
import { UtilService } from '../../../../util.service';
import { ApiserviceService } from '../../../../apiservice.service';
import { AppAudit } from '../../../../data.model.auditDTO';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import * as moment from 'moment';

@Component({
  selector: 'app-audit-lessons',
  templateUrl: './system-audit-lessons.component.html',
  styleUrls: ['./system-audit-lessons.component.css']
})
export class SystemAuditLessonsComponent implements OnInit {

appAudit: AppAudit;
  public appAuditDTOs:any;
  public editData:any;
  public startDate:any;
  public endDate:any;
  public showForm:boolean=true;
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd'
  };
 
  constructor( private _apiservice: ApiserviceService, 
    private utilService: UtilService,private http: Http) { 
      this.utilService.getEdit().subscribe(val =>{
        if(val)
        {
          this.showForm  = false;
  
        }
        else{
  
        }});
    this.appAudit = new AppAudit();
    this.getAppId();
  }

  ngOnInit() {
  }

  getAppId() {
  
    this._apiservice.viewApplication(UtilService.systemName)
      .subscribe((data: any) => {
        this.appAudit.applicationID = data.applicationViewDTO.applicationId;
        this.appAuditDTOs = data.applicationViewDTO.appAuditDTOs;
        this.showOnPageLoad();
      }, error => console.log(error));
    }

    showOnPageLoad()
    {
      if(UtilService.appAuditId === '')
      {
        console.log('Not edit mode');
      }
      else{
      this.editData = this.appAuditDTOs.filter(item => item.appAuditId === UtilService.appAuditId);
      
      for(let i=0;i<this.editData.length;i++)
      {
        this.appAudit = this.editData[i];
      }

      if(this.appAudit.actionPlanStartDt === null)
      {
        this.startDate = {date:null};
      }
      else{
      let d = new Date(this.appAudit.actionPlanStartDt);
      let day = d.getDate();
      let month = d.getMonth()+1;
      let year = d.getFullYear();
      this.startDate = {date:{year: year, month: month, day: day}};
      }

      if(this.appAudit.actionPlanEndDt === null)
      {
        this.endDate = {date:null};
      }else{
      let dt = new Date(this.appAudit.actionPlanEndDt);
      let day1 = dt.getDate();
      let month1 = dt.getMonth()+1;
      let year1 = dt.getFullYear();
      this.endDate = {date:{year: year1, month: month1, day: day1}};
      }

      

    }
    
  }

  saveLessons()
  {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let url_update = APP_CONFIG.updateAppAuditInfo;
    let data = JSON.stringify(this.appAudit);
    this.http.post(url_update,data,options)
        .subscribe((data: any) => {
          console.log(data);
        }, error => {
          console.log(error);
        });
  }
  
  getEnteredBy(value)
    {
      console.log(value);
      if (value.formatted === "") {
        
      }
      else {
        let d = value.formatted;
        //this.audate = Date.parse(d);
        //this.appAudit.actionPlanStartDt = d;
      }
      
    }

     
  getEnteredDate(value)
  {
    console.log(value);
    if (value.formatted === "") {
      
    }
    else {
      let d = value.formatted;
      //this.audate = Date.parse(d);
      this.appAudit.actionPlanEndDt = moment(d).format();
    }
    
  }







}
