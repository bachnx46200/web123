import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bangdiem } from '../models/bangdiem';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { BangdiemDto } from '../models/DTO/bangdiem-dto';
@Injectable({
  providedIn: 'root'
})
export class BangdiemService {

  constructor(private httpClient: HttpClient,
    private tokenService: TokenService,) { }

    URL = 'http://localhost:8080/fpt/final';
    public listdiemtheohocky(manguoidung: string, hocky: string): Observable<Bangdiem> {
      let params = new HttpParams()
      .set('id', manguoidung)
      .set('hocki', hocky);
      return this.httpClient.get<Bangdiem>(this.URL + `/getByStudentId`, {params: params});
    }

    public listdiem(manguoidung: string, tenlop: string): Observable<BangdiemDto> {
      let params = new HttpParams()
      .set('mahocsinh', manguoidung)
      .set('tenlop', tenlop);
      return this.httpClient.get<BangdiemDto>(this.URL + `/getPoint`, {params: params});
    }

  
}
