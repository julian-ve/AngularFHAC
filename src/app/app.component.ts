import {Component, OnInit} from '@angular/core';
import {NasaApiService} from './services/nasa-api.service';
import {INasaImage} from './INasaImage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public dateString = '2019-04-07';
  public selectedCamera = 'fhaz';

  constructor(private nasaApiService: NasaApiService) {
  }

  title = 'NASA Cameras';

  // private nasaApiService: NasaApiService;
  private images = [];
  private currentImage: INasaImage = {
    id: 0,
    sol: 0,
    camera: '',
    img_src: '',
    earth_date: '',
    rover: ''
  };

  showImage(img: INasaImage) {
    this.currentImage = img;
    document.getElementById('overlay').style.display = 'block';
  }

  hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
  }

  ngOnInit() {
    this.showImages();
  }

  showImages() {
    this.nasaApiService.getPicture(this.dateString, this.selectedCamera)
      .subscribe(data => {
          this.images = data;
        },
        err => console.log(err),
        () => console.log('Loaded photos from api'));
  }


}
