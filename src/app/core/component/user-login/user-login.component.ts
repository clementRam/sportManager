import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  userForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){

  }

  ngOnInit() {
  }

  public onSubmit(): void {
    if(this.userForm.valid) {
      this.authService.signIn(this.userForm.value).subscribe(() => this.router.navigate(['/dashboard']));
    } else{
      this.userForm.markAllAsTouched();
    }
  }
}
