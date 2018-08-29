import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-assess-recomend',
  templateUrl: './assess-recomend.component.html',
  styleUrls: ['./assess-recomend.component.css']
})
export class AssessRecomendComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
  }
  showAssess(){
 this.router.navigate(['/locality/tab/assessment/']);
}

showLeft(){
this.router.navigate(['locality/tab/assessment/Tabs/first1/']);
}
  

}
