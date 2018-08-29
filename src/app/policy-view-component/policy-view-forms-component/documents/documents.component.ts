import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Policy, PolicyDocumentsDTO, PolicyGrp } from '../../../data_modelPolicy';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import {APP_CONFIG} from '../../../app.config';
import { UtilService } from '../../../util.service';
import { ApiserviceService } from '../../../apiservice.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  @ViewChild('fileInput') inputEl: ElementRef;
  plus=true;
  policyDocumentDTO: PolicyDocumentsDTO[];
  	files: File[] = [];
  	policyGrpData: PolicyGrp;
  	policyDocumentDTOobj: any;
  	showDocument: boolean;
    public fetchPolicyDocuments: any;
    public loading:boolean = false;

  constructor(private modalService: NgbModal, private  http: Http, private utilservice:UtilService, private _apiservice: ApiserviceService) {
  	this.policyGrpData = new PolicyGrp();
  	  this.policyDocumentDTO = [];
    this.files = [] as File[];
    console.log(UtilService.policyGrpId);
   }
  
  open(content) {
   this.modalService.open(content);
  }
  
  changeButton(){
    this.plus=false;
  }
  
  close(){
    this.plus=true;
  }
  
  display(upload) {
   this.modalService.open(upload);
  }

  ngOnInit() {
    this.fetchPolicies(UtilService.policyGrpId);
    this.loading = true;
  }
  
  fetchPolicies(id){
  this._apiservice.fetchPolicies(id)
    .subscribe((data: any) => {
      this.loading = false;
      this.fetchPolicyDocuments=data.policyDocumentsDTOs;
      console.log(this.fetchPolicyDocuments);
      
    },error => console.log(error)); 

}
  
  createPolicyDocumentDTO(fileInput: any){
  	this.policyDocumentDTOobj = new PolicyDocumentsDTO();
    this.policyDocumentDTOobj.documentName = fileInput.target.files[0].name;
    //this.certDocDTO.section = section;
    console.log(fileInput.target.files[0]);
    this.files.push(fileInput.target.files[0]);
    console.log(this.policyDocumentDTO);
    if(this.policyDocumentDTO == null)
          {
          this.policyDocumentDTO = [];
        }
    //this.policyDocuments.policyDocumentsDTOs.push(this.policyDocumentDTO);
    this.policyDocumentDTO.push(this.policyDocumentDTOobj);
    console.log(this.policyDocumentDTO);
  }
  
  transferDocument(){
  	console.log("inside transfer document");
  	this.showDocument = true;
    //c('Save click');
  }
  
  submitDocument(){
  	console.log("inside submit function");
  	//this.policyGrpData.policyGrpId = 1;
    this.policyGrpData.policyGrpId = UtilService.policyGrpId;
  	let url = APP_CONFIG.uploadPolicyDocuments;
  	//var policyGrpData = new FormData();
  	var policyDocumentsData = new FormData();
  	//console.log(this.policyDocumentsDTO);
  	console.log(this.policyGrpData);
  	console.log(JSON.stringify(this.policyGrpData));
  	for (let i = 0; i < this.files.length; i++) {
     policyDocumentsData.append('files', this.files[i]);

    }
    policyDocumentsData.append('policy', JSON.stringify(this.policyGrpData));
  	console.log(policyDocumentsData.get('policy'));
  	console.log(policyDocumentsData.get('files'));
  	 this.http.post(url, policyDocumentsData).subscribe((data: any) => {
              console.log(data);
            }, error => console.log(error));
  }

}
