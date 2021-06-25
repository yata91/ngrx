import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const getUsers = createAction('[User] Load Users');

export const getUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);

export const getUsersFailure = createAction(
  '[User] Load Users Failure',
  props<any>()
);

export const addUser = createAction('[User] Add User', (user: User) => ({
  user,
}));

export const addUserSucecss = createAction(
  '[User] Add User success',
  (user: User) => ({
    user,
  })
);

export const addUserFailure = createAction(
  '[User] Add User failure',
  (user: User) => ({
    user,
  })
);

export const editUser = createAction('[User] Edit User', (user: User) => ({
  user,
}));

export const editUserSuccess = createAction(
  '[User] Edit User success',
  (user: User) => ({
    user,
  })
);

export const editUserFailure = createAction(
  '[User] Edit User failure',
  (user: User) => ({
    user,
  })
);
