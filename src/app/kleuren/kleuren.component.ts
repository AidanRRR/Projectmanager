import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-kleuren',
  templateUrl: './kleuren.component.html',
  styleUrls: ['./kleuren.component.css']
})
export class KleurenComponent implements OnInit {

  constructor(private router: Router) {}

  private colors: Array<any> = [];

  ngOnInit() {
  }

  addColor() {
    this.colors.push({id: this.colors.length+1, code: '#000000'});
  }

  updateColor(value, updatedColor) {
    let color = this.colors.filter((color) => color.id === updatedColor.id)[0];
    if (color !== undefined) {
      color.code = value;
    }
  }

  navigateTo(url) {
    this.router.navigate(['/' + url]);
  }
}
