import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/Services/api.service';
import { NullService } from 'src/app/Services/null.service';

@Component({
  selector: 'app-createnewpassword',
  templateUrl: './createnewpassword.component.html',
  styleUrls: ['./createnewpassword.component.css']
})
export class CreatenewpasswordComponent implements OnInit {


  public newPassword:string;
  public confirmPassword:string;
  

  constructor(private router:Router , private nullService: NullService, private toastr : ToastrService, private apiService:ApiService) {

    this.newPassword='';
    this.confirmPassword = '';

   }

  ngOnInit(): void {
  }

  newPass(){
    let id = window.localStorage.getItem('id');
    // console.log('========',id);
    let obj ={
      password: this.newPassword,
      confirmPassword: this.confirmPassword
    };
    this.nullService.newPassword(obj,id).subscribe((res:any)=>{
      // console.log(res);
      this.toastr.success("Updated Successfully!");
      this.router.navigate(['/login']);
      // this.apiService.userRoute().subscribe((res:any)=>{

      // })
      window.localStorage.clear();
    },(err:any)=>{
      console.log(err);
      this.toastr.error("Something went wrong!");
    })
  }

}
