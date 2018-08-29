import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UtilService} from '../../util.service';
@Component({
  selector: 'app-locality-tab',
  templateUrl: './locality-tab.component.html',
  styleUrls: ['./locality-tab.component.css']
})
export class LocalityTabComponent implements OnInit {
loc:any;
public showTab :boolean = true;
  constructor(private route: ActivatedRoute,private utilservice: UtilService) {
   
   }

  ngOnInit() {
  }

}
