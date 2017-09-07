import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import * as fromRoot from '../../reducers';
import * as authActions from '../../actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder,
              private store$: Store<fromRoot.State>) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['wpcfan@163.com', Validators.compose([Validators.required, Validators.email])],
      password: ['wp123456', Validators.required]
    });
  }

  onSubmit({value, valid}, e: Event) {
    e.preventDefault();
    if (!valid) {
      return;
    }
    this.store$.dispatch(
      new authActions.LoginAction(value));
  }

}
