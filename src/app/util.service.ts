import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Rx';
@Injectable()
export class UtilService{
static localityName:string;
static systemName:string;
static policyGrpId: number;
static auditId: number;
static showTab:boolean;

static active:boolean;
static loginstate:boolean = false;
static onEdit:boolean=false;
static auditActive:boolean;

static appAuditId:any;
static appMouId:any;
public subject = new BehaviorSubject<any>(false);
public subject1 = new BehaviorSubject<any>(false);
setEditTrue(val : boolean) {
    this.subject.next(val);
  }
  getEdit() : Observable<any> {
    return this.subject.asObservable();
  }

  setSave(val : boolean){
    this.subject1.next(val);
  }

  getSave(): Observable<any> {
    return this.subject1.asObservable();
  }


}