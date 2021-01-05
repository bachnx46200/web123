import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tintuc } from '../models/tintuc';

@Injectable({
  providedIn: 'root'
})
export class TintucService {

  constructor(private httpClient: HttpClient) { }

  URL = 'http://localhost:8080/fpt/final';
  public listhoatdong(): Observable<Tintuc> {
    return this.httpClient.get<Tintuc>(this.URL + `/tintuc/hoatdong`);
  }
  public listhoctap(): Observable<Tintuc> {
    return this.httpClient.get<Tintuc>(this.URL + `/tintuc/hoctap`);
  }
  public gettintuc(id:string): Observable<Tintuc> {
    return this.httpClient.get<Tintuc>(this.URL + `/tintuc/${id}`)
  }
  public deletetintuc(id:string): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `/tintuc/${id}`)
  }
  
  public addnew(tintuc:Tintuc) :Observable<any>{
    return this.httpClient.post<any>(this.URL + `/tintuc`,tintuc)
  }
  public cttintuc(id: string): Observable<Tintuc> {
    return this.httpClient.get<Tintuc>(this.URL + `tintuc/${id}`);
  }

  public timkiemhd(tieude:string):Observable<Tintuc>{
    let params = new HttpParams()
      .set('tieude', tieude);
    return this.httpClient.get<Tintuc>(this.URL + `/tieude-false`,{params: params});
  }
  public timkiemht(tieude:string):Observable<Tintuc>{
    let params = new HttpParams()
      .set('tieude', tieude);
    return this.httpClient.get<Tintuc>(this.URL + `/tieude-true`,{params: params});
  }
  public update(id:string,tintuc:Tintuc):Observable<any>{
    return this.httpClient.put<any>(this.URL + `/tintuc/${id}`, tintuc);
  }
}
