import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hocsinh } from 'src/app/models/hocsinh';
import { HocsinhService } from 'src/app/service/hocsinh.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-taikhoan',
  templateUrl: './taikhoan.component.html',
  styleUrls: ['./taikhoan.component.scss']
})
export class TaikhoanComponent implements OnInit {

  isSpinning = false;
  isCollapsed = false;
  hocsinh: Hocsinh = null;
  mahocsinh: string = this.tokenService.getUserName();


  constructor(private hocsinhService: HocsinhService,
    private tokenService: TokenService,
    private router: Router,) { }

  ngOnInit(): void {
    // this.loaddata();
  }

  public loaddata() {
    this.hocsinhService.detail(this.mahocsinh).subscribe(
      data => this.hocsinh = data,
      err => {
        this.router.navigate(['/error-403']);
      }
    );
  }


}
