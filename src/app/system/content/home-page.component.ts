import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  template: `
    <h1>Welcome to home page!</h1>
    <button class="btn btn-primary" (click)="toUsersPage()">Пользователи</button>
  `
})
export class HomePageComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  toUsersPage() {
   this.router.navigate(['users'], {relativeTo: this.activatedRoute}); // программная навигация
  }
}
