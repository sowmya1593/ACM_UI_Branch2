export class Locality {

  localityCd:string;

	updatedTime:any;
	activeLocality:number;
	acronym:string;
	 fipsCd:string;
	 firstName:string;
	 lastName:string;
	 emailId:string;
	 phoneNumber:string;
	 website:string;
	 verisId:string;
	capInd:boolean = false;
	 bailoutInd:boolean = false;
 penality:string;
	 vebaRegion:boolean  = false;
	 vravRegion:boolean  = false;
	 paperPollbook:boolean  = false;
electronicPollbook:boolean  = false;
 notes:string ;
 applicationId:number;
 workHoursDTOs:any[] = [];
 

 
}
export class WorkHours{
workHoursId:number = 0;
  day: string = "";
	openTm:any = "";
	closeTm:any = "";
	createdBy:string = "";
	createdTs:any = "";
	updatedBy:string = "";
	updatedTs:any = "";
}
 export class applicationView{

 acronym:string;
 applicationId:number;
 name:string;
 updatedTs:any;
 }
export class CertDocDTO {
   certDocId: number;
  fileName: string;
   fileLocation: string;
  section:string;
}