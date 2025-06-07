import { Component, OnInit } from '@angular/core';
import {
  IonToolbar,
  IonIcon,
  IonButton,
  IonLabel,
  IonChip,
  IonTitle,
  IonPopover,
  IonHeader,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  mailOutline,
  callOutline,
  logoGithub,
  logoLinkedin,
  locationOutline,
  menuOutline,
  sunnyOutline,
  moonOutline,
} from 'ionicons/icons';
import { LocationService } from 'src/app/services/location.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonPopover, IonTitle, IonChip, IonLabel, IonButton, IonIcon, IonToolbar],
})
export class HeaderComponent implements OnInit {
  constructor(
    public locationService: LocationService,
    public themeService: ThemeService,
  ) {
    addIcons({
      mailOutline,
      callOutline,
      logoGithub,
      logoLinkedin,
      locationOutline,
      menuOutline,
      sunnyOutline,
      moonOutline,
    });
  }

  ngOnInit() {}
}
