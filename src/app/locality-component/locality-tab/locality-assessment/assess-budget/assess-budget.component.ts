import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { ApiserviceService } from '../../../../apiservice.service';
import { UtilService } from '../../../../util.service';
import { AlertService } from '../../../../alert.service';
import { DialogService} from '../../../../dialog.service';
import { AppAudit } from '../../../../data.model.auditDTO';
import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';
import { APP_CONFIG } from '../../../../app.config';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { AppAssess, AssessmentPolicyDTO, Policy } from '../../../../data.model.assessmentDTO';
import { Observable, Subject } from 'rxjs';
let ngbModalOptions: NgbModalOptions = {
  backdrop : 'static',
  keyboard : false
  };
@Component({
  selector: 'app-assess-budget',
  templateUrl: './assess-budget.component.html',
  styleUrls: ['./assess-budget.component.css'],
  providers: [AlertService,DialogService]
})
export class AssessBudgetComponent implements OnInit {
  @ViewChild('content') content: TemplateRef<any>;
  @ViewChild('content1') content1: TemplateRef<any>;
  @ViewChild('myForm', { read: ElementRef }) myForm: ElementRef<any>;
  @ViewChild('lastName', { read: ElementRef }) lastName:ElementRef<any>;
  appAssess: AppAssess;
  public loading: boolean = false;
  public info: any;
  public showSave: boolean = false;
  public editData: any;
  public showEdit: boolean = false;
  public showForm: boolean = true;
  
  constructor(private _apiservice: ApiserviceService,
    private utilService: UtilService, private http: Http, private route: ActivatedRoute,
    private router: Router, private modalService: NgbModal, private datepipe: DatePipe,
    private alertservice: AlertService,private dialogService: DialogService) {
      this.appAssess = new AppAssess();
      this.getAppId();
     }

  ngOnInit() {
  }


  getAppId() {
    this.loading = true;
    this._apiservice.viewApplication(localStorage.getItem('localityName'))
      .subscribe((data: any) => {
        this.loading=false;
        this.appAssess.applicationID = data.applicationViewDTO.applicationId;
        this.showOnPageLoad();
      }, error => {
        this.loading = false;
        console.log(error);});
    }

    showOnPageLoad()
    {
      if(localStorage.getItem('assesId') === null)
      {
        console.log('Not edit mode');
      }
      else{
        let id = localStorage.getItem('assesId');
        let auid = +id;
        this.showEdit = true;
        this.loading = true;
        this._apiservice.getAssessData(auid)
          .subscribe((data: any) => {
            this.loading = false;
            this.appAssess = data;
          }, error => {
            this.loading = false;
            console.log(error);
          });

    

      

    }
    
  }
 


  saveBudget()
  {
    
    this.loading = true;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let url_update = APP_CONFIG.updateAppAssessment;
    let data = JSON.stringify(this.appAssess);
    this.http.post(url_update,data,options)
        .subscribe((data: any) => {
          this.loading = false;
          this.myForm.nativeElement.reset();
          this.info="Budget has been updated.";
          this.modalService.open(this.content,ngbModalOptions);
        }, error => {
          this.loading = false;
          console.log(error);
        });
  }

  valueChanged() {
    this.showForm = false;
    this.showSave = true;
    this.showEdit = false;
  }

  showLeft(){
    this.router.navigate(['locality/tab/assessment']);
    }

    canDeactivate(): Observable<boolean> | boolean {
  
	    if (this.myForm.nativeElement.classList[3] === 'ng-touched') {
        // this.alertservice.confirm('Discard Changes','for budget','YES','NO',)
        // .then((result:any) => {
        //  if(result.value)
        //  {
        //    return true;
        //  }
        //  else{
        //    return false;
        //  }
        // },error => {
        //   console.log(error);
        // })
        //return false;
        return this.dialogService.confirm('Discard changes for Budget?');
      }
      return true;
	
	}	
 




}
