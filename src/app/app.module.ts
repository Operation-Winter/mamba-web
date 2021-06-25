import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanningHostComponent } from './planning/planning-host/planning-host.component';
import { PlanningParticipantComponent } from './planning/planning-participant/planning-participant.component';
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PlanningHostLandingComponent } from './planning/planning-host-landing/planning-host-landing.component';
import { PlanningHostSetupComponent } from './planning/planning-host-setup/planning-host-setup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddTicketDialogComponent } from './planning/add-ticket-dialog/add-ticket-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanningHostComponent,
    PlanningParticipantComponent,
    LandingComponent,
    PageNotFoundComponent,
    PlanningHostLandingComponent,
    PlanningHostSetupComponent,
    AddTicketDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
