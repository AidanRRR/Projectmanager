import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navigateTo(url) {
    this.router.navigate(['/' + url]);
  }
}
