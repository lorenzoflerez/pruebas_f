import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  user: User | null = null;

  mobileQuery: MediaQueryList;

  menuNav = [
    { name: 'Home', route: 'home', icon: 'home' },
    { name: 'Categorías', route: 'category', icon: 'category' },
    { name: 'Productos', route: 'product', icon: 'production_quantity_limits' }
  ];

  constructor(
    media: MediaMatcher,
    private userService: UserService,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit(): void {
    this.userService.user$.subscribe(user => {
      this.user = user;
    });
  }

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((error: any) => console.log(error));
  }

  shouldRun = true;
}
