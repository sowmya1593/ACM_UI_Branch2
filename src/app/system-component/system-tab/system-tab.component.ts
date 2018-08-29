import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UtilService} from '../../util.service';
@Component({
  selector: 'app-system-tab',
  templateUrl: './system-tab.component.html',
  styleUrls: ['./system-tab.component.css']
})
export class SystemTabComponent implements OnInit {
loc:any;
public showTab :boolean = true;
  constructor(private route: ActivatedRoute,private utilservice: UtilService) {
   this.route.firstChild.params.subscribe(params => {
    this.loc = params['System'];
    }); 
  
   }

  ngOnInit() {
  }

}
