import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-supadmindashboard',
  templateUrl: './supadmindashboard.component.html',
  styleUrls: ['./supadmindashboard.component.css']
})
export class SupadmindashboardComponent implements OnInit {
  public POSTS: any;
  public page:number = 1;
  public count:number = 0;
  public tableSize:number = 5;
  public searchTerm: any = '';
  public users: any=[];
  public Search:any='';
  public user:any;
  
  constructor(private userdata:AuthService, private router:Router,private cookieService:CookieService){ 
 
  }

  getData(){
  
    this.userdata.get().subscribe(
      (res:any) => {
        // this.POSTS = pages;
        this.users=res.Data;
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getData();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getData();
  }

  ngOnInit(): void {
    this.getData();
    this.superad();
    }

 active(id:any){
    this.userdata.UpdateData(id).subscribe({
    next:(res:any)=>{
      alert("you are sure ! User request Accept");
      this.getData();
    },error:()=>{
      alert("data not update")
    }
  })
 }

decline(id:any){
  this.userdata.Decline(id).subscribe({
  next:(res:any)=>{
    alert("you are sure ! User request Decline");
    this.getData();
  },error:()=>{
    alert("data not update")
  }
})
}

superad(){
  this.userdata.sdata().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.user=res.body;
    },error:()=>{
      alert("data not update")
    }
  })
}

// record(){
//    if (localStorage["accesstoken"]==undefined || localStorage["accesstoken"]==0 
//   || localStorage["accesstoken"]==null || localStorage["accesstoken"]==false || localStorage["accesstoken"]==''){
//      this.router.navigate(['superadminlogin']);
//   }else{
//     this.userdata.sortRecord().subscribe({
//     next:(res:any)=>{
//       console.log(res.body)
//       this.users=res.body;
//     },
//      error:()=>{
//       alert("data not get");
//      }
//   }) 
// }
// }


sortVal(key:any){
  console.log(key);
}

sorting(status:any){
  console.log(status);
  let data ={
    status:status
  }
  this.userdata.sort(data).subscribe({
  next:(res:any)=>{
    console.log(res);
    this.users=res.body;
   
  },error:()=>{
    console.log("status not found ")
  }
})
}
 logout(){
  // console.log(window.localStorage.getItem("token"));
  window.localStorage.clear();
  this.cookieService.deleteAll();

 // alert("logout successfull");
  this.router.navigate(['supadminlogin']);
}

pass(){
  this.router.navigate(['changepassword']);
}

search(){
  var data={
    search:this.Search
  }
  this.userdata.searchData(data).subscribe({
  next:(res:any)=>{
    console.log("search data is found",res);
    this.users=res.body;
    this.getData();
  },error:()=>{
    console.log("data not found")
  }
})
}
}







