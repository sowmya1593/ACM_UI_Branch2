import { Component, OnInit,  ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ApiserviceService } from '../../../../apiservice.service';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import { AppAudit, Policy } from '../../../../data.model.auditDTO';
import { UtilService } from '../../../../util.service';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import { APP_CONFIG } from '../../../../app.config';
import { HttpClient } from "@angular/common/http";
import { FilterPipeDate } from '../../../locality-date-filter';
import { FilterAuditName } from '../../../locality-auditname-filter';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';


@Component({
 selector: 'app-audit-first',
 templateUrl: './audit-first.component.html',
 styleUrls: ['./audit-first.component.css']
 
})
export class AuditFirstComponent implements OnInit {
    @ViewChild('fileInput') inputEl: ElementRef;
    @ViewChild('content1') content:TemplateRef<any>;
 public showSection: boolean = false;
 policies: Policy[];
  public p: number = 1;
 public showTable: boolean = false;
 public definitive: boolean;
 public policy: boolean;
 public policyData: any;
 public auditTypes: any;
 public audate: any;
 public policyTypes: any;
 public yesfile:boolean = false;
 showInitial: boolean = false;
 public info:any
 public showEditMode:boolean = false;
 public appAuditId:any;
 public myDatePickerOptions: IMyDpOptions = {
 dateFormat: 'mm/dd/yyyy'
 };
 appAudit: AppAudit;
 appId: any;
 auditDate: any;
 nextDate: any;
 auditTypeId: any;
 policyDisplay: Policy;
 public err: string;
 public err1: string;
 public errorfile:string="";
 public naudt: any;
 public show1:boolean;
 public show2:boolean;
 public show3:boolean;
 public show4:boolean;
 public show5:boolean;
 public showStatus:boolean=false;
 public showStatus1:boolean=true;
 public polName:any;
 public hideTable:boolean = true;
 public showLegalBox:boolean = false;
 public showHistory:boolean = false;
 public mainData:any;
 public showButton:boolean = false;
 public updatedTime:any;
 public desc:boolean=false;
 public appAuditDTOs:any;
 public editData:any;
 public showOriginal:boolean =true;
 public showEdit:boolean = false;
 public policyNameArray:any;
 public attachment:any;
 public vauditDate:any;
 public comparePolicyDTO:any;
 public loading:boolean = false;
 constructor(private modalService: NgbModal, private http: Http, 
 private _apiservice: ApiserviceService, private utilService: UtilService,
 private router: Router, private route: ActivatedRoute,public datepipe: DatePipe) {
 this.appAudit = new AppAudit();
 this.policyDisplay = new Policy();
 this.policies = [];
 this.getAppId();

 
 
  }
 
 ngOnInit() {
 
 this.showDropdown();
 }
 
 getAppId() {
 this.loading = true;
 this._apiservice.viewApplication(localStorage.getItem('localityName'))
 .subscribe((data: any) => {
   this.loading = false;
 this.appAudit.applicationID = data.applicationViewDTO.applicationId;
 this.mainData = data.applicationViewDTO.acronym;
 let d = new Date(data.applicationViewDTO.updatedTime);
 this.appAuditDTOs = data.applicationViewDTO.appAuditDTOs;
 this.showOnPageLoad();
 let day = d.getDate();
 let month = d.getMonth()+1;
 let year = d.getFullYear();
 this.updatedTime = month+"/"+day+"/"+year;
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
 UtilService.auditActive = true;
 localStorage.setItem('auditActive','true');
 this.showOriginal =false;
 this.showInitial = true;
 this.show1=true;
 this.show2=true;
 this.show3=true;
 this.showEdit = true;
 let id = localStorage.getItem('appAuditId');
 let appauid:number = +id;
 this.editData = this.appAuditDTOs.filter(item => item.appAuditId === appauid);
 
 for(let i=0;i<this.editData.length;i++)
 {
 this.appAudit = this.editData[i];
 }
 this.policies = this.appAudit.auditPolicyDTOs;
 this.showTable = true;
 this.getPolicyName(this.appAudit.auditName)
 let d = new Date(this.appAudit.auditDate);
 this.audate = this.appAudit.auditDate;
 //this.appAuditDTOs = data.applicationViewDTO.appAuditDTOs;
 let day = d.getDate();
 let month = d.getMonth()+1;
 let year = d.getFullYear();
 this.vauditDate = month+"/"+day+"/"+year;
 this.auditDate = {date:{year: year, month: month, day: day}};

 let d1 = new Date(this.appAudit.nextAuditDate);
 this.naudt = this.appAudit.nextAuditDate;
 //this.appAuditDTOs = data.applicationViewDTO.appAuditDTOs;
 let day1 = d1.getDate();
 let month1 = d1.getMonth()+1;
 let year1 = d1.getFullYear();
 this.nextDate = {date:{year: year1, month: month1, day: day1}};
 this.show3 = true;
 this.show4 = true;
 //let ad = year + "-" + month + "-" +day;
 //let nad = year1 + "-" + month1 + "-" +day1;
 // this.appAudit.auditDate = ad;
 // this.appAudit.nextAuditDate = nad;
 // this.appAudit.auditPolicyDTOs = [];
 
 }
 }

 getPolicyName(auditId)
 {
   this.loading = true;
 this._apiservice.getPolicyGroup(auditId)
 .subscribe((data: any) => {
   this.loading = false;
 this.policyNameArray = data.filter(item => item.policyGrpId === this.appAudit.policyGrpId);
 for(let i =0;i<this.policyNameArray.length;i++)
 {
     this.comparePolicyDTO = this.policyNameArray[i];
 this.polName = this.policyNameArray[i].policyGrpName;
 }
 }, error => { 
  this.loading = false; 
  console.log(error); });
 
 }

 open(content) {
     this.errorfile = "";
 this.modalService.open(content);
 }


 showAudit(){
 this.router.navigate(['/locality/tab/Audit/']);
 }

 showHist(){
 this.showHistory = true;
 }
 
 showDropdown() {
 
 this._apiservice.getAuditTypes()
 .subscribe((data: any) => {
 this.auditTypes = data;
 }, error => { console.log(error); });
 
 
 }
 
 selectDefinitive(auditID) {
 
 if (auditID === 'Choose...') {
 this.definitive = false
 this.showTable = false;
 this.show1 = false;
 this.policyTypes = [];
 }
 else {
 this.show1=true;
 this.definitive = true;
 this.auditTypeId = auditID;
 this.appAudit.auditName=auditID;
 this._apiservice.getPolicyGroup(auditID)
 .subscribe((data: any) => {
 this.policyTypes = data;
 }, error => { console.log(error) });
 }
 }
 
 
 selectType(policy) {
 if (policy === 'Choose...') {
 this.showTable = false;
 this.show2 = false;
 this.policies = [];
 
 }
 else {
 this.show2=true;
 //this.appAudit.policyDTOs.policyGrpId = policy;
 this.appAudit.policyGrpId = policy;
 this._apiservice.fetchPolicies(policy)
 .subscribe((data: any) => {
 this.showTable = true;
 this.policies = data.policyDTOs;
 }, error => {
 console.log(error);
 });
 
 }
 }
 
 getAuditDate(value) {
 if (value.formatted === "") {
 this.err1 = "Enter the AuditDate";
 this.show3 = false;
 }
 else {
 this.show3=true;
 this.err1 = "";
 let d = value.formatted;
 this.audate = Date.parse(d);
 let latest_date =this.datepipe.transform(d, 'yyyy-MM-dd');
 this.appAudit.auditDate = moment(latest_date).format();
 if (this.naudt != undefined) {
 if(this.compareDate(this.audate, this.naudt))
 {
 //this.err ="";
 this.appAudit.auditDate = moment(latest_date).format();
 this.show4=true;
 }
 else {
 this.err = "nextDueDate should be after the auditDate";
 this.show4 = false;
 }
 }
 
 }
 }
 
 getDate(value) {
 
 if (value.formatted === "") {
 this.err = "Enter the DueDate";
 this.show4=false;
 }
 else {
 this.show4=true;
 this.err = "";
 let ddt = value.formatted;
 let latest_date =this.datepipe.transform(ddt, 'yyyy-MM-dd');
 this.naudt = Date.parse(ddt);
 if (this.compareDate(this.audate, this.naudt)) {
 this.appAudit.nextAuditDate = moment(latest_date).format();
 }
 else {
 this.err = "nextDueDate should be after the auditDate";
 this.show4 = false;
 }
 }
 
 }
 
 
 getNextDate(value) {
 
 if (value === 'Choose...') {
 this.showLegalBox=false;
 }
 else {
 this.appAudit.status = value;
 this.showLegalBox=true;
 
 
 // let t =this.compareDate(audate,naudt);
 // if(t)
 // {
 // this.appAudit.auditDate=audate;
 // this.appAudit.nextAuditDate=naudt;
 // 
 // console.log(this.appAudit);
 // }
 // else{
 // this.err = "nextDueDate should be after the auditDate";
 // this.appAudit = null;
 
 }
 
 }
 
 
 
 compareDate(d, ddt): boolean {
 return new Date(ddt) > new Date(d);
 }
 
 
 saveAudit()
 {
  let ngbModalOptions: NgbModalOptions = {
    backdrop : 'static',
    keyboard : false
    };
   this.loading = true;
 const headers = new Headers();
 headers.append('Content-Type', 'application/json');
 let options = new RequestOptions({ headers: headers });
 
 if(this.appAudit.appAuditId === undefined){
 let url_update = APP_CONFIG.saveAppAuditInfo;
 for(let i=0;i<this.policies.length;i++)
 {
 this.appAudit.auditPolicyDTOs.push(this.policies[i]);
 }


 let data = JSON.stringify(this.appAudit);
 this.http.post(url_update,data,options)
 .subscribe((data: any) => {
 //console.log(data);
 //UtilService.auditActive = true;
 this.loading = false;
 this.info="Audit has been created.";
 this.modalService.open(this.content,ngbModalOptions);

 }, error => {
   this.loading = false;
 console.log(error);
 });
 }

 else{
 let url_update = APP_CONFIG.updateAppAuditInfo;
 // for(let i=0;i<this.policies.length;i++)
 // {
 // this.appAudit.auditPolicyDTOs.push(this.policies[i]);
 // }
 let data = JSON.stringify(this.appAudit);
 this.http.post(url_update,data,options)
 .subscribe((data: any) => {
 this.loading = false;
 this.showButton = true;
 this.info="Audit has been updated.";
 this.modalService.open(this.content,ngbModalOptions);
 }, error => {
   this.loading = false;
 console.log(error);
 });

 }
 }

 redirect()
 {
  this.router.navigate(['/locality/tab/Audit']);
 }
 
 goTo()
 {
 this.router.navigate(['/locality/tab/Audit/Tab/find']);
 
 }


 valueChanged()
 {
 this.utilService.setEditTrue(true);
 this.showInitial = false;
 this.showEdit = false;
 this.showOriginal = false;
 this.showStatus=true;
 this.showStatus1=false;
 
 }


    getFile(fileInput: any) {
    let files = fileInput.target.files[0];
    if(files === undefined)
    {
      
    }
    else{

    let fileName = fileInput.target.files[0].name;
    this.attachment = fileInput.target.files[0];
    this.yesfile = true;
    this.getFileContent(fileInput.target.files[0])
      .then(
        data =>{
            //this.yesfile = true;
            //this.attachment = data;
        });
    
      }
     
    }

    getFileContent(file) {
        return new Promise((resolve, reject) => {
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            resolve(reader.result)
    
          };
          reader.onerror = (error) => {
            reject(error);
          };
        });
    
    
      }


      compareFile()
      {
        const headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        let options = new RequestOptions({ headers: headers });
        let url = APP_CONFIG.comparePolicyFile;
          if(this.yesfile)
          {
            var formData=new FormData();
            formData.append('file',this.attachment);
            formData.append('policy',JSON.stringify(this.comparePolicyDTO));
            formData.append('policies',JSON.stringify(this.policies));
            this.yesfile = false;
            //this._apiservice.comparePolicyFile(formData)
            this.http.post(url,formData).map(res => {return res.json();})
            .subscribe((data:any) => {
                    console.log(data.auditPolicyDTOs);
            },error => {
                this.errorfile = "invalid file for compare";
            });

          }
          else{

          }
      }


      downloadFile()
      {
        window.open(APP_CONFIG.generatePolicyFile + '?' + 'policyGrpId' + '=' + this.appAudit.policyGrpId);
        
      }


      handleSort(){
        if(!this.desc) {
          this.policies.sort(this.doAsc);
          this.desc = true;
        }
        else {
           this.policies.sort(this.doDsc);
           this.desc = false;
        }
    
      }
      doAsc(a, b) {
        if (a.controlNumber > b.controlNumber) {
          return -1;
        } else if (a.controlNumber < b.controlNumber) {
          return 1;
        }
        return 0;
      }
    
      doDsc(a, b) {
        if (a.controlNumber < b.controlNumber) {
          return -1;
        } else if (a.controlNumber > b.controlNumber) {
          return 1;
        }
        return 0;
      }

  }
