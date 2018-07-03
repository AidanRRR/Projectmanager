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

  public fonts: Array<any> = [];
  public selectedMainFont: any;
  public selectedSubFont: any;


  ngOnInit() {
    this.fontService.getGoogleFonts().subscribe((res) => {
      this.fonts = res.items.map((item) => item.family);
    });
  }

  navigateTo(url) {
    this.router.navigate(['/' + url]);
  }
}
