import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentralInfoComponent } from './central-info.component';
import { ProfileCardComponent } from './info-components/profile-card.component';
import { TimeTrackingCardComponent } from './info-components/time-tracking-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CentralInfoComponent,
    ProfileCardComponent,
    TimeTrackingCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
