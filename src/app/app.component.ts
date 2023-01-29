import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tokenFromUI: string = '3242342432424565';
  encrypted: any = '';
  decrypted: string;

  request: string;
  responce: string;
  constructor() {
    this.encryptUsingAES256();
  }
  encryptUsingAES256() {
    let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let encrypted = CryptoJS.AES.encrypt(JSON.stringify(this.request), _key, {
      keySize: 128 / 8,
      iv: _iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    this.encrypted = encrypted.toString();
  }
  decryptUsingAES256() {
    let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);

    this.decrypted = CryptoJS.AES.decrypt(this.encrypted, _key, {
      keySize: 128 / 8,
      iv: _iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
  }
}
