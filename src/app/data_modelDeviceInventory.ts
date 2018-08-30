export class Device{
  
  databaseId: number;
  hostName: string;
  platform: string;
  dbVersion: string;
  hardware: string;
  updateLevel: string;
  addressLength: string;
  clockFrequency: string;
  memorySize: string;
  localDiskSpace: string;
  cpuCount: number;
  physicalCpuCount: number;
  logicalCpuCount: number;
  ipAddress: string;
  dbServer: string;
  serverName: string;
  archiveLogMode: string;
  sizeGb: string;
  //private byte[] purpose;
  osVersion: string;
  createdBy: string;
  //private Date createdTs;
  updatedBy: string;
  //private Date updatedTs;
  systemTag: string;
  newEntry: boolean;
  active: boolean;
  licenseStartDt: any;
  licenseEndDt: any;
  licenseRenewDt: any;
  vendorName: string;
  productName: string;
}