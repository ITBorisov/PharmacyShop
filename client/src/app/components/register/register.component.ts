import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  user = {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    firstName: ''
  };
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  registerFormSubmit() {
    this.authService.registerUser(this.user).subscribe(result => {
      if (!result.success) {
        console.log('Provalena');
      }else {
        console.log('Uspeshno registriran');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      }
    });
  }

}
