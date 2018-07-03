export interface AppState {
  currentProject: Project;
}

export interface Project {
  id: number;
  name: string;
  beschrijving: string;
}
