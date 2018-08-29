import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UtilService } from "../../../util.service";
import { ApiserviceService } from "../../../apiservice.service";

@Component({
  selector: 'app-system-assessment',
  templateUrl: './system-assessment.component.html',
  styleUrls: ['./system-assessment.component.css'],
  providers: [ApiserviceService]
})
export class SystemAssessmentComponent implements OnInit {
 public mainData:any;
    public showPlusButton: boolean = false;
    public updatedTime:any;


    constructor(private _apiservice: ApiserviceService, 
      private utilService: UtilService, private route: ActivatedRoute,private router: Router) {
      
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
  
  
  
  goTo()
  {
    this.router.navigate(['/system/tab/Tab1/first1']);

  }
  
  showPlus(){
    
    this.showPlusButton =true; 
  }

  }
