import {Component, ViewChild} from '@angular/core';
import {UsersService} from '../../common/service/users.service';
import {UserDetailsComponent} from './page-components/user-details.component';
import {User} from '../../model/user.model';
import {UserListComponent} from './page-components/user-list.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html'
})
export class UsersComponent {
  @ViewChild(UserDetailsComponent) userDetailsComponent: UserDetailsComponent;
  @ViewChild(UserListComponent) userListComponent: UserListComponent;
  constructor(private service: UsersService) {
  }

  showDetails(userId: number) {
    this.service.getUser(userId).subscribe(
      (user: User) => { this.userDetailsComponent['chosenUser'] = user; },
      (error) => console.log(error)
    );
  }
  addUserToList(user: User) { this.userListComponent.loadUsers(); }
}
