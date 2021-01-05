import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {
  isLogged = false;
  isLoginFail = false;
  constructor( private http:HttpClient) { }


  public generateToken(request){
    return this.http.post("http://localhost:9981/login",request,{responseType:'text'as'json'})
  }
  public daotao(token){
    let tokenStr='Token '+token
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get("http://localhost:9981/daotao/123",{headers,responseType:'text' as'json'})
  }
  public giaovien(token){
    let tokenStr='Token '+token
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get("http://localhost:9981/giaovien",{headers,responseType:'text' as'json'})
  }
 
 
  

}
