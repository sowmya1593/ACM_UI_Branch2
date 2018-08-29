import { ApiserviceService } from '../../apiservice.service';
import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../../convertDate.pipe';
@Component({
  selector: 'app-solution-table',
  templateUrl: './solution-table.component.html',
  styleUrls: ['./solution-table.component.css'],
  providers: [ ApiserviceService ]
})
export class SolutionTableComponent implements OnInit {
  public solutions:any;
  private desc = false;

  constructor(private _apiservice: ApiserviceService) { }

  ngOnInit() {
    this.getSolutions();
    console.log('SolutionTable');
  }
  
  getSolutions()
  {
     this._apiservice.getSolutions()
    .subscribe((data:any) => {
     this.solutions = data.solutionsDTOs;
      console.log(this.solutions);
      console.log(data);
      
    },error => console.log(error));
  }
  
  handleSort(){

    console.log("headerClick");
    if(!this.desc) {
      this.solutions.sort(this.doAsc);
      this.desc = true;
    }
    else {
       this.solutions.sort(this.doDsc);
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

}
