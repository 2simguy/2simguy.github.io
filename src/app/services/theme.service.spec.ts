import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  afterEach(() => {
    // Clean up the class to avoid side effects between tests
    document.documentElement.classList.remove('ion-palette-dark');
    service.isDarkMode = false;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should enable dark mode when setDarkMode(true) is called', () => {
    service.setDarkMode(true);
    expect(document.documentElement.classList.contains('ion-palette-dark')).toBeTrue();
    expect(service.isDarkMode).toBeTrue();
  });

  it('should disable dark mode when setDarkMode(false) is called', () => {
    service.setDarkMode(false);
    expect(document.documentElement.classList.contains('ion-palette-dark')).toBeFalse();
    expect(service.isDarkMode).toBeFalse();
  });

  it('should toggle dark mode from false to true', () => {
    service.isDarkMode = false;
    service.toggleDarkMode();
    expect(service.isDarkMode).toBeTrue();
    expect(document.documentElement.classList.contains('ion-palette-dark')).toBeTrue();
  });

  it('should toggle dark mode from true to false', () => {
    service.isDarkMode = true;
    document.documentElement.classList.add('ion-palette-dark');
    service.toggleDarkMode();
    expect(service.isDarkMode).toBeFalse();
    expect(document.documentElement.classList.contains('ion-palette-dark')).toBeFalse();
  });

  it('should set dark mode based on system preference in themeSetup()', () => {
    // Mock matchMedia
    const addEventListenerSpy = jasmine.createSpy('addEventListener');
    spyOn(window, 'matchMedia').and.returnValue({
      matches: true,
      addEventListener: addEventListenerSpy,
    } as any);

    service.themeSetup();
    expect(service.isDarkMode).toBeTrue();
    expect(document.documentElement.classList.contains('ion-palette-dark')).toBeTrue();
    expect(addEventListenerSpy).toHaveBeenCalled();
  });
});
