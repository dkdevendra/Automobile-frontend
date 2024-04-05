import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PartService {

  private clienteUrl: string;
  private getPartUrl  : string;

  constructor(private http: HttpClient) {
    this.clienteUrl = "http://localhost:8090/add-parts";
    this.getPartUrl = "http://localhost:8090/all_parts";
  }
    getPart() {
      return this.http.get(this.getPartUrl, { });

  }

  addPart(data: any): Observable<any> {
    console.log("Adding part ...");
    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allow-Origin', '*');

    // // Request methods you wish to allow
    // headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // // Request headers you wish to allow
    // headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    const headers = {
        'Content-Type':'application/json',
        'ngsw-bypass':'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }
    return this.http.post(this.clienteUrl, data, {headers});
  }

}