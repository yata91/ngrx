import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user';
import * as UserActions from '../action/user.actions';

export const userFeatureKey = 'user';

export interface State {
  users: User[];
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
}

export const initialState: State = {
  users: [],
  isLoadingSuccess: false,
  isLoading: false,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, (state: State, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),
  on(UserActions.getUsers, (state) => ({ ...state, isLoading: true })),
  on(UserActions.getUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
    isLoading: false,
    isLoadingSuccess: false,
  }))
);

export function reducer(state: State | undefined, action: Action): any {
  return userReducer(state, action);
}

export const getUsers = (state: State) => {
  return {
    users: state.users,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess,
  };
};
