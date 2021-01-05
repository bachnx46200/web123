import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DaotaoGuardService as guard } from './guards/daotao-guard.service';
import { MenuComponent } from './main/menu/menu.component';
import { HomeComponent } from './main/menu/home/home.component';
import { AboutComponent } from './main/menu/about/about.component';
import { BlogComponent } from './main/menu/blog/blog.component';

import { HocsinhComponent } from './hocsinh/hocsinh/hocsinh.component';
import { BangdiemComponent } from './hocsinh/bangdiem/bangdiem.component';
import { TaikhoanComponent } from './hocsinh/taikhoan/taikhoan.component';

import { DaotaoComponent } from './daotao/daotao/daotao.component';
const routes: Routes = [
  
  
  { path: '', redirectTo: 'minh-khoi-school', pathMatch: 'full' },

  { path: 'minh-khoi-school', component: MenuComponent,
  children:[
    {path:'',redirectTo:'trang-chu',pathMatch:'full'},
    {path:'trang-chu',component:HomeComponent},
    {path:'gioi-thieu',component:AboutComponent},
    {path:'blog',component:BlogComponent}
  ]

},
{ path: 'dang-nhap', component: DangnhapComponent },
{ path: 'hoc-sinh', component: HocsinhComponent,
children:[
  {path:'',redirectTo:'trang-chu',pathMatch:'full'},
  {path:'trang-chu',component:HomeComponent},
  {path:'gioi-thieu',component:AboutComponent},
  {path:'blog',component:BlogComponent},
  {path:'bang-diem',component:BangdiemComponent},
  {path:'tai-khoan',component:TaikhoanComponent},
]

},
{ path: 'dao-tao', component: DaotaoComponent,
children:[
  {path:'',redirectTo:'trang-chu',pathMatch:'full'},
  {path:'trang-chu',component:HomeComponent},
  {path:'gioi-thieu',component:AboutComponent},
  {path:'blog',component:BlogComponent},
  {path:'bang-diem',component:BangdiemComponent},
  {path:'tai-khoan',component:TaikhoanComponent},
]

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
