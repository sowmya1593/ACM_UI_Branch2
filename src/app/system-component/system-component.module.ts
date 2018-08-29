import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { SystemComponentRoutingModule} from '../app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationComponentModule } from '../navigation-component/navigation-component.module';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { SystemAddComponentComponent } from './system-add-component/system-add-component.component';
import { SystemTabComponent } from './system-tab/system-tab.component'
import { OptionListModule } from '../option-list/option-list.module';
import { SystemComponentComponent } from './system-component.component';
import { SystemDetailsComponent } from './system-tab/system-details/system-details.component';
import { SystemSolutionsComponent } from './system-tab/system-solutions/system-solutions.component';
import { SystemSolutionsLinkComponent } from './system-tab/system-solutions/system-solutions-link/system-solutions-link.component';
import { SystemSolutionstablelinkComponent } from './system-tab/system-solutionstablelink/system-solutionstablelink.component';
import { SystemBusinessComponent } from './system-tab/system-business/system-business.component';
import { SystemAuditComponent } from './system-tab/system-audit/system-audit.component';
import { SystemAuditDetailsComponent } from './system-tab/system-audit/system-audit-details/system-audit-details.component';
import { SystemAuditFindingsComponent } from './system-tab/system-audit/system-audit-findings/system-audit-findings.component';
import { SystemAuditRecomendationsComponent } from './system-tab/system-audit/system-audit-recomendations/system-audit-recomendations.component';
import { SystemLegalComponent } from './system-tab/system-legal/system-legal.component';
import { SystemAuditManagementComponent } from './system-tab/system-audit/system-audit-management/system-audit-management.component';
import { SystemSecurityComponent } from './system-tab/system-security/system-security.component';
import { SystemAuditActionComponent } from './system-tab/system-audit/system-audit-action/system-audit-action.component';
import { SystemAuditBusinessriskComponent } from './system-tab/system-audit/system-audit-businessrisk/system-audit-businessrisk.component';
import { SystemAuditSecurityriskComponent } from './system-tab/system-audit/system-audit-securityrisk/system-audit-securityrisk.component';
import { SystemAuditBudgetComponent } from './system-tab/system-audit/system-audit-budget/system-audit-budget.component';
import { SystemAuditAttachmentsComponent } from './system-tab/system-audit/system-audit-attachments/system-audit-attachments.component';
import { SystemAssessmentComponent } from './system-tab/system-assessment/system-assessment.component';
import { SystemTechnicalComponent } from './system-tab/system-technical/system-technical.component';
import { MyDatePickerModule } from 'mydatepicker';
import { SystemFilterPipeDate } from './system-date-filter';
import { SystemFilterAuditName } from './system-auditname-filter';
import { SystemAuditFirstComponent } from './system-tab/system-audit/system-audit-first/system-audit-first.component';
import { SystemAuditDetailsTab } from './system-tab/system-audit/system-audit-details/system-audit-details-tab/system-audit-details-tab.component';
import { SystemAuditLessonsComponent } from './system-tab/system-audit/system-audit-lessons/system-audit-lessons.component';
import { SystemAssessDetailsComponent } from './system-tab/system-assessment/system-assess-details/system-assess-details.component';
import { SystemAssessTabComponent } from './system-tab/system-assessment/system-assess-details/system-assess-tab/system-assess-tab.component';
import { SystemAuditDetailsTab1 } from './system-tab/system-audit/system-audit-details/system-auditDetailsTab';
import { SystemLegalformComponent } from './system-tab/system-legal/system-legalform/system-legalform.component';
import { SystemLegalmainComponent } from './system-tab/system-legal/system-legalmain/system-legalmain.component';
import { KeysPipe } from './system-pipe';
import { SystemAssessDowntabsComponent } from './system-tab/system-assessment/system-assess-downtabs/system-assess-downtabs.component';
import { LocalityComponentRoutingModule } from '../app.routing';


@NgModule({
  imports: [
    CommonModule,
    NavigationComponentModule,
    Angular2FontawesomeModule,
    OptionListModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
   // SystemComponentRoutingModule,
   LocalityComponentRoutingModule,
    MyDatePickerModule
  ],
  declarations: [SystemAddComponentComponent, SystemTabComponent,SystemComponentComponent, SystemDetailsComponent, SystemSolutionsComponent, SystemSolutionsLinkComponent, SystemSolutionstablelinkComponent, SystemBusinessComponent, SystemAuditComponent, SystemAuditDetailsComponent, SystemAuditFindingsComponent, SystemAuditRecomendationsComponent, SystemLegalComponent, SystemAuditManagementComponent, SystemSecurityComponent, SystemAuditActionComponent, SystemAuditBusinessriskComponent, SystemAuditSecurityriskComponent, 
  SystemAuditBudgetComponent, SystemAuditAttachmentsComponent, SystemAssessmentComponent, 
  SystemTechnicalComponent,SystemFilterPipeDate, SystemFilterAuditName,SystemAuditFirstComponent, SystemAuditDetailsTab, SystemAuditLessonsComponent, SystemAssessDetailsComponent, SystemAssessTabComponent,SystemAuditDetailsTab1, SystemLegalformComponent, SystemLegalmainComponent,KeysPipe, SystemAssessDowntabsComponent]
})
export class SystemComponentModule {}
