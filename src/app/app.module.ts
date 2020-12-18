import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { LandingComponent } from '../landing/landing.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './../_services/auth.service';
import { HttpInterceptor } from '@angular/common/http';
import { Token_interceptorService } from './../_services/token_interceptor.service';
import { PlaylistComponent } from '../playlist/playlist.component';
import { AlbumCardComponent } from '../album-card/album-card.component';


@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      LandingComponent,
      PlaylistComponent,
      AlbumCardComponent
   ],
  imports: [
BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService
  //   , {
  //   provide:HTTP_INTERCEPTORS,
  //   useClass: Token_interceptorService,
  //   multi: true

  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
