import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {ApiserviceService} from '../../apiservice.service';
import { APP_CONFIG } from '../../app.config';
import { FormBuilder, FormGroup, Validators,FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { AuditType } from '../../data_modelAudit';
import { Http, RequestOptions, Headers } from '@angular/http';
@Component({
  selector: 'app-policy-forms',
  templateUrl: './policy-forms.component.html',
  styleUrls: ['./policy-forms.component.css'],
    providers: [ApiserviceService]
})
export class PolicyFormsComponent implements OnInit {
  public policyEntity: boolean = false;
  public auditTypes: any;
  public auditTypeId: number;
  public  policyGroupForm: FormGroup;
  public audit: AuditType;
  public auditObj: any;
    @ViewChild('content') content:TemplateRef<any>;
  constructor(private _apiservice: ApiserviceService, private fb: FormBuilder, private modalService: NgbModal, private router: Router, private  http: Http) { 
  
  this.createForm();
    this.audit = new AuditType();
  }
  

  ngOnInit() {
  this.showDropdown();
  }
  
  
  createForm() {
    this.policyGroupForm = this.fb.group({
      policyName: ['', Validators.required],
      policyDescription: ['', Validators.required]
      
    });
  }
  
  policy(policyName) {
      this.auditTypeId = policyName;
      if(policyName === 'Choose...')
      {
       this.policyEntity = false;;
      }
      else{
      this.policyEntity = true;
      }
    }
  
   display(policyEntity) {
   this.modalService.open(policyEntity);
    
  }
    
    showDropdown()
{

this._apiservice.getAuditTypes()
.subscribe((data: any) => {
this.auditTypes = data;
},error => { console.log(error);});


}
  
  addAuditType(){
    console.log(this.audit);
    this.auditObj = JSON.stringify(this.audit);
    console.log(this.auditObj);
    let url = APP_CONFIG.addAuditType;
    let headers = new Headers({ 'Content-Type': 'application/json' });
  const options = new RequestOptions({ headers: headers });
     this.http.post(url, this.auditObj, options).subscribe((data: any) => {
              console.log(data);
              this.showDropdown();
            }, error => console.log(error));
  }

createPolicyGroup(value)
{
let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false
};
let requestBody: any ={};
requestBody.policyGrpName = value.policyName;
requestBody.description = value.policyDescription;
requestBody.auditTypeId = this.auditTypeId;
this._apiservice.addPolicyGroup(requestBody)
.subscribe((data:any) => {

this.modalService.open(this.content,ngbModalOptions);
}, error => {console.log(error)});

}

redirect(){
this.router.navigate(['/dashboard']);

}
    
    

}
