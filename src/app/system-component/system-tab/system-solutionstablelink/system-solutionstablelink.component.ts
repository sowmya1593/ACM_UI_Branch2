import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-system-solutionstablelink',
  templateUrl: './system-solutionstablelink.component.html',
  styleUrls: ['./system-solutionstablelink.component.css']
})
export class SystemSolutionstablelinkComponent implements OnInit {
public solutionForm: FormGroup;
constructor(private _fb: FormBuilder,private modalService: NgbModal) {
}
ngOnInit() {
 
this.solutionForm = this._fb.group({
      system:[''],
      model:[''],
      solution:[''],
      version:[''],
      equipment:[''],
      vendor:[''],
      name:[''],
      serial:['']
          });
    this.solutionForm.disable();

}
 open(content) {
   this.modalService.open(content);
    this.solutionForm.disable();
 

  }
  editClick(): void {
    console.log(this.solutionForm.disabled);
    
	  if(this.solutionForm.disabled){
	 	 this.solutionForm.enable();
	 	 this.solutionForm.enable()
	  }
	  else{
	 	 this.solutionForm.disable();
	 	 this.solutionForm.disable();
	  }
  }

}


