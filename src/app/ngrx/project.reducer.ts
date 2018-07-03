import * as ProjectActions from './project.actions';
import {AppState} from './state';

export type Action = ProjectActions.All;

const newProject: AppState = {
  currentProject: {
    id: 0,
    name: 'Nieuw project',
    beschrijving: 'Project beschrijving'
  }
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function projectReducer(state: AppState = newProject, action: Action) {
  switch (action.type) {
    case ProjectActions.EDIT_PROJECT:
      return newState(state, { currentProject: action.payload });
    default:
      return state;
  }
}
