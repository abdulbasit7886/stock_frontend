import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NullService } from 'src/app/Services/null.service';
ToastrService

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public email:string;

  constructor(private router:Router , private nullService: NullService, private toastr : ToastrService) {
    this.email='';

   }

  ngOnInit(): void {
  }

  sendLinkToGmail(){
    let obj ={
      email: this.email,
    };
    this.nullService.emailLink(obj).subscribe((res:any)=>{
      console.log(res.user._id);
      window.localStorage.setItem('id',res.user._id);
      this.toastr.success("Email hase been sent!");
    //  alert("Please check your email");
    }, (err:any)=>{
      console.log(err);
      this.toastr.error("Something went wrong!")
    })
  }

}
