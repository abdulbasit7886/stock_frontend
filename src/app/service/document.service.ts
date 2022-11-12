import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DocumentService {
 
  constructor(private httpClient:HttpClient) {
}

Sales(): Observable<any>{
  return this.httpClient.get('http://localhost:3000/api/productdata');
}
addtask(obj: any) {
  return this.httpClient.post(`http://localhost:3000/api/createtask`, obj);
}
viewtechnician() {
  return this.httpClient.get(`http://localhost:3000/api/gettechnician`);
}
viewtechnicianquick() {
  return this.httpClient.get(`http://localhost:3000/api/gettechnicianquick`);
}
viewtechniciancate(value:any)
{
  return this.httpClient.get(`http://localhost:3000/api/gettechniciancategory`,{params:value});
}
hiretech(value:any){
  return this.httpClient.get(`http://localhost:3000/api/techorder`,{params:value});

}
getorder(){
  return this.httpClient.get(`http://localhost:3000/api/getorder`);

}
getproduct(){
  return this.httpClient.get(`http://localhost:3000/api/getproduct`);

}
addtocart(obj:any){
  return this.httpClient.post(`http://localhost:3000/api/cart`,obj);

}

cartdata(){
  return this.httpClient.get(`http://localhost:3000/api/cartdata`);

}


// hirebtn(value:any){
//   return this.httpClient.get(`http://localhost:3000/api/techonline`,{params:value});

// }

}


