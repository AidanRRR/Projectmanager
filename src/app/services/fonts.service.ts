import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class FontService {

  constructor(private http: HttpClient) { }

  public getGoogleFonts(): Observable<any> {
    return this.http.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${environment.googleFontApiKey}`);
  }

}
