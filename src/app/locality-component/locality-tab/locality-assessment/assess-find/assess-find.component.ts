import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../../../../apiservice.service';
import { UtilService } from '../../../../util.service';
import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';
import { APP_CONFIG } from '../../../../app.config';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AppAssess, AssessmentPolicyDTO, Policy } from '../../../../data.model.assessmentDTO';
@Component({
  selector: 'app-assess-find',
  templateUrl: './assess-find.component.html',
  styleUrls: ['./assess-find.component.css']
})
export class AssessFindComponent implements OnInit {
  @ViewChild('content') content: TemplateRef<any>;
  appAssess: AppAssess;
  public loading: boolean = false;
  public appAssessmentDTOs:any;
  public info:any;
  public showSave:boolean=false;
  public editData:any;
  public showEdit:boolean=false;
  public showForm:boolean=true;
  constructor(private _apiservice: ApiserviceService, private utilService: UtilService,
    private http: Http, private router: Router, private modalService: NgbModal) {

    this.appAssess = new AppAssess();
    this.getAppId();
  }

  ngOnInit() {
  }
  showAssess() {
    this.router.navigate(['/locality/tab/assessment/']);
  }
  showLeft() {
    this.router.navigate(['/locality/tab/assessment/Tabs/first1']);
  }

  getAppId() {
    this.loading = true;
    this._apiservice.viewApplication(localStorage.getItem('localityName'))
      .subscribe((data: any) => {
        this.loading = false;
        this.appAssess.applicationID = data.applicationViewDTO.applicationId;
        this.showOnPageLoad();
      }, error => {
        this.loading = false;
        console.log(error);
      });
  }

  showOnPageLoad() {
    if (localStorage.getItem('assesId') === null) {
      console.log('Not edit mode');
    }
    else {
      let id = localStorage.getItem('assesId');
      let auid = +id;
      this.showEdit=true;
      this.loading=true;
      // this.editData = this.appAssessmentDTOs.filter(item => item.assessmentId === auid);

      // for (let i = 0; i < this.editData.length; i++) {
      //   this.appAssess = this.editData[i];
      // }
      this._apiservice.getAssessData(auid)
      .subscribe((data: any) => {
        this.loading = false;
        this.appAssess = data;
      }, error => {
        this.loading = false;
        console.log(error);

      })



    }
  }

  saveFindings() {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false
    };
    this.loading = true;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let url_update = APP_CONFIG.updateAppAssessment;
    let data = JSON.stringify(this.appAssess);
    this.http.post(url_update, data, options)
      .subscribe((data: any) => {
        this.loading = false;
        this.info = "Findings has been updated.";
        this.modalService.open(this.content, ngbModalOptions);
      }, error => {
        this.loading = false;
        console.log(error);
      });
  }

  valueChanged()
  {
    this.showForm=false;
    this.showSave=true;
    this.showEdit=false;
  }

}
