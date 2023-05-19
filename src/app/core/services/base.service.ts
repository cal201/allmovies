import {inject, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  apiUrl = environment.apiUrl;
  http: HttpClient = inject(HttpClient);

  get<T>(url: string, params= {} ): Observable<T> {
    return this.http.get<T>(this.apiUrl + url, {  params: params });
  }
  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(this.apiUrl + url, body);
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(this.apiUrl + url, body);
  }
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(this.apiUrl + url);
  }


}
