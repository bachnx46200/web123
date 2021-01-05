import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Namhoc } from '../models/namhoc';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class NamhocService {

  constructor(private httpClient: HttpClient,
    private tokenService: TokenService,) { }

    URL = 'http://localhost:8080/';
  public listnamhoc(manguoidung: string): Observable<Namhoc> {
    return this.httpClient.get<Namhoc>(this.URL + `monhoc/${manguoidung}`);
  }
 
}
