import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeOfPray } from '../interface/time';


@Injectable({
  providedIn: 'root'
})


export class PrayService {

  constructor(private http: HttpClient) { }
getPray( citys:any):Observable<TimeOfPray>{
    const url = 'https://api.aladhan.com/v1/timingsByCity?country=sa';
  let params = {
    city:citys   ///"jeddah" 
  };
  let queryParams = new HttpParams({ fromObject: params });
  return this.http.get<TimeOfPray>(url,{params:queryParams});
  
}



}
