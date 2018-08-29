import { Component, OnInit } from '@angular/core';
import { AppAudit, Policy } from '../../../../data.model.auditDTO';
import { ApiserviceService } from '../../../../apiservice.service';
import { UtilService } from '../../../../util.service';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import { APP_CONFIG } from '../../../../app.config';
import { Router } from '@angular/router';
@Component({
  selector: 'app-audit-findings',
  templateUrl: './system-audit-findings.component.html',
  styleUrls: ['./system-audit-findings.component.css']
})
export class SystemAuditFindingsComponent implements OnInit {
  appAudit: AppAudit;
  public appAuditDTOs:any;
  public editData:any;
  public showForm:boolean = true;
  public showEdit:boolean = false;
  constructor( private _apiservice: ApiserviceService, private utilService: UtilService,
    private  http: Http,private router: Router) { 
    
    this.utilService.getEdit().subscribe(val =>{
      if(val)
      {
        this.showForm  = false;

      }
      else{

      }
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
        this.showEdit = true;
      this.editData = this.appAuditDTOs.filter(item => item.appAuditId === UtilService.appAuditId);
      
      for(let i=0;i<this.editData.length;i++)
      {
        this.appAudit = this.editData[i];
      }
     
    
    }
  }
   





  saveFindings()
  {
    console.log(this.appAudit);
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

  valueChanged()
  {
    this.showForm = false;
    this.showEdit = false;
  }

  showAudit(){
    this.router.navigate(['/locality/tab/Audit/']);
  }

}
