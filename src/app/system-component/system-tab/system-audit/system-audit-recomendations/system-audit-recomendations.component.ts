import { Component, OnInit } from '@angular/core';
import { AppAudit, Policy } from '../../../../data.model.auditDTO';
import { ApiserviceService } from '../../../../apiservice.service';
import { UtilService } from '../../../../util.service';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import { APP_CONFIG } from '../../../../app.config';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-audit-recomendations',
  templateUrl: './system-audit-recomendations.component.html',
  styleUrls: ['./system-audit-recomendations.component.css']
})
export class SystemAuditRecomendationsComponent implements OnInit {

  appAudit: AppAudit;
  public appAuditDTOs:any;
  public editData:any;
  public estDate:any;
  public showForm:boolean = true;
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd'
  };
  constructor( private _apiservice: ApiserviceService, 
    private utilService: UtilService,private http: Http,private router:Router,private route: ActivatedRoute) { 
   this.utilService.getEdit().subscribe(val =>{
     if(val)
     {
       this.showForm = false;
     }
     else{}
   });
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
      if(this.appAudit.estimatedCompletionDt === null)
      {
        this.estDate = {date:null};
      }
      else{
      let d = new Date(this.appAudit.estimatedCompletionDt);
      let day = d.getDate();
      let month = d.getMonth()+1;
      let year = d.getFullYear();
      this.estDate = {date:{year: year, month: month, day: day}};
      }

    }
    
  }
   
  getEstDate(value)
    {
      console.log(value);
      if (value.formatted === "") {
        
      }
      else {
        let d = value.formatted;
        //this.audate = Date.parse(d);
        this.appAudit.estimatedCompletionDt = moment(d).format();
      }
      
    }
   showAudit(){
 this.router.navigate(['/system/tab/Audit/']);
 }





  saveRecommendations()
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

}
