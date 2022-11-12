import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import {CustomValidator} from 'src/app/custom-validator';
// import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from'@angular/forms';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  registerForm:any;
  submitted = false;
  public id:any="62ece7636c936098df992374";
  constructor(private userdata:AuthService, private router:Router ,private formBuilder: FormBuilder) { }
  ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            currentPassword: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(10),CustomValidator.cannotContainSpace,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],   
            confirmPassword: ['', Validators.required]
        }, {
            validator: this.MustMatch('password', 'confirmPassword')
        });
    }


    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }
        this.chngpassword();
        this.registerForm.reset();
    }
    
     MustMatch(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
    
            if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
    
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            } else {
                matchingControl.setErrors(null);
            }
        }
}

chngpassword(){
    let data={
       email:this.registerForm.value.email,
       currentpassword:this.registerForm.value.currentPassword,
       password:this.registerForm.value.password,
    }
    console.log(data);
    this.userdata.newpassword(this.id,data).subscribe({
     next:(data:any)=>{
      alert("password update successfully");
        window.localStorage.clear();
        this.router.navigate(['supadminlogin'])
    },error:()=>{
      console.log("current password is invalid");
    }
   })
}

cancel(){
    // this.registerForm.reset();
    this.router.navigate(['supadmindashboard']);
  }
}


// Form = this.frombuilders.group({  
//   email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],  
//   currentpassword: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]], 
//   newpassword: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]], 
// });  

