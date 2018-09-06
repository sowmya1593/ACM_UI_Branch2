 import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PolicyGrp, Policy, PolicyDocumentsDTO, PolicyReviewTerm } from '../../../data_modelPolicy';
import { ApiserviceService } from '../../../apiservice.service';
import { IMyDate } from 'mydatepicker';
import {APP_CONFIG} from '../../../app.config';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import { UtilService } from '../../../util.service';
import { ActivatedRoute, Params } from '@angular/router';
import {FormsModule, ReactiveFormsModule, NgForm} from '@angular/forms';


@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css'],
  providers: [ ApiserviceService ]
})
export class PolicyDetailsComponent implements OnInit {
  @ViewChild('fileInput') inputEl: ElementRef;
  policyDisplay: PolicyGrp;
  policies: Policy[];
  policyGrpData: PolicyGrp;
  	policyFileobj: any;
  	policyDocumentDTO: PolicyDocumentsDTO[];
  files: File[] = [];
  plus=true;
    p: number = 1;
    showDocument: boolean;
    showForm:boolean = true;
    public policyDropDownId: number;
    public lastReviewDate:any;
    public displayLastReviewDate: IMyDate = null;
     public nextReviewDate:any;
    public displayNextReviewDate: IMyDate = null;
    public updatedAt:any;
    public displayUpdatedAt: IMyDate = null;
    public policyDocumentsSubmit: PolicyGrp;
    private desc:boolean = false;
    public loading:boolean = false;
  public policyReviewTerm: any[] = [{id: 1, reviewTerm: "Yearly"},
                                     {id: 2, reviewTerm: "Half-Yearly"},
                                     {id: 3, reviewTerm: "Quarterly"}];
  public policyObj: any;
  public policyReview: PolicyReviewTerm;

  constructor(private modalService: NgbModal, private _apiservice: ApiserviceService, private  http: Http, 
    private utilservice: UtilService, private activatedRoute: ActivatedRoute) {
  	this.policyDisplay = new PolicyGrp();
  	this.policies = [];
    this.policyDocumentsSubmit = new PolicyGrp();
  	this.policyGrpData = new PolicyGrp();
  	  this.policyDocumentDTO = [];
  	this.files = [] as File[];
    this.policyReview = new PolicyReviewTerm();
   }
  
  open(content) {
   this.modalService.open(content);
  }
  
  show(control) {
   this.modalService.open(control);
  }
  
  changeButton(){
    this.plus=false;
    this.showForm = false;
  }
  
  close(){
    this.plus=true;
  }

  ngOnInit() {
    this.fetchPolicies(UtilService.policyGrpId);
    this.policyDropDownId = UtilService.policyGrpId;
    this.loading = true;
  }
  
  fetchPolicies(id){
	this._apiservice.fetchPolicies(id)
    .subscribe((data: any) => {
      this.loading = false;
    	this.policyDisplay=data.policyGrpDTO;
    	this.policies = data.policyDTOs;
      this.policyGrpData = data.policyGrpDTO;
      let dUpdatedAt = new Date(this.policyDisplay.updatedTs);
        this.displayUpdatedAt = {
           year: dUpdatedAt.getFullYear(),
          month: dUpdatedAt.getMonth() + 1,
          day: dUpdatedAt.getDate()
        }
      if((this.policyDisplay.lastReviewDate && this.policyDisplay.policyReviewDate)!=null){
          this.dateRetreive();
        }
      
    },error => console.log(error));	

}
  
  displayReview(val){
    /*console.log(this.policyDisplay.policyReviewTermId);
    console.log(this.policyDisplay.policyReviewTerm);
    console.log(value);*/
    this.policyDisplay.policyReviewTermId = val.target.value;
    this.policyDisplay.policyReviewTerm = val.target.options[val.target.selectedIndex].text;
    }
  

transferDocument(){
  	this.showDocument = true;
  }
  
  downloadFile(id){
  	window.open(APP_CONFIG.generatePolicyFile + '?' + 'policyGrpId' + '=' + id);
  }
  
  createPolicyFile(fileInput: any){
    //this.certDocDTO.section = section;
    console.log(fileInput.target.files[0]);
    this.files.push(fileInput.target.files[0]);
    //console.log(this.policyDocumentDTO);
    
  }
  
  handleSort(){

    console.log("headerClick");
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
    console.log(a.name, b.name);
  
    if (a.name > b.name) {
      return -1;
    } else if (a.name < b.name) {
      return 1;
    }
    return 0;
  }

  doDsc(a, b) {
     console.log(a.name, b.name);
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  
   dateRetreive(){
    let d = new Date(this.policyDisplay.lastReviewDate);
        this.displayLastReviewDate = {
           year: d.getFullYear(),
          month: d.getMonth() + 1,
          day: d.getDate()
        }
        let rd = new Date(this.policyDisplay.policyReviewDate);
        this.displayNextReviewDate = {
           year: rd.getFullYear(),
          month: rd.getMonth() + 1,
          day: rd.getDate()
        }
  }
  
  dateSubmit(){
    let date = this.lastReviewDate.formatted;
    this.policyDisplay.lastReviewDate = Date.parse(date);
    console.log(this.policyDisplay.lastReviewDate);
    let reviewDate = this.nextReviewDate.formatted;
        this.policyDisplay.policyReviewDate = Date.parse(reviewDate);
        console.log(this.policyDisplay.policyReviewDate);
  }
  
  updatePolicyGrp(){
    this.policyDisplay.policyGrpId = UtilService.policyGrpId;
    if((this.lastReviewDate && this.nextReviewDate)!=null){
        this.dateSubmit();
    }
    console.log(this.policyDisplay);
    this.policyObj = JSON.stringify(this.policyDisplay);
    let url = APP_CONFIG.updatePolicyGrp;
    let headers = new Headers({ 'Content-Type': 'application/json' });
  const options = new RequestOptions({ headers: headers });
     this.http.post(url, this.policyObj, options).subscribe((data: any) => {
              console.log(data);
            }, error => console.log(error));
    /*this._apiservice.updatePolicyGrp(this.policyObj)
      .subscribe((data: any) => {
      console.log(data);
      }, error => {
        console.log(error)});*/
  }
  
  uploadPolicyFile(){
  	let url = APP_CONFIG.uploadPolicyFile;
  	var policyDocumentsData = new FormData();
  	for (let i = 0; i < this.files.length; i++) {
     policyDocumentsData.append('file', this.files[i]);
    }
    this.policyDocumentsSubmit.policyGrpId = UtilService.policyGrpId;
    this.policyDocumentsSubmit.createdBy = "testing";
    this.policyDocumentsSubmit.updatedBy = "testing";
    policyDocumentsData.append('policy', JSON.stringify(this.policyDocumentsSubmit));
  	console.log(policyDocumentsData.get('policy'));
  	console.log(policyDocumentsData.get('file'));
  	 this.http.post(url, policyDocumentsData).subscribe((data: any) => {
              console.log(data);
            }, error => console.log(error));
  }

}
