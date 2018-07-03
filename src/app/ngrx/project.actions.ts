import { Action } from '@ngrx/store';
import {Project} from './state';

export const EDIT_PROJECT = '[Project] Edit';

export class EditProject implements Action {
  readonly type = EDIT_PROJECT;

  constructor(public payload: Project) {}
}

export type All = EditProject;
