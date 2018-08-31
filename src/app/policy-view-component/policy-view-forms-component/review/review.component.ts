import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Review } from '../../../review_DataModel';
import {ApiserviceService} from '../../../apiservice.service';
import {APP_CONFIG} from '../../../app.config';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import { FormBuilder, FormGroup, Validators,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { IMyDpOptions, IMyDate } from 'mydatepicker';
import { UtilService } from '../../../util.service';
import { FilterPipe } from '../../../convertDate.pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { PolicyGrp, Policy, PolicyDocumentsDTO } from '../../../data_modelPolicy';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @ViewChild('form') popUpForm: NgForm;
 plus=true;
  review: Review[];
  assignTo: string;
  reviewDueDate: any;
  policyGrpId:number;
  reviewData=[];
  addArray=[];
  private reviewForm: FormGroup;
  firstName: string;
  dueDate: any;
  public users: any;
  public reviewDTO :any;
  public policyData :any;
  private desc = false;
  public loading:boolean = false;
  public showDetails: boolean;
  public policies: Policy[];
  public showPolicy: boolean;
  public displayDueDate:IMyDate = null;
  public pId: number;
  policyAccess: Policy;
  public displayPolicyDocuments: any;
  public displayEndDate:IMyDate = null;
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd'
  };
 constructor(private modalService: NgbModal, private _apiservice: ApiserviceService, private  http: Http, private fb: FormBuilder, private utilservice:UtilService, private router: Router, private route: ActivatedRoute) { 
    //this.review = new Review();
    this.review = [];
    this.policies = [];
    this.policyAccess = new Policy();
 }

 ngOnInit() {
  this.getUseronName("Harish");
  this.createForm();
  this.getUsers();
  this.fetchPolicies(UtilService.policyGrpId);
  this.loading = true;
  this.getPolicyReviewDetails(UtilService.policyGrpId);
 }
 
 open(content) {
   this.addArray=[];
  this.modalService.open(content);
  //this.plus=false;
 }
  
   handleSort(){

    console.log("headerClick");
    if(!this.desc) {
      this.policyData.sort(this.doAsc);
      this.desc = true;
    }
    else {
       this.policyData.sort(this.doDsc);
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
  
 changeButton(){
   this.plus=false;
 }
 
  data(value){
    this.createForm(); 
    this.assignTo = value.firstName;
    this.reviewDueDate = value.dueDate.formatted;
    let d = Date.parse(this.reviewDueDate);
    let tabarray = {
     //assignedTo:value.firstName,
     assignedTo:this.assignTo,
    dueDate:this.reviewDueDate,
    status:"Open",
    policyGrpId: UtilService.policyGrpId
    }
    console.log(this.reviewData);
    console.log(tabarray);
    this.reviewData.push(tabarray);
    /*this.review.assignedTo ? : string;
    this.review.dueDate ? : any;*/
    for (let i = 0; i<this.reviewData.length;i++){
      /*this.review[i].assignedTo = this.reviewData[i].assignedTo;
      this.review[i].dueDate = this.reviewData[i].dueDate;
      this.review[i].status = this.reviewData[i].status;
      this.review[i].policyGrpId = this.reviewData[i].policyGrpId;*/
      console.log(this.reviewData[i]); 
      this.review.push(this.reviewData[i]);
      this.addArray.push(this.reviewData[i]);
      this.reviewData=[];
      
    }
    //this.review.push(tabarray);
  console.log(this.review);
  }
  
  createForm() {
    this.reviewForm = this.fb.group({
      firstName: ['', Validators.required],
      dueDate: ['', Validators.required]
    });
  }
  
  displayReviewDetails(){
    this.showDetails = true;
  }
  
  displayPolicy(policy: number){
    this.showPolicy = true;
    this.pId = policy;
    console.log(policy);
    this.getPolicy(this.pId);
  }
 
 onSubmit(){
   console.log(this.popUpForm);
 }
 
 
 getUsers(){
   this._apiservice.getUsers()
      .subscribe((data: any) => {
        console.log(data);
        this.users = data;
        console.log(this.users);
      }, error => console.log(error));
 
 }
 
 getUseronName(name){
this._apiservice.getUseronName(name)
      .subscribe((data: any) => {
        console.log("inside get");
        console.log(data);

  });
  console.log("Testing.........");
  }
  
  fetchPolicies(id){
  this._apiservice.fetchPolicies(id)
      .subscribe((data: any) => {
        console.log("inside get");
        console.log(data);
        this.loading = false;
        this.policyData=data.policyReviewDTOs;
        this.policies = data.policyDTOs;
        console.log(this.policyData);

  });
  console.log("Testing.........");
  }
  
  dateRetreive(){
    let d = new Date(this.policyAccess.endDate);
        this.displayEndDate = {
           year: d.getFullYear(),
          month: d.getMonth() + 1,
          day: d.getDate()
        }
  }
  
  getPolicy(id){
    this._apiservice.getPolicy(id)
      .subscribe((data: any) => {
        this.loading = false;
        this.policyAccess = data;
        this.displayPolicyDocuments = data.policyDocumentsDTOs;
        if(this.policyAccess.endDate!=null){
          this.dateRetreive();
        }
        console.log(data);
        console.log(this.policyAccess);
      });
  }
  
  postReview(){
    //this.popUpForm.resetForm();
    console.log("Testing postReview");
  console.log(this.review);
  let url = APP_CONFIG.assignReviewers;
this._apiservice.assignReviewers(this.review)
      .subscribe((data: any) => {
      console.log(data);
      this.fetchPolicies(UtilService.policyGrpId);
      this.loading = true;
      }, error => {
        console.log(error)});    
  }
  
  getPolicyReviewDetails(id){
  
  this._apiservice.getPolicyReviewDetails(id)
      .subscribe((data: any) => {
        console.log(data);
        this.reviewDTO=data.policyReviewDTO;
        let d = new Date(this.reviewDTO.dueDate);
        this.displayDueDate = {
           year: d.getFullYear(),
          month: d.getMonth() + 1,
          day: d.getDate()
        }
               console.log(this.reviewDTO);

  });
  console.log("Testing.........");
  }

}
