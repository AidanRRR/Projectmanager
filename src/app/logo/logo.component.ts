import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

const URL = '';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor(private router: Router) {}

  private files: Array<File> = [];

  ngOnInit() {
  }

  onFileChanged(e) {
    console.log(e);

    for (let i in e.target.files) {
      this.files.push(e.target.files[i]);
    }
  }

  navigateTo(url) {
    this.router.navigate(['/' + url]);
  }

}
