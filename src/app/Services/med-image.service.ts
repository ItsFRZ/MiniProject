import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedImage } from '../Classes/med-image';

@Injectable({
  providedIn: 'root'
})
export class MedImageService {

  constructor(private httpClient : HttpClient) { }
  private baseURL1 = "http://localhost:8082/api/umed";

  
  getMedImageData() : Observable<MedImage[]>{
    return this.httpClient.get<MedImage[]>(`${this.baseURL1}`);
  }


  getMedImageDataByid(id:number) :Observable<MedImage>{
    return this.httpClient.get<MedImage>(`${this.baseURL1}/p${id}`);
  }

}

