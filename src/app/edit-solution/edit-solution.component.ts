import {ApiserviceService} from '../apiservice.service';
import {Solution, SystemType, HostingType, LabVendors, CertDocDTO, Vendor} from '../data_model';
import {APP_CONFIG} from '../app.config';
import {Component, OnInit, HostListener, ViewChild, ElementRef, NgModule} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, NgForm} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import {File} from 'babel-types';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { IMyDate } from 'mydatepicker';

import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-edit-solution',
  templateUrl: './edit-solution.component.html',
  styleUrls: ['./edit-solution.component.css'],
  providers: [ApiserviceService]

})


export class EditSolutionComponent implements OnInit {
  @ViewChild('fileInput') inputEl: ElementRef;
  @ViewChild('editForm') solutionsForm: NgForm;
  color: String;
  solution: Solution;

   certDate: NgbDateStruct;

    renewDate: NgbDateStruct;
    showForm:boolean = true;

  editSolution: FormGroup;
  certDocDTO: CertDocDTO;
  files: File[] = [];
  approveDate:any;
  dueDate : any;
  public selectDate: IMyDate = null;
  public renewalDate: IMyDate = null;
  public systemTypeDTO: any;
  public vendorDTO: any;
  public hostingTypeDTO: any;
  public labVendorsDTO: any;
  public solutionType: any;
  precinctTypes: any;
  public precinctTypeId: number;
//  public systemTyp:any

  constructor( private activatedRoute: ActivatedRoute,  private _apiservice: ApiserviceService,private   fb: FormBuilder
    , private  http: Http,  private _location: Location, private modalService: NgbModal) {
    this.solution = new Solution();
    this.solution.systemTypeDTO = new SystemType();
    this.solution.hostingTypeDTO = new HostingType();
    this.solution.labVendorsDTO = new LabVendors();
    this.solution.vendor = new Vendor();
     this.solution.certDocDTOs = [] as CertDocDTO[];
    this.files = [] as File[];
    this.editSolution = this.fb.group({
      solutionId: 0,
      name: ['', Validators.required],
      versionNumber: ['', Validators.required],
      solutionTypeName: ['', Validators.required],
      labVendorId: [0, Validators.required],
      solutionType : 0,
      vendorId : 0,
      systemTypeTry: ['', Validators.required],
      systemTypeTry1: ['', Validators.required],
      systemType: this.fb.group({
        name: '',
        systemTypeId: 0
      }),
      hostingType : this.fb.group({
        name: '',
        hostingTypeId: '',
      }),
      labVendors: this.fb.group({
           name : '',
           firstName :  '',
           lastName :  '',
           middleName :  '',
           suffix :  '',
           emailId :  '',
           streetName :  '',
           city :  '',
           state :  '',
           zipcode :  '',
           phoneNumber :  '',
      }),
      vendor: this.fb.group({
        vendorId: 0 ,
        name: '' ,
        createdBy: '' ,
        vendorAddress:  this.fb.group({
        addressId: 0 ,
        streetName: '' ,
        city: '' ,
        state: '' ,
        zipcode: '' ,
       }) ,
        vendorContact:  this.fb.group({
         contactId: 0 ,
         firstName: '' ,
         lastName: '' ,
         middleName: '' ,
         suffix: '' ,
         emailId: '' ,
         phoneNumber: '' ,
        }) ,
      }),
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.solution.solutionId = params['id'];
      this.editSolution.disable();
      //this.solutionsForm.form.disabled;

      //if (params['id'] != null)
        //{
       this.onDisplaySolution();
      //}
      this.getSolutionsOnload();

    });


  }

  createCertDTO(fileInput: any, section: string)
  {
    this.certDocDTO = new CertDocDTO();
    this.certDocDTO.fileName = fileInput.target.files[0].name;
    this.certDocDTO.section = section;
    console.log(fileInput.target.files[0]);
    this.files.push(fileInput.target.files[0]);
    console.log(this.solution.certDocDTOs)
    this.solution.certDocDTOs.push(this.certDocDTO);
  }
  
  dateRetreive(){
    let d = new Date(this.solution.certDt);
        this.selectDate = {
           year: d.getFullYear(),
          month: d.getMonth() + 1,
          day: d.getDate()
        }
        let rd = new Date(this.solution.certRenewalDueDt);
        this.renewalDate = {
           year: rd.getFullYear(),
          month: rd.getMonth() + 1,
          day: rd.getDate() + 1
        }
  }
  
  dateSubmit(){
    let date = this.approveDate.formatted;
    this.solution.certDt = Date.parse(date);
    let renewDate = this.dueDate.date;
        this.dueDate = renewDate.year + '-' + renewDate.month + '-' + (renewDate.day + 1);
        this.solution.certRenewalDueDt = this.dueDate;
  }
  
  onDisplaySolution() {
    this._apiservice.getSolutionExtra(this.solution.solutionId)
      .subscribe((data: Solution) => {
        console.log('data' + JSON.stringify(data));
        // this.editSolution.patchValue(data, {onlySelf: true});
//        let systemType = JSON.stringify(data.systemTypeDTO.name);
//        console.log(JSON.stringify(data.systemTypeDTO.name));
//        console.log(systemType);
        this.solution = data;
        this.solution.systemTypeDTO = data.systemTypeDTO;
        this.solution.hostingTypeDTO = data.hostingTypeDTO;
        this.solution.labVendorsDTO = data.labVendorsDTO;
        this.solution.vendor = data.vendor;
        this.solution.certDocDTOs = data.certDocDTOs;
     var utcSeconds = this.solution.certDt;
     var dt = new Date(0);
     console.log(dt.setUTCSeconds(utcSeconds));
        if((this.solution.certDt && this.solution.certRenewalDueDt)!=null){
          this.dateRetreive();
        }
        /*let d = new Date(this.solution.certDt);
        this.selectDate = {
           year: d.getFullYear(),
          month: d.getMonth() + 1,
          day: d.getDate()
        }
        let rd = new Date(this.solution.certRenewalDueDt);
        this.renewalDate = {
           year: rd.getFullYear(),
          month: rd.getMonth() + 1,
          day: rd.getDate() + 1
        }*/
        
        if(this.solution.certDocDTOs == null)
          {
          this.solution.certDocDTOs = [] as CertDocDTO[];
        }

         console.log('data ' + data.systemTypeDTO.name);

        //this.editSolution.controls['name'].setValue(data.name);
        //this.editSolution.controls['versionNumber'].setValue(data.versionNumber);
       // this.editSolution.controls['systemType.systemTypeId'].setValue(data.systemType.systemTypeId);
        console.log(data.systemTypeDTO.systemTypeId);
//           this.editSolution.controls['systemTypeTry1'].setValue(data.systemTypeDTO.name);
        //this.systemTyp =data.systemTypeDTO.name;

  });
}

  getSolutionsOnload() {
    this._apiservice.getSolutionsOnload()
      .subscribe((data: any) => {
        //console.log(data);
        this.systemTypeDTO = data.systemTypeDTOs;
        //this.editSolution.controls['systemTypeTry1'].setValue(data.systemTypeDTO.name);
//        this.systemTyp = data.systemTypeDTO.name;
       // console.log(this.systemTypeDTO);
        this.solutionType = data.solutionTypeDTOs;
        this.vendorDTO = data.vendorsDTOs;
        this.hostingTypeDTO = data.hostingTypeDTOs;
        this.labVendorsDTO = data.labVendorsDTOs;
        this.precinctTypes = data.precinctTypeDTOs;

      }, error => console.log(error));
  }

    createSolution() {
    let url_update = APP_CONFIG.postSolution;
    let url_add = APP_CONFIG.addSolutions;
    //value['solutionId'] = this.solution.solutionId;
    //value['vendorId'] = this.vendorDTO.vendorId;
    //value['labVendorId'] = this.labVendorDTO.labVendorId;
    var formData = new FormData();
      if((this.solution.certDt && this.solution.certRenewalDueDt)!=null){
        this.dateSubmit();
      }
    /*let date = this.approveDate.formatted;
    this.solution.certDt = Date.parse(date);
    let renewDate = this.dueDate.date;
        this.dueDate = renewDate.year + '-' + renewDate.month + '-' + (renewDate.day + 1);
        this.solution.certRenewalDueDt = this.dueDate;*/
    console.log(JSON.stringify(this.solution));
    formData.append('solution', JSON.stringify(this.solution));
    //formData.append('certDocs', this.files);
    //formData.append('certDocs',files)
    for (let i = 0; i < this.files.length; i++) {
     formData.append('certDocs', this.files[i]);

    }
    //    formData.append('file',files);
    console.log(formData.get('certDocs'));
    console.log(formData.get('solution'));
    //this._apiservice.updateSolution(formData)

    //if(this.solution.solutionId != null)
      //{
            this.http.post(url_update, formData).subscribe((data: any) => {
              console.log(data);
            }, error => console.log(error));
    //}
      /*else
      {
      //create
      this.http.post(url_add, formData).subscribe((data: any) => {
      console.log(data);
    }, error => console.log(error));
     console.log(this.solutionsForm);
    }*/
     console.log(this.solutionsForm);
  }

  backClicked() {
    this._location.back();
  }

   open(content) {
   this.modalService.open(content);
   //this.plus=false;

  }

  editorGroup(): void {
	this.showForm = false;
  }

  /*findId(value){
    this.solution.systemTypeDTO.systemTypeId = value;
  }*/

  showFile(id){
    console.log(id);
//    this._apiservice.getSolutionFile(id);
    window.open(APP_CONFIG.getSolutionFile + '?' + 'fileID' + '=' + id)

  }

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

}

