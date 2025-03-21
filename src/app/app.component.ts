import { Component } from '@angular/core';
import {
  IonApp,
  IonButton,
  IonIcon,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  IonChip,
  IonLabel,
  IonContent,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, callOutline, logoGithub, logoLinkedin, locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  imports: [IonContent, IonLabel, IonChip, IonApp, IonRouterOutlet, IonToolbar, IonTitle, IonButton, IonIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CV';

  constructor() {
    addIcons({ mailOutline, callOutline, logoGithub, logoLinkedin, locationOutline });
  }
}
