import { APP_CONFIG } from './app.config';
import { HttpService } from './core/http.service';
import { Solution } from './data_model';
import { Injectable } from '@angular/core';
import { Http,HttpModule, Headers,RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiserviceService {
  public subject = new BehaviorSubject<any>(false);
  constructor(private _httpService : HttpService, private http : Http) { }
  
  getVendors()
  {
    let url = APP_CONFIG.getVendors;
    return this._httpService.get(url)
    .map(res =><Response>res.json());
  } 
  
  getSolutions()
  {
    let url = APP_CONFIG.getSolutions;
    return this._httpService.get(url)
    .map(res =><Response>res.json());
  }
  
  
   getSolutionExtra(id)
  {
    const url = APP_CONFIG.getSolution;
    return this._httpService.get(url + '?' + 'solutionID' + '=' + id)
    .map(res => res.json() as Solution) ;
  }
  
   /*getSolution()
  {
    let url = APP_CONFIG.getSolution;
    return this._httpService.get(url)
    .map(res =><Response>res.json());
  }*/
  
  getVendorExtra(id){
    let url = APP_CONFIG.getVendor;
    return this._httpService.get(url + '?' + 'vendorId' + '=' + id)
    .map(res =><Response>res.json());
  }
  postVendorData(body) {
  console.log("body",body);
  let url =APP_CONFIG.postVendor;
return this._httpService.post(url,body).map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                         }
  
  updateSolution(body){
    console.log(body);
    let url = APP_CONFIG.postSolution;
    let headers = new Headers({ 'Content-Type': 'multipart/form-data' });
    const options = new RequestOptions({ headers: headers });
    
    
    this.http.post(url, body);    
    //return this.http.post(url, body).map((res: Response) => res.json())
                            //.catch((error : any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  updateAppSolution(data){
     console.log(data);
    let url = APP_CONFIG.updateAppSolution;
 return this._httpService.post(url, data).map((res: Response) => res.json())
                            .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
    
    
  }
  
  
  
  
  updateMOU(data){
   console.log(data);
    let url = APP_CONFIG.updateMOU;
 return this._httpService.post(url, data).map((res: Response) => res.json())
                            .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
    
    
    //this.http.post(url, data);    
   
  }
  
  
  
  getSolutionTypes(id){
    let url = APP_CONFIG.getSolutionTypes;
    return this._httpService.get(url + '?' + 'solutionID' + '=' + id)
    .map(res =><Response>res.json());
  }
  
  getSolutionsOnload(){
    let url = APP_CONFIG.getSolutionsOnload;
    return this._httpService.get(url)
    .map(res =><Response>res.json());
  }
  
  addSolutions(body){
    console.log(body);
    let url = APP_CONFIG.addSolutions;
    return this._httpService.post(url, body).map((res: Response) => res.json())
                            .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  getSolutionFile(id){
    let url = APP_CONFIG.getSolutionFile;
    return this._httpService.get(url + '?' + 'fileId' + '=' + id)
    .map(res =><Response>res.json());
  }
  
  fetchPolicies(id){
  	let url = APP_CONFIG.fetchPolicies;
  	return this._httpService.get(url + '?' + 'policyGrpId' + '=' + id)
    .map(res =><Response>res.json());
  }
  
  getAuditTypes(){
    let url = APP_CONFIG.getAuditTypes;
    return this._httpService.get(url)
    .map(res =><Response>res.json());
  }
  getPolicyGroup(auditId){
    let url = APP_CONFIG.getPolicyGroup;
    return this._httpService.get(url + '?' + 'auditTypeId' + '=' + auditId)
    .map(res =><Response>res.json());
  }
  
  addPolicyGroup(formData)
  {
  
     let url = APP_CONFIG.addPolicyGroup;
    return this._httpService.post(url, formData).map((res: Response) => res.json())
                            .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  addLocality(data){
   let url = APP_CONFIG.addLocality;
   console.log("data 95",data);
    return this._httpService.post(url, data).map((res: Response) => res.json())
                            .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
  
  
  }
  
  viewApplication(name){
  let url = APP_CONFIG.viewApplication;
     return this._httpService.get(url + '?' + 'acronym' + '=' + name)
     .map(res =><Response>res.json());
  }
   getSolutionsOnType(id,pid){
    let url = APP_CONFIG.getSolutionsOnType;
    return this._httpService.get(url + '?'+ 'systemTypeId' + '=' + id + '&'+ 'precinctTypeId' + '=' + pid)
    .map(res =><Response>res.json());
  }
  getSolution(id)
  {
  let url = APP_CONFIG.getSolution;
    return this._httpService.get(url + '?'+ 'solutionID' + '=' + id)
    .map(res =><Response>res.json());
  }
  getPolicy(id){
 	const url = APP_CONFIG.getPolicy;
   return this._httpService.get(url + '?' + 'policyId' + '=' + id)
   .map(res => res.json() as Solution) ;
 
 }
 saveMOU(data){
  let url = APP_CONFIG.saveMOU;
  
    return this._httpService.post(url, data).map((res: Response) => res.json())
                            .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
  
 } 
 getAppSolution(id)
  {
  let url = APP_CONFIG.getAppSolution;
    return this._httpService.get(url + '?'+ 'solutionId' + '=' + id)
    .map(res =><Response>res.json());
  }
  
  getAppMOUs(id)
  {
  let url = APP_CONFIG.getAppMOUs;
    return this._httpService.get(url + '?'+ 'applicationID' + '=' + id)
    .map(res =><Response>res.json())
  
  }
  saveAppSolution(data){
    let url = APP_CONFIG.saveAppSolution;

    return this._httpService.post(url, data).map((res: Response) => res.json())
                            .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  saveDBServerInfo(data){
     console.log(data);
    let url = APP_CONFIG.saveDBServerInfo;
 return this._httpService.post(url, data).map((res: Response) => res.json())
                            .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
    
    
  }
  
  getDBServer(id)
  {
  let url = APP_CONFIG.getDBServer;
    return this._httpService.get(url + '?'+ 'a' + '=' + id)
    .map(res =><Response>res.json())
  
  }
  saveAppAuditInfo(data)
  {
    let url = APP_CONFIG.saveAppAuditInfo;
    return this._httpService.post(url, data).map((res: Response) => res.json())
                            .catch((error : any) => Observable.throw(error.json().error || 'Server error'));


  }

  comparePolicyFile(data)
  {
    let url = APP_CONFIG.comparePolicyFile;
    return this._httpService.post(url, data).map((res: Response) => res.json())
                            .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
 

  }

  getAppAcronyms(){

    let url = APP_CONFIG.getAppAcronyms;
    return this._httpService.get(url)
    .map(res =><Response>res.json());


  }

  assignReviewers(data){
    let url = APP_CONFIG.assignReviewers;
    
      return this._httpService.post(url, data).map((res: Response) => res.json())
                              .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
    
   } 
    
   getPolicyReviewDetails(id){
      let url = APP_CONFIG.getPolicyReviewDetails;
      return this._httpService.get(url + '?' + 'id' + '=' + id)
      .map(res =><Response>res.json());
    }
    
     getUseronName(name){
      let url = APP_CONFIG.getUseronName;
      return this._httpService.get(url + '?' + 'userName' + '=' + name)
      .map(res =><Response>res.json());
    }
    
    getUsers(){
      let url = APP_CONFIG.getUsers;
      return this._httpService.get(url)
      .map(res =><Response>res.json());
    }
 
}
