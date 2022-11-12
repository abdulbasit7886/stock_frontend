import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { AuthService } from 'src/app/service/auth.service';


Router
@Component({
  selector: 'app-graphdata',
  templateUrl: './graphdata.component.html',
  styleUrls: ['./graphdata.component.css']
})
export class GraphdataComponent implements OnInit {
public chart:any;
public name:any;
public data:any;

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
    this.charts();

  }

  charts() {
    this.chart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: this.data.Volumn,
        datasets: [
          {
            label: this.name,
            data: this.data.Date,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },

      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              precision: 0,
            },
          },
        },
      },
    });
  }
}
