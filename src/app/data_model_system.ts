export class System {

 

	updatedTime:any;
	acronym:string;

	 businessOwner:string;
	 systemOwner:string;
	
 applicationId:number;

 

 
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