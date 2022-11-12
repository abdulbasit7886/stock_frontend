import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CustomValidator} from 'src/app/custom-validator';


import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-superadminlogin',
  templateUrl: './superadminlogin.component.html',
  styleUrls: ['./superadminlogin.component.css']
})
export class SuperadminloginComponent implements OnInit {

  registerForm:any;
  submitted = false;

  constructor(private userdata:AuthService,private router:Router,private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,CustomValidator.cannotContainSpace]],
    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.registerForm.invalid) {
          return;
      }
      this.log();
  }
  
  log(){
      let data={
         email:this.registerForm.value.email,
         password:this.registerForm.value.password,
      }
      console.log(data);
      this.userdata.login(data).subscribe({
       next:(data:any)=>{
        // console.log("login successfully",data);
        this.toastr.success("Welcome Super Admin!");
        window.localStorage.setItem('token',data.token);
        this.router.navigate(['supadmindashboard']);
      },error:(err)=>{
        this.toastr.error("email and password are invalid");
      }
     })
  }
}


