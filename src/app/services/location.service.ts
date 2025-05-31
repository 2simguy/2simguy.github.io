import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor() {}

  myLocation() {
    window.open('https://www.google.com/maps/place/Table+View,+Cape+Town,+7439/@-33.8246819,18.4945285,14z/', '_blank');
  }
}
