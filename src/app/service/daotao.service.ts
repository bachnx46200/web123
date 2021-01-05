import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Giaovien } from '../models/giaovien';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class DaotaoService {

  productoURL = 'http://localhost:8080/fpt/final/';

  constructor(private httpClient: HttpClient,
    private tokenService: TokenService,
    ) { }

  

  public detail(manguoidung: string): Observable<Giaovien> {
    return this.httpClient.get<Giaovien>(this.productoURL + `giaovien/${manguoidung}`);
  }

  
}
