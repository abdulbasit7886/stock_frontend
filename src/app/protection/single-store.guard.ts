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
export class SingleStoreGuard implements CanActivate {
  constructor(private service: ApiService, private route: Router) {}
  canActivate(): boolean {
    let storeId = localStorage.getItem('storeId');
    console.log(storeId);
    if (storeId) {
      return true;
    } else {
      this.route.navigate(['/stores']);
      return false;
    }
  }
}
