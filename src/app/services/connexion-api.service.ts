import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ConnexionApiService {
  constructor(private httpClient: HttpClient) {}

getOrders () : Observable<any> {
  return this.httpClient.get<any>( "https://127.0.0.1:8000/api/orders")
}



}

