import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occured', error.error.message);
    } else {
      console.error(
        `backend returned code ${error.status} `,
        `body was: ${error.error} `      
      );
    }
  }
  get(): Observable<any> {
    return this.http.get(
      'http://localhost:3000/api/registrationData',
      httpOptions
    );
  }
  UpdateData(id: any): Observable<any> {
    return this.http.put(`http://localhost:3000/api/update/${id}`, httpOptions);
  }
   Decline(id:any): Observable<any> {
    return this.http.put(`http://localhost:3000/api/decline/${id}`, httpOptions);
   }
    InActive(id: any): Observable<any> {
    return this.http.put(
      `http://localhost:3000/api/inactive/${id}`,
      httpOptions
    );
  }

  getRole() {
    return localStorage.getItem('role');
  }
  sort(status:any):Observable<any>{
    console.log(status);
    return this.http.post('http://localhost:3000/api/sorting', status, httpOptions);
  }
  login(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/api/Slogin',data,httpOptions)
  }
  searchData(key:any): Observable<any> {
    return this.http.get('http://localhost:3000/api/search',{params:key});
  }
  sdata(): Observable<any> {
    return this.http.get('http://localhost:3000/api/Slogin',httpOptions);
  }
  newpassword(id:any,data:any):Observable<any>{
    return this.http.put(`http://localhost:3000/api/changepassword/${id}`,data, httpOptions)
  }

//-----------------------------------------------------------------------


stockName() {
  return this.http.get('http://localhost:3000/api/stockName');
}

stockData(key:any) {
  return this.http.get(`http://localhost:3000/api/getstockdata/${key}`,);
}

stockDatainfo(key:any) {
  return this.http.get(`http://localhost:3000/api/stockdataid/${key}`,);
}
stockDatagraph(key:any) {
  return this.http.get(`http://localhost:3000/api/stockdatagraph/${key}`,);
}


}