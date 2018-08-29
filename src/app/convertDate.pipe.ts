import { IMyDate } from 'mydatepicker';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform{

transform(date):any {
if(date === null){ return '';}
else{
 let d = new Date(date);
       
     
       let day = d.getDate();
     let month = d.getMonth()+1;
     let year = d.getFullYear();
        return month +"/"+day+"/"+year;
        }
}
}