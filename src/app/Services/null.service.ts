import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NullService {
  private APIURL = environment.apiUrl;

  // private subjectName = new Subject<any>();

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  registerAdmin(data: object) {
    return this.httpClient.post(this.APIURL + '/api/adminRegister', data);
  }

  // getSupplierUpdate(): Observable<any> {
  //   return this.subjectName.asObservable();
  // }
  emailLink(data: object) {
    return this.httpClient.post('http://localhost:3000/api/verifyEmail', data);
  }

  newPassword(data: any, id: any) {
    return this.httpClient.put(
      'http://localhost:3000/api/forgetPassword/' + id,
      data
    );
  }
  users(data: object) {
    return this.httpClient.post('http://localhost:3000/api/users', data);
  }

  addEmployee(data: object) {
    return this.httpClient.post('http://localhost:3000/api/addEmployee', data);
  }

  getCountries(){
    return this.httpClient.get('http://localhost:3000/api/getCountriesList');
  }

  getNewForm() {
    return this.formBuilder.group({
      product: [''],
    });
  }
}
