import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public show1: boolean = false;
  public show2: boolean = false;
  public show3: boolean = false;
  public show4: boolean = false;
  public show5: boolean = false;
  public show6: boolean = false;
  public show7: boolean = false;
  public show8: boolean = false;
  public arrow: boolean = false;
  public close: boolean = false;
  public decrypted: any;
  public data:any;
  public role:any;

  // public show1: boolean=false;
  // public show1: boolean=false;
  // public show1: boolean=false;
  constructor(public router: Router,private apiService:ApiService) {
    // this.dropDown =false
  }

  ngOnInit(): void {
    this.role=window.localStorage.getItem('role')

  }

  isHomeRoute() {

    this.router.url === '/';
  }

  toggleDropDown($event: { stopPropagation: () => void }) {
    console.log('Sidebar toggle');
    $event.stopPropagation();
    this.arrow = !this.arrow;
    if (this.arrow == true) {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
      this.show6 = false;
      this.show7 = false;
      this.show8 = false;

    }
  }

  toggleEmployee($event: { stopPropagation: () => void }) {
    console.log('Employee toggle');
    $event.stopPropagation();
    this.show1 = !this.show1;
    if (this.show1 == true) {
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
      this.show6 = false;
      this.show7 = false;
      this.show8 = false;
    }
  }

  toggleProducts($event: { stopPropagation: () => void }) {
    console.log('Products toggle');
    $event.stopPropagation();
    this.show2 = !this.show2;
    if (this.show2 == true) {
      this.show1 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
    }
  }

  toggleSupplier($event: { stopPropagation: () => void }) {
    console.log('Supplier toggle');
    $event.stopPropagation();
    this.show3 = !this.show3;
    if (this.show3 == true) {
      this.show1 = false;
      this.show2 = false;
      this.show4 = false;
      this.show5 = false;
      this.show6 = false;
      this.show7 = false;
      this.show8 = false;
    }
  }

  togglePurchase($event: { stopPropagation: () => void }) {
    console.log('Purchase toggle');
    $event.stopPropagation();
    this.show4 = !this.show4;
    if (this.show4 == true) {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show5 = false;
      this.show6 = false;
      this.show7 = false;
      this.show8 = false;
    }
  }

  toggleSale($event: { stopPropagation: () => void }) {
    console.log('Products toggle');
    $event.stopPropagation();
    this.show5 = !this.show5;
    if (this.show5 == true) {
      this.show1 = false;
      this.show2 = false;
      this.show4 = false;
      this.show3 = false;
      this.show6 = false;
      this.show7 = false;
      this.show8 = false;
    }
  }
  toggleSale1($event: { stopPropagation: () => void }) {
    console.log('Products toggle');
    $event.stopPropagation();
    this.show6 = !this.show6;
    if (this.show6 == true) {
      this.show1 = false;
      this.show2 = false;
      this.show4 = false;
      this.show3 = false;
      this.show5 = false;
      this.show7 = false;
      this.show8 = false;
    }
  }
  toggleSale2($event: { stopPropagation: () => void }) {
    console.log('Products toggle');
    $event.stopPropagation();
    this.show7 = !this.show7;
    if (this.show7 == true) {
      this.show1 = false;
      this.show2 = false;
      this.show4 = false;
      this.show3 = false;
      this.show6 = false;
      this.show5 = false;
      this.show8 = false;
    }
  }
  arrowClose() {
    if (this.arrow) {
      this.close === false;
    }
  }
}
