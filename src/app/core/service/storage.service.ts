import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private secretKey = 'my-secret-key';

  constructor() {}

  // Guardar datos en sessionStorage con encriptación
  setEncryptedItem(key: string, value: any): void {
    const encryptedValue = CryptoJS.AES.encrypt(JSON.stringify(value), this.secretKey).toString();
    sessionStorage.setItem(key, encryptedValue);
  }

  // Obtener datos desencriptados de sessionStorage
  getDecryptedItem(key: string): any {
    const encryptedValue = sessionStorage.getItem(key);
    if (encryptedValue) {
      const bytes = CryptoJS.AES.decrypt(encryptedValue, this.secretKey);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return null;
  }

  // Eliminar un dato específico de sessionStorage
  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  // Limpiar todos los datos de sessionStorage
  clear(): void {
    sessionStorage.clear();
  }
}
