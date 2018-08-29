import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  public previousUrl: string;

  constructor(private router: Router, private route: ActivatedRoute) { 
  this.router.navigate(['policyView/policyDetails']);

    }

  ngOnInit() {
  }

}
