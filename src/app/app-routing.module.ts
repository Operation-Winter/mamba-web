import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlanningHostComponent } from './planning/host/planning-host/planning-host.component';
import { PlanningParticipantComponent } from './planning/participant/planning-participant/planning-participant.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'planning', children: [
      { path: 'host', component: PlanningHostComponent },
      { path: 'participant', component: PlanningParticipantComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
