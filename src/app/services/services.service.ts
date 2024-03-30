import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Services {

  private clienteUrl: string;

  constructor(private http: HttpClient) {
    this.clienteUrl = "http://localhost:8090/all-services";
  }
  getServices() {
    return this.http.get(this.clienteUrl, { });
  }
}