import {APP_CONFIG} from '../../../app.config';
import {Location} from '@angular/common';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import {File} from 'babel-types';
import {Locality, applicationView, WorkHours} from '../../../data_model_locality';
import {Component, OnInit, HostListener, ViewChild, ElementRef, TemplateRef, NgModule} from '@angular/core';

import {ApiserviceService} from '../../../apiservice.service';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, NgForm} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {UtilService} from '../../../util.service';
import {FilterPipeDate} from '../../locality-date-filter';

@Component({
  selector: 'app-locality-details',
  templateUrl: './locality-details.component.html',
  styleUrls: ['./locality-details.component.css'],
  providers: [ApiserviceService]
})
export class LocalityDetailsComponent implements OnInit {
  daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  @ViewChild('fileInput') inputEl: ElementRef;
  @ViewChild('editForm') solutionsForm: NgForm;
  @ViewChild('content') content: TemplateRef<any>;

  color: String;
  public applicationViewDTO: any;
  locality: Locality;
  loc: any;
  appId: number;
  updatedTime: any;
  editableForm: boolean = true;
  viewType: any;
  contentData: string = "";
  showEditButton: boolean = false;
 
  workHours: WorkHours;
  public loading:boolean= false;
  private time = "04:00";

  constructor(private route: ActivatedRoute, private _apiservice: ApiserviceService, private fb: FormBuilder
    , private http: Http, private _location: Location, private modalService: NgbModal, private router: Router, private utilservice: UtilService) {


    this.locality = new Locality();

    this.workHours = new WorkHours();
    this.route.params.subscribe(params => {
      this.loc = params['Locality'];
      UtilService.localityName = this.loc;



    });


    //this.locality = new Locality(); 
  }

  ngOnInit() {
    this.viewApplication(this.loc);

  }

  editClick(event): void {
    this.editableForm = false;

  }







  createLocality() {

    

    let url_update = APP_CONFIG.addLocality;
    var formData = new FormData();
    formData.append('createApp', JSON.stringify(this.locality));
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false
    };
    this.loading = true;
    if (this.appId === undefined) {
      this.http.post(url_update, formData).subscribe((data: any) => {
        this.loading = false;
        this.contentData = "locality has been created.";
        UtilService.active = true;
        localStorage.setItem('active','true');

        this.modalService.open(this.content, ngbModalOptions);
      }, error => {
        this.loading = false;
        console.log(error);});

    }
    else {

      this.locality.applicationId = this.appId;
      formData.append('application', JSON.stringify(this.locality));
      this.http.post(APP_CONFIG.updateLocality, formData).subscribe((data: any) => {
        this.loading = false;
        this.contentData = "locality has been updated.";
        this.modalService.open(this.content, ngbModalOptions);
      }, error => {
        this.loading = false;
        console.log(error);
      });
    }

  }

  viewApplication(local) {
    this.loading = true;
    this._apiservice.viewApplication(local)
      .subscribe((data: any) => {
        this.loading = false;
        if (data.applicationViewDTO === null) {
          this.editableForm = false;
          this.locality.acronym = local;
          this.locality.workHoursDTOs = []
			for (let day in this.daysArray) {
			  this.workHours = new WorkHours();
			   
			  this.workHours.day = this.daysArray[day];
			  this.locality.workHoursDTOs.push(this.workHours);
			}  
        }
        else {
          this.showEditButton = true;
          UtilService.active = true;
          localStorage.setItem('active','true');
          this.appId = data.applicationViewDTO.applicationId;
          this.locality = data.applicationViewDTO;
          let d = new Date(this.locality.updatedTime);
          let day = d.getDate();
          let month = d.getMonth() + 1;
          let year = d.getFullYear();
          this.updatedTime = day + "/" + month + "/" + year;
          
          this.locality.workHoursDTOs = data.applicationViewDTO.workHoursDTOs;
          let dummy_array = [];
          
            for (let day in this.daysArray) {
            for(let workHour in this.locality.workHoursDTOs) {
              if(this.locality.workHoursDTOs[workHour].day == this.daysArray[day]) {
                dummy_array.push(this.locality.workHoursDTOs[workHour])
              }
              
            }
          }
          this.locality.workHoursDTOs = dummy_array; 
          console.log(dummy_array);
          console.log("this.locality.workHoursDTOs", this.locality.workHoursDTOs);
        }
        
        
      }, error => {
        this.loading = false;
        console.log(error);
      });

  
    
  }


  redirect() {
    this.router.navigate(['/locality/tab/solutions']);

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