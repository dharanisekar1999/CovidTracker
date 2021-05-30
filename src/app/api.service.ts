import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private httpclient:HttpClient) { }
  
  public getCountries():Observable<any>
  {
    // const url='https://api.covid19api.com/countries';
    const url='https://coronavirus-19-api.herokuapp.com/countries/';
    return this.httpclient.get<any>(url);
  }
  public getCoronaAllData(country:any):Observable<any>
  {
    // const url='https://api.covid19api.com/dayone/country/'+country;
    const url='https://coronavirus-19-api.herokuapp.com/countries/'+country;
    return this.httpclient.get<any>(url);
  }
  public getTotal():Observable<any>
  {
    // const url='https://api.covid19api.com/world/total';
    const url='https://coronavirus-19-api.herokuapp.com/countries/world';
    return this.httpclient.get<any>(url);
  }
 
}
