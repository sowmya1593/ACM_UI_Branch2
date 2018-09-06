import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UtilService } from "../../../../util.service";
import { ApiserviceService } from "../../../../apiservice.service";

@Component({
  selector: 'app-assess-downtabs',
  templateUrl: './assess-downtabs.component.html',
  styleUrls: ['./assess-downtabs.component.css'],
   providers: [ApiserviceService]
})
export class AssessDowntabsComponent implements OnInit {

    public mainData:any;
    public showPlusButton: boolean = false;
    public updatedTime:any;
    public disabled:boolean;


     constructor(private _apiservice: ApiserviceService, 
      private utilService: UtilService, private route: ActivatedRoute,private router: Router) {
      this.disabled=UtilService.disabled;
      this.getAppId();
      }

      ngOnInit()
      {

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
  
  
  
  goTo()
  {
    this.router.navigate(['/locality/tab/assessment/Tabs/first1']);

  }
  
  showPlus(){
    
    this.showPlusButton =true; 
  }
  

  }

