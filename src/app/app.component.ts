
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import axios from 'axios';
import { __values } from 'tslib';
import { PrayService } from './service/pray.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private praysService:PrayService){
    }

  playsound(){
    let audio = new Audio();
    audio.src ='https://cdn.islamic.network/quran/audio-surah/128/ar.ahmedalajmi/94.mp3';    // ar.saudalshuraim  ar.khaledalqahtani  ar.abdulazizazzahrani https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/114.mp3
    audio.load();
    audio.play();
  }
  ngmodelchange(value: any){
    let cityName = value.target.value ;
   this.getList(cityName)
  };

 citis = [
    {
      arabicName:"مكةالمكرمة",
      name:"Makkah al Mukarramah"
  },
  {
    arabicName:" الرياض",
    name:"Riyadh"
}, {
  arabicName:" ابها",
  name:"Asīr"
}, 
{
  arabicName:" جدة",
  name:"jeddah"
},
{
  arabicName:" الشرقية",
  name:"Ash Sharqīyah"
},
]
pry:any
prys:any

getList(name:string){

    this.praysService.getPray(name)
    .subscribe((res) => {  
       this.prys = res
       this.pry = this.prys.data

        // console.log(this.pry);
    })
} 

  ngOnInit(): void {
    
    this.getList("Makkah al Mukarramah")
    this.playsound();
  }
    
}



















