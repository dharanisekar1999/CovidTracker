import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent implements OnInit{
  title='';
  countries:any;
  country:any;
  activeMax:any=0;
  todayMax:any=0;
  todayDeathMax:any=0;
  activeCountry:any;
  todayCaseCountry:any;
  todayDeathCountry:any
  constructor(private apiservice:ApiService){}
  ngOnInit() {
   
    this.apiservice.getCountries().subscribe((data)=>
    {
      console.log(data);
      this.countries=data.slice(1,data.length);
      console.log(this.countries);
      
      for (let i = 0; i < 222; i++) {
        if(this.countries[i].active>this.activeMax)
        {
          this.activeMax=this.countries[i].active;
          this.activeCountry=this.countries[i].country;
        }
        if(this.countries[i].todayCases>this.todayMax)
        {
          this.todayMax=this.countries[i].todayCases;
          this.todayCaseCountry=this.countries[i].country
        }
        if(this.countries[i].todayDeaths>this.todayDeathMax)
        {
          this.todayDeathMax=this.countries[i].todayDeaths;
          this.todayDeathCountry=this.countries[i].country
        }
      }
      console.log(this.activeMax,this.todayMax);
      
      
    }
    )
  }
  country_name:any;
  cases:any;
  todayCases:any;
  todayDeaths:any;
  recovered:any;
  active:any;
  critical:any;
  casesPerOneMillion:any;
  deathsPerOneMillion:any;
  totalTests:any;
  testsPerOneMillion:any;
  deaths:any;
  getData()
  {
     
    this.apiservice.getCoronaAllData(this.country).subscribe((data)=>
    {
      console.log(data);   
      this.country_name=data.country;
      this.cases=data.cases;
      this.todayCases=data.todayCases;
      this.todayDeaths=data.todayDeaths;
      this.recovered=data.recovered;
      this.active=data.active;
      this.critical=data.critical;
      this.casesPerOneMillion=data.casesPerOneMillion;
      this.deathsPerOneMillion=data.deathsPerOneMillion;
      this.totalTests=data.totalTests;
      this.testsPerOneMillion=data.testsPerOneMillion;
      this.deaths=data.deaths;
      
    }
    );
  }
  getCountry(country:any)
  {
    this.country=country;
    
  }
  W_cases:any;
  W_todayCases:any;
  W_todayDeaths:any;
  W_recovered:any;
  W_active:any;
  W_critical:any;
  W_deaths:any;
  getOverall()
  {
    this.apiservice.getTotal().subscribe((data)=>
      {
       
      this.W_cases=data.cases;
      this.W_todayCases=data.todayCases;
      this.W_todayDeaths=data.todayDeaths;
      this.W_recovered=data.recovered;
      this.W_active=data.active;
      this.W_critical=data.critical;
      this.W_deaths=data.deaths;
        
      });
  }
 
  todayDate :any= new Date();
getDate()
{
 
  const date = String(this.todayDate.getDate()).padStart(2, '0');
  const month = String(this.todayDate.getMonth() + 1).padStart(2, '0');
 var year = this.todayDate.getFullYear();
 this.todayDate = date + '/' + month + '/' +year;
 console.log(this.todayDate);
}

  ngAfterViewInit(){
    this.getOverall();
   
    
  }  
  ngAfterContentInit()
  {
    this.getDate();
  }
}