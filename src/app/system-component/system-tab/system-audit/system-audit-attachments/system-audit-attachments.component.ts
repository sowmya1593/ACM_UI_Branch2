import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { File } from 'babel-types';
import { APP_CONFIG } from '../../../../app.config';
import { UtilService } from '../../../../util.service';
import { ApiserviceService } from '../../../../apiservice.service';
import { AppAudit, AppAuditFileDTO } from '../../../../data.model.auditDTO';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import { Http, HttpModule, Headers, RequestOptions, ResponseContentType } from '@angular/http';
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
  templateUrl: './system-audit-attachments.component.html',
  styleUrls: ['./system-audit-attachments.component.css']
})
export class SystemAuditAttachmentsComponent implements OnInit {
  @ViewChild('fileInput') inputEl: ElementRef;
  appAudit: AppAudit;
  public appAuditDTOs: any;
  public editData: any;
  public showForm: boolean = true;
  appAuditFileDTO: AppAuditFileDTO;
  public files: any;
  constructor(private _apiservice: ApiserviceService,
    private utilService: UtilService, private http: Http) {
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

    this._apiservice.viewApplication(UtilService.systemName)
      .subscribe((data: any) => {
        this.appAudit.applicationID = data.applicationViewDTO.applicationId;
        this.appAuditDTOs = data.applicationViewDTO.appAuditDTOs;
        this.showOnPageLoad();
      }, error => console.log(error));
  }

  showOnPageLoad() {
    if (UtilService.appAuditId === '') {
      console.log('Not edit mode');
    }
    else {
      this.editData = this.appAuditDTOs.filter(item => item.appAuditId === UtilService.appAuditId);

      for (let i = 0; i < this.editData.length; i++) {
        this.appAudit = this.editData[i];
      }
      this.files = this.appAudit.appAuditFileDTOs;

    }

  }

  saveAttachments() {
    //  let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    //  var formData = new FormData();

    //   //formData.append('',inputEl.files.item(0));
    //   this.appAudit.appAuditFileDTOs.file
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let url_update = APP_CONFIG.updateAppAuditInfo;
    let data = JSON.stringify(this.appAudit);
    this.http.post(url_update, data, options)
      .subscribe((data: any) => {
        console.log(data);
      }, error => {
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
    console.log(this.appAudit);


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
      this.http.get(APP_CONFIG.getAppAuditFile + '?' + 'fileId' + '=' + id)
        .map((res: any) => {
          return res.json();
        })
        .subscribe((res: any) => {
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
          error => { console.log(error) });

    }
  }


}
