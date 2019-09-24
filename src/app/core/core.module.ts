import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { coreRoutes } from './core.routes';
import { ErrorComponent } from './pages/error/error.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ErrorComponent,
    MainNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(coreRoutes)
  ],
  exports: [
    MainNavComponent
  ]
})
export class CoreModule { }
