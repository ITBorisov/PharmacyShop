import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: '',
  };
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginFormSubmit() {
    this.authService.loginUser(this.user).subscribe(result => {
      if (!result.success) {
        console.log('Provalena');
      }else {
        this.authService.userData(result.user, result.token);
        console.log('Lognat');

        setTimeout(() => {
          this.router.navigate(['/profile']);
        }, 2000);
      }
    });
  }

}
