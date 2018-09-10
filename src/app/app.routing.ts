import {SystemDetailsComponent} from './system-component/system-tab/system-details/system-details.component';
import {SystemComponentComponent} from './system-component/system-component.component';
import {SystemTabComponent} from './system-component/system-tab/system-tab.component';
import {SystemSolutionsComponent} from './system-component/system-tab/system-solutions/system-solutions.component';
import {SystemSolutionsLinkComponent} from './system-component/system-tab/system-solutions/system-solutions-link/system-solutions-link.component';
import {SystemSolutionstablelinkComponent} from './system-component/system-tab/system-solutionstablelink/system-solutionstablelink.component';
import {SystemBusinessComponent} from './system-component/system-tab/system-business/system-business.component';
import {SystemAssessmentComponent} from './system-component/system-tab/system-assessment/system-assessment.component';
import {SystemTechnicalComponent} from './system-component/system-tab/system-technical/system-technical.component';
import {SystemAuditComponent} from './system-component/system-tab/system-audit/system-audit.component';
import {SystemSecurityComponent} from './system-component/system-tab/system-security/system-security.component';
import {SystemAuditDetailsComponent} from './system-component/system-tab/system-audit/system-audit-details/system-audit-details.component';
import {SystemAuditFindingsComponent} from './system-component/system-tab/system-audit/system-audit-findings/system-audit-findings.component';
import {SystemAuditRecomendationsComponent} from './system-component/system-tab/system-audit/system-audit-recomendations/system-audit-recomendations.component';
import {SystemAuditActionComponent} from './system-component/system-tab/system-audit/system-audit-action/system-audit-action.component';
import {SystemAuditBusinessriskComponent} from './system-component/system-tab/system-audit/system-audit-businessrisk/system-audit-businessrisk.component';
import {SystemAuditSecurityriskComponent} from './system-component/system-tab/system-audit/system-audit-securityrisk/system-audit-securityrisk.component';
import {SystemAuditDetailsTab} from './system-component/system-tab/system-audit/system-audit-details/system-audit-details-tab/system-audit-details-tab.component';
import {SystemAuditLessonsComponent} from './system-component/system-tab/system-audit/system-audit-lessons/system-audit-lessons.component';

import {SystemAuditBudgetComponent} from './system-component/system-tab/system-audit/system-audit-budget/system-audit-budget.component';
import {SystemAuditAttachmentsComponent} from './system-component/system-tab/system-audit/system-audit-attachments/system-audit-attachments.component';
import {SystemLegalComponent} from './system-component/system-tab/system-legal/system-legal.component';
import {SystemAuditManagementComponent} from './system-component/system-tab/system-audit/system-audit-management/system-audit-management.component';
import {SystemViewComponentComponent} from './system-view-component/system-view-component.component';
import {SystemAddComponentComponent} from "./system-component/system-add-component/system-add-component.component";
import {SystemAuditFirstComponent} from './system-component/system-tab/system-audit/system-audit-first/system-audit-first.component';
import {LocalityDetailsComponent} from './locality-component/locality-tab/locality-details/locality-details.component';

import {WorkflowGuard} from './router-guard';
import {NgModule} from '@angular/core';

import {LocalityComponentComponent} from './locality-component/locality-component.component';
import {SystemAssessTabComponent} from './system-component/system-tab/system-assessment/system-assess-details/system-assess-tab/system-assess-tab.component';
import {SystemAssessDetailsComponent} from './system-component/system-tab/system-assessment/system-assess-details/system-assess-details.component';
import { SystemLegalformComponent } from './system-component/system-tab/system-legal/system-legalform/system-legalform.component';
import { SystemLegalmainComponent } from './system-component/system-tab/system-legal/system-legalmain/system-legalmain.component';

import {LocalityTabComponent} from './locality-component/locality-tab/locality-tab.component';

import {LocalitySolutionsComponent} from './locality-component/locality-tab/locality-solutions/locality-solutions.component';
import {LocalitySolutionsLinkComponent} from './locality-component/locality-tab/locality-solutions/locality-solutions-link/locality-solutions-link.component';
import {LocalitySolutionstablelinkComponent} from './locality-component/locality-tab/locality-solutionstablelink/locality-solutionstablelink.component';
import {LocalityBusinessComponent} from './locality-component/locality-tab/locality-business/locality-business.component';
import {LocalityAssessmentComponent} from './locality-component/locality-tab/locality-assessment/locality-assessment.component';
import {LocalityTechnicalComponent} from './locality-component/locality-tab/locality-technical/locality-technical.component';
import {LocalityAuditComponent} from './locality-component/locality-tab/locality-audit/locality-audit.component';
import {LocalitySecurityComponent} from './locality-component/locality-tab/locality-security/locality-security.component';
import {AuditDetailsComponent} from './locality-component/locality-tab/locality-audit/audit-details/audit-details.component';
import {AuditFindingsComponent} from './locality-component/locality-tab/locality-audit/audit-findings/audit-findings.component';
import {AuditRecomendationsComponent} from './locality-component/locality-tab/locality-audit/audit-recomendations/audit-recomendations.component';
import {AuditActionComponent} from './locality-component/locality-tab/locality-audit/audit-action/audit-action.component';
import {AuditBusinessriskComponent} from './locality-component/locality-tab/locality-audit/audit-businessrisk/audit-businessrisk.component';
import {AuditSecurityriskComponent} from './locality-component/locality-tab/locality-audit/audit-securityrisk/audit-securityrisk.component';
import {AuditDetailsTab} from './locality-component/locality-tab/locality-audit/audit-details/audit-details-tab/audit-details-tab.component';
import {AuditLessonsComponent} from './locality-component/locality-tab/locality-audit/audit-lessons/audit-lessons.component';

import {AuditBudgetComponent} from './locality-component/locality-tab/locality-audit/audit-budget/audit-budget.component';
import {AuditAttachmentsComponent} from './locality-component/locality-tab/locality-audit/audit-attachments/audit-attachments.component';
import {LocalityLegalComponent} from './locality-component/locality-tab/locality-legal/locality-legal.component';
import {AuditManagementComponent} from './locality-component/locality-tab/locality-audit/audit-management/audit-management.component';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {VendorsComponentComponent} from './vendors-component/vendors-component.component';
import {VendorsViewComponent} from './vendors-view/vendors-view.component';
import {SolutionsComponent} from './solutions/solutions.component';
import {FormsComponent} from './forms/forms.component';
import {SolutionsFormsComponentComponent} from './solutions/solutions-forms-component/solutions-forms-component.component';
import {PolicyComponentComponent} from './policy-component/policy-component.component';
import {PolicyViewComponentComponent} from './policy-view-component/policy-view-component.component';
import {ContactComponentComponent} from './solutions/solutions-forms-component/contact-component/contact-component.component';
import {PolicyViewFormsComponentComponent} from './policy-view-component/policy-view-forms-component/policy-view-forms-component.component';
import {ViewTableComponent} from './vendors-view/view-table/view-table.component';
import {LocalityViewComponentComponent} from './locality-view-component/locality-view-component.component';
import {SolutionViewComponentComponent} from './solution-view-component/solution-view-component.component';
import {PolicyFormsComponent} from './policy-component/policy-forms/policy-forms.component';
import {RegisterComponent} from './services/register.component';
import {SolutionTableComponent} from './solution-view-component/solution-table/solution-table.component';
import {PolicyDetailsComponent} from './policy-view-component/policy-view-forms-component/policy-details/policy-details.component';
import {EditSolutionComponent} from './edit-solution/edit-solution.component';
import {EditSolutionFormComponent} from './edit-solution/edit-solution-form/edit-solution-form.component';
import {ReviewComponent} from './policy-view-component/policy-view-forms-component/review/review.component';
import {DocumentsComponent} from './policy-view-component/policy-view-forms-component/documents/documents.component';
import {ApplicationsComponent} from './policy-view-component/policy-view-forms-component/applications/applications.component';
import {DialogBoxComponent} from './policy-view-component/policy-view-forms-component/documents/dialog-box/dialog-box.component';
import {EditNavigationComponent} from './edit-navigation/edit-navigation.component';
import {EditVendorComponent} from './edit-vendor/edit-vendor.component';
import {LocalityAddComponentComponent} from "./locality-component/locality-add-component/locality-add-component.component";
import {ControlNameComponent} from './control-name/control-name.component';
import {PolicyAddComponent} from './policy-add/policy-add.component';
import {DeviceComponent} from './device/device.component';
import {UpdateDeviceComponent} from './update-device/update-device.component';
import {AuditFirstComponent} from './locality-component/locality-tab/locality-audit/audit-first/audit-first.component';
import {WorkflowGuardAudit} from './audit-guard';
import {WorkflowGuardAssess} from './assess-guard';
import {AssessTabComponent} from './locality-component/locality-tab/locality-assessment/assess-details/assess-tab/assess-tab.component';
import {AssessDetailsComponent} from './locality-component/locality-tab/locality-assessment/assess-details/assess-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LegalformComponent } from './locality-component/locality-tab/locality-legal/legalform/legalform.component';
import { LegalmainComponent } from './locality-component/locality-tab/locality-legal/legalmain/legalmain.component';
import { AuthGuard } from './login-guard';
import { AssessDowntabsComponent } from './locality-component/locality-tab/locality-assessment/assess-downtabs/assess-downtabs.component';
import { AssessFindComponent } from './locality-component/locality-tab/locality-assessment/assess-find/assess-find.component';
import { AssessRecomendComponent } from './locality-component/locality-tab/locality-assessment/assess-recomend/assess-recomend.component';
import { ManagementComponent } from './locality-component/locality-tab/locality-assessment/management/management.component';
import { AssessActionComponent } from './locality-component/locality-tab/locality-assessment/assess-action/assess-action.component';
import { AssessBusinessComponent } from './locality-component/locality-tab/locality-assessment/assess-business/assess-business.component';
import { AssessSecurityComponent } from './locality-component/locality-tab/locality-assessment/assess-security/assess-security.component';
import { AssessBudgetComponent } from './locality-component/locality-tab/locality-assessment/assess-budget/assess-budget.component';
import { AssessAttachmentsComponent } from './locality-component/locality-tab/locality-assessment/assess-attachments/assess-attachments.component';
import { AssessLessonsComponent } from './locality-component/locality-tab/locality-assessment/assess-lessons/assess-lessons.component';
import {DummyComponent} from './policy-view-component/policy-view-forms-component/dummy/dummy.component';
import { CanDeactivateGuard} from './deactive-guard-service';
import { LocalitysolutionsformComponent } from './locality-component/locality-tab/locality-solutions/localitysolutionsform/localitysolutionsform.component';
const appRoutes: Routes = [




  {path: '', component: LoginPageComponent},
  { path:'login', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'vendors', component: VendorsComponentComponent},
  {path: 'solutions', component: SolutionsComponent},
  {path: 'vendorsView', component: VendorsViewComponent},
  {path: 'accessControl/:id', component: ControlNameComponent},
  {path: 'policy', component: PolicyComponentComponent},
  {path: 'policyAdd', component: PolicyAddComponent},
  {path: 'deviceInventory', component: DeviceComponent},
  {path: 'updateDevice/:id', component: UpdateDeviceComponent},
  {
    path: "system", component: SystemComponentComponent,
    children: [
      {
        path: 'map',
        component: SystemAddComponentComponent,
      },
      {
        path: 'tab',
        component: SystemTabComponent,
        children: [
          {
            path: 'info/:System',
            component: SystemDetailsComponent
          },
          {
            path: 'assessment',
            component: SystemAssessmentComponent, canActivate: [WorkflowGuard]
          },
        //  {
          //  path: 'Tab1',
            //component: AssessTabComponent,

            //children: [{

              //path: 'first1',
              //component: AssessDetailsComponent
            //},
            {
              path: 'technical',
              component: SystemTechnicalComponent, canActivate: [WorkflowGuard]
            },
            {
              path: 'legal',
              component: SystemLegalComponent, canActivate: [WorkflowGuard],
              children:[
                {
                  path: '',
                  component: SystemLegalmainComponent, canActivate: [WorkflowGuard]
                },
                {
                  path: 'legalform',
                  component: SystemLegalformComponent, canActivate: [WorkflowGuard]
                }
              ]
            },
            {
              path: 'solutions',
              component: SystemSolutionsComponent, canActivate: [WorkflowGuard]
            },
            {
              path: 'security',
              component: SystemSecurityComponent, canActivate: [WorkflowGuard]
            },
            {
              path: 'link',
              component: SystemSolutionstablelinkComponent, canActivate: [WorkflowGuard]
            },
            {
              path: 'business',
              component: SystemBusinessComponent, canActivate: [WorkflowGuard]
            },
            {

              path: 'Audit',
              component: SystemAuditComponent, canActivate: [WorkflowGuard],
              children: [
                {
                  path: '',
                  component: SystemAuditDetailsComponent
                },
                {
                  path: 'Tab',
                  component: SystemAuditDetailsTab,

                  children: [{


                    path: 'first',
                    component:SystemAuditFirstComponent
                  },
                  {
                    path: 'find',
                    component: SystemAuditFindingsComponent, canActivate: [WorkflowGuardAudit]
                  },
                  {
                    path: 'recomendation',
                    component: SystemAuditRecomendationsComponent, canActivate: [WorkflowGuardAudit]
                  },
                  {
                    path: 'management',
                    component: SystemAuditManagementComponent, canActivate: [WorkflowGuardAudit]
                  },
                  {
                    path: 'action',
                    component: SystemAuditActionComponent, canActivate: [WorkflowGuardAudit]
                  },
                  {
                    path: 'brisk',
                    component: SystemAuditBusinessriskComponent, canActivate: [WorkflowGuardAudit]
                  },
                  {
                    path: 'srisk',
                    component: SystemAuditSecurityriskComponent, canActivate: [WorkflowGuardAudit]
                  },
                  {
                    path: 'budget',
                    component: SystemAuditBudgetComponent, canActivate: [WorkflowGuardAudit]
                  },
                  {
                    path: 'attachment',
                    component: SystemAuditAttachmentsComponent, canActivate: [WorkflowGuardAudit]
                  },
                  {
                    path: 'lessons',
                    component: SystemAuditLessonsComponent, canActivate: [WorkflowGuardAudit]
              //    }
                //  ]
                }

              ]
             }
            ]
          }
        ]
      }
    ]
  },
  {path: 'systemView', component: SystemViewComponentComponent},












  {
    path: "locality", component: LocalityComponentComponent,
    children: [
      {
        path: 'map',
        component: LocalityAddComponentComponent, canActivate: [AuthGuard]
      },
      {
        path: 'tab',
        component: LocalityTabComponent,
        children: [
          {
            path: 'info',
            component: LocalityDetailsComponent
          },
          {
            path: 'assessment',
            component: LocalityAssessmentComponent,canActivate: [WorkflowGuard],
            children:[{
           path:'',
           component: AssessTabComponent
          },
          {
            path: 'Tabs',
            component:AssessDowntabsComponent,

            children: [{

              path: 'first1',
              component: AssessDetailsComponent
            },
            {
                    path: 'find1',
                    component: AssessFindComponent, canActivate: [WorkflowGuardAssess] 
                  },
                  {
                    path: 'recomendation1',
                    component: AssessRecomendComponent, canActivate: [WorkflowGuardAssess]
                  },
                  {
                    path: 'management1',
                    component: ManagementComponent, canActivate: [WorkflowGuardAssess]
                  },
                  {
                    path: 'action1',
                    component: AssessActionComponent, canActivate: [WorkflowGuardAssess]
                  },
                  {
                    path: 'brisk1',
                    component: AssessBusinessComponent, canActivate: [WorkflowGuardAssess]
                  },
                  {
                    path: 'srisk1',
                    component: AssessSecurityComponent, canActivate: [WorkflowGuardAssess]
                  },
                  {
                    path: 'budget1',
                    component: AssessBudgetComponent, canActivate: [WorkflowGuardAssess],canDeactivate: [CanDeactivateGuard],
                  },
                  {
                    path: 'attachment1',
                    component: AssessAttachmentsComponent, canActivate: [WorkflowGuardAssess]
                  },
                  {
                    path: 'lessons1',
                    component: AssessLessonsComponent, canActivate: [WorkflowGuardAssess]
                  }
                  ]
                  }
           ]
                  
             
          },
        //  {
          //  path: 'Tab1',
            //component: AssessTabComponent,

            //children: [{

              //path: 'first1',
              //component: AssessDetailsComponent
            //},
            {
              path: 'technical',
              component: LocalityTechnicalComponent, canActivate: [WorkflowGuard]
            },
            {
              path: 'legal',
              component: LocalityLegalComponent, canActivate: [WorkflowGuard],
              children:[
                {
                  path: '',
                  component: LegalmainComponent, canActivate: [WorkflowGuard]
                },
                {
                  path: 'legalform',
                  component: LegalformComponent, canActivate: [WorkflowGuard]
                }
              ]
            },
            {
              path: 'solutions',
              component: LocalitySolutionsComponent, canActivate: [WorkflowGuard],
              children:[
                {
                  path:'', component:LocalitySolutionsLinkComponent, canActivate: [WorkflowGuard]
                },
                {
                  path:'solutionForm', component:LocalitysolutionsformComponent, canActivate:[WorkflowGuard]
                }
              ]
            },
            {
              path: 'security',
              component: LocalitySecurityComponent, canActivate: [WorkflowGuard]
            },
            {
              path: 'link',
              component: LocalitySolutionstablelinkComponent, canActivate: [WorkflowGuard]
            },
            {
              path: 'business',
              component: LocalityBusinessComponent, canActivate: [WorkflowGuard]
            },
            {

              path: 'Audit',
              component: LocalityAuditComponent, canActivate: [WorkflowGuard],
              children: [
                {
                  path: '',
                  component: AuditDetailsComponent
                },
                {
                  path: 'Tab',
                  component: AuditDetailsTab,

                  children: [{


                    path: 'first',
                    component: AuditFirstComponent
                  },
                  {
                    path: 'find',
                    component: AuditFindingsComponent, canActivate: [WorkflowGuardAudit]
                  },
                  {
                    path: 'recomendation',
                    component: AuditRecomendationsComponent, canActivate: [WorkflowGuardAudit]
                  },
                  {
                    path: 'management',
                    component: AuditManagementComponent, canActivate: [WorkflowGuardAudit]
                  },
                  {
                    path: 'action',
                    component: AuditActionComponent, canActivate: [WorkflowGuardAudit]
                  },
                  {
                    path: 'brisk',
                    component: AuditBusinessriskComponent, canActivate: [WorkflowGuardAudit]
                  },
                  {
                    path: 'srisk',
                    component: AuditSecurityriskComponent, canActivate: [WorkflowGuardAudit]
                  },
                  {
                    path: 'budget',
                    component: AuditBudgetComponent, canActivate: [WorkflowGuardAudit]
                  },
                  {
                    path: 'attachment',
                    component: AuditAttachmentsComponent, canActivate: [WorkflowGuardAudit]
                  },
                  {
                    path: 'lessons',
                    component: AuditLessonsComponent, canActivate: [WorkflowGuardAudit]
              //    }
                //  ]
                }

              ]
             }
            ]
          }
        ]
      }
    ]
  },
  {path: 'localityView', component: LocalityViewComponentComponent},
  {path: 'solutionsView', component: SolutionViewComponentComponent},
  {path: 'editSolutions/:id', component: EditSolutionComponent},
  {path: 'editVendors/:id', component: EditVendorComponent},
  {
    path: 'policyView', component: PolicyViewComponentComponent, children: [
      {path: 'policyDetails', component: PolicyDetailsComponent},
      {path: 'review', component: ReviewComponent},
      {path: 'documents', component: DocumentsComponent},
      {path: 'applications', component: ApplicationsComponent},
    {path: 'dummy', component: DummyComponent}]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule],
  providers: [WorkflowGuard, WorkflowGuardAudit,AuthGuard, WorkflowGuardAssess,CanDeactivateGuard]

})
//export class SystemComponentRoutingModule {}
export class LocalityComponentRoutingModule {}
