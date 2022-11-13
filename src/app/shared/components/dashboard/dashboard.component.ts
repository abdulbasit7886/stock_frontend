import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   public data:any;
   public term:any

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
    this.authService.stockName().subscribe((res:any)=>{
      console.log(res)
      this.data = res.stock
    })
  }
}
