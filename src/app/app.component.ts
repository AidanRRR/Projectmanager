import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import {AppState} from './ngrx/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router, private store: Store<AppState>) {  }

  navigateTo(url) {
    this.router.navigate(['/' + url]);
  }
}
