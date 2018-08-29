import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locality-solutions-link',
  templateUrl: './locality-solutions-link.component.html',
  styleUrls: ['./locality-solutions-link.component.css']
})
export class LocalitySolutionsLinkComponent implements OnInit {

  public appSolutions:any;
  public loading:boolean=false;
  constructor(private _apiservice: ApiserviceService,private router:Router) {
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


  showSolutionsPage(appSolutionId)
  {
    localStorage.setItem('appSolId',appSolutionId);
  }

  selectLocality() {
   
  this.router.navigate(['/locality/tab/solutions/solutionForm']);
    }

}
