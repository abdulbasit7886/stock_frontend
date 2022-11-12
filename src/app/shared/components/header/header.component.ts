import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: {
    '(window:click)': 'onClick()',
  },
})
export class HeaderComponent implements OnInit {
  public count: boolean = false;
  public count1: boolean = false;
  public dropdown: boolean = false;
  public profileToggling: boolean = false;

  constructor(private router: Router,private cookieService:CookieService) {}

  ngOnInit(): void {}

  toggleNotification($event: { stopPropagation: () => void }) {
    console.log('Notification toggle');
    $event.stopPropagation();
    this.count = !this.count;
    if (this.count == true) {
      this.dropdown = false;
    }
  }

  toggleProfile($event: { stopPropagation: () => void }) {
    console.log('Profile toggle');
    $event.stopPropagation();
    this.dropdown = !this.dropdown;
    if (this.dropdown == true) {
      this.count = false;
    }
  }

  onClick() {
    this.count = false;
    this.dropdown = false;
  }

  logOut() {
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }

  backToStores() {
    this.router.navigate(['/stores']);
  }
}
