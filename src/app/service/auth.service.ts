import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login} from '../models/login';
import { JwtDTO } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  public login(login: Login): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', login);
  }
  // public checkdt(){
  //   return this.httpClient.get(this.authURL + 'checkdaotao')
  // }
  // public checkhs(){
  //   return this.httpClient.get(this.authURL + 'checkhocsinh')
  // }
}
