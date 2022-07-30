import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { registerAction } from '../../store/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private store: Store) {}
  // constructor() {}

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    console.log(
      'hello submit world',
      this.registerForm.value,
      this.registerForm.valid
    );

    // this.store.dispatch(registerAction(this.registerForm.value));
  }

  ngOnInit(): void {}
}
