import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { UserService } from 'src/app/services';
import * as userActions from '../action/user.actions';
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.getUsers),
      mergeMap((action) =>
        this.userService.getUsers().pipe(
          map((response) => {
            return userActions.getUsersSuccess({ users: response });
          }),
          catchError((error: any) => of(userActions.getUsersFailure(error)))
        )
      )
    )
  );
  constructor(private actions$: Actions, private userService: UserService) {}
}
