import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

  redirectUrl;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate() {
     return this.authService.isAdmin();
  }
}
