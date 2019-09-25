import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { coreRoutes } from './core.routes';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ErrorComponent,
    MainNavComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(coreRoutes)
  ],
  exports: [
    MainNavComponent
  ],
  providers: [
    AuthService,
    MessageService
  ]
})
export class CoreModule { }
