import { Component, OnInit } from '@angular/core';
import {
  IonToolbar,
  IonIcon,
  IonButton,
  IonLabel,
  IonChip,
  IonTitle,
  IonAvatar,
  IonPopover,
  IonContent,
  IonHeader,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, callOutline, logoGithub, logoLinkedin, locationOutline, menuOutline } from 'ionicons/icons';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonContent, IonAvatar, IonPopover, IonTitle, IonChip, IonLabel, IonButton, IonIcon, IonToolbar],
})
export class HeaderComponent implements OnInit {
  constructor(public locationService: LocationService) {
    addIcons({ mailOutline, callOutline, logoGithub, logoLinkedin, locationOutline, menuOutline });
  }

  ngOnInit() {}
}
