import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import {
  map,
  Observable,
  Subject,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private subjectName = new Subject<any>();
  private APIURL = environment.apiUrl;
  private passphrase=environment.Decryptionkey;
  private decrypted:any;

  constructor(private httpClient: HttpClient,private cookieService:CookieService) {

  }

  loginUser(data: object) {
    return this.httpClient.post(this.APIURL + '/login', data);
  }

  getToken() {
    return window.localStorage.getItem('token');
  }
  getlong(){
    return this.cookieService.get('long');
  }
  getlat(){
    return this.cookieService.get('lat');
  }
  storeId() {
    return this.cookieService.get('storeId');

  }

  getcategory(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/api/productcategory');
  
   }
   countryId() {
    return window.localStorage.getItem('countryId');
   }



  product(id: any) {
    return this.httpClient.get(`http://localhost:3000/api/product/${id}`);
  }
  viewproduct() {
    return this.httpClient.get(`http://localhost:3000/api/products`);
  }
  notifyproduct() {

    return this.httpClient.get(
      'http://localhost:3000/api/productnotifictaion',
    );
  }
  Status(id: any): Observable<any> {
    return this.httpClient.put(
      `http://localhost:3000/api/productstatus/${id}`,
      httpOptions
    );
  }
  markall() {

    return this.httpClient.get(
      'http://localhost:3000/api/markallnotification',
    );
  }

  del(id: any) {
    return this.httpClient.delete(
      `http://localhost:3000/api/deleteProduct/${id}`
    );
  }
  update(data: any, id: any) {
    return this.httpClient.put(
      `http://localhost:3000/api/updateProduct/${id}`,
      data
    );
  }

  addProduct(obj: any) {
    return this.httpClient.post(`http://localhost:3000/api/addproduct`, obj);
  }
  addProductimg(obj: any) {
    return this.httpClient.post(`http://localhost:3000/api/addproductimg`, obj);
  }
  delProductimg(obj: any) {
    return this.httpClient.post(`http://localhost:3000/api/delproductimg`, obj);
  }

  updateProduct(obj: any, id: any) {
    return this.httpClient.put(
      `http://localhost:3000/api/updateProduct/${id}`,
      obj
    );
  }

  productPagination() {
    return this.httpClient.get('http://localhost:3000/api/productpage', {
      params: { limit: 10 },
    });
  }
  addSupplier(data: any): Observable<any> {

    return this.httpClient.post(this.APIURL + '/addSupplier', data);

  }

  searchBarProduct(obj: any) {

    return this.httpClient.get(`http://localhost:3000/api/searchproduct/`, {
      params: obj,
    });
  }
  searchProduct(obj: any): Observable<any> {

    return this.httpClient.get(`http://localhost:3000/api/productcheck?q=${obj}`).pipe(map((d:any)=>{
      return d;
    }))
  }

  searchProductWithBarcode(key: any): Observable<any> {

    return this.httpClient
      .get(`http://localhost:3000/api/getOneProduct`, { params: key })
      .pipe(map((d: any) => d.searchProduct));
  }
  createStore(obj: any) {
    return this.httpClient.post(`http://localhost:3000/api/addStore`, obj);
  }

  getSingleStore(data: any) {
    return this.httpClient.get(this.APIURL + `/getStore/${data}`);
  }

  showSuppliers() {


    return this.httpClient.get(this.APIURL + `/supplierinfo`);
  }

  showCountries(): Observable<any> {
    return this.httpClient.get<any>(this.APIURL + `/supplierinfo`, {});

  }


  getStore() {
    return this.httpClient.get(`http://localhost:3000/api/getStore`);
  }
  deletedStore(data: any) {
    return this.httpClient.delete(this.APIURL + `/getStore/${data}`);
  }

  get dataOfSuppliers() {
    return this.subjectName;
  }

  addEmployee(obj: object) {
    return this.httpClient.post('http://localhost:3000/api/addEmployee', obj);
  }

  supplierPagination(limit: any) {
    return this.httpClient.get(this.APIURL + `/supplierpage`, {
      params: { limit: 10 },
    });
  }

  searchBarSupplier(key: any) {
    return this.httpClient.get(this.APIURL + `/searchsupplier`, {
      params: key,
    });
  }

  deleteSupplier(id: any) {
    return this.httpClient.delete(this.APIURL + `/deleteSupplier/${id}`);
  }

  sortSupplier() {
    return this.httpClient.get(this.APIURL + `/sortsupplier`);
  }

  updateSupplier(data: any, id: any) {
    return this.httpClient.put(this.APIURL + `/updatesupplier/${id}`, data);
  }

  employee() {

    return this.httpClient.get(`http://localhost:3000/api/viewEmployee`);
  }

  updateEmployee(data: any, id: any) {
    return this.httpClient.put(
      `http://localhost:3000/api/updateEmployee/${id}`,
      data
    );
  }

  Employee(Id: any) {
    return this.httpClient.get(`http://localhost:3000/api/viewEmployee/${Id}`);
  }
  employeePagination() {
    return this.httpClient.get('http://localhost:3000/api/employeepagination', {
      params: { limit: 10 },
    });
  }

  searchBarEmployee(key: any) {
    return this.httpClient.get(`http://localhost:3000/api/searchemployee`, {
      params: key,
    });
  }
  delEmployee(id: any) {
    return this.httpClient.delete(
      `http://localhost:3000/api/deleteEmployee/${id}`
    );
  }
  addPurchase(data: object) {
    return this.httpClient.post('http://localhost:3000/api/addpurchase', data);
  }

  deletePurchase(id: any) {
    return this.httpClient.delete(
      `http://localhost:3000/api/deletepurchase/${id}`
    );
  }

  updatePurchase(data: object, id: any) {
    return this.httpClient.put(
      `http://localhost:3000/api/updatepurchase/${id}`,
      data
    );
  }
  showPurchase() {

    return this.httpClient.get(`http://localhost:3000/api/showpurchase`);
  }

  getSingleProductForPurchase(barcode_id: any) {

    return this.httpClient.get(
      `http://localhost:3000/api/getSingleProduct/${barcode_id}`,

    );
  }
  updateQuantity(data: any) {
    return this.httpClient.put(
      `http://localhost:3000/api/updateQuantity`,
      data
    );
  }

  addSales(data: any) {
    return this.httpClient.post(`http://localhost:3000/api/addSale`, data);
  }
  controlAccess(data: any) {
    return this.httpClient.post(`http://localhost:3000/api/addRolePermission`, data);
  }

  getRoles() {
    return this.httpClient.get(`http://localhost:3000/api/getRoles`);
  }
}
