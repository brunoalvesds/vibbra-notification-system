import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SetupEmailComponent } from './pages/setup-email/setup-email.component';
import { SetupSmsComponent } from './pages/setup-sms/setup-sms.component';
import { WebPushComponent } from './pages/web-push/web-push.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'configurar', component: SettingsComponent },
  { path: 'setup-email', component: SetupEmailComponent },
  { path: 'setup-sms', component: SetupSmsComponent },
  { path: 'web-push', component: WebPushComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
