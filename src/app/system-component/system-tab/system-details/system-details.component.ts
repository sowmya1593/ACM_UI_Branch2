import {APP_CONFIG} from '../../../app.config';
import {Location} from '@angular/common';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import {File} from 'babel-types';
import { System, applicationView, WorkHours} from '../../../data_model_system';
import {Component, OnInit, HostListener, ViewChild, ElementRef, TemplateRef, NgModule} from '@angular/core';

import {ApiserviceService} from '../../../apiservice.service';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, NgForm} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {UtilService} from '../../../util.service';
import {SystemFilterPipeDate} from '../../system-date-filter';

@Component({
  selector: 'app-system-details',
  templateUrl: './system-details.component.html',
  styleUrls: ['./system-details.component.css'],
  providers: [ApiserviceService]
})
export class SystemDetailsComponent implements OnInit {
  daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  @ViewChild('fileInput') inputEl: ElementRef;
  @ViewChild('editForm') solutionsForm: NgForm;
  @ViewChild('content') content: TemplateRef<any>;

  color: String;
  public applicationViewDTO: any;
  system: System;
  loc: any;
  appId: number;
  updatedTime: any;
  editableForm: boolean = true;
  viewType: any;
  contentData: string = "";
  showEditButton: boolean = false;
  time: any;
  workHours: WorkHours;


  constructor(private route: ActivatedRoute, private _apiservice: ApiserviceService, private fb: FormBuilder
    , private http: Http, private _location: Location, private modalService: NgbModal, private router: Router, private utilservice: UtilService) {


    this.system = new System();

    this.workHours = new WorkHours();
    this.route.params.subscribe(params => {
      this.loc = params['System'];
      UtilService.systemName = this.loc;



    });


    //this.system = new System(); 
  }

  ngOnInit() {
    this.viewApplication(this.loc);

  }

  editClick(event): void {
    this.editableForm = false;

  }







  createSystem() {

    console.log(this.workHours);

    let url_update = APP_CONFIG.addSystem;
    var formData = new FormData();
    formData.append('createApp', JSON.stringify(this.system));
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false
    };
    if (this.appId === undefined) {
      console.log(this.workHours);
      this.http.post(url_update, formData).subscribe((data: any) => {
        this.contentData = "system has been created.";
        UtilService.active = true;

        this.modalService.open(this.content, ngbModalOptions);
      }, error => console.log(error));

    }
    else {

      console.log(this.workHours);
      this.system.applicationId = this.appId;
      formData.append('application', JSON.stringify(this.system));
      this.http.post(APP_CONFIG.updateSystem, formData).subscribe((data: any) => {
        this.contentData = "system has been updated.";
        this.modalService.open(this.content, ngbModalOptions);
      }, error => console.log(error));
    }

  }

  viewApplication(local) {
    this._apiservice.viewApplication(local)
      .subscribe((data: any) => {
        if (data.applicationViewDTO === null) {
          this.editableForm = false;
          this.system.acronym = local;

        }
        else {
          this.showEditButton = true;
          UtilService.active = true;
          this.appId = data.applicationViewDTO.applicationId;
          this.system = data.applicationViewDTO;
          let d = new Date(this.system.updatedTime);
          let day = d.getDate();
          let month = d.getMonth() + 1;
          let year = d.getFullYear();
          this.updatedTime = day + "/" + month + "/" + year;
        }
     //   this.system.workHoursDTOs = []

        for (let day in this.daysArray) {
          this.workHours = new WorkHours();
          this.workHours.day = this.daysArray[day];
      //    this.system.workHoursDTOs.push(this.workHours);
        }
   //     console.log("this.system.workHoursDTOs", this.system.workHoursDTOs)
      }, error => console.log(error));

  
    
  }


  redirect() {
    this.router.navigate(['/system/tab/solutions']);

  }




  @HostListener('window:scroll', [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.color = 'online';

    } else {
      this.color = 'offline';

    }

  }

  getColor() {
    return this.color === 'online' ? '#ffffff' : 'white';
  }

  getOpacity() {
    return this.color === 'online' ? 0.8 : 1;
  }


}