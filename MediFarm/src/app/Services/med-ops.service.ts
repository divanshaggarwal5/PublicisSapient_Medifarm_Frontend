import { Injectable } from '@angular/core';
import { AppConfig } from '../Config/AppConfig';
import { Observable } from 'rxjs';
import { Medicine } from '../shared/Medicine';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class MedOpsService {

  //todo: Error handling & logging
  // todo: routing
  // Observe : response
  constructor(private _http:HttpClient          
    ) 
  { 

  }
  baseUrl = `${AppConfig.BaseAPIUrl}/${AppConfig.BaseAPIPostfix}`;

  getAllMed():Observable<Medicine[]>
  {
    return this._http.get<Medicine[]>(this.baseUrl)
            // todo: handle error for each request
  }
  getMed(Id:string):Observable<Medicine>
  {
    let getParams = new HttpParams().append("Id",Id);
    return this._http.get<Medicine>(this.baseUrl
    ,{params:getParams}
    )
  }
  updateMed(Id:string,Med:Medicine):Observable<any>
  {
    let getParams = new HttpParams().append("Id",Id);
    return this._http.put<Medicine>(this.baseUrl,Med);
  }
  addMed(medcine:Medicine):Observable<any>
  {
    return this._http.post<Medicine>(this.baseUrl,medcine);
  }

}
