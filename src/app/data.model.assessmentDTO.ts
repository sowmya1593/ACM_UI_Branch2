export class AppAssess {
    assessmentId: number;
    name: string;
    assessmentDt: any;
    status: string;
    nextAssessmentDt: any;
    createdBy: string;
    createdTs: any;
    updatedBy: string;
    auditName: string;
    updatedTs: any;
    applicationID: number;
    policyGrpId: number;
    auditId: number;
    appAcronym: string;
    appId: number;
    policyName: string;
    assessmentPolicyDTOs: any[] = [];
    assessmentFileDTOs: any[] = [];
    typeOfFindings: string;
    overallRiskLevel: string;
    findingComments: string;
    responsibleParty: string;
    recomendedBy: string;
    estimatedCompletionDt: any;
    responseBy: string;
    responseDt: any;
    actionPlanStartDt: any;
    actionPlanEndDt: any;
    actionPlanAssignedTo: string;
    actionPlanSummary: string;
    actionPlanTasks: string;
    actionPlanCloseoutComments: string;
    findingDescription: string;
    comments: string;
    recomendations: string;
    managementReponse: string;
    closeOutComments: string;
    securityRisks: string;
    budgetDescription: string;
    budget: number;
    businessRisks: string;
    lessonsEnteredBy:string;
    lessonsEnteredDate:any;
    lessonsLearnedDescription:string;
}


export class AssessmentPolicyDTO {

    assessmentPolicyId: number;
    policyDTO: Policy;
    confidentiality: boolean;
    integrity: boolean;
    availability: boolean;
    completionDt: any;
    vulnerabilityFamily: string;
    riskVulnerability: string;
    riskThreat: string;
    riskSummary: string;
    impactMagnitude: string;
    createdBy: string;
    createdTs: any;
    updatedBy: string;
    updatedTs: any;
    cyberSecurityFramework: string;
    controlsInPlace: string;
    applicationName: string;
    status: string;


}

export class Policy {

    policyId: number;
    controlNumber: string;
    policyName: string;
    description: string;
    policyVal: string;
    createdBy: string;
    createdTs: any;
    updatedBy: string;
    updatedTs: any;
    priority: string;
    procedures: string;
    guidelines: string;
    familyName: string;
    classType: string;
    assignedTo: string;
    assignedBy: string;
    startDate: any;
    endDate: any;
    reviewDate: any;
    status: boolean;
    linked: boolean;

    linkType: string;

    isDesignDocument: string;
    configBaseline: string;
    auditRecords: string;
    artifacts: string;
    nonCov: string;
    securityPlan: string;
    isConfigSettings: string;

    policyGrpId: number;
    comments: string;

    //linkedPolicies:any[] = [];
    linkedPolicies: any = [];
    //linkedPolicies: Array<PolicyDTO> = [];

    linkedPoliciesString: string;

    //  policyDocumentsDTOs: any;
    policyDocumentsDTOs: Array<PolicyDocumentsDTO> = [];

}

export class PolicyDocumentsDTO {

    policyDocumentsTblId: number;
    documentName: string;
    documentPath: string;
    activeFlag: boolean;
    createdBy: string;
    createdTs: any;
    updatedBy: string;
    updatedTs: any;
}

export class AssessmentFileDTO {
  
    appAuditFileId:number;
     fileName:string;
    fileContent:any;
    status:boolean;
    createdBy:string;
    createdTs:any;
  }