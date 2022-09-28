
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PrayService } from './service/pray.service';
interface TimeOfPrays {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  searchTerm = '';
  countries: TimeOfPrays[] = [];
  term = '';
  pry:any;
  pryj:any;
  prys:any;
  prya:any;
  

  constructor(private praysService:PrayService){
 
  }
  
  ngOnInit(): void {
    this.getprytime();
    this.getprytimes();
    this.getprytimeinjaddah();
    this.getprytimeinabha();
   
    this.praysService.getPray()
    .subscribe((data:any) => {
      this.countries = data;
      console.log(this.countries)
    });
  }
     
  getprytimeinjaddah():void{
    this.praysService.getPrayj().subscribe(
      (res:any)=>{
            this.pryj =res;
            console.log(this.pryj)
      }
      )
    
  }


  getprytimes():void{
    this.praysService.getPray().subscribe(
      (res:any)=>{
            this.pry =res;
            console.log(this.pry)
      }
      )
    
  }

getprytime(){
  this.praysService.getPrays().subscribe(
    (res:any)=>{
    this.prys =res;
    console.log(this.prys)
    }
  )
}
getprytimeinabha(){
  this.praysService.getPraya().subscribe(
    (res:any)=>{
    this.prya =res;
    console.log(this.prya)
    }
  )
}
}



















