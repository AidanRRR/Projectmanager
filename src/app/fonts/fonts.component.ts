import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.css']
})
export class FontsComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navigateTo(url) {
    this.router.navigate(['/' + url]);
  }
}
