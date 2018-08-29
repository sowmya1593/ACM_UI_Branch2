export class Mou{

	 mouId:number;
	 name:string;
	signed:boolean;
	recertificationDt:any;
	createdBy:string;
	createdTs:any;
	updatedBy:string;
	updatedTs:any;
	mouDocDTOs:any=[];
	applicationID:number;
	receiptDt:any;
	
}
export class MOUDocDTO{
 mouDocId:number;
	createdBy:string;
	createdTs:any;
	updatedBy:string;
	updatedTs:any;
	location:string;
	fileName:string;
	fileContent:string;
	status:boolean;
	newFile:boolean;
}