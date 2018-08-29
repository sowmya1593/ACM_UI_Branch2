import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {
    Http,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Request,
    Headers,
    XHRBackend
} from '@angular/http';
import { AngularReduxRequestOptions } from './angular-redux-request.options';

@Injectable()
export class HttpService extends Http {

    constructor(
        backend: XHRBackend,
        defaultOptions: AngularReduxRequestOptions
    ) {
        super(backend, defaultOptions);
    }


    delete(url: string, options?: RequestOptionsArgs): Observable<any> {
//        this.showLoader();
        return super.delete(url, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
//                this.onEnd();
            });

    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {

//        this.showLoader();

        return super.get(url, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
//                this.onEnd();
            });

    }

    post(url: string, postData?: any, options?: RequestOptionsArgs): Observable<any> {
//        this.showLoader();
       // let md = JSON.stringify(postData);
       // var objectToSend = JSON.stringify(postData);
        return super.post(url, this.formatPostData(postData),
        this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
//                this.onEnd();
            });
    }

    put(url: string, postData?: any, options?: RequestOptionsArgs): Observable<any> {
//        this.showLoader();
        return super.put(url, this.formatPostData(postData),
        this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
//                this.onEnd();
            });
    }

    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {

        if (!options) {
            options = new AngularReduxRequestOptions();
        }

        if (!options.headers) {
            options.headers = new Headers();
        }      
        // options.headers.append('Authorization', this.getToken());
        return options;
    }

    private formatPostData(postData){
         return JSON.stringify(postData);
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    private onSuccess(res: Response): void {
        //console.log('Request successful');
    }

    private onError(res: Response): void {
      //  console.log('Error, status code: ' + res.status);
    }

//    private onEnd(): void {
//        this.hideLoader();
//    }

//    private showLoader(): void {
//        this.loaderService.show();
//    }
//
//    private hideLoader(): void {
//        this.loaderService.hide();
//    }

    // private getToken(){
    //     return JSON.parse(localStorage.getItem('currentUser')).token;
    // }
}