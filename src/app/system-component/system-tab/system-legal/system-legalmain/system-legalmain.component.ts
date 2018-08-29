import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../../apiservice.service';
import { Http } from '@angular/http';
import { UtilService } from '../../../../util.service';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legalmain',
  templateUrl: './system-legalmain.component.html',
  styleUrls: ['./system-legalmain.component.css']
})
export class SystemLegalmainComponent implements OnInit {
  public acronym: any;
  public updatedTime: any;
  public appMOUs: any;
  public showSigned: boolean = false;
  constructor(private _apiservice: ApiserviceService,
    private http: Http, private modalService: NgbModal, private utilservice: UtilService,
    private router: Router) {
      UtilService.appMouId = '';
    this.getAppId();

  }

  ngOnInit() {
  }

  getAppId() {
    this._apiservice.viewApplication(UtilService.systemName)
      .subscribe((data: any) => {
        this.acronym = data.applicationViewDTO.acronym;
        let d = new Date(data.applicationViewDTO.updatedTime);
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        this.updatedTime = month + "/" + day + "/" + year;
        this.getAppMOUs(data.applicationViewDTO.applicationId);
      }, error => console.log(error));
  }


  getAppMOUs(id) {

    this._apiservice.getAppMOUs(id)
      .subscribe((data: any) => {
        this.appMOUs = data;

      }, error => console.log(error));
  }

  editClick() {
    this.showSigned = true;
    
    }

    createMOU()
    {
      this.router.navigate(['/system/tab/legal/legalform']);
    }

    getAppMOU(id)
    {
      UtilService.appMouId = id;
      this.router.navigate(['/system/tab/legal/legalform']);
    }

}
