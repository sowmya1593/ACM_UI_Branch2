import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ApiserviceService } from '../../../../apiservice.service';
import { UtilService } from '../../../../util.service';
import { AppAudit } from '../../../../data.model.auditDTO';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import { APP_CONFIG } from '../../../../app.config';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-audit-management',
  templateUrl: './audit-management.component.html',
  styleUrls: ['./audit-management.component.css']
})
export class AuditManagementComponent implements OnInit {
  @ViewChild('content') content:TemplateRef<any>;
  appAudit: AppAudit;
  public appAuditDTOs:any;
  public editData:any;
  public resDate:any;
  public info:string="";
  public showForm:boolean = true;
  public loading:boolean = false;
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd'
  };
 
  constructor( private _apiservice: ApiserviceService, 
    private utilService: UtilService,private http: Http,private route: ActivatedRoute,
    private router:Router, private modalService: NgbModal,private datepipe: DatePipe) { 
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
    this.loading=true;
    this._apiservice.viewApplication(localStorage.getItem('localityName'))
      .subscribe((data: any) => {
        this.loading=false;
        this.appAudit.applicationID = data.applicationViewDTO.applicationId;
        this.appAuditDTOs = data.applicationViewDTO.appAuditDTOs;
        this.showOnPageLoad();
      }, error => {
        this.loading=false;
        console.log(error);
      });
    }

    showOnPageLoad()
    {
      if(localStorage.getItem('appAuditId') === null)
      {
        console.log('Not edit mode');
      }
      else{
        let id =localStorage.getItem('appAuditId');
        let auid = +id;
      this.editData = this.appAuditDTOs.filter(item => item.appAuditId === auid);
      
      for(let i=0;i<this.editData.length;i++)
      {
        this.appAudit = this.editData[i];
      }
      if(this.appAudit.responseDt === null)
      {
        this.resDate = {date:null};
      }
      else{
      let d = new Date(this.appAudit.responseDt);
      let day = d.getDate();
      let month = d.getMonth()+1;
      let year = d.getFullYear();
      this.resDate = {date:{year: year, month: month, day: day}};
      }
      

    }
    
  }

  saveManagement()
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
        this.loading=false;
        this.info="Management Response has been updated."
        this.modalService.open(this.content,ngbModalOptions);
        }, error => {
          this.loading=false;
          console.log(error);
        });
  }
  
  getResDate(value)
    {
      console.log(value);
      if (value.formatted === "") {
        
      }
      else {
        let d = value.formatted;
        let latest_date =this.datepipe.transform(d, 'yyyy-MM-dd');
        //this.audate = Date.parse(d);
        this.appAudit.responseDt = moment(latest_date).format();
      }
      
    }

 showAudit(){
 this.router.navigate(['/locality/tab/Audit']);
 }





}