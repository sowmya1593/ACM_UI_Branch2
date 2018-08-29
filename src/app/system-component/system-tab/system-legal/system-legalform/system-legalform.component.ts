import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MOUDocDTO, Mou } from '../../../../data_model_legal';
import { ApiserviceService } from '../../../../apiservice.service';
import { APP_CONFIG } from '../../../../app.config';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UtilService } from '../../../../util.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-legalform',
  templateUrl: './system-legalform.component.html',
  styleUrls: ['./system-legalform.component.css']
})
export class SystemLegalformComponent implements OnInit {
  @ViewChild('fileInput') inputEl: ElementRef;

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy'
  };
  public appId: any;
  mou: Mou;
  mouDocDTO: MOUDocDTO;
  appMOUs: Mou;
  public moureceiptdt: any;
  public mrcdt: any;
  public mrdt: any;
  public mouId: any;
  public mourecertdt: any;
  public acronym: any;
  public updatedTime: any;
  public showLegal: boolean = false;
  public showSigned: boolean = false;
  public certify: any;
  public recipt: any;

  public showLegalBox: boolean = true;
  constructor(private _apiservice: ApiserviceService,
    private http: Http, private modalService: NgbModal, private utilservice: UtilService,
    private router: Router) {
    this.mou = new Mou();
    this.getAppId();
  }

  ngOnInit() {
  }


  getAppId() {
    this._apiservice.viewApplication(UtilService.systemName)
      .subscribe((data: any) => {
        this.acronym = data.applicationViewDTO.acronym;
        let d = new Date(data.applicationViewDTO.updatedTime);
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        this.updatedTime = month + "/" + day + "/" + year;
        this.appId = data.applicationViewDTO.applicationId;
        this.mou.applicationID = data.applicationViewDTO.applicationId;
        if(UtilService.appMouId === '')
        {
          this.showLegalBox = false;
        }
        else{
          this.getAppMOUs(data.applicationViewDTO.applicationId);
        }

      }, error => console.log(error));
  }

  saveMOU() {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    var formData = new FormData();
    this.mou.applicationID = this.appId;
    if (this.mou.mouId === undefined) {
      formData.append('attachments', inputEl.files.item(0));
      formData.append('mou', JSON.stringify(this.mou));
      let url_update = APP_CONFIG.saveMOU;
      this.http.post(url_update, formData).subscribe((data: any) => {



      }, error => console.log(error));

    }
    else {
      formData.append('attachments', inputEl.files.item(0));
      formData.append('mou', JSON.stringify(this.mou));
      let url_update = APP_CONFIG.updateMOU;
      this.http.post(url_update, formData).subscribe((data: any) => {

      }, error => console.log(error));
    }
  }

  getAppMOUs(id) {

    this._apiservice.getAppMOUs(id)
      .subscribe((data: any) => {
       let moudata =data.filter(item => item.mouId === UtilService.appMouId);
       for(let i =0;i<moudata.length;i++)
       {
         this.getAppMOU(moudata[i]);
       }
      }, error => console.log(error));
  }



  createMOUDTO(fileInput: any) {
    let files = fileInput.target.files[0];
    if (files === undefined) { }
    else {
      if (this.mou.mouDocDTOs === null) {
        this.mou.mouDocDTOs = [];
        this.mouDocDTO = new MOUDocDTO();
        this.mouDocDTO.fileName = fileInput.target.files[0].name;
        this.mouDocDTO.status = true;
        this.mouDocDTO.newFile = true;
        this.mou.mouDocDTOs.push(this.mouDocDTO);
      }
      else {
        this.mouDocDTO = new MOUDocDTO();
        this.mouDocDTO.fileName = fileInput.target.files[0].name;
        this.mouDocDTO.status = true;
        this.mouDocDTO.newFile = true;
        this.mou.mouDocDTOs.push(this.mouDocDTO);


      }
    }
  }



  getAppMOU(appsolution) {
    this.certify = appsolution.recertificationDt;
    let dt = new Date(this.certify);

    let year2 = dt.getFullYear();
    let month2 = dt.getMonth() + 1;
    let day2 = dt.getDate();

    this.recipt = appsolution.receiptDt;
    let moudrt = new Date(this.recipt);

    let year1 = moudrt.getFullYear();
    let month1 = moudrt.getMonth() + 1;
    let day1 = moudrt.getDate();
    this.mou.name = appsolution.name;
    this.mou.signed = appsolution.signed;
    this.mou.recertificationDt = this.certify;

    this.mou.receiptDt = this.recipt;//when not changed

    this.mourecertdt = { date: { year: year2, month: month2, day: day2 } };
    this.moureceiptdt = { date: { year: year1, month: month1, day: day1 } };
    this.mou.mouId = appsolution.mouId;
    this.mou.mouDocDTOs = appsolution.mouDocDTOs;


  }

  getDate(value) {
    this.mou.receiptDt = Date.parse(value.formatted);


  }

  getNextDate(value) {
    this.mou.recertificationDt = Date.parse(value.formatted);
  }
  getFile(id) {
    window.open(APP_CONFIG.getMOUFile + '?' + 'mouDocId' + '=' + id)
  }
  deleteFile(id, index) {

    if (id === undefined) {
      let length = this.mou.mouDocDTOs.length;
      if (length === 1) {
        this.mou.mouDocDTOs = [];
      }
      else {
        for (let i = index; i < length; i++) {
          this.mou.mouDocDTOs[i] = this.mou.mouDocDTOs[i + 1];
        }
        this.mou.mouDocDTOs.splice(length - 1, 1);
      }

    }
    else {
      for (let i = 0; i < this.mou.mouDocDTOs.length; i++) {
        if (this.mou.mouDocDTOs[i].mouDocId === id) {
          this.mou.mouDocDTOs[i].status = false;
        }
      }
    }

  }

  editClick()
  {
    this.showLegalBox = false;
  }

  goBack()
  {
    this.router.navigate(['/locality/tab/legal']);
  }



}
