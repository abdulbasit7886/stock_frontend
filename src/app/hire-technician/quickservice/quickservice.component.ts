import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


import {
  MatDialog,

} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-quickservice',
  templateUrl: './quickservice.component.html',
  styleUrls: ['./quickservice.component.css']
})



export class QuickserviceComponent implements OnInit {

  
  public data:any
  public term:any
  users: any;
  category: any;
  quantity: any;
  size: any;
  product_name: any;
  public Products: any = [];
  public searchTerm: any = '';
  public productData: any = [];
  public name: any;
  public contact: any;
  public products: any;
  public date: any;
  public searchProduct: any = '';
  public store: any;
  
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private router:Router,private docservice:AuthService,private cookieservice:CookieService,public dialog: MatDialog,
      ) { 
      this.data;
    }
  
    ngOnInit(): void {
      this.docservice.stockName().subscribe((res:any)=>{
        console.log(res);
        this.data = res.stock
      })
    }


    searchstock(data:any){
      this.docservice.stockData(data).subscribe((res:any)=>{
        console.log(res);
        this.data = res.stock
      })
    }
  
  
  
    onTableDataChange(event: any) {
      this.page = event;  }
    onTableSizeChange(event: any): void {
      this.tableSize = event.target.value;
      this.page = 1;
    }
  
  
  }
  
  
  