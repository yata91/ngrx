import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddComponent } from './user-add/user-add.component';
import { StoreModule } from '@ngrx/store';
import { reducer, userFeatureKey } from '../store/reducer/user.reducer';
import * as fromServices from '../services';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { EffectsFeatureModule, EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../store/effects/user.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserAddComponent, UserListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [...fromServices.services],
  exports: [UserAddComponent, UserListComponent],
})
export class UserModule {}
