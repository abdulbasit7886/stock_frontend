import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../Services/api.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardGuard implements CanActivate {
  constructor(private service: ApiService, private route: Router) {}
  canActivate(): boolean {
    let token = localStorage.getItem('role');
    console.log(token);
    if (token) {
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }
}
