import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanningHostComponent } from './planning/host/planning-host/planning-host.component';
import { PlanningParticipantComponent } from './planning/participant/planning-participant/planning-participant.component';
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
import { PlanningHostLandingComponent } from './planning/host/planning-host-landing/planning-host-landing.component';
import { PlanningHostSetupComponent } from './planning/host/planning-host-setup/planning-host-setup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddTicketDialogComponent } from './planning/host/add-ticket-dialog/add-ticket-dialog.component';
import { MatMenuModule } from '@angular/material/menu';
import { PlanningErrorStateCardComponent } from './planning/shared/planning-error-state-card/planning-error-state-card.component';
import { PlanningLandingTicketCardContentComponent } from './planning/shared/planning-landing-ticket-card-content/planning-landing-ticket-card-content.component';
import { PlanningSessionEndedCardComponent } from './planning/shared/planning-session-ended-card/planning-session-ended-card.component';
import { PlanningHostParticipantsCardComponent } from './planning/host/planning-host-participants-card/planning-host-participants-card.component';
import { PlanningHostNoneStateCardComponent } from './planning/host/planning-host-none-state-card/planning-host-none-state-card.component';
import { PlanningHostTicketCardComponent } from './planning/host/planning-host-ticket-card/planning-host-ticket-card.component';
import { PlanningParticipantRowComponent } from './planning/shared/planning-participant-row/planning-participant-row.component';
import { PlanningParticipantSetupComponent } from './planning/participant/planning-participant-setup/planning-participant-setup.component';
import { PlanningParticipantLandingComponent } from './planning/participant/planning-participant-landing/planning-participant-landing.component';
import { PlanningParticipantNoneStateCardComponent } from './planning/participant/planning-participant-none-state-card/planning-participant-none-state-card.component';
import { PlanningParticipantVotingStateCardComponent } from './planning/participant/planning-participant-voting-state-card/planning-participant-voting-state-card.component';
import { PlanningParticipantTicketCardComponent } from './planning/participant/planning-participant-ticket-card/planning-participant-ticket-card.component';
import { PlanningParticipantParticipantsCardComponent } from './planning/participant/planning-participant-participants-card/planning-participant-participants-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanningHostComponent,
    PlanningParticipantComponent,
    LandingComponent,
    PageNotFoundComponent,
    PlanningHostLandingComponent,
    PlanningHostSetupComponent,
    AddTicketDialogComponent,
    PlanningLandingTicketCardContentComponent,
    PlanningErrorStateCardComponent,
    PlanningSessionEndedCardComponent,
    PlanningHostParticipantsCardComponent,
    PlanningHostNoneStateCardComponent,
    PlanningHostTicketCardComponent,
    PlanningParticipantRowComponent,
    PlanningParticipantSetupComponent,
    PlanningParticipantLandingComponent,
    PlanningParticipantNoneStateCardComponent,
    PlanningParticipantVotingStateCardComponent,
    PlanningParticipantTicketCardComponent,
    PlanningParticipantParticipantsCardComponent
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
    MatDialogModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
