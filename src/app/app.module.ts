import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { MyDatePickerModule } from 'mydatepicker';
import { RegisterService } from './services/register.service';
import { HttpModule } from '@angular/http';
import { LocalityComponentRoutingModule } from './app.routing';
//import { SystemComponentRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponentModule } from './navigation-component/navigation-component.module';
import { OptionListModule } from './option-list/option-list.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendorsComponentComponent } from './vendors-component/vendors-component.component';
import { VendorsViewComponent } from './vendors-view/vendors-view.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { FormsComponent } from './forms/forms.component';
import { SolutionsFormsComponentComponent } from './solutions/solutions-forms-component/solutions-forms-component.component';
import { PolicyComponentComponent } from './policy-component/policy-component.component';
import { PolicyViewComponentComponent } from './policy-view-component/policy-view-component.component';
import { ContactComponentComponent } from './solutions/solutions-forms-component/contact-component/contact-component.component';
import { PolicyViewFormsComponentComponent } from './policy-view-component/policy-view-forms-component/policy-view-forms-component.component';
import { ViewTableComponent } from './vendors-view/view-table/view-table.component';
import { LocalityViewComponentComponent } from './locality-view-component/locality-view-component.component';
import { SystemViewComponentComponent } from './system-view-component/system-view-component.component';
import { SolutionViewComponentComponent } from './solution-view-component/solution-view-component.component';
import { PolicyFormsComponent } from './policy-component/policy-forms/policy-forms.component';
import { RegisterComponent } from './services/register.component';
import { SolutionTableComponent } from './solution-view-component/solution-table/solution-table.component';
import { PolicyDetailsComponent } from './policy-view-component/policy-view-forms-component/policy-details/policy-details.component';
import { EditSolutionComponent } from './edit-solution/edit-solution.component';
import { EditSolutionFormComponent } from './edit-solution/edit-solution-form/edit-solution-form.component';
import { ReviewComponent } from './policy-view-component/policy-view-forms-component/review/review.component';
import { DocumentsComponent } from './policy-view-component/policy-view-forms-component/documents/documents.component';
import { ApplicationsComponent } from './policy-view-component/policy-view-forms-component/applications/applications.component';
import { DialogBoxComponent } from './policy-view-component/policy-view-forms-component/documents/dialog-box/dialog-box.component';
import { EditNavigationComponent } from './edit-navigation/edit-navigation.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';
import { FilterPipe } from './convertDate.pipe';
import { UtilService } from './util.service';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { LocalityComponentModule } from "./locality-component/locality-component.module";
import { SystemComponentModule } from "./system-component/system-component.module";
import { ControlNameComponent } from './control-name/control-name.component';
import { PolicyAddComponent } from './policy-add/policy-add.component';
import { DeviceComponent } from './device/device.component';
import { UpdateDeviceComponent } from './update-device/update-device.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ApiserviceService } from './apiservice.service';
import { AlertService } from './alert.service';
import { AlertComponent } from './alert/alert.component';
import { AuthenticationService } from './authentication.service';
import { CanDeactivateGuard } from './deactive-guard-service';
import {NgxPaginationModule} from 'ngx-pagination';
import { DummyComponent } from './policy-view-component/policy-view-forms-component/dummy/dummy.component';
import {DialogService} from './dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LocalityViewComponentComponent,
    SystemViewComponentComponent,
    VendorsComponentComponent,
    VendorsViewComponent,
    SolutionsComponent,
    FormsComponent,
    SolutionsFormsComponentComponent,
    PolicyComponentComponent,
    PolicyViewComponentComponent,
    ContactComponentComponent,
    PolicyViewFormsComponentComponent,
    ViewTableComponent,
    SolutionViewComponentComponent,
    PolicyFormsComponent,
    RegisterComponent,
    SolutionTableComponent,
    PolicyDetailsComponent,
    EditSolutionComponent,
    EditSolutionFormComponent,
    ReviewComponent,
    DocumentsComponent,
    ApplicationsComponent,
    DialogBoxComponent,
    EditVendorComponent,
    EditNavigationComponent,
    FilterPipe,
    ControlNameComponent,
    PolicyAddComponent,
    DeviceComponent,
    UpdateDeviceComponent,
    LoginPageComponent,
    AlertComponent,
    DummyComponent



  ],

  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    MyDatePickerModule,
    HttpModule,
    CoreModule,
    FormsModule,
    LocalityComponentRoutingModule,
    LocalityComponentModule,
    //SystemComponentRoutingModule,
    SystemComponentModule,
    BrowserAnimationsModule,
    NavigationComponentModule,
    OptionListModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule.forRoot(),
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.rotatingPlane,
      backdropBackgroundColour: 'rgba(0,0,0,0.5)', 
      backdropBorderRadius: '4px',
      primaryColour: '#fff', 
      secondaryColour: '#fff', 
      tertiaryColour: '#fff',
      fullScreenBackdrop:true
  })
  ],
  entryComponents: [
    DialogBoxComponent
  ],



  providers: [RegisterService, UtilService, ApiserviceService, AlertService,AuthenticationService,CanDeactivateGuard,DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
