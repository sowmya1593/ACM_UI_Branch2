import { Component, OnInit } from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {NgbModal,NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {ApplicationSolution, Solutions, Vendor, Device, HostingType} from '../../../../data_model_lsolutions';
import {ApiserviceService} from '../../../../apiservice.service';
import {UtilService} from '../../../../util.service';

@Component({
  selector: 'app-localitysolutionsform',
  templateUrl: './localitysolutionsform.component.html',
  styleUrls: ['./localitysolutionsform.component.css'],
  providers: [ApiserviceService]
})
export class LocalitysolutionsformComponent implements OnInit {
  public vendor: Vendor;
  precinctTypes:any;
  systemTypes:any;
 solutions: Solutions;
 applicationSolution:ApplicationSolution;
   device: Device;
    editableForm:boolean=true;
   public names: any;
   hostingnames:any;
   public precinctTypeId:number;
  public modelSname:string;
  public solutionId:number;
  public appId:any;
  public invoiceForm: FormGroup;
  public showSType:boolean = true;
  public showPType:boolean = true;
  public modalForm: FormGroup;
  public appSolutions : any;
   public modalsForm: FormGroup;
   public deviceTable:any;
   public serialNumber:number;
   public appSolutionId:any;
   public hostingTypeId:any;
   public solutionTypeName:any;
   public versionNumber:any;
   public vendors:any;
   public showPrecinct:any;
   public showText:any;

   
 
  constructor(private _fb: FormBuilder,private modalService: NgbModal, private _apiservice: ApiserviceService, private  http: Http, private utilservice: UtilService) { 

    this.applicationSolution = new ApplicationSolution();
  this.applicationSolution.solutionsDTO = new Solutions();
   //this.applicationSolution.appSolutionDevices = new Device();
   this.applicationSolution.solutionsDTO.vendor= new Vendor();
   this.applicationSolution.solutionsDTO.hostingTypeDTO= new HostingType();
   this.device = new Device();
   this.viewApplication(localStorage.getItem('localityName'));
  }

  ngOnInit() {
    this.createForm();
  }
  createForm()
  {
  
   this.modalForm = this._fb.group({
      modelNumber:[''],
      serialNumber:[''],
      street1:[''],
      city:[''],
      state:[''],
      zipCode:['']
      
    });
  }
  viewApplication(local) {
    this._apiservice.viewApplication(local)
      .subscribe((data: any) => {
       this.appId=data.applicationViewDTO.applicationId;
       this.appSolutions = data.applicationViewDTO.applicationSolutionDTOs;
      }, error => console.log(error));
  }

  showSolutionsPage(appSolutionId)
  {

  this.appSolutionId = appSolutionId;
  this._apiservice.getAppSolution(appSolutionId)
      .subscribe((data: any) => {
       console.log(data);
        this.applicationSolution.solutionsDTO = data.solutionsDTO;
    this.applicationSolution.solutionsDTO.vendor = data.solutionsDTO.vendor;
    //this.applicationSolution.solutionsDTO.hostingTypeDTO = data.solutionsDTO.hostingTypeDTO;
        console.log(data.solutionsDTO.hostingTypeDTO, data.solutionsDTO.hostingTypeDTO == false);
        if(this.applicationSolution.solutionsDTO.hostingTypeDTO == null)
          {
           
           this.applicationSolution.solutionsDTO['hostingTypeDTO'] = {
               name: "0",
               hostingTypeId: null 
           };
          console.log( this.applicationSolution.solutionsDTO.hostingTypeDTO.name);
          
        }
        else{
        //this.applicationSolution.solutionsDTO.hostingTypeDTO = data.solutionsDTO.hostingTypeDTO;
          this.applicationSolution.solutionsDTO.hostingTypeDTO = data.solutionsDTO.hostingTypeDTO;
          console.log( this.applicationSolution.solutionsDTO.hostingTypeDTO);
        }
        
    //this.applicationSolution.solutionsDTO.solutionTypeName = data.solutionsDTO.solutionTypeName;
    this.applicationSolution.appSolutionDevices= data.appSolutionDevices;
    
    
   
    
      }, error => console.log(error));
  
  }
  
  showPrecinctType()
  {
  
  this._apiservice.getSolutionsOnload()
    .subscribe((data:any) => {
    console.log(data);
    this.precinctTypes = data.precinctTypeDTOs;
    this.systemTypes = data.systemTypeDTOs;
    },error => {
    
    console.log(error);
    });
  
  }
  
  selectPrecinct(id)
  {
  if(id === 'Choose...')
  {
  this.showPrecinct =  false;
  
  }
  else{
  this.showPrecinct = true;
  this.precinctTypeId = id;
  }
  
  
  }
  
  selectModSolution(solutionId)
  {
  this.solutionId = solutionId;
  this._apiservice.getSolutionExtra(solutionId)
  .subscribe((data:any) => {
    this.applicationSolution.solutionsDTO.versionNumber = data.versionNumber;
    this.applicationSolution.solutionsDTO.vendor = data.vendor;
    this.applicationSolution.solutionsDTO.hostingTypeDTO = data.hostingTypeDTO;
    if(this.applicationSolution.solutionsDTO.hostingTypeDTO.name === "Both")
    {
      this.applicationSolution.solutionsDTO.hostingTypeDTO = data.hostingTypeDTO;
      this.showText = false;
    }
    else{
      this.showText = true;
    }
    this.applicationSolution.solutionsDTO.solutionTypeName = data.solutionTypeName;
    
    
    },error => {
    
    console.log(error);
    });
  
  }
  open(content) {
    this.createForm();
     let ngbModalOptions: NgbModalOptions = {
         backdrop : 'static',
         keyboard : false
         };
    this.modalService.open(content,ngbModalOptions);
    this.modalForm.disable();

}

open1(content,table){

  let ngbModalOptions: NgbModalOptions = {
         backdrop : 'static',
         keyboard : false
         };
    this.modalService.open(content,ngbModalOptions);
    this.modalForm.controls['modelNumber'].setValue(table.modelNumber);
    this.modalForm.controls['serialNumber'].setValue(table.serialNumber);
    this.modalForm.controls['street1'].setValue(table.street1);
    this.modalForm.controls['city'].setValue(table.city);
    this.modalForm.controls['state'].setValue(table.state);
    this.modalForm.controls['zipCode'].setValue(table.zipCode);
    this.modalForm.disable();
 }

 editClick(): void {

    
  if(this.modalForm.disabled){
    this.modalForm.enable();

  }
  else{
    this.modalForm.disable();
 
  }
}
selectSystemType(id)
  {
  
  if(id === 'Choose...')
    {
    this.names = [];
    }else{
  this.selectBox(id,this.precinctTypeId);
    }
  
  }
  
  selectForm(solutionId){
  
  if(solutionId === 'Choose...')
  {
  
  }
  else{

  this._apiservice.getSolution(solutionId)
  .subscribe((data:any) => {
  console.log(data);
  },error => {
  
  console.log(error);
  });
  
  
  }
  
  }

  selectBox(systemType,precinctTypeId) {
    
    if(systemType === 'Choose...')
    {
    this.names=[];
    
    }
    else {
    
    this._apiservice.getSolutionsOnType(systemType,precinctTypeId)
    .subscribe((data:any) => {
    this.names = data.solutionsDTOs;
    },error => {
    
    console.log(error);
    });
    }
  }

  
}
