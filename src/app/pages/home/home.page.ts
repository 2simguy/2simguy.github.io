import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonCardContent,
  IonCardTitle,
  IonAvatar,
  IonText,
  IonButton,
  IonIcon,
  IonCardHeader,
  IonChip,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronDown,
  chevronUp,
  locationOutline,
  callOutline,
  mailOutline,
  logoGithub,
  logoLinkedin,
} from 'ionicons/icons';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { LocationService } from 'src/app/services/location.service';

interface TimelineEvent {
  title: string;
  description: string;
  timestamp: Date;
}

interface ProjectsType {
  title: string;
  description: string;
  technologiesUsed: { title: string; url: string }[];
  startDate: string;
  endDate: string;
  githubLink?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonChip,
    IonCardHeader,
    IonIcon,
    IonButton,
    IonText,
    IonAvatar,
    IonCardTitle,
    IonCardContent,
    IonCol,
    IonRow,
    IonGrid,
    IonCard,
    IonContent,
    FormsModule,
    HeaderComponent,
    CommonModule,
  ],
})
export class HomePage implements OnInit {
  @ViewChild('timeLineCard', { read: TemplateRef }) timeLineCardTpl!: TemplateRef<{ $implicit: TimelineEvent }>;

  projects: ProjectsType[] = [
    {
      title: 'SmartMob',
      description:
        'A hybrid application for warehouse management, developed using Ionic and Angular. really long description that should be truncated if it exceeds a certain length. This is to test the truncation functionality in the project list. this list is even longer than the previous one to ensure that it gets truncated properly. It should not be displayed in full unless the user expands the project.',
      startDate: '2021',
      endDate: '2022',
      technologiesUsed: [
        { title: 'Ionic', url: 'https://ionicframework.com/' },
        { title: 'Angular', url: 'https://angular.io/' },
        { title: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      ],
    },
    {
      title: 'SmartMob - Warehouse management hybrid application',
      description: 'A hybrid application for warehouse management, developed using Ionic and Angular.',
      startDate: '2021',
      endDate: '2022',
      technologiesUsed: [
        { title: 'Ionic', url: 'https://ionicframework.com/' },
        { title: 'Angular', url: 'https://angular.io/' },
        { title: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      ],
    },
    {
      title: 'SmartMob',
      description: 'A hybrid application for warehouse management, developed using Ionic and Angular.',
      startDate: '2021',
      endDate: '2022',
      technologiesUsed: [
        { title: 'Ionic', url: 'https://ionicframework.com/' },
        { title: 'Angular', url: 'https://angular.io/' },
        { title: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      ],
    },
    {
      title: 'SmartMob',
      description: 'A hybrid application for warehouse management, developed using Ionic and Angular.',
      startDate: '2021',
      endDate: '2022',
      technologiesUsed: [
        { title: 'Ionic', url: 'https://ionicframework.com/' },
        { title: 'Angular', url: 'https://angular.io/' },
        { title: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      ],
    },
  ];

  timeLine: TimelineEvent[] = [
    {
      title: 'Electronic Engineering - University of Pretoria',
      description: 'Description 1',
      timestamp: new Date('2013'),
    },
    {
      title: 'Electronic Engineering - Final year project',
      description: 'Description 2',
      timestamp: new Date('2019'),
    },
    {
      title: 'SmartMob',
      description: 'Description 3',
      timestamp: new Date('2021'),
    },
    {
      title: 'SmartMob - Warehouse management hybrid application',
      description: 'Description 3',
      timestamp: new Date('2021'),
    },
    {
      title: 'SmartMob',
      description: 'Description 3',
      timestamp: new Date('2021'),
    },
    {
      title: 'SmartMob',
      description: 'Description 3',
      timestamp: new Date('2021'),
    },
  ];

  constructor(public locationService: LocationService) {
    addIcons({ locationOutline, callOutline, mailOutline, logoGithub, logoLinkedin, chevronDown, chevronUp });
  }

  // Add these to your component class
  expandedProjects: boolean[] = [];

  ngOnInit() {
    // Initialize all projects as collapsed
    this.expandedProjects = new Array(this.projects.length).fill(false);
  }

  toggleExpand(index: number): void {
    this.expandedProjects[index] = !this.expandedProjects[index];
  }

  isDescriptionLong(description: string): boolean {
    return description.length > 100;
  }

  openUrl(url: string | undefined): void {
    window.open(url, '_blank');
  }
}
