import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RegisterService {
  _http: any;

  constructor(private http: Http) { }
  
  public registerVendor(): any{
    return this.http.get('http://localhost:8080/ApplicationPortfolioManager/services/getVendors')
      .map((res: Response) => {
        return res.json();
//    .subscribe(data => {
//    console.log(data);
//    },error => console.log(error));
   })
    
  }

}
