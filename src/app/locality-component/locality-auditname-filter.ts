import { IMyDate } from 'mydatepicker';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filterAuditName'
})
export class FilterAuditName implements PipeTransform {

    transform(auditId): any {
        if (auditId === '2') { return 'VITA'; }
        else {
            return 'AUDIT';

        }
      
    }
}