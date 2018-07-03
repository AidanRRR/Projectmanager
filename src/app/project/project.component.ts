import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {EditProject} from '../ngrx/project.actions';
import {AppState, Project} from '../ngrx/state';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public project: Observable<AppState>;
  public projectId: number;
  public name: string;
  public beschrijving: string;

  constructor(private router: Router, private store: Store<AppState>) {
    this.project = this.store.select('project');

    this.project.subscribe((project) => {
      this.projectId = project.currentProject.id;
    });
  }

  ngOnInit() {
  }

  save() {
    this.store.dispatch(new EditProject({id: 0, name: this.name, beschrijving: this.beschrijving}));
  }

  async navigateTo(url) {
    this.router.navigate([`/project/${this.projectId}/${url}`]);
  }
}
