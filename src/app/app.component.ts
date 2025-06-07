import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [IonApp, IonRouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'CV';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Initialize the theme service to set up the theme based on system preference
    this.themeService.themeSetup();
  }
}
