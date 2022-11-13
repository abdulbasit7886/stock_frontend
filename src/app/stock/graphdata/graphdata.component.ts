import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
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
public xaxis:any;
public chartdata:any=[];
public date:any=[];
public d:any=[];
public x:any=[];

constructor(private activatedRoute:ActivatedRoute ,private router:Router ,public authService:AuthService) { 
  this.router.routeReuseStrategy.shouldReuseRoute = function(){
    return false;
 }
//  this.charts();

}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.name = id;
    this.authService.stockDatagraph(id).subscribe((data: any) => {
      let a=data.x;
      let b=data.y;
      for(let i=0;i<a.length;i++){
        // this.chartdata.push(data.total[i][1]);
        this.chartdata.push(a[i]);
        this.date.push(b[i]);

  }

    });    
//     this.service.Sales().subscribe((data:any)=>{
//       console.log(data);
//       let a=data.total;
//       let b=data.date;
//       for(let i=0;i<a.length;i++){
//         // this.chartdata.push(data.total[i][1]);
//         this.chartdata.push(a[i]);
//   }
// })
this.createChart()

  }
  createChart(){

    // const labels = Utils.months({count: 12});
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.date, 
	       datasets: [
          {
            label: "stock graph",
            data: this.chartdata,
            backgroundColor: 'darkblue'
          },
          // {
          //   label: "Profit",
          //   data: this.chartdata,
          //   backgroundColor: 'limegreen'
          // }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  // charts() {
  //   this.chart = new Chart('myChart', {
  //     type: 'bar',
  //     data: {
  //       labels: this.data,
  //       datasets: [
  //         {
  //           label: this.name,
  //           data: this.data,
  //           backgroundColor: [
  //             'rgba(255, 99, 132, 0.2)',
  //             'rgba(54, 162, 235, 0.2)',
  //             'rgba(255, 206, 86, 0.2)',
  //             'rgba(75, 192, 192, 0.2)',
  //             'rgba(153, 102, 255, 0.2)',
  //             'rgba(255, 159, 64, 0.2)',
  //           ],
  //           borderColor: [
  //             'rgba(255, 99, 132, 1)',
  //             'rgba(54, 162, 235, 1)',
  //             'rgba(255, 206, 86, 1)',
  //             'rgba(75, 192, 192, 1)',
  //             'rgba(153, 102, 255, 1)',
  //             'rgba(255, 159, 64, 1)',
  //           ],
  //           borderWidth: 1,
  //         },
  //       ],
  //     },

  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //           ticks: {
  //             precision: 0,
  //           },
  //         },
  //       },
  //     },
  //   });
  // }
}
