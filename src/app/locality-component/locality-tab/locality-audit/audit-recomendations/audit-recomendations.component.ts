import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { AppAudit, Policy } from '../../../../data.model.auditDTO';
import { ApiserviceService } from '../../../../apiservice.service';
import { UtilService } from '../../../../util.service';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import { APP_CONFIG } from '../../../../app.config';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-audit-recomendations',
  templateUrl: './audit-recomendations.component.html',
  styleUrls: ['./audit-recomendations.component.css']
})
export class AuditRecomendationsComponent implements OnInit {
  @ViewChild('content') content:TemplateRef<any>;
  appAudit: AppAudit;
  public appAuditDTOs:any;
  public editData:any;
  public estDate:any;
  public info:string="";
  public showForm:boolean = true;
  public loading:boolean = false;
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd'
  };
  constructor( private _apiservice: ApiserviceService, 
    private utilService: UtilService,private http: Http,private router:Router,
    private route: ActivatedRoute, private modalService: NgbModal,private datepipe: DatePipe) { 
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
  this.loading=true;
    this._apiservice.viewApplication(localStorage.getItem('localityName'))
      .subscribe((data: any) => {
        this.loading=false;
        this.appAudit.applicationID = data.applicationViewDTO.applicationId;
        this.appAuditDTOs = data.applicationViewDTO.appAuditDTOs;
        this.showOnPageLoad();
      }, error => {
        this.loading = false;
        console.log(error);}
      );
    }

    showOnPageLoad()
    {
      if(localStorage.getItem('appAuditId') === null)
      {
        console.log('Not edit mode');
      }
      else{
        let id = localStorage.getItem('appAuditId');
        let auid = +id;
      this.editData = this.appAuditDTOs.filter(item => item.appAuditId === auid);
      
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
        let latest_date =this.datepipe.transform(d, 'yyyy-MM-dd');
        this.appAudit.estimatedCompletionDt = moment(latest_date).format();
      }
      
    }
   showAudit(){
 this.router.navigate(['/locality/tab/Audit']);
 }





  saveRecommendations()
  {
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false
      };
    this.loading=true;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let url_update = APP_CONFIG.updateAppAuditInfo;
    let data = JSON.stringify(this.appAudit);
    this.http.post(url_update,data,options)
        .subscribe((data: any) => {
          this.loading=false;
          this.info="Recomendations has been updated.";
          this.modalService.open(this.content,ngbModalOptions);
        }, error => {
          this.loading=false;
          console.log(error);
        });
  }

}
