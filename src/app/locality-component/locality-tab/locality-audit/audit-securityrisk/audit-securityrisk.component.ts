import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { APP_CONFIG } from '../../../../app.config';
import { UtilService } from '../../../../util.service';
import { ApiserviceService } from '../../../../apiservice.service';
import { AppAudit } from '../../../../data.model.auditDTO';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-audit-securityrisk',
  templateUrl: './audit-securityrisk.component.html',
  styleUrls: ['./audit-securityrisk.component.css']
})
export class AuditSecurityriskComponent implements OnInit {

  @ViewChild('content') content:TemplateRef<any>;
  appAudit: AppAudit;
  public appAuditDTOs:any;
  public editData:any;
  public showForm:boolean=true;
  public showEdit:boolean=false;
  public loading:boolean = false;
  public info:string="";
  
 
  constructor( private _apiservice: ApiserviceService, 
    private utilService: UtilService,private http: Http,private router:Router,
    private route: ActivatedRoute, private modalService: NgbModal) { 
     
    this.appAudit = new AppAudit();
    this.getAppId();
  }

  ngOnInit() {
  }

  getAppId() {
  this.loading = true;
    this._apiservice.viewApplication(localStorage.getItem('localityName'))
      .subscribe((data: any) => {
        this.loading = false;
        this.appAudit.applicationID = data.applicationViewDTO.applicationId;
        this.appAuditDTOs = data.applicationViewDTO.appAuditDTOs;
        this.showOnPageLoad();
      }, error => {
        this.loading = false;
        console.log(error);});
    }

    showOnPageLoad()
    {
      if(localStorage.getItem('appAuditId') === null)
      {
        
      }
      else{
        this.showEdit=true;
        let id =localStorage.getItem('appAuditId');
        let auid = +id;
      this.editData = this.appAuditDTOs.filter(item => item.appAuditId === auid);
      
      for(let i=0;i<this.editData.length;i++)
      {
        this.appAudit = this.editData[i];
      }

    

      

    }
    
  }
  
  
  
    showAudit(){
 this.router.navigate(['/locality/tab/Audit']);
 }



  saveSecurityRisk()
  {
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false
      };
    this.loading = true;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let url_update = APP_CONFIG.updateAppAuditInfo;
    let data = JSON.stringify(this.appAudit);
    this.http.post(url_update,data,options)
        .subscribe((data: any) => {
        this.loading = false;
        this.info="Security Risk has been updated.";
        this.modalService.open(this.content,ngbModalOptions);
        }, error => {
          this.loading = false;
          console.log(error);
        });
  }
  valueChanged()
  {
    this.showForm = false;
    this.showEdit = false;
  }

}
