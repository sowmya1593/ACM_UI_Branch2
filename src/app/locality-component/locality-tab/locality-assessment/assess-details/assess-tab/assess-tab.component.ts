import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../../../apiservice.service';
import { UtilService } from '../../../../../util.service';
import { AppAssess, AssessmentPolicyDTO, Policy } from '../../../../../data.model.assessmentDTO';
import {Router, ActivatedRoute} from '@angular/router';
import { APP_CONFIG } from '../../../../../app.config';
@Component({
  selector: 'app-assess-tab',
  templateUrl: './assess-tab.component.html',
  styleUrls: ['./assess-tab.component.css'],
   providers: [ApiserviceService]
})
export class AssessTabComponent implements OnInit {
public assessmentDTOs:any;
public mainData:any;
  public showEdit:boolean=true;
    public updatedTime:any;

    public showPlusButton: boolean = false;
    constructor(private _apiservice: ApiserviceService,
      private utilService: UtilService,private route: ActivatedRoute,private router: Router) {
       this.getAppId();
       localStorage.removeItem('assesId');
      }
       ngOnInit()
      {

      }
      
          getAppId() {
          
 this._apiservice.viewApplication(localStorage.getItem('localityName'))
 .subscribe((data: any) => {
 this.mainData = data.applicationViewDTO.acronym;
 let d = new Date(data.applicationViewDTO.updatedTime);
 this.assessmentDTOs = data.applicationViewDTO.assessmentDTOs;
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
    this.showEdit=false;
  }
  
    getAudit(id)
  {
    localStorage.setItem('assesId',id);
    this.router.navigate(['/locality/tab/assessment/Tabs/first1']);
  }
  
  
  
      }