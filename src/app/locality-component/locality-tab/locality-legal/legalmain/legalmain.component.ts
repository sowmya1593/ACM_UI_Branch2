import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../../apiservice.service';
import { Http } from '@angular/http';
import { UtilService } from '../../../../util.service';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legalmain',
  templateUrl: './legalmain.component.html',
  styleUrls: ['./legalmain.component.css']
})
export class LegalmainComponent implements OnInit {
  public acronym: any;
  public updatedTime: any;
  public appMOUs: any;
  public showSigned: boolean = false;
  public loading:boolean = false;
  public  desc = false;
   public p: number = 1;
  constructor(private _apiservice: ApiserviceService,
    private http: Http, private modalService: NgbModal, private utilservice: UtilService,
    private router: Router) {
      UtilService.appMouId = '';
      localStorage.removeItem('appMouId');
    this.getAppId();

  }

  ngOnInit() {
  }

  getAppId() {
    this.loading = true;
    this._apiservice.viewApplication(localStorage.getItem('localityName'))
      .subscribe((data: any) => {
        this.loading = false;
        this.acronym = data.applicationViewDTO.acronym;
        let d = new Date(data.applicationViewDTO.updatedTime);
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        this.updatedTime = month + "/" + day + "/" + year;
        this.getAppMOUs(data.applicationViewDTO.applicationId);
      }, error => {
        this.loading = false;
      console.log(error);
      }
    );
  }


  getAppMOUs(id) {
    this.loading = true;
    this._apiservice.getAppMOUs(id)
      .subscribe((data: any) => {
        this.loading = false;
        this.appMOUs = data;

      }, error => {
        this.loading = false;
        console.log(error);}
      );
  }
  
  
  handleSort(){

    console.log("headerClick");
    if(!this.desc) {
      this.appMOUs.sort(this.doAsc);
      this.desc = true;
    }
    else {
       this.appMOUs.sort(this.doDsc);
       this.desc = false;
    }

  }

  doAsc(a, b) {
    console.log(a.name, b.name);
  
    if (a.name > b.name) {
      return -1;
    } else if (a.name < b.name) {
      return 1;
    }
    return 0;
  }

  doDsc(a, b) {
     console.log(a.name, b.name);
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  
  

  editClick() {
    this.showSigned = true;
    
    }

    createMOU()
    {
      this.router.navigate(['/locality/tab/legal/legalform']);
    }

    getAppMOU(id)
    {
      UtilService.appMouId = id;
      localStorage.setItem('appMouId',id);
      this.router.navigate(['/locality/tab/legal/legalform']);
    }

}
