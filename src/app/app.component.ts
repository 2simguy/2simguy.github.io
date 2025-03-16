import { Component } from '@angular/core';
import { IonApp, IonButton, IonIcon, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, callOutline, logoGithub, logoLinkedin } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  imports: [IonApp, IonRouterOutlet, IonToolbar, IonTitle, IonButton, IonIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CV';

  constructor() {
    addIcons({ mailOutline, callOutline, logoGithub, logoLinkedin });
  }
}
