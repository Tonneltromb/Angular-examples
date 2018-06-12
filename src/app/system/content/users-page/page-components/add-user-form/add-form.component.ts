import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../../../model/user.model';
import {FormControl, FormGroup} from '@angular/forms';
import {UsersService} from '../../../../common/service/users.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html'
})
export class AddFormComponent implements OnInit {
  private form: FormGroup;
  @Output() addSuccess = new EventEmitter<User>();
  constructor(private service: UsersService) {}
  ngOnInit() {
    this.form = new FormGroup({
      'userId':  new FormControl(''),
      'userName':  new FormControl(''),
      'userAge':  new FormControl('')
    });
  }
  addUser() {
    const formValues = this.form.value;
    const user = new User(formValues['userName'], formValues['userAge'], formValues['userId']);
    this.service.addUser(user).subscribe((responsedUser: User) => this.addSuccess.emit(responsedUser));
    this.form.reset();
  }
}
