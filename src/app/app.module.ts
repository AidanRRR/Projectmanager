import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KleurenComponent } from './kleuren/kleuren.component';
import { FontsComponent } from './fonts/fonts.component';
import { LogoComponent } from './logo/logo.component';

import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import {HttpClientModule} from '@angular/common/http';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'project/:id', component: ProjectComponent },
  { path: 'project/:id/fonts', component: FontsComponent },
  { path: 'project/:id/kleuren', component: KleurenComponent },
  { path: 'project/:id/logo', component: LogoComponent },
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
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
