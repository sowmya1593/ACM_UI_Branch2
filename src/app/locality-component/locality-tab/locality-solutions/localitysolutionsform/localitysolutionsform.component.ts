import { Component, OnInit,OnChanges,ViewChild, TemplateRef } from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {NgbModal,NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {ApplicationSolution, Solutions, Vendor, Device, HostingType} from '../../../../data_model_lsolutions';
import {ApiserviceService} from '../../../../apiservice.service';
import {UtilService} from '../../../../util.service';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { IMyDate } from 'mydatepicker';


@Component({
  selector: 'app-localitysolutionsform',
  templateUrl: './localitysolutionsform.component.html',
  styleUrls: ['./localitysolutionsform.component.css'],
  providers: [ApiserviceService]
})
export class LocalitysolutionsformComponent implements OnInit {
@ViewChild('content') content: TemplateRef<any>;
@ViewChild('insta') insta: TemplateRef<any>;
@ViewChild('box') box: TemplateRef<any>;
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
   public appSolutionDevice:any;
   public hostingTypeId:any;
   public solutionTypeName:any;
   public versionNumber:any;
   public vendors:any;
   public showPrecinct:any;
   public showText:any;
   contentData: string = "";
   public devices:any;
   public isVisible = false;
     public showLegal = false;
  public showInnerForm = false;
  public isAddNewSolution = false; 
  public notVisible = false;
 public  boxVisible = false;
   public selectDate: any;
   public selDate: any;
  public acronym: any;
  public updatedTime: any;
   
 
  constructor(private _fb: FormBuilder,private router: Router,private modalService: NgbModal,
   private _apiservice: ApiserviceService, private  http: Http,
    private utilservice: UtilService, private datepipe: DatePipe) { 
    this.getAppId();

 this.applicationSolution = new ApplicationSolution();
    this.applicationSolution.solutionsDTO = new Solutions();
    //this.applicationSolution.appSolutionDevices = new Device();
    this.applicationSolution.solutionsDTO.vendor = new Vendor();
    this.applicationSolution.solutionsDTO.hostingTypeDTO = new HostingType();
    this.device = new Device();
    this.viewApplication(localStorage.getItem('localityName'));
    if(localStorage.getItem('appSolId') === null)
    {

    }
    else{
      let id=localStorage.getItem('appSolId');
      let aSolId=+id;
      this.showSolutionsPage(aSolId);
    }

  }

  ngOnInit() {
    this.createForm();
    this.showPrecinctType();
    
    
     
    console.log("Init this.utilservice.isLocalitySolutionAdd",this.utilservice.isLocalitySolutionAdd);
    if(this.utilservice.isLocalitySolutionAdd) {
       this.isAddNewSolution = true;
    } else {
      this.isAddNewSolution = false;
    }
  }
  
  
  
  getAppId() {
    //this.loading = true;
    this._apiservice.viewApplication(localStorage.getItem('localityName'))
      .subscribe((data: any) => {
       // this.loading = false;
        this.acronym = data.applicationViewDTO.acronym;
        let d = new Date(data.applicationViewDTO.updatedTime);
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        this.updatedTime = month + "/" + day + "/" + year;
        this.appId = data.applicationViewDTO.applicationId;
        this.applicationSolution.applicationID = data.applicationViewDTO.applicationId;
        if(localStorage.getItem('appSolutionId') === null)
        {
          //this.showLegalBox = false;
        }
        else{
          this.showSolutionsPage(data.applicationViewDTO.applicationId);
        }

      }, error => {
        //this.loading = false;
        console.log(error);
      });
  }
  
  
  
   ngOnChanges() {
    console.log("this.utilservice.isLocalitySolutionAdd",this.utilservice.isLocalitySolutionAdd);
    if(this.utilservice.isLocalitySolutionAdd) {
       this.isAddNewSolution = true;
    }
    else {
      this.isAddNewSolution = false;
    }
     console.log("this.isAddNewSolution", this.isAddNewSolution);
  }
  backClicked(){
  this.router.navigate(['/locality/tab/solutions']);
  
  }
  
  createForm() {

    this.modalForm = this._fb.group({
      modelNumber: ['',Validators.required],
      serialNumber: ['',Validators.required],
      street1: ['',Validators.required],
      street2: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zipCode: ['',Validators.required],
      overallStatus: ['',Validators.required],
      nextScanningDt: ['',Validators.required],
      notes:['']

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
  this.isVisible = true;
    this.showLegal = true;
  this.notVisible = true;
  this.boxVisible = true;
   
   this.showInnerForm = true;

  this.appSolutionId = appSolutionId;
  this._apiservice.getAppSolution(appSolutionId)
      .subscribe((data: any) => {
       console.log(data);
        this.applicationSolution = data;
        this.applicationSolution.solutionsDTO = data.solutionsDTO;
    this.applicationSolution.solutionsDTO.vendor = data.solutionsDTO.vendor;
    this.devices = data.appSolutionDevices;
    //this.applicationSolution.solutionsDTO.hostingTypeDTO = data.solutionsDTO.hostingTypeDTO;
        
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
  
  
  
  
  
  saveAppSolution(){ 
  let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false
    };
   if(this.appSolutionId === undefined){
    this.applicationSolution.solutionsDTO.solutionId = this.solutionId;
    this.applicationSolution.solutionId = this.solutionId;
    this.applicationSolution.applicationID = this.appId;
     var formData = new FormData();
     formData.append('appSolutionString',JSON.stringify(this.applicationSolution));
     console.log(formData);
       let url_update = APP_CONFIG.saveAppSolution;
      this.http.post(url_update, formData)
      .map(res => res.json())
      .subscribe((data:any) => {
      this.isVisible = true;
       this.contentData = "Device Information has been created.";
        this.modalService.open(this.insta, ngbModalOptions);
       this.appSolutionId = data.applicationSolutionDTO.appSolutionId;
      
    
      
      },error => {
      
      console.log(error);
      });
   
     }
    else{
   //this.applicationSolution.appSolutionId = this.appSolutionId;
      this.applicationSolution.solutionId = this.applicationSolution.solutionsDTO.solutionId;
    //this.applicationSolution.solutionsDTO.solutionId = this.solutionId;
   //this.applicationSolution.applicationID = this.appId;
    console.log(this.applicationSolution);
     var formData = new FormData();
     formData.append('appSolutionString',JSON.stringify(this.applicationSolution));
       console.log(formData);
         let url_update = APP_CONFIG.updateAppSolution;
   this.http.post(url_update, formData).subscribe((data: any) => {
this.contentData = "Solution has been updated.";
        this.modalService.open(this.insta, ngbModalOptions);
  
    console.log(data);
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
  this.showInnerForm = true;
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
 
  //  this.modalForm.disable();

}

open1(content, table) {

    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false
    };
    this.modalService.open(content, ngbModalOptions);
    this.modalForm.controls['modelNumber'].setValue(table.modelNumber);
    this.modalForm.controls['serialNumber'].setValue(table.serialNumber);
    this.modalForm.controls['street1'].setValue(table.street1);
     this.modalForm.controls['street2'].setValue(table.street2);
    this.modalForm.controls['city'].setValue(table.city);
    this.modalForm.controls['state'].setValue(table.state);
    this.modalForm.controls['zipCode'].setValue(table.zipCode);
    this.modalForm.controls['overallStatus'].setValue(table.overallStatus);
    
   
      
   let d = new Date(table.nextScanningDt);
       this.selectDate = {
           year: d.getFullYear(),
           month : d.getMonth() + 1,
          day :d.getDate()
          }
        //   this.selectDate = {date:{month:month,day:day,year:year}};
        
        
   //this.modalForm.controls['nextScanningDt'].setValue(nextScanningDt);
    this.modalForm.controls['notes'].setValue(table.notes);
    
  //this.modalForm.disable();
  }

editClicked(){
this.isAddNewSolution = true;
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
  
  
  
  
  
  
  
   addDevice(value){ 
   
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false
    };
   
     this.device.modelNumber = value.modelNumber;
     this.device.serialNumber = value.serialNumber;
     this.device.street1 = value.street1;
     this.device.street2 = value.street2;
     this.device.city = value.city;
     this.device.state = value.state;
     this.device.zipCode = value.zipCode;
     
     let latest_date =this.datepipe.transform(value.nextScanningDt.formatted, 'yyyy-MM-dd');
     this.device.nextScanningDt =moment(latest_date).format();;
    
     this.device.overallStatus = value.overallStatus;
     this.device.notes = value.notes;
     this.device.appSolutionId = this.appSolutionId;
   var formData = new FormData();
      if(this.appSolutionDevice === undefined){
     let url_update = APP_CONFIG.saveAppSolutionDevices;
   formData.append('appSolutionDeviceString',JSON.stringify(this.device));
   console.log(JSON.stringify(this.device));
   this.http.post(url_update, formData).subscribe((data: any) => {
       this.contentData = "Device Information has been created.";
        this.modalService.open(this.box, ngbModalOptions);
   
   
     this.getDevices(this.appSolutionId);
      
      },error => {
      
      console.log(error);
      });
       
     }
     else{
   this.applicationSolution.appSolutionId = this.appSolutionId;
      this.device.appSolutionDevice = this.appSolutionDevice;
    
    console.log(this.applicationSolution);
     var formData = new FormData();
     formData.append('appSolutionString',JSON.stringify(this.applicationSolution));
       console.log(formData);
         let url_update = APP_CONFIG.updateAppSolution;
   this.http.post(url_update, formData).subscribe((data: any) => {

  this.getDevices(this.appSolutionId);  
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
  
    getDevices(id)
    {
    let url = APP_CONFIG.getDevices;
    let url_update = url + '?' + 'solutionId' + '=' + id;
    this.http.get(url_update)
      .map(res => res.json())
      .subscribe((data:any) => {
       this.devices = data.appSolutionDevices;     
    
      
      },error => {
      
      console.log(error);
      });
    }
    
    close(){
     this.router.navigate(['/locality/tab/solutions']);
    }

  
}