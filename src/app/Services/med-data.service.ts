import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedData } from '../Classes/med-data';


@Injectable({
  providedIn: 'root'
})
export class MedDataService {

  private baseURL = "http://localhost:8082/api/med";
  private baseURL1 = "http://localhost:8082/api/umed";

  constructor(private httpClient : HttpClient) { }

  getMedData() : Observable<MedData[]>{
    return this.httpClient.get<MedData[]>(`${this.baseURL}`);
  }


  createMedData(medData : MedData) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,medData);
  }

  deleteMedData(id : number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


  getMedDataByid(id:number) :Observable<MedData>{
    return this.httpClient.get<MedData>(`${this.baseURL}/p${id}`);
  }

  getDataByMedName(medname : string) : Observable<MedData[]>{
    return this.httpClient.get<MedData[]>(`${this.baseURL}/${medname}`);
  }

}
