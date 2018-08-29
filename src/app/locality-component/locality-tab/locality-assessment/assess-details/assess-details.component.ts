import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppAssess, AssessmentPolicyDTO, Policy } from '../../../../data.model.assessmentDTO';
import { ApiserviceService } from '../../../../apiservice.service';
import { UtilService } from '../../../../util.service';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';
import { APP_CONFIG } from '../../../../app.config';
import { HttpClient } from "@angular/common/http";
import { FilterPipeDate } from '../../../locality-date-filter';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-assess-details',
  templateUrl: './assess-details.component.html',
  styleUrls: ['./assess-details.component.css'],
  providers: [ApiserviceService]
})
export class AssessDetailsComponent implements OnInit {


  appAssess: AppAssess;
  policies: Policy[];
  policyDTO: Policy;
  assessmentDt: any;
  nextAssessmentDt: any;
  public definitive: boolean;
  public polName: any;
  public auditTypes: any;
  public policyTypes: any;
  public policy: boolean;
  public naudt: any;
  public show2: boolean;
  public policyData: any;
  public showStatus:boolean=false;
 public showStatus1:boolean=true;
  public showTable: boolean = false;
  public showLegalBox: boolean = false;
  public showOriginal: boolean = true;
  public showEdit: boolean = false;
  public policyNameArray: any;
  auditTypeId: any;
  policyDisplay: Policy;
  public editData: any;
  appId: any;
  public show1: boolean;
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd'
  };
  public show3: boolean;
  public show4: boolean;
  public show5: boolean;
  public audate: any;
  public mainData: any;
  public updatedTime: any;
  showForm: boolean = true;
  public assessmentDTOs: any;
  showInitial: boolean = false;
  public comparePolicyDTO: any;
  public err: string;
  public err1: string;

  public assessmentPolicyDto: AssessmentPolicyDTO;
  constructor(private router: Router, private _apiservice: ApiserviceService, 
    private utilService: UtilService, private http: Http, private datepipe:DatePipe) {
    this.policies = [];
    this.policyDisplay = new Policy();
    this.getAppId();

    this.appAssess = new AppAssess();
  }

  ngOnInit() {
    this.showDropdown();
  }

  getAppId() {

    this._apiservice.viewApplication(localStorage.getItem('localityName'))
      .subscribe((data: any) => {
        this.appAssess.applicationID = data.applicationViewDTO.applicationId;
        this.mainData = data.applicationViewDTO.acronym;
        let d = new Date(data.applicationViewDTO.updatedTime);
        this.assessmentDTOs = data.applicationViewDTO.assessmentDTOs;
        this.showOnPageLoad();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        this.updatedTime = month + "/" + day + "/" + year;
      }, error => console.log(error));

  }



  valueChanged() {
    this.showInitial = false;
    this.showEdit = false;
    this.showOriginal = false;
    this.showStatus=true;
 this.showStatus1=false;

  }
  saveAudit() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let url_save = APP_CONFIG.saveAppAssessment;
    for (let i = 0; i < this.policies.length; i++) {
      this.appAssess.assessmentPolicyDTOs.push(this.policies[i]);

    }
    let data = JSON.stringify(this.appAssess);
    console.log(data);
    this.http.post(url_save, data, options)
      .subscribe((data: any) => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }


  showOnPageLoad() {
    if (localStorage.getItem('assesId') === null) {
      console.log('Not edit mode');
    }
    else {
      this.showOriginal = false;
      this.showInitial = true;
      this.showEdit = true;
      let id = localStorage.getItem('assesId');
      let assesid = +id;
      this.editData = this.assessmentDTOs.filter(item => item.assessmentId === assesid);
      for (let i = 0; i < this.editData.length; i++) {
        this.appAssess = this.editData[i];
      }
      this.showTable = true;
      this.getPolicyName(this.appAssess.auditName)
      let d = new Date(this.appAssess.assessmentDt);
      this.audate = this.appAssess.assessmentDt;
      let day = d.getDate();
      let month = d.getMonth() + 1;
      let year = d.getFullYear();
      //this.vauditDate = month+"/"+day+"/"+year;
      this.assessmentDt = { date: { year: year, month: month, day: day } };
      let d1 = new Date(this.appAssess.nextAssessmentDt);
      this.naudt = this.appAssess.nextAssessmentDt;
      let day1 = d1.getDate();
      let month1 = d1.getMonth() + 1;
      let year1 = d1.getFullYear();
      this.nextAssessmentDt = { date: { year: year1, month: month1, day: day1 } };
      this.show3 = true;
      this.show4 = true;

    }
  }













  getPolicyName(auditId)
{
this._apiservice.getPolicyGroup(auditId)
.subscribe((data: any) => {
this.policyNameArray = data.filter(item => item.policyGrpId === this.appAssess.policyGrpId);
for(let i =0;i<this.policyNameArray.length;i++)
{
this.polName = this.policyNameArray[i].policyGrpName;
}
}, error => { console.log(error) });
 
}


  showDropdown() {

    this._apiservice.getAuditTypes()
      .subscribe((data: any) => {
        this.auditTypes = data;
      }, error => { console.log(error); });


  }

  getAuditDate(value) {
    console.log(value);
    if (value.formatted === "") {
      this.err1 = "Enter the AuditDate";
      this.show3 = false;
    }
    else {
      this.show3 = true;
      this.err1 = "";
      let d = value.formatted;
      this.audate = Date.parse(d);
      let latest_date =this.datepipe.transform(d, 'yyyy-MM-dd');
      this.appAssess.assessmentDt = moment(latest_date).format();
      if (this.naudt != undefined) {
        if (this.compareDate(this.audate, this.naudt)) {
          this.err = "";
          this.appAssess.assessmentDt = moment(latest_date).format();
          this.show4 = true;
        }
        else {
          this.err = "nextDueDate should be after the auditDate";
          this.show4 = false;
        }
      }

    }
  }

  showAudit() {
    this.router.navigate(['/locality/tab/assessment'])
  }

  getDate(value) {

    if (value.formatted === "") {
      this.err = "Enter the DueDate";
      this.show4 = false;
    }
    else {
      this.show4 = true;
      this.err = "";
      let ddt = value.formatted;
      this.naudt = Date.parse(ddt);
      let latest_date =this.datepipe.transform(ddt, 'yyyy-MM-dd');
      if (this.compareDate(this.audate, this.naudt)) {
        this.appAssess.nextAssessmentDt = moment(latest_date).format();
      }
      else {
        this.err = "nextDueDate should be after the auditDate";
        this.show4 = false;
      }
    }

  }



  getNextDate(value) {

    if (value === 'Choose...') {
      this.showLegalBox = false;
    }
    else {
      this.appAssess.status = value;
      this.showLegalBox = true;




    }

  }



  compareDate(d, ddt): boolean {
    return new Date(ddt) > new Date(d);
  }







  selectDefinitive(auditID) {
    if (auditID === 'Choose...') {
      this.definitive = false
      this.showTable = false;
      this.show1 = false;
      this.policyTypes = [];
    }
    else {
      this.show1 = true;
      this.definitive = true;
      this.auditTypeId = auditID;
      this.appAssess.auditName=auditID;
      this._apiservice.getPolicyGroup(auditID)
        .subscribe((data: any) => {

          this.policyTypes = data;
        }, error => { console.log(error) });
    }
  }


  selectType(policy) {
    if (policy === 'Choose...') {
      this.show2 = false;
      this.showTable = false;
      this.policies = [];
    }
    else {
      this.show2 = true;

      this.appAssess.policyGrpId = policy;
      this._apiservice.fetchPolicies(policy)
        .subscribe((data: any) => {
          this.showTable = true;
          this.policies = data.policyDTOs;
        }, error => {
          console.log(error);
        });

    }
  }



}