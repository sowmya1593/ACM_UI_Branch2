import { Component, OnInit,  HostListener, ViewChild, ElementRef } from '@angular/core';
import {Location} from '@angular/common';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ApiserviceService} from '../apiservice.service';
import { Policy, PolicyDocumentsDTO, PolicyGrp } from '../data_modelPolicy';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {APP_CONFIG} from '../app.config';

@Component({
  selector: 'app-control-name',
  templateUrl: './control-name.component.html',
  styleUrls: ['./control-name.component.css'],
  providers: [ApiserviceService],
})
export class ControlNameComponent implements OnInit {
	@ViewChild('fileInput') inputEl: ElementRef;
	
	@ViewChild('pol') pol: ElementRef;
	color: String;
	policyUrlId: number;
	policyAccess: Policy;
	showForm:boolean = true;
	policyDocumentDTO: PolicyDocumentsDTO;
  	files: File[] = [];
  	showDiv: boolean;
  	displayField: number = 2;
	 public definitive: boolean;
  public policy: boolean;
  public policyData: any;
  public auditTypes: any;
  public policyTypes: any;
  policies: Policy[];
  addNewPolicy: any = [];
  linkedPolicy: Policy;
  showLink: boolean = true;
  public links:any;
  public accountnum: any[] =[];
  public list: any;
  public other = [];
  public loading:boolean = false;
  

  constructor(private _location: Location, private activatedRoute: ActivatedRoute,  private _apiservice: ApiserviceService, 
  private  http: Http, private modalService: NgbModal) {
  	this.policyAccess = new Policy();
  	 this.policyAccess.policyDocumentsDTOs = [] as  PolicyDocumentsDTO[];
    this.files = [] as File[];
    this.policies = [];
  	//this.linkedPolicy = new Policy();
   }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params => {
      this.policyUrlId = params['id'];
      this.policyAccess.policyId = params['id'];
      });
      this.getPolicy(this.policyUrlId);
      this.showDropdown();
  	this.fetchPolicies(1);
    this.loading = true;
  }
  
  backClicked() {
    this._location.back();
  }
  
  getPolicy(id){
  	this._apiservice.getPolicy(id)
      .subscribe((data: any) => {
        this.loading = false;
      	this.policyAccess = data;
      	console.log(data);
      	console.log(this.policyAccess);
      });
  }
  
   editorGroup(): void {
    this.showForm = false; 
  }
  
  open(content){
  	 this.modalService.open(content);
  }
  
  createPolicyDocumentDTO(fileInput: any){
  	this.policyDocumentDTO = new PolicyDocumentsDTO();
    this.policyDocumentDTO.documentName = fileInput.target.files[0].name;
    //this.certDocDTO.section = section;
    console.log(fileInput.target.files[0]);
    this.files.push(fileInput.target.files[0]);
    console.log(this.policyAccess.policyDocumentsDTOs);
    if(this.policyAccess.policyDocumentsDTOs == null)
          {
          this.policyAccess.policyDocumentsDTOs = [] as PolicyDocumentsDTO[];
        }
    this.policyAccess.policyDocumentsDTOs.push(this.policyDocumentDTO);
    console.log(this.policyAccess.policyDocumentsDTOs);
  }
  
  addPolicy(){
  	let url = APP_CONFIG.updatePolicy;
  	var formData = new FormData();
  	console.log(this.policyAccess);
  	formData.append('policy', JSON.stringify(this.policyAccess));
  	for (let i = 0; i < this.files.length; i++) {
     formData.append('files', this.files[i]);
    }
  	console.log(formData.get('policy'));
  	 this.http.post(url, formData).subscribe((data: any) => {
              console.log(data);
            }, error => console.log(error));
  }
  
  changeDiv(){
  	this.showDiv = true;
  }
  
  selectType(policy){
  if(policy === 'Choose...')
  { this.policy = false;
  }
  else{
    this.policy =true;
    }
}

showDropdown()
{

this._apiservice.getAuditTypes()
.subscribe((data: any) => {
this.auditTypes = data;
},error => { console.log(error);});


}

selectDefinitive(auditID)
	
{

if(auditID === 'Choose...')
{
this.definitive = false
this.policyTypes = [];
}
else {
this.definitive =  true;
this._apiservice.getPolicyGroup(auditID)
.subscribe((data: any) => {
this.policyTypes = data;
},error => {console.log(error)});
}



}

fetchPolicies(id){
	this._apiservice.fetchPolicies(id)
    .subscribe((data: any) => {
    	this.policies = data.policyDTOs;
    },error => console.log(error));	

}

viewEvent(addPolicies: any,event){
 
 
  	
  	if(this.policyAccess.linkedPolicies == null)
          {
          this.policyAccess.linkedPolicies = [];
        }
  	
  	if(event)
  	{
  		addPolicies.linkType = 'ADD';
  		addPolicies.status = true;
  		 this.policyAccess.linkedPolicies.push(addPolicies);
  		 console.log(this.policyAccess.linkedPolicies.length);
  	}
  	else{
  	
  	var len = this.policyAccess.linkedPolicies.length;
  	
  	for(let i =0; i< len ; i++)
  	{
  			if(this.policyAccess.linkedPolicies[i].policyId == addPolicies.policyId)
  			{
  				this.policyAccess.linkedPolicies.splice(i,1);
  				break;
  			}
  				
  	}	//For end
  	
  	} // ELse end
  	
  	console.log(this.policyAccess.linkedPolicies);
  	//console.log(this.addNewPolicy);
  	//this.policyAccess.linkedPolicies.push(this.addNewPolicy);
  	//this.addNewPolicy = [];
  	console.log(this.policyAccess.linkedPolicies);
  }
  
  checkEvent(event: any, ch: boolean){
  	console.log(event);
  	console.log(ch);
  }
  
  saveLink(){
  
  
  
  	this.showDiv = false;
  	this.showLink = false;
  	
  
  	
  	console.log(this.policyAccess.linkedPolicies);
  	this.links = this.policyAccess.linkedPolicies;
  	console.log(this.links);
  		for(let i=0;i<this.links.length;i++)
  	{
  	this.other.push(this.links[i].controlNumber);
  	
  	}
  	console.log(this.other);
  	
  	
  	
  	
  	
  	
  	
  
  
  }
  
  /*addPolicy(){
  	let url = APP_CONFIG.updatePolicy;
  	var formData = new FormData();
  	formData.append('addLinkedPolicy', JSON.stringify(this.linkedPolicy));
  	console.log(formData.get('addLinkedPolicy'));
  	 this.http.post(url, formData).subscribe((data: any) => {
              console.log(data);
            }, error => console.log(error));
  }*/
  
  @HostListener('window:scroll', [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.color = 'online';
      console.log('You are 100px from the top to bottom');
    } else {
      this.color = 'offline';
      console.log('You are 500px from the top to bottom');
    }

  }

   getColor() {
    return this.color === 'online' ? '#ffffff' : 'white';
  }

  getOpacity() {
    return this.color === 'online' ? 0.8 : 1;
  }
  
  radioValue(event: any){
  	//console.log(event);
  	if(event.target.defaultValue === "Link from Internal"){
  		this.displayField = 1;
  	}
  	else{
  		this.displayField = 0;
  	}
  }
  

}
