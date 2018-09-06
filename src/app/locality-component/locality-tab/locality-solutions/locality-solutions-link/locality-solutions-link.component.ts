import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../../apiservice.service';
import { Router } from '@angular/router';
import { UtilService } from '../../../../util.service';

@Component({
  selector: 'app-locality-solutions-link',
  templateUrl: './locality-solutions-link.component.html',
  styleUrls: ['./locality-solutions-link.component.css']
})
export class LocalitySolutionsLinkComponent implements OnInit {

  public appSolutions:any;
  public loading:boolean=false;
    public  desc = false;
   public p: number = 1;
  constructor(private _apiservice: ApiserviceService,private router:Router, private utilService: UtilService) {
    this.viewApplication(localStorage.getItem('localityName'));
    localStorage.removeItem('appSolId');
  }

  ngOnInit() {
  }


  viewApplication(local) {
    this.loading= true;
    this._apiservice.viewApplication(local)
      .subscribe((data: any) => {
        this.loading= false;
       this.appSolutions = data.applicationViewDTO.applicationSolutionDTOs;
      }, error => {
        this.loading=false;
        console.log(error);
      });
  }
  
  handleSort(){

    console.log("headerClick");
    if(!this.desc) {
      this.appSolutions.sort(this.doAsc);
      this.desc = true;
    }
    else {
       this.appSolutions.sort(this.doDsc);
       this.desc = false;
    }

  }

  doAsc(a, b) {
    console.log(a.solutionsDTO.name, b.solutionsDTO.name);
  
    if (a.solutionsDTO.name > b.solutionsDTO.name) {
      return -1;
    } else if (a.solutionsDTO.name < b.solutionsDTO.name) {
      return 1;
    }
    return 0;
  }

  doDsc(a, b) {
     console.log(a.solutionsDTO.name, b.solutionsDTO.name);
    if (a.solutionsDTO.name < b.solutionsDTO.name) {
      return -1;
    } else if (a.solutionsDTO.name > b.solutionsDTO.name) {
      return 1;
    }
    return 0;
  }
  
  showSolutionsPage(appSolutionId)
  {
    this.utilService.isLocalitySolutionAdd = false; 
    localStorage.setItem('appSolId',appSolutionId);
    this.router.navigate(['/locality/tab/solutions/solutionForm']);
  }

  selectLocality() {
  this.utilService.isLocalitySolutionAdd = true; 
  this.router.navigate(['/locality/tab/solutions/solutionForm']);
    }

}
