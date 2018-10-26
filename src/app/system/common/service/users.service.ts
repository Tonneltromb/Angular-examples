import {Injectable} from '@angular/core';
import {User} from '../../model/user.model';
import {HttpClient} from '@angular/common/http';

const URL = 'http://localhost:3000';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(URL + '/users');
  }

  getUser(id: number) {
    return this.http.get(URL + '/users/' + id);
  }

  addUser(user: User) {
    return this.http.post(URL + '/users', user);
  }

  editUser(user: User) {
    return this.http.put(URL + '/users/' + user.id, user);
  }
}
