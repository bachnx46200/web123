import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenService } from '../service/token.service';
@Injectable({
  providedIn: 'root'
})
export class DaotaoGuardService implements CanActivate {
  realRol: string;
  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data.expectedRol;
    const roles = this.tokenService.getAuthorities();
    this.realRol = 'hocsinh';
    if (roles === 'DT') {
      this.realRol = 'daotao';
    }else if(roles=="GV"){
      this.realRol = 'giaovien';
    }else if(roles=="HS"){
      this.realRol = 'hocsinh';
    }else if(roles=="BGH"){
      this.realRol = 'bangiamhieu';
    }
    if (!this.tokenService.getToken() || expectedRol.indexOf(this.realRol) === -1) {
      this.router.navigate(['/dang-nhap']);
      return false;
    }
    return true;
  }
}
