import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Monhoc } from '../models/monhoc';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class MonhocService {

  constructor(private httpClient: HttpClient,
    private tokenService: TokenService,) { }

    URL = 'http://localhost:8080/';
  public listmonhoc(manguoidung: string): Observable<Monhoc> {
    return this.httpClient.get<Monhoc>(this.URL + `monhoc/${manguoidung}`);
  }

  URL2 = 'http://localhost:8080/';
  public listmonhoc2(): Observable<Monhoc> {
    return this.httpClient.get<Monhoc>(this.URL2 + `monhoc`);
  }
}
