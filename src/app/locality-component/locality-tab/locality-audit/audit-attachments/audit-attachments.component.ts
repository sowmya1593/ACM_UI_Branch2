import { Component, OnInit, ViewChild, ElementRef,TemplateRef } from '@angular/core';
import { File } from 'babel-types';
import { APP_CONFIG } from '../../../../app.config';
import { UtilService } from '../../../../util.service';
import { ApiserviceService } from '../../../../apiservice.service';
import { AppAudit, AppAuditFileDTO } from '../../../../data.model.auditDTO';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import { Http, HttpModule, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
interface Window {
  chrome: any;
  StyleMedia: any;
  URL: any;
  webkitURL: any;
  navigator: any;
  open: any;
}
interface Document {
  documentMode: any;
  createElement: any;
  body: any;
}
declare let window: Window;
declare let document: Document;

@Component({
  selector: 'app-audit-attachments',
  templateUrl: './audit-attachments.component.html',
  styleUrls: ['./audit-attachments.component.css']
})
export class AuditAttachmentsComponent implements OnInit {
  @ViewChild('fileInput') inputEl: ElementRef;
  @ViewChild('content') content:TemplateRef<any>;
  appAudit: AppAudit;
  public appAuditDTOs: any;
  public editData: any;
  public showForm: boolean = true;
  appAuditFileDTO: AppAuditFileDTO;
  public files: any;
  public info:string="";
  public loading:boolean = false;
  constructor(private _apiservice: ApiserviceService,
    private utilService: UtilService, private http: Http, private modalService: NgbModal,
    private router:Router) {
    this.utilService.getEdit().subscribe(val => {
      if (val) {
        this.showForm = false;

      }
      else {

      }
    });
    this.appAudit = new AppAudit();
    this.getAppId();
  }

  ngOnInit() {
  }

  getAppId() {
    this.loading = true;
    this._apiservice.viewApplication(localStorage.getItem('localityName'))
      .subscribe((data: any) => {
        this.loading = false;
        this.appAudit.applicationID = data.applicationViewDTO.applicationId;
        this.appAuditDTOs = data.applicationViewDTO.appAuditDTOs;
        this.showOnPageLoad();
      }, error => {
        this.loading = false;
        console.log(error);
      });
  }

  showOnPageLoad() {
    if (localStorage.getItem('appAuditId') === null) {
      console.log('Not edit mode');
    }
    else {
      let id =localStorage.getItem('appAuditId');
      let auid = +id;
      this.editData = this.appAuditDTOs.filter(item => item.appAuditId === auid);

      for (let i = 0; i < this.editData.length; i++) {
        this.appAudit = this.editData[i];
      }
      this.files = this.appAudit.appAuditFileDTOs;

    }

  }

  saveAttachments() {
    this.loading = true;
    //  let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    //  var formData = new FormData();

    //   //formData.append('',inputEl.files.item(0));
    //   this.appAudit.appAuditFileDTOs.file
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false
      };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let url_update = APP_CONFIG.updateAppAuditInfo;
    let data = JSON.stringify(this.appAudit);
    this.http.post(url_update, data, options)
      .subscribe((data: any) => {
        this.loading = false;
        this.info="Attachments has been updated.";
        this.modalService.open(this.content,ngbModalOptions);
      }, error => {
        this.loading = false;
        console.log(error);
      });
  }


  createMOUDTO(fileInput: any) {
    let files = fileInput.target.files[0];
    if (files === undefined) {

    }
    else {
      if (this.appAudit.appAuditFileDTOs === null) {
        this.appAudit.appAuditFileDTOs = [];
        this.appAuditFileDTO = new AppAuditFileDTO();
        this.appAuditFileDTO.fileName = fileInput.target.files[0].name;
        //this.appAuditFileDTO.fileContent  = fileInput.target.files[0];
        this.appAuditFileDTO.status = true;
        this.getFileContent(fileInput.target.files[0])
          .then(
            data =>
              this.appAuditFileDTO.fileContent = data);
        //this.files.push(fileInput.target.files[0]);
        this.appAudit.appAuditFileDTOs.push(this.appAuditFileDTO);
      }
      else {
        this.appAuditFileDTO = new AppAuditFileDTO();
        this.appAuditFileDTO.fileName = fileInput.target.files[0].name;
        //this.appAuditFileDTO.fileContent  = fileInput.target.files[0];
        this.appAuditFileDTO.status = true;
        this.getFileContent(fileInput.target.files[0])
          .then(
            data =>
              this.appAuditFileDTO.fileContent = data);
        //this.files.push(fileInput.target.files[0]);
        this.appAudit.appAuditFileDTOs.push(this.appAuditFileDTO);

      }
    }

  }

  deleteFile(id, index) {
    if (id === undefined) {
      let length = this.appAudit.appAuditFileDTOs.length;
      if (length === 1) {
        this.appAudit.appAuditFileDTOs = [];
      }
      else {
        for (let i = index; i < length; i++) {
          this.appAudit.appAuditFileDTOs[i] = this.appAudit.appAuditFileDTOs[i + 1];
        }
        this.appAudit.appAuditFileDTOs.splice(length - 1, 1);
      }

    }
    else {
      for (let i = 0; i < this.appAudit.appAuditFileDTOs.length; i++) {
        if (this.appAudit.appAuditFileDTOs[i].appAuditFileId === id) {
          this.appAudit.appAuditFileDTOs[i].status = false;
        }
      }
    }
    


  }

  getFileContent(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result)

      };
      reader.onerror = (error) => {
        reject(error);
      };
    });


  }
  getFile(id) {

    if (id === undefined) {

    }
    else {
      this.loading = true;
      this.http.get(APP_CONFIG.getAppAuditFile + '?' + 'fileId' + '=' + id)
        .map((res: any) => {
          return res.json();
        })
        .subscribe((res: any) => {
          this.loading = false;
          let isChrome = !!window.chrome && !!window.chrome.webstore;
          let isIE = /*@cc_on!@*/false || !!document.documentMode;
          let isEdge = !isIE && !!window.StyleMedia;
          let url = window.URL || window.webkitURL;
          let file;
          if (isChrome) {

            let url = window.URL || window.webkitURL;
            var link = document.createElement("a");
            if (res.fileName.includes(".doc") || res.fileName.includes(".docx")) {
              link.href = "data:" + "application/msword" + ";base64," + res.fileContent;
            }
            else {
              link.href = "data:" + "application/pdf" + ";base64," + res.fileContent;
            }
            link.download = res.fileName;
            link.click();
          }
          else if (isEdge || isIE) {
            var byteCharacters = atob(res.fileContent);
            var byteNumbers = new Array(byteCharacters.length);
            for (var i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);

            if (res.fileName.includes(".doc") || res.fileName.includes(".docx")) {
              file = new Blob([byteArray], { type: 'application/msword' });
              window.navigator.msSaveOrOpenBlob(file, res.fileName);
            }
            else {
              file = new Blob([byteArray], { type: 'application/pdf' });
              window.navigator.msSaveOrOpenBlob(file, res.fileName);
            }

          }
          else {
            var link = document.createElement('a');
            if (res.fileName.includes(".doc") || res.fileName.includes(".docx")) {
              link.href = "data:" + "application/msword" + ";base64," + res.fileContent;
            }
            else {
              link.href = "data:" + "application/pdf" + ";base64," + res.fileContent;
            }
            link.setAttribute('download', res.fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }


        },
          error => { 
            this.loading = false;
            console.log(error) });

    }
  }
  showAudit(){
    this.router.navigate(['/locality/tab/Audit']);
    }


}
