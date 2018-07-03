import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FontService} from "../services/fonts.service";

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.css']
})
export class FontsComponent implements OnInit {

  constructor(private router: Router, private fontService: FontService) {}

  ngOnInit() {
    this.fontService.getGoogleFonts().subscribe((res) => {
      console.log(res.json());
    })
  }

  navigateTo(url) {
    this.router.navigate(['/' + url]);
  }
}
