import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  AbstractControl,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { NullService } from '../../Services/null.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  // spacePattern="^[a-zA-Z]+(\s+[a-zA-Z]+)*$"
  myData: any;
  signupForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    phoneNumber: new FormControl(''),
    country: new FormControl(''),
    status: new FormControl(''),
    
  })

   public isFormSubmited: boolean;

  constructor(
    private router: Router,
    private nullService: NullService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.isFormSubmited = false;
  }

  ngOnInit(): void {
    this.nullService.getCountries().subscribe((res:any)=>{
      console.log(res);
      this.myData = res.country;

    })

      
 
    this.signupForm = this.formBuilder.group({
      firstName :[
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
        ]
      ],

      lastName :[
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
        ]
      ],

      email :[
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._]+@(gmail|yahoo|outlook|hotmail)\.[a-z]{2,}$'),
          Validators.minLength(4),
          Validators.maxLength(30),
        ]
      ],

      password :[
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(25),
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
          this.noSpaceAllowed
        ]
      ],

      confirmPassword :[
        '',
        [
          Validators.required
        ]
      ],
     
      phoneNumber :[
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.pattern('[0-9]+'),
          this.noSpaceAllowed
        ]
      ],


      country :[
        '',
        [
          Validators.required
        ]
      ],


      status :[
        'pending',
        [
          Validators.required
        ]
      ]
    },{
      validator: this.MustMatch('password', 'confirmPassword'),

    })
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
    };
  }

  noSpecialCharacterError(control: FormControl) {
    const nameRegexp: RegExp = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;
    if (control.value && nameRegexp.test(control.value)) {
      return { noSpecialCharacterError: true };
    } else {
      return;
    }
  }

  noSpaceAllowed(control: FormControl) {
    if (control.value != '' && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true };
    }
    return null;
  }

  // noSpaceAtStartAndEndError(control: FormControl) {
  //   const nameRegexp: RegExp = /[^[a-zA-Z]+(\s+[a-zA-Z]+)*$]/;
  //   if (control.value && nameRegexp.test(control.value)) {
  //     return { noSpecialCharacterError: true };
  //   } else {
  //     return;
  //   }
  // }

  clearInput() {
    // this.signupForm.reset();
    this.signupForm.value.firstName == '';
    this.signupForm.value.lastName == '';
    this.signupForm.value.email == '';
    this.signupForm.value.password == '';
    this.signupForm.value.confirmPassword == '';
    this.signupForm.value.phoneNumber == '';
  }

  registerAdmin() {
    let obj = {
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      confirmPassword: this.signupForm.value.confirmPassword,
      phoneNumber: this.signupForm.value.phoneNumber,
      country: this.signupForm.value.country,
      status: this.signupForm.value.status,
    };
    
    console.log(obj);

      
      this.nullService.users(obj).subscribe(
        (res: any) => {
          if (this.signupForm.value.password !== this.signupForm.value.confirmPassword) {
            this.toastr.error("Password Doesn't Match");
            this.signupForm.value.confirmPassword = '';
          }
          console.log(res);
          this.toastr.success('Successfully Registered!');
          this.clearInput();
          this.router.navigate(['/thankyou']);
        },
        (err: any) => {
          this.toastr.error('Something went wrong!');
          console.log(err);
        }
      );
      window.scrollTo(0,0)
 //   }
  }

  onSubmit() {
    this.isFormSubmited = true;
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }
    this.registerAdmin();
  }
  get errors(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }
}
