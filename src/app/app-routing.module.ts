import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { PlaylistComponent } from './../playlist/playlist.component';


const routes: Routes = [
  {
    path: 'playlist', component: PlaylistComponent
  },
  {
    path: '', component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
