export class ApplicationSolution	{
    appSolutionId:number;
	activeFlag:boolean;
	createdBy:string;
	createdTs:any;
	updatedBy:string;
	updatedTs:any;
    appSolutionDevices:any[]=[];
	applicationID:number;
	solutionId:number;
	notes:string;


	solutionsDTO:Solutions;
	noOfUnits:number;

	}
export class Solutions {

    solutionId:number;
	certDt:any;
	certStadard:String ;
	 certRenewalDueDt:any;
     name:string;
	 versionNumber: string;
	 patches:string;
	 notes:string;
	solutionType:number;
	 vendorId:number;
	createdBy:string;
	createdTs:any;
	updatedBy:string;
	updatedTs:any;
	vendor:Vendor;
	hostingTypeDTO:HostingType;
     solutionTypeName:string;
	labVendorId:number;
	hostingTypeNotes:string;
	

 }
export class Device{

 appSolutionDevice:number;
	modelNumber:any;
	 serialNumber: any;
	 appSolutionId:number;
	
	 activeFlag: boolean;
	
//	  firstName:string;
//	 lastName:string;
	 street1:string;
	 street2:string;
	city:string;
	 state:string;
	  zipCode:string;
	
	nextScanningDt:any;
	overallStatus:string;
	notes:string;

}
export class Vendor{
 vendorId:number;
   name:string;
 createdBy:string;
	createdTs:any;
	updatedBy:string;
	updatedTs:any;
	vendorAddress:any;
	vendorContact:any;
}

export class HostingType {
  name: string;
  hostingTypeId: number;
}