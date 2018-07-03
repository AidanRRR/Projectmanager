import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KleurenComponent } from './kleuren/kleuren.component';
import { FontsComponent } from './fonts/fonts.component';
import { LogoComponent } from './logo/logo.component';

import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';

const appRoutes: Routes = [
  { path: 'project', component: ProjectComponent },
  { path: 'fonts', component: FontsComponent },
  { path: 'kleuren', component: KleurenComponent },
  { path: 'logo', component: LogoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    KleurenComponent,
    FontsComponent,
    LogoComponent,
    ProjectComponent
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
