import { ApiserviceService } from "../../../../../apiservice.service";
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UtilService } from "../../../../../util.service";
@Component({
    selector: 'app-audit-details',
    templateUrl: './system-audit-details-tab.component.html',
    providers: [ApiserviceService]
  })
  export class SystemAuditDetailsTab implements OnInit {
    public mainData:any;
    public updatedTime:any;


    constructor(private _apiservice: ApiserviceService, 
      private utilService: UtilService, private route: ActivatedRoute) {
      
      this.getAppId();
      }

      ngOnInit()
      {

      }

      getAppId() {

        this._apiservice.viewApplication(UtilService.systemName)
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
