import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare function EncryptFieldData(data: any): any;
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private router: Router, private http: HttpClient) {}
  DataToEncrypt(inputData: any, isGet?: boolean) {
    try {
      if (isGet) {
        const dataToEncryptGet = EncryptFieldData(JSON.stringify(inputData));
        return dataToEncryptGet;
      } else {
        const dataToEncrypt = {
          InputString: EncryptFieldData(JSON.stringify(inputData)),
        };
        return dataToEncrypt;
      }
    } catch (error) {
      return '';
    }
  }
}
