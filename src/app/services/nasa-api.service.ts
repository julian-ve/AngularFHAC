import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INasaImage} from '../INasaImage';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private nasaBaseUri = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY';
  private earthDate = '2019-04-07';
  private selectedCamera = 'FHAZ';


  constructor(private http: HttpClient) { }

  public getPicture(): Observable<INasaImage[]> {
    console.log('Rufe auf: ' + this.nasaBaseUri + '&earth_date=' + this.earthDate + 'camera=' + this.selectedCamera);
    return this.http.get<INasaImage[]>(this.nasaBaseUri + '&earth_date=' + this.earthDate + 'camera=' + this.selectedCamera);
  }

}
