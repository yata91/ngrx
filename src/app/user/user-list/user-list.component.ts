import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import * as fromRoot from '../../store';
import * as userActions from '../../store/action/user.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  closeResult = '';
  userForm = this.formBuilder.group({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  });
  constructor(
    private readonly store: Store,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {
    this.store.dispatch(userActions.getUsers());
    this.store
      .select(fromRoot.getUsers)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => (this.users = data.users));
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          const newUser = Object.assign(this.userForm.value);
          newUser.id = this.users.length + 1;
          this.store.dispatch(userActions.addUser(newUser as User));
          this.userForm.reset();
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
