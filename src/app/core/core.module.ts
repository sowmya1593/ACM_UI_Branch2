import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XHRBackend, RequestOptions } from '@angular/http';
//import { MaterialModule } from '@angular/material';

import { HttpService } from './http.service';
import { httpServiceFactory } from './http-service.factory';
import { AngularReduxRequestOptions } from './angular-redux-request.options';


@NgModule({
    imports: [
        CommonModule//,
       // MaterialModule
    ],
    exports: [
       
    ],
    declarations: [
        
    ],
    providers: [
       
        {
            provide: HttpService,
            useFactory: httpServiceFactory,
            deps: [XHRBackend, RequestOptions]    
        }
    ]
})

export class CoreModule { }
