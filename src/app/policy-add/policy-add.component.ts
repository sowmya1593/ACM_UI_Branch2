import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Policy, PolicyDocumentsDTO, PolicyGrp } from '../data_modelPolicy';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {APP_CONFIG} from '../app.config';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-policy-add',
  templateUrl: './policy-add.component.html',
  styleUrls: ['./policy-add.component.css'],
  providers: [ApiserviceService]
})
  
export class PolicyAddComponent implements OnInit {
	@ViewChild('fileInput') inputEl: ElementRef;
	
	@ViewChild('pol') pol: ElementRef;
	color: String;
	policyUrlId: number;
	policyPost: Policy;
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
  public endDate: any;

  constructor(
  private  http: Http, private modalService: NgbModal, private _apiservice: ApiserviceService) {
  	this.policyPost = new Policy();
  	 this.policyPost.policyDocumentsDTOs = [] as  PolicyDocumentsDTO[];
    this.files = [] as File[];
    this.policies = [];
  	//this.linkedPolicy = new Policy();
   }

  ngOnInit() {
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
    console.log(this.policyPost.policyDocumentsDTOs);
    if(this.policyPost.policyDocumentsDTOs == null)
          {
          this.policyPost.policyDocumentsDTOs = [] as PolicyDocumentsDTO[];
        }
    this.policyPost.policyDocumentsDTOs.push(this.policyDocumentDTO);
    console.log(this.policyPost.policyDocumentsDTOs);
  }
  
  dateSubmit(){
    let date = this.endDate.formatted;
    this.policyPost.endDate = Date.parse(date);
  }
  
  addPolicy(){
  	let url = APP_CONFIG.savePolicy;
    this.policyPost.policyGrpId = 1;
  	var formData = new FormData();
    if(this.endDate!=null){
      this.dateSubmit();
    }
  	console.log(this.policyPost);
  	formData.append('policy', JSON.stringify(this.policyPost));
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
 
 
  	
  	if(this.policyPost.linkedPolicies == null)
          {
          this.policyPost.linkedPolicies = [];
        }
  	
  	if(event)
  	{
  		addPolicies.linkType = 'ADD';
  		addPolicies.status = true;
  		 this.policyPost.linkedPolicies.push(addPolicies);
  		 console.log(this.policyPost.linkedPolicies.length);
  	}
  	else{
  	
  	var len = this.policyPost.linkedPolicies.length;
  	
  	for(let i =0; i< len ; i++)
  	{
  			if(this.policyPost.linkedPolicies[i].policyId == addPolicies.policyId)
  			{
  				this.policyPost.linkedPolicies.splice(i,1);
  				break;
  			}
  				
  	}	//For end
  	
  	} // ELse end
  	
  	console.log(this.policyPost.linkedPolicies);
  	//console.log(this.addNewPolicy);
  	//this.policyAccess.linkedPolicies.push(this.addNewPolicy);
  	//this.addNewPolicy = [];
  	console.log(this.policyPost.linkedPolicies);
  }
  
  checkEvent(event: any, ch: boolean){
  	console.log(event);
  	console.log(ch);
  }
  
  saveLink(){
  
  
  
  	this.showDiv = false;
  	this.showLink = false;
  	
  
  	
  	console.log(this.policyPost.linkedPolicies);
  	this.links = this.policyPost.linkedPolicies;
  	console.log(this.links);
  		for(let i=0;i<this.links.length;i++)
  	{
  	this.other.push(this.links[i].controlNumber);
  	
  	}
  	console.log(this.other);
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
