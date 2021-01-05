import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.scss']
})
export class DangnhapComponent implements OnInit {

  isSpinning = false;
  roles: string;

  login: Login = new Login();
  response: any;
  constructor(private service: JwtClientService,
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService,
    private message: NzMessageService
  ) { }
  ngOnInit(): void {
    // if (this.tokenService.getToken) {
    //   this.roles = this.tokenService.getAuthorities();
    //   this.check();
    // }
    
  }

  onLogin(): void {
    this.isSpinning=true;
    this.authService.login(this.login).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.tokenService.setAuthorities(data.roles);
        this.tokenService.setUserName(data.manguoidung);
        this.roles = data.roles;
        this.check();
      },
      err=>{
       this.isSpinning=false;
        this.createMessage('Lỗi:')
      }

    );
  }

  public check(): void {
    if (this.roles === 'DT') {
      this.isSpinning=false;
      this.router.navigate(['/dao-tao']);
    } else if (this.roles === 'HS') {
      this.isSpinning=false;
      this.router.navigate(['/hoc-sinh']);
    } else if (this.roles === 'GV') {
      this.isSpinning=false;
      this.router.navigate(['/giao-vien']);
    } else if (this.roles === 'BGH') {
      this.isSpinning=false;
      this.router.navigate(['/ban-giam-hieu']);
    } else {
      this.isSpinning=false;
      this.router.navigate(['/']);
    }
  }
  createMessage(type: string): void {
    this.message.create(type, `${type} Tài khoản mật khẩu không đúng!`);
  }
  
}
