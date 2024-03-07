import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setItem(key: string, data: any): void {
    if (typeof window !== 'undefined') {
      try {
        const serializedData = JSON.stringify(data);
        console.log('setItem: ', serializedData);
        localStorage.setItem(key, serializedData);
      } catch (error) {
        console.error(`Error storing data for key ${key}: ${error}`);
      }
    }
  }

  getItem(key: string): any | null {
    if (typeof window !== 'undefined') {
      const serializedData = localStorage.getItem(key);
      if (serializedData) {
        try {
          console.log('getItem: ', serializedData);
          return JSON.parse(serializedData);
        } catch (error) {
          console.error(`Error retrieving data for key ${key}: ${error}`);
        }
      }
      return null;
    }
  }

  removeItem(key: string): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }

  removeAll(): void {
    if (typeof window !== 'undefined') {
      localStorage.clear();
    }
  }
}
