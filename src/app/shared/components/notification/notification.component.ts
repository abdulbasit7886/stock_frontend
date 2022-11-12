import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { io } from "socket.io-client";
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  public count:boolean=false;
  public count1:boolean=false;
  
  public notify: any = [];
  public number: any;
  public test: any;
  public userId: any;
  public source: any;
  public userrole: string;
  public daata: any;
  public socket: any;

  constructor(private apiService: ApiService,  private router: Router) {
    this.socket = io('http://localhost:3001');
    this.socket.on('getnotification', (data: any) => {
      console.log('====', data)
      this.daata = data;
      this.notify.push(this.daata)


    })
    this.notify = '';
    this.count;
    this.userrole = '';
    this.apiService.notifyproduct().subscribe((res: any) => {
      this.notify = res.data;


    }, (err: any) => {
      console.log(err);
    })
  }

  ngOnInit(): void {

  }


  status(id: any) {
    this.apiService.Status(id).subscribe((res: any) => {
      this.ngOnInit();

    })
  }
  allnotification() {
    this.test='';
    this.apiService.markall().subscribe((res: any) => {
      // console.log(res);
    })
  }

}
