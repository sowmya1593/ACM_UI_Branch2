import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponentComponent } from "./navigation-component.component";
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
@NgModule({
  imports: [
    CommonModule,
    Angular2FontawesomeModule
  ],
  declarations: [NavigationComponentComponent],
  exports:[NavigationComponentComponent]
})
export class NavigationComponentModule { }
