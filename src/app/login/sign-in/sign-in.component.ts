import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, AbstractControl ,FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../../Services/api.service';


@Component({
 selector: 'app-sign-in',
 templateUrl: './sign-in.component.html',
 styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {



 loginForm: FormGroup = new FormGroup({
    
   email: new FormControl(''),
   password: new FormControl(''),
   
 })
 public isFormSubmited: boolean;



 constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService, private formBuilder: FormBuilder) {
   // this.email = '',
   //   this.password = '',
     this.isFormSubmited = false
     let x=window.localStorage.getItem('token')
     if(x){
      this.router.navigate(['dashboard']);
     }
 }

 ngOnInit(): void {
   this.loginForm = this.formBuilder.group({
     email :[
       '',
       [
         Validators.required,
         Validators.email,
         Validators.minLength(4),
         Validators.maxLength(30),
       ]
     ],

     password :[
       '',
       [
         Validators.required,
         Validators.minLength(8),
         Validators.maxLength(70),
         this.noSpaceAllowed
       ]
     ],

   })
  }


 navigateToForgot() {
   this.router.navigate(['login/forgotpassword'])
 }
 noSpaceAllowed(control: FormControl) {
   if (control.value != '' && control.value.indexOf(' ') != -1) {
     return { noSpaceAllowed: true };
   }
   return null;
 }


 loginUser() {
   let obj = {
     email: this.loginForm.value.email,
     password: this.loginForm.value.password,
   }


     this.apiService.loginUser(obj).subscribe(
       (data: any) => {

         window.localStorage.setItem('token', data.token);
         window.localStorage.setItem('id', data.id);

         this.router.navigateByUrl('/dashboard');



         // console.log(data.message)
         if (data.token) {
         }
       },
       (err: any) => {
         this.toastr.error('Please Enter Valid Credentials!');
         console.log(err);
       });
  // }
 }




 onSubmit() {
   this.isFormSubmited = true;
   // stop here if form is invalid
   if (this.loginForm.invalid) {
       return;
   }
   this.loginUser();
 }

 get errors(): {[key: string]: AbstractControl}{
   return this.loginForm.controls;
 }

}