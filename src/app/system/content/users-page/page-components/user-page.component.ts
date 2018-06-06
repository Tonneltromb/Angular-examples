import {Component} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-page',
  template: `<h1>Welcome user with id {{id}} !</h1>`
})
export class UserPageComponent {
  private id: number;
  private subscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe((params) => this.id = params['id']);
  }
}
