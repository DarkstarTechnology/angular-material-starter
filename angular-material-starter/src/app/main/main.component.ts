import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface NavItem {
  title: string;
  icon: string | undefined;
  route: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    navItems: NavItem[] = [
      {
        title: 'Dashboard',
        icon: 'dashboard',
        route: '/dashboard',
      },
      {
        title: 'Users',
        icon: 'people',
        route: '/users'
      },
      {
        title: 'Settings',
        icon: 'settings',
        route: '/settings',
      },
    ];
    options = [
      { name: 'Option 1', value: 1 },
      { name: 'Option 2', value: 2 },
      { name: 'Option 3', value: 3 },
    ];
    
  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}
  
  navigate(route: string) {
    this.router.navigate([route]);
  }
}
