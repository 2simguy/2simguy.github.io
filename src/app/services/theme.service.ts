import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode: boolean = false;
  constructor() {}

  themeSetup() {
    // Default to system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Apply the initial theme
    this.setDarkMode(prefersDark.matches);

    // Listen for system preference changes
    prefersDark.addEventListener('change', (mediaQuery) => {
      this.setDarkMode(mediaQuery.matches);
    });
  }

  toggleDarkMode() {
    this.setDarkMode(!this.isDarkMode);
  }

  setDarkMode(darkMode: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', darkMode);
    this.isDarkMode = darkMode;
  }
}
