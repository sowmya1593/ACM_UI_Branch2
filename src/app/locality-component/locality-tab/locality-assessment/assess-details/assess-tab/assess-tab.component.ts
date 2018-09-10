import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../../../apiservice.service';
import { UtilService } from '../../../../../util.service';
import { AppAssess, AssessmentPolicyDTO, Policy } from '../../../../../data.model.assessmentDTO';
import { Router, ActivatedRoute } from '@angular/router';
import { APP_CONFIG } from '../../../../../app.config';
@Component({
  selector: 'app-assess-tab',
  templateUrl: './assess-tab.component.html',
  styleUrls: ['./assess-tab.component.css'],
  providers: [ApiserviceService]
})
export class AssessTabComponent implements OnInit {
  public assessmentDTOs: any;
  public mainData: any;
  public loading: boolean = false;
  public showEdit: boolean = true;
  public updatedTime: any;
  public p: number = 1;
   public desc:boolean=false;
   public des:boolean=false;

  public showPlusButton: boolean = false;
  constructor(private _apiservice: ApiserviceService,
    private utilService: UtilService, private route: ActivatedRoute, private router: Router) {
    this.getAppId();
    localStorage.removeItem('assesId');
    localStorage.removeItem('assessActive');
    UtilService.disabled=true;
  }
  ngOnInit() {

  }

  getAppId() {
    this.loading = true;
    this._apiservice.viewApplication(localStorage.getItem('localityName'))
      .subscribe((data: any) => {
        this.loading = false;
        this.mainData = data.applicationViewDTO.acronym;
        let d = new Date(data.applicationViewDTO.updatedTime);
        this.assessmentDTOs = data.applicationViewDTO.assessmentDTOs;
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        this.updatedTime = month + "/" + day + "/" + year;
      }, error => {
        this.loading=false;
        console.log(error);
      });
  }

  goTo() {
    this.router.navigate(['/locality/tab/assessment/Tabs/first1']);

  }
  showPlus() {

    this.showPlusButton = true;
    this.showEdit = false;
  }

  getAudit(id) {
    localStorage.setItem('assesId', id);
    UtilService.disabled=false;
    this.router.navigate(['/locality/tab/assessment/Tabs/first1']);
  }
  
   handleSort(){
        if(!this.desc) {
          this.assessmentDTOs.sort(this.doAsc);
          this.desc = true;
        }
        else {
           this.assessmentDTOs.sort(this.doDsc);
           this.desc = false;
        }
    
      }
      doAsc(a, b) {
        if (a.auditName > b.auditName) {
          return -1;
        } else if (a.auditName < b.auditName) {
          return 1;
        }
        return 0;
      }
    
      doDsc(a, b) {
        if (a.auditName < b.auditName) {
          return -1;
        } else if (a.auditName > b.auditName) {
          return 1;
        }
        return 0;
      }

  
  handleSorting(){
        if(!this.des) {
          this.assessmentDTOs.sort(this.doAs);
          this.des = true;
        }
        else {
           this.assessmentDTOs.sort(this.doDs);
           this.desc = false;
        }
    
      }
      doAs(a, b) {
        if (a.name > b.name) {
          return -1;
        } else if (a.name < b.name) {
          return 1;
        }
        return 0;
      }
    
      doDs(a, b) {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        }
        return 0;
      }




}