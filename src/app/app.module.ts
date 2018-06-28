import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KleurenComponent } from './kleuren/kleuren.component';
import { FontsComponent } from './fonts/fonts.component';
import { LogoComponent } from './logo/logo.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'fonts', component: FontsComponent },
  { path: 'kleuren', component: KleurenComponent },
  { path: 'logo', component: LogoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    KleurenComponent,
    FontsComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
