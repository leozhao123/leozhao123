import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http :HttpClient) { }
  imgupload(fd: any){
    return this.http.post<any>('http://localhost:3000/uploads',fd)
  }
}
