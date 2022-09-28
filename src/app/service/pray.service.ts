import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeOfPray } from '../interface/time';


@Injectable({
  providedIn: 'root'
})


export class PrayService {

  constructor(private http: HttpClient) { }


getPray():Observable<TimeOfPray>{
  return this.http.get<TimeOfPray>('https://api.aladhan.com/v1/timingsByAddress/28-09-2022?address=Riyadh,SaudiArabia&method=8');
}

getPrays():Observable<TimeOfPray>{
  return this.http.get<TimeOfPray>('https://api.aladhan.com/v1/timingsByAddress/28-09-2022?address=Makkah,SaudiArabia&method=8');
}

getPrayj():Observable<TimeOfPray>{
  return this.http.get<TimeOfPray>('https://api.aladhan.com/v1/timingsByAddress/28-09-2022?address=Jeddah,SaudiArabia&method=8');
}
getPraya():Observable<TimeOfPray>{
  return this.http.get<TimeOfPray>('https://api.aladhan.com/v1/timingsByAddress/28-09-2022?address=Abha,SaudiArabia&method=8');
}

}
