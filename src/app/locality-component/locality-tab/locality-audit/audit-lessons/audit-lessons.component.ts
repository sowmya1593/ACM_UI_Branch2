import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import { APP_CONFIG } from '../../../../app.config';
import { UtilService } from '../../../../util.service';
import { ApiserviceService } from '../../../../apiservice.service';
import { AppAudit } from '../../../../data.model.auditDTO';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import * as moment from 'moment';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-audit-lessons',
  templateUrl: './audit-lessons.component.html',
  styleUrls: ['./audit-lessons.component.css']
})
export class AuditLessonsComponent implements OnInit {
  @ViewChild('content') content:TemplateRef<any>;
appAudit: AppAudit;
  public appAuditDTOs:any;
  public editData:any;
  public startDate:any;
  public loading:boolean = false;
  public endDate:any;
  public info:string="";
  public showForm:boolean=true;
  public showEdit:boolean=false;
 
  constructor( private _apiservice: ApiserviceService, 
    private utilService: UtilService,private http: Http,private modalService: NgbModal,
    private datepipe: DatePipe,private router:Router) { 
     
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
      }, error => 
      
      {
        this.loading = false;
        console.log(error);}
      );
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

     

      if(this.appAudit.lessonsEnteredDate === null)
      {
        this.endDate = {date:null};
      }else{
      let dt = new Date(this.appAudit.lessonsEnteredDate);
      let day1 = dt.getDate();
      let month1 = dt.getMonth()+1;
      let year1 = dt.getFullYear();
      this.endDate = {date:{year: year1, month: month1, day: day1}};
      }

      

    }
    
  }

  saveLessons()
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
          this.info="Lessons Learned has been updated.";
          this.modalService.open(this.content,ngbModalOptions);
        }, error => {
          this.loading = false;
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
        let latest_date =this.datepipe.transform(d, 'yyyy-MM-dd');
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
      let latest_date =this.datepipe.transform(d, 'yyyy-MM-dd');
      //this.audate = Date.parse(d);
      this.appAudit.lessonsEnteredDate = moment(latest_date).format();
    }
    
  }

  showAudit(){
    this.router.navigate(['/locality/tab/Audit']);
    }
    valueChanged()
  {
    this.showForm = false;
    this.showEdit = false;
  }







}
