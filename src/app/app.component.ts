import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public show1: boolean=false;

  title = 'Hooptie';
  constructor(public router: Router){
   let x=window.localStorage.getItem('token')
   if(!x){
    this.router.navigate(['login']);
   }
   else if(x){
    this.router.navigate(['dashboard']);

   }
  }

  class(){
    let result='';
    if(this.router.url == '/login' || this.router.url == '/signup' || this.router.url == '/stores' || this.router.url == '/forgotpassword' || this.router.url == '/newpassword' || this.router.url == '/cashier' || this.router.url == '/supadminlogin' || this.router.url == '/supadmindashboard' || this.router.url == '/changepassword'){
      result = 'col-lg-12';
    }
    if(this.router.url != '/login' && this.router.url != '/signup' && this.router.url != '/stores' && this.router.url != '/forgotpassword' && this.router.url != '/newpassword' && this.router.url != '/supadminlogin' && this.router.url != '/supadmindash' && this.router.url != '/changepassword'){
      result = 'col-lg-12';
    }
    return result;
  }
}
