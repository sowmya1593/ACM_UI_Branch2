import { ApiserviceService } from "../../../../apiservice.service";
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UtilService } from "../../../../util.service";
@Component({
    selector: 'app-audit-detailsTab',
    templateUrl: './auditDetailsTab.html',
    providers: [ApiserviceService]
  })
  export class AuditDetailsTab1 implements OnInit {
    public mainData:any;
    public updatedTime:any;
    public editButton:boolean = false;
    public disabled:boolean;
    @Output() parentClick = new EventEmitter<any>();

    constructor(private _apiservice: ApiserviceService, 
      private utilService: UtilService, private route: ActivatedRoute) {
        this.disabled=UtilService.disabled;
      this.getAppId();
      }

      ngOnInit()
      {

      }

      valueChanged()
      {
        this.editButton = true;
        console.log(this.editButton);
        this.parentClick.emit(this.editButton);
      }

      getAppId() {

        this._apiservice.viewApplication(localStorage.getItem('localityName'))
          .subscribe((data: any) => {
            //this.appAudit.applicationID = data.applicationViewDTO.applicationId;
            this.mainData = data.applicationViewDTO.acronym;
            let d = new Date(data.applicationViewDTO.updatedTime);
            //this.appAuditDTOs = data.applicationViewDTO.appAuditDTOs;
            let day = d.getDate();
    let month = d.getMonth()+1;
    let year = d.getFullYear();
    this.updatedTime = month+"/"+day+"/"+year;
          }, error => console.log(error));
    
      }

  }


