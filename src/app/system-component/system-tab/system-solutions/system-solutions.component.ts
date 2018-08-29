import { Component, OnInit } from '@angular/core';
import {APP_CONFIG} from '../../../app.config';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {NgbModal,NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {ApplicationSolution, Solutions, Vendor, Device, HostingType} from '../../../data_model_lsolutions';
import {ApiserviceService} from '../../../apiservice.service';
import {UtilService} from '../../../util.service';
@Component({
  selector: 'app-system-solutions',
  templateUrl: './system-solutions.component.html',
  styleUrls: ['./system-solutions.component.css'],
   providers: [ApiserviceService]
})
export class SystemSolutionsComponent implements OnInit {
 public vendor: Vendor;
  precinctTypes:any;
  systemTypes:any;
 solutions: Solutions;
 applicationSolution:ApplicationSolution;
   device: Device;
    editableForm:boolean=true;
   public names: any;
   hostingnames:any;
   showText:boolean = true;
   public precinctTypeId:number;
   public showPrecinct:boolean=false;
  public showTable: boolean = false;
  public showSection: boolean = false;
  public showForm: boolean = false;
  public showMainTable: boolean = true;
  public showTextBox:boolean = false;
  public showDropDown:boolean = false;
   public showDropDowner:boolean = false;
  public showPlus:boolean= true;
  public showEdit:boolean = false;
  public modelSname:string;
  public solutionId:number;
  public showTax:boolean = false;
 
  public appId:any;
  public invoiceForm: FormGroup;
  public showSType:boolean = true;
  public showPType:boolean = true;
  public modalForm: FormGroup;
  public appSolutions : any;
   public modalsForm: FormGroup;
   public deviceTable:any;
   public serialNumber:number;
   public isOverlayVisible: boolean;
   public appSolutionId:any;
   public hostingTypeId:any;
   solutionTypeName:any;
   versionNumber:any;
   vendors:any;
   
 
  constructor(private _fb: FormBuilder,private modalService: NgbModal, private _apiservice: ApiserviceService, private  http: Http, private utilservice: UtilService) {
  this.applicationSolution = new ApplicationSolution();
  this.applicationSolution.solutionsDTO = new Solutions();
   //this.applicationSolution.appSolutionDevices = new Device();
   this.applicationSolution.solutionsDTO.vendor= new Vendor();
   this.applicationSolution.solutionsDTO.hostingTypeDTO= new HostingType();
   this.device = new Device();
   this.isOverlayVisible=false;
   
   
     this.viewApplication(UtilService.systemName);
       }

  ngOnInit() {
   
    this.createForm();
    this.showPrecinctType();
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
       this.showMainTable = false;
       this.showTable = true;
       this.showSection = true;
       this.showPrecinct = true;
       this.showTextBox = true;
       this.showForm = true;
       this.showPlus = false;
       this.showEdit = true;
         this.showPType = false;
         this.showSType = false;
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
  
  
  selectLocality(locality) {
  this.showTax = true;
    this.showTable = true;
    this.showMainTable = false;
    this.showDropDown = true;
    this.editableForm = false;
    this.isOverlayVisible=true;

  }
  
  selectLocalities(){
    this.showTax = true;
  this.showTextBox = false;
  this.showDropDown = true;
   this.editableForm = false;
   this.showPType = true;
   this.showSType = true;
   
   
  }
  selectBox(systemType,precinctTypeId) {
    
    if(systemType === 'Choose...')
    {
    this.showSection = false;
    this.names=[];
    
    }
    else {
    
    this._apiservice.getSolutionsOnType(systemType,precinctTypeId)
    .subscribe((data:any) => {
    console.log(data);
    this.showSection = true;
    this.names = data.solutionsDTOs;
    },error => {
    
    console.log(error);
    });
    }


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
    this.showForm =true;
    this.applicationSolution.solutionsDTO.versionNumber = data.versionNumber;
    this.applicationSolution.solutionsDTO.vendor = data.vendor;
    this.applicationSolution.solutionsDTO.hostingTypeDTO = data.hostingTypeDTO;
    if(this.applicationSolution.solutionsDTO.hostingTypeDTO.name === "Both")
    {
      this.applicationSolution.solutionsDTO.hostingTypeDTO = data.hostingTypeDTO;
      this.showDropDowner = true;
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
  
  addDevice(value){ 
   
     this.device.modelNumber = value.modelNumber;
     this.device.serialNumber = value.serialNumber;
     this.device.street1 = value.street1;
     this.device.city = value.city;
     this.device.state = value.state;
     this.device.zipCode = value.zipCode;
     this.applicationSolution.appSolutionDevices.push(this.device);
     //this.devices.push(this.device);
     //console.log(this.devices);
    
    
  }
  
  
  saveAppSolution(){ 
  if(this.appSolutionId === undefined){
  this.applicationSolution.solutionsDTO.solutionId = this.solutionId;
  this.applicationSolution.solutionId = this.solutionId;
  this.applicationSolution.applicationID = this.appId;
   var formData = new FormData();
   formData.append('appSolutionString',JSON.stringify(this.applicationSolution));
   console.log(formData);
     let url_update = APP_CONFIG.saveAppSolution;
    this.http.post(url_update, formData).subscribe((data: any) => {

  
    
     console.log('save');
    
    },error => {
    
    console.log(error);
    });
 
   }
  else{
  this.applicationSolution.appSolutionId = this.appSolutionId;
  this.applicationSolution.solutionsDTO.solutionId = this.solutionId;
  this.applicationSolution.applicationID = this.appId;
  console.log(this.applicationSolution);
   var formData = new FormData();
   formData.append('appSolutionString',JSON.stringify(this.applicationSolution));
     console.log(formData);
       let url_update = APP_CONFIG.updateAppSolution;
 this.http.post(url_update, formData).subscribe((data: any) => {

  console.log(data);
    },error => {
    
    console.log(error);
    });
  
  }
  }
  
  
  
  selectSystemType(id)
  {
  
  if(id === 'Choose...')
    {
    this.showSection = false;
    this.names = [];
    }else{
    this.showSection = true;
  this.selectBox(id,this.precinctTypeId);
    }
  
  }
  
  selectForm(solutionId){
  
  if(solutionId === 'Choose...')
  {
  this.showForm =false;
  }
  else{
  this.showForm =true;
  this._apiservice.getSolution(solutionId)
  .subscribe((data:any) => {
  console.log(data);
  },error => {
  
  console.log(error);
  });
  
  
  }
  
  }
  onUnitsChange(value) {
    console.log(value)
   
     let control = <FormArray>this.invoiceForm.controls['itemRows'];
    
     if(value<control.length){
control.removeAt(control.length-1);
}else{
control.push(this.initItemRows());
}
     
     
     
  }

  initItemRows() {
    return this._fb.group({
      one: [''],
      two: ['']
    });
  }
 
   editClick(): void {

    
	  if(this.modalForm.disabled){
	 	 this.modalForm.enable();
	
	  }
	  else{
	 	 this.modalForm.disable();
	 
	  }
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
equip(content){

 
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
}
