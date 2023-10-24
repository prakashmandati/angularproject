import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, interval, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  private data:number=0;

  mobiles=['redmi','realmi','samsong'];
 url='https://ipinfo.io/161.185.160.93/geo';
 url1 ='https://reqres.in/api/unknown';
 url2='https://reqres.in/api/users?delay=3';
 urlpo='https://reqres.in/api/users';
 urlg='https://dog.ceo/api/breeds/list/all';
  constructor( private http:HttpClient) { }
  urlresponse(){
    return this.http.get(this.url);
  }
getexamapi(){
  return this.http.get(this.url1)
}
getexamapiimage(){
  return this.http.get(this.url2)
}
sendata(obj:any){
  return this.http.post(this.urlpo,obj)
}
getdata(){
  return this.http.get(this.urlg)
}
getobsedata():Observable<number>{
  return interval(1000).pipe(map(()=>this.data++
    
  ))
}


}
