import {Component, OnInit} from '@angular/core';
import { NasaApiService } from './services/nasa-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NASA Cameras';

  // private nasaApiService: NasaApiService;
  private pictures = [];

  constructor(private nasaApiService: NasaApiService) {
    this.nasaApiService = nasaApiService;
  }

  ngOnInit() {
    this.showPictures();
  }

  showPictures() {
    this.nasaApiService.getPicture()
      .subscribe(data => { this.pictures = data; },
        err => console.log(err),
        () => console.log('Loaded photos from api'));
  }
}
