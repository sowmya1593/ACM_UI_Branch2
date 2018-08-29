import { Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import { AppAudit, Policy } from '../../../../data.model.auditDTO';
import { ApiserviceService } from '../../../../apiservice.service';
import { UtilService } from '../../../../util.service';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import { APP_CONFIG } from '../../../../app.config';
import { Router } from '@angular/router';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-audit-findings',
  templateUrl: './audit-findings.component.html',
  styleUrls: ['./audit-findings.component.css']
})
export class AuditFindingsComponent implements OnInit {
  @ViewChild('content') content:TemplateRef<any>;
  appAudit: AppAudit;
  public appAuditDTOs:any;
  public editData:any;
  public showForm:boolean = true;
  public showEdit:boolean = false;
  public loading:boolean = false;
  public info:string ="";
  constructor( private _apiservice: ApiserviceService, private utilService: UtilService,
    private  http: Http,private router: Router, private modalService: NgbModal) { 
    
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
  this.loading = true;
    this._apiservice.viewApplication(localStorage.getItem('localityName'))
      .subscribe((data: any) => {
        this.loading = false;
        this.appAudit.applicationID = data.applicationViewDTO.applicationId;
        this.appAuditDTOs = data.applicationViewDTO.appAuditDTOs;
        this.showOnPageLoad();
      }, error => {
        this.loading=false;
        console.log(error);});
    }

    showOnPageLoad()
    {
      if(localStorage.getItem('appAuditId') === null)
      {
        console.log('Not edit mode');
      }
      else{
        this.showEdit = true;
        let id = localStorage.getItem('appAuditId');
        let auid = +id;
      this.editData = this.appAuditDTOs.filter(item => item.appAuditId === auid);
      
      for(let i=0;i<this.editData.length;i++)
      {
        this.appAudit = this.editData[i];
      }
     
    
    }
  }
   





  saveFindings()
  {
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false
      };
    this.loading=true;
    console.log(this.appAudit);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let url_update = APP_CONFIG.updateAppAuditInfo;
    let data = JSON.stringify(this.appAudit);
    this.http.post(url_update,data,options)
        .subscribe((data: any) => {
          this.loading = false;
          this.info ="Findings has been updated.";
          this.modalService.open(this.content,ngbModalOptions);
        }, error => {
          this.loading=false;
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
