/**
 * New typescript file
 */
const baseUrl = 'http://localhost:8080/ApplicationPortfolioManager/services/';

//const baseUrl = 'http://ec2-54-86-177-206.compute-1.amazonaws.com/ApplicationPortfolioManager/services/';

//http://ec2-54-86-177-206.compute-1.amazonaws.com/

const apiBaseUrl = baseUrl;


export const APP_CONFIG = {
  
  getVendors: apiBaseUrl + 'getVendors',
  getSolutions: apiBaseUrl + 'getSolutions',
  getSolution: apiBaseUrl +'getSolution',
  getVendor: apiBaseUrl + 'getVendor',
  postVendor:apiBaseUrl + 'addNewVendor',
  postSolution: apiBaseUrl + 'updateSolution',
  getSolutionTypes: apiBaseUrl + 'getSolutionOnType',
  getSolutionsOnload: apiBaseUrl + 'getSolutionsOnload',
  addSolutions: apiBaseUrl + 'registerSolution',
  getSolutionFile: apiBaseUrl + 'getSolutionFile',
  fetchPolicies: apiBaseUrl + 'fetchPolicies',
  getAuditTypes: apiBaseUrl + 'getAuditTypes',
  getPolicyGroup: apiBaseUrl + 'fetchPolicyGroup',
  addPolicyGroup: apiBaseUrl + 'addPolicyGrp',
  addLocality: apiBaseUrl + 'createApplication',
  addSystem:apiBaseUrl + 'createApplication',
  viewApplication: apiBaseUrl + 'viewApplication',
  updateLocality: apiBaseUrl + 'updateApplication',
  updateSystem: apiBaseUrl + 'updateApplication',
  getSolutionsOnType : apiBaseUrl + 'getSolutionsOnType',
 getPolicy: apiBaseUrl + 'getPolicy',
saveAppSolution:apiBaseUrl + 'saveAppSolution',
saveMOU:apiBaseUrl + 'saveMOU',
getAppSolution:apiBaseUrl + 'getAppSolution',
getAppMOUs:apiBaseUrl + 'getAppMOUs',
updateMOU:apiBaseUrl + 'updateMOU',
getMOUFile:apiBaseUrl + 'getMOUFile',
updateAppSolution:apiBaseUrl + 'updateAppSolution',
updatePolicy: apiBaseUrl + 'updatePolicy',
uploadPolicyDocuments: apiBaseUrl + 'uploadPolicyDocuments',
uploadPolicyFile: apiBaseUrl + 'uploadPolicyFile',
generatePolicyFile: apiBaseUrl + 'generatePolicyFile',
savePolicy: apiBaseUrl + 'savePolicy',
saveDBServerInfo: apiBaseUrl + 'saveDBServerInfo',
getDBServer: apiBaseUrl + 'getDBServer',
updateDBServerInfo: apiBaseUrl + 'updateDBServerInfo',
saveAppAuditInfo:apiBaseUrl + 'saveAppAuditInfo',
updateAppAuditInfo:apiBaseUrl + 'updateAppAuditInfo',
getAppAuditFile:apiBaseUrl + 'getAppAuditFile',
comparePolicyFile:apiBaseUrl + 'comparePolicyFile',
saveAppAssessment:apiBaseUrl + 'saveAppAssessment',
updateAppAssessment:apiBaseUrl + 'updateAppAssessment',
getAppAcronyms:apiBaseUrl+'getAppAcronyms',
getUsers: apiBaseUrl+'getUsers',
getUseronName: apiBaseUrl+'getUseronName',
assignReviewers:apiBaseUrl+'assignReviewers',
getPolicyReviewDetails: apiBaseUrl+'getPolicyReviewDetails',
updatePolicyGrp: apiBaseUrl + 'updatePolicyGrp',
addPolicyGrp: apiBaseUrl + 'addPolicyGrp',
fetchPolicyGroup: apiBaseUrl + 'fetchPolicyGroup',
getAssessData:apiBaseUrl + 'getAppAssessData',
getAssessmentFile:apiBaseUrl +'getAssessmentFile'
}


