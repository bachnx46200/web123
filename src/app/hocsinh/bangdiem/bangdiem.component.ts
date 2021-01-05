import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bangdiem } from 'src/app/models/bangdiem';
import { Namhoc } from 'src/app/models/namhoc';
import { BangdiemService } from 'src/app/service/bangdiem.service';
import { NamhocService } from 'src/app/service/namhoc.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-bangdiem',
  templateUrl: './bangdiem.component.html',
  styleUrls: ['./bangdiem.component.scss']
})
export class BangdiemComponent implements OnInit {

  isSpinning = false;
  bangdiem: Bangdiem;
  namhoc: Namhoc;
  selectedValuehocky = "true";
  constructor(
    private bangdiemService: BangdiemService,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService,
    private namhocService: NamhocService,
  ) { }
  manguoidung: string = this.tokenService.getUserName();
  hocky: string;

  ngOnInit(): void { 
      this.loaddiemtheoky();     
  }
  // public loadbangdiemtheonam() {
  //   this.bangdiemService.listdiemtheonam(this.manguoidung, this.selectedValuehocky, this.selectedValuemonhoc).subscribe(
  //     data => this.bangdiem = data
  //   )
  // }
  public loaddiemtheoky() {
    this.bangdiemService.listdiemtheohocky(this.manguoidung, this.selectedValuehocky).subscribe(
      data => this.bangdiem = data
    );
   
  }

  timkiem() {
    this.loaddiemtheoky();
  
  }
  // public loaddatanam() {
  //   this.namhocService.listnamhoc(this.manguoidung).subscribe(
  //     data => this.namhoc = data
  //   )
  // }

}
