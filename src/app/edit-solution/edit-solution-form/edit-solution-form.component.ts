import { ApiserviceService } from '../../apiservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-solution-form',
  templateUrl: './edit-solution-form.component.html',
  styleUrls: ['./edit-solution-form.component.css'],
  providers: [ ApiserviceService ]
})
export class EditSolutionFormComponent implements OnInit {
  /*public solutionInput:any;*/

  constructor(private _apiservice: ApiserviceService) { }

  ngOnInit() {
    // this.getSolution();
  }
  
  /*getSolution()
  {
     this._apiservice.getSolution()
    .subscribe((data:any) => {
     /*this.solutionInput = data.solutionDTOs;
      console.log(data);
      
    },error => console.log(error));
  }*/
  
  

}
