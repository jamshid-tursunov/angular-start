import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
} from '@angular/forms';
import { registerAction } from '../../store/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private store: Store) {}

  registerForm = new UntypedFormGroup({
    username: new UntypedFormControl('', [Validators.required]),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [Validators.required]),
  });

  onSubmit() {
    console.log(
      'hello submit world',
      this.registerForm.value,
      this.registerForm.valid
    );

    this.store.dispatch(registerAction(this.registerForm.value));
  }

  ngOnInit(): void {}
}
