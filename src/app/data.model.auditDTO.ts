export  class AppAudit {
    public appAuditId:number;
    public auditName:number;
    public  auditBy:string;
    public  auditDate:any;
    public  auditType:string;
    public  auditDetails:string;
    public  auditFindings:string;
    public  recomendations:string;
    public  actionPlan:string;
    public  budget:any;
    public  status:string;
    public  nextAuditDate:any;
    public  createdBy:string;
    public  createdTs:any;
    public  updBy:string;
    public  upaTs:any;
    public  managementReponse:string;
    public  businessRisks:string;
    public  securityRisks:string;
    public  auditTypeName:string;
     public  appAuditFileDTOs:any[] =[];
    public policyGrpId:number;
    public  applicationID:number;
    public  appAcronym:string;
    public  typeOfFindings:string;
    public  overallRiskLevel:string;
    public  findingComments:string;
    public  responsibleParty:string;
    public  recomendedBy:string;
    public  estimatedCompletionDt:any;
    public  responseBy:string;
    public  responseDt:any;
    public  actionPlanStartDt:any;
    public  actionPlanEndDt:any;
    public  actionPlanAssignedTo:string;
    public  actionPlanSummary:string;
    public  actionPlanTasks:string;
    public  actionPlanCloseoutComments:string;
    public  budgetDescriptionHTML:string;
    public   publicpolicyGrpId:number;
    public auditPolicyDTOs:any[]=[];
    public policyName:string;
}

export class Policy {

      policyId:number;
      controlNumber:string;
      policyName:string;
      description:string;
      policyVal:string;
      status:string;
      defaultVal:string;
      policyGrpId:number;
      appAuditPolicyId:number;
      priority:string;
      procedures:string;
      guidelines:string;
      familyName:string;
      classType:string;


}

export class AppAuditFileDTO {
  
  appAuditFileId:number;
   fileName:string;
  fileContent:any;
  status:boolean;
  createdBy:string;
  createdTs:any;
}

