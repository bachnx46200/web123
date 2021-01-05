import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IconsProviderModule } from './icons-provider.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';

import { DangnhapComponent } from './dangnhap/dangnhap.component';


import { ToastrModule } from 'ngx-toastr';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { MenuComponent } from './main/menu/menu.component';
import { HomeComponent } from './main/menu/home/home.component';
import { AboutComponent } from './main/menu/about/about.component';
import { BlogComponent } from './main/menu/blog/blog.component';
import { HocsinhComponent } from './hocsinh/hocsinh/hocsinh.component';
import { BangdiemComponent } from './hocsinh/bangdiem/bangdiem.component';
import { TaikhoanComponent } from './hocsinh/taikhoan/taikhoan.component';
import { DaotaoComponent } from './daotao/daotao/daotao.component';
registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    DangnhapComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    HocsinhComponent,
    BangdiemComponent,
    TaikhoanComponent,
    DaotaoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    AngularEditorModule,
    IconsProviderModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: vi_VN },interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
