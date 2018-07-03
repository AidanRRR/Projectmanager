import {projectReducer} from './project.reducer';
import {StoreModule} from '@ngrx/store';
import {NgModule} from '@angular/core';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  imports: [
    StoreModule.forRoot({project: projectReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
})
export class AppStateModule { }
