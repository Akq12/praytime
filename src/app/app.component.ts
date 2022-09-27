import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pry:any;
  prys:any;
  constructor( private HttpClient:HttpClient){
  this.pry={};
  this.prys={};
  }
  
  ngOnInit(): void {
    this.getprytime();
    this.getprytimes()
  }
     

  getprytimes(){
    this.HttpClient.get('http://api.aladhan.com/v1/timingsByCity?city=Makkah&country=Saudi%20Arabia%20&method=8').subscribe(
      (res:any)=>{
      this.prys =res;
      }
    )
  }

getprytime(){
  this.HttpClient.get('http://api.aladhan.com/v1/timingsByCity?city=Riyadh&country=Saudi%20Arabia%20&method=8').subscribe(
    (res:any)=>{
    this.pry =res;
    }
  )
}


















}
