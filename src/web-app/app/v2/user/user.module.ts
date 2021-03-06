import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: 'login', component: LoginComponent }])
  ],
  declarations: [LoginComponent],
  providers: [AuthService, AuthGuard]
})
export class UserModule {}
