import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stocktitle',
  templateUrl: './stocktitle.component.html',
  styleUrls: ['./stocktitle.component.css']
})
export class StocktitleComponent implements OnInit {

  public data:any;
  public name:any


  constructor(private activatedRoute:ActivatedRoute ,private router:Router ,public authService:AuthService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.name = id;
    this.authService.stockDatainfo(id).subscribe((data: any) => {
      console.log(data);
      this.data=data.stock;

    });    
  }
}
