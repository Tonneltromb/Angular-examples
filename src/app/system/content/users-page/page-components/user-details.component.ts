import {Component, Input} from '@angular/core';
import {User} from '../../../model/user.model';
import {UsersService} from '../../../common/users.service';

@Component({
  selector: 'app-user-dedails',
  template: `
    <h3>Id: {{chosenUser?.id}}</h3>
    <h3>Name: {{chosenUser?.name}}</h3>
    <h3>Age: {{chosenUser?.age}} year(s)</h3>
  `
})
export class UserDetailsComponent {
  chosenUser: User;
}
