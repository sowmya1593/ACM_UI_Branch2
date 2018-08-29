import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from '../../../../app.config';
import { UtilService } from '../../../../util.service';
import { ApiserviceService } from '../../../../apiservice.service';
import { AppAudit } from '../../../../data.model.auditDTO';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-audit-budget',
  templateUrl: './system-audit-budget.component.html',
  styleUrls: ['./system-audit-budget.component.css']
})
export class SystemAuditBudgetComponent implements OnInit {

  appAudit: AppAudit;
  public appAuditDTOs:any;
  public editData:any;
  public showForm:boolean=true;
 
  constructor( private _apiservice: ApiserviceService, 
    private utilService: UtilService,private http: Http,private route: ActivatedRoute,private router:Router) { 
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

    

      

    }
    
  }
  
  showAudit(){
 this.router.navigate(['/system/tab/Audit/']);
 }


  saveBudget()
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
