import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  
    if (localStorage.getItem('accesstoken')!=null) {  
        return true;  
    }  
    this.router.navigate(['/supadminlogin']);  
    return false;  
}  
} 
  
