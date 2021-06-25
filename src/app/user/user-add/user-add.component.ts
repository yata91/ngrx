import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { State } from '../../store/reducer/user.reducer';
import * as UserActions from '../../store/action/user.actions';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent {
  constructor(private store: Store<State>) {}

  addUser(userName: string): void {
    const user = {} as User;
    user.name = userName;
    this.store.dispatch(UserActions.addUser(user));
  }
}
