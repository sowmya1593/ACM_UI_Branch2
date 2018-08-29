import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-solutions-forms-component',
  templateUrl: './solutions-forms-component.component.html',
  styleUrls: ['./solutions-forms-component.component.css']
})
export class SolutionsFormsComponentComponent implements OnInit {
  @ViewChild('form') solutionsForm: NgForm;
    public labForm: string;
        date: Date = new Date();
        settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MM-yyyy',
        defaultOpen: true
    }
  constructor() { }

  ngOnInit() {
  }
    labContact(lab) {
      this.labForm = lab;
    }
  
  onSubmit(){
    console.log(this.solutionsForm);
  }

}
