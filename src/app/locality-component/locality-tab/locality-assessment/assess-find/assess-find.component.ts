import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assess-find',
  templateUrl: './assess-find.component.html',
  styleUrls: ['./assess-find.component.css']
})
export class AssessFindComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
showAssess(){
 this.router.navigate(['/locality/tab/assessment/']);
}
showLeft(){
 this.router.navigate(['/locality/tab/assessment/Tabs/first1']);
}
}
