import {Injectable} from '@angular/core';
import {User} from '../../model/user.model';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

const URL = 'http://localhost:3000';

@Injectable()
export class UsersService {
  constructor(private http: Http) {}

  getUsers() { return this.http.get(URL + '/users').map((response: Response) => response.json()); }

  getUser(id: number) {
    return this.http.get(URL + '/users/' + id)
      .map((response: Response) => response.json())
      .catch(() => Observable.throw('Ошибка!'));
  }

  addUser(user: User) { return this.http.post(URL + '/users', user).map((response: Response) => response.json()); }

  editUser(user: User) { return this.http.put(URL + '/users/' + user.id, user); }
}
