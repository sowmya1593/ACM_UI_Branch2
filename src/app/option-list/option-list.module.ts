import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionListComponent } from "./option-list.component";
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    Angular2FontawesomeModule,
    RouterModule
    
  ],
  declarations: [OptionListComponent],
  exports:[OptionListComponent]
})
export class OptionListModule { }
