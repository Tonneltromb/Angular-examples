import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from '../../../common/service/users.service';
import {User} from '../../../model/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  template: `
    <ul class="list-group">
      <li *ngFor="let user of users" class="list-group-item" (click)="showDetails(user.id)">
        <button class="btn btn-primary" (click)="toUserPage(user.id)">>></button>
        {{user.name}}
      </li>
    </ul>
  `
})

export class UserListComponent implements OnInit {
  @Output() showUserDetails = new EventEmitter<number>();
  users: User[];
  constructor(private service: UsersService, private router: Router) {}

  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.service.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  showDetails(userId: number) {
    this.showUserDetails.emit(userId);
  }

  toUserPage(id: number) {
    this.router.navigate(['/users/user/' + id + '']);
  }
}
