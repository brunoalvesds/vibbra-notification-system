import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, pt_BR } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { LoginComponent } from './pages/login/login.component';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';
import { RegisterComponent } from './pages/register/register.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { WebPushComponent } from './pages/web-push/web-push.component';
import { SetupEmailComponent } from './pages/setup-email/setup-email.component';
import { SetupSmsComponent } from './pages/setup-sms/setup-sms.component';
import { NotificationHistoryComponent } from './pages/notification-history/notification-history.component';
import { ManualNotificationComponent } from './pages/manual-notification/manual-notification.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    WebPushComponent,
    SetupEmailComponent,
    SetupSmsComponent,
    NotificationHistoryComponent,
    ManualNotificationComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    NgZorroModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
