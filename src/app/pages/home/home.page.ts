import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';

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
  IonItem,
  IonList,
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
  checkmarkCircleOutline,
  statsChartOutline,
} from 'ionicons/icons';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { LocationService } from 'src/app/services/location.service';

interface TimelineEvent {
  title: string;
  description: string;
  company?: string;
  startDate: Date;
  endDate: Date | 'Current';
  link?: string;
  information?: { icon?: string; color?: string; text: string }[];
}

interface ProjectsType {
  title: string;
  description: string;
  technologiesUsed: { title: string; url: string }[];
  startDate: Date;
  endDate: Date | 'Current';
  githubLink?: string;
}

interface SkillsType {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

interface InterestsType {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonItem,
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
export class HomePage implements OnInit, AfterViewInit {
  projects: ProjectsType[] = [
    {
      title: 'Community Application',
      description:
        'Currently developing a community-focused application to connect job seekers with opportunities. I was involved in the entire development lifecycle, including design, front-end, back-end, and database implementation. The application features secure payment integration and a user-friendly interface.',
      startDate: new Date('2023'),
      endDate: new Date('2025'),
      technologiesUsed: [
        { title: 'Ionic', url: 'https://ionicframework.com/' },
        { title: 'Angular', url: 'https://angular.io/' },
        { title: 'NodeJS', url: 'https://nodejs.org/' },
        { title: 'MySQL', url: 'https://www.mysql.com/' },
        { title: 'TypeScript', url: 'https://www.typescriptlang.org/' },
        { title: 'Yoco', url: 'https://www.yoco.com/za/' },
      ],
    },
    {
      title: 'Livestock Management Application',
      description:
        "For a personal project I'm developing a livestock management application to streamline the tracking and management of livestock. The application will include features a user-friendly interface for farmers to monitor their livestock, manage health records, and track weight.",
      startDate: new Date('2025'),
      endDate: 'Current',
      githubLink: 'https://github.com/2simguy/Livestock-Manager-App',
      technologiesUsed: [
        { title: 'Angular', url: 'https://angular.io/' },
        { title: 'PrimeNG', url: 'https://www.primefaces.org/' },
        { title: 'NestJS', url: 'https://nestjs.com/' },
        { title: 'PostgreSQL', url: 'https://www.postgresql.org/' },
      ],
    },
    {
      title: 'Warehouse Management Application',
      description:
        'I developed large section of the front-end and contributed to the API and database design for a warehouse management system. The application streamlined inventory tracking with QR code scanning and provided a responsive interface for both mobile and desktop users.',
      startDate: new Date('2022'),
      endDate: new Date('2024'),
      technologiesUsed: [
        { title: 'Ionic', url: 'https://ionicframework.com/' },
        { title: 'Angular', url: 'https://angular.io/' },
        { title: 'NodeJS', url: 'https://nodejs.org/' },
        { title: 'ExpressJS', url: 'https://expressjs.com/' },
        { title: 'MySQL', url: 'https://www.mysql.com/' },
        { title: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      ],
    },
    {
      title: 'Event Planning and Store Application',
      description:
        'Implemented large sections the front-end and back-end of an event management platform with a e-commerce section. Integrated QR code functionality for event attendance tracking and implemented a secure payment gateway for the store. Enabled admin-controlled event creation and user registration.',
      startDate: new Date('2022'),
      endDate: new Date('2024'),
      technologiesUsed: [
        { title: 'Ionic', url: 'https://ionicframework.com/' },
        { title: 'Angular', url: 'https://angular.io/' },
        { title: 'NodeJS', url: 'https://nodejs.org/' },
        { title: 'MySQL', url: 'https://www.mysql.com/' },
        { title: 'TypeScript', url: 'https://www.typescriptlang.org/' },
        { title: 'Paygate (Payfast)', url: 'https://payfast.io/solutions/gateway/' },
      ],
    },
    {
      title: 'Automotive Body Repair Application',
      description:
        'Implemented sections of the front-end in a hybrid web application using Ionic and Angular, enabling seamless messaging, reporting, and help desk functionalities. Collaborated with designers and back-end developers',
      startDate: new Date('2021'),
      endDate: new Date('2022'),
      technologiesUsed: [
        { title: 'Ionic', url: 'https://ionicframework.com/' },
        { title: 'Angular', url: 'https://angular.io/' },
        { title: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      ],
    },
  ];

  timeLine: TimelineEvent[] = [
    {
      title: 'Full Stack Software Developer',
      startDate: new Date('2021-05'),
      endDate: 'Current',
      description: 'Full Stack Software Developer at Smart Mob, working on hybrid application development.',
      link: undefined,
      company: 'Smart Mob',
      information: [
        {
          text: 'Achieved promotion from Junior Developer to Mid-Level Full Stack Developer.',
        },
        { text: 'Developed multiple hybrid applications using Ionic and Angular.' },
        {
          text: 'Front-end and Back-end development for various projects, including warehouse management and event planning applications.',
        },
        { text: 'Integrated secure payment gateways and QR code functionalities in applications.' },
        { text: 'Collaborated with designers and other developers to deliver high-quality software solutions.' },
      ],
    },
    {
      title: 'Family Business - Mining and Game Ranch',
      startDate: new Date('2020-03'),
      endDate: new Date('2021-04'),
      description:
        'Worked at a family business in Zimbabwe during COVID lockdown. Main roles included IT infrastructure setup for the office, and renewable energy and power backup installations.',
      link: undefined,
      company: 'Family Business',
      information: [
        { text: 'Set up IT infrastructure for the office, including networking, hardware and security.' },
        { text: 'Installed renewable energy systems and power backup solutions.' },
      ],
    },
    {
      title: 'Bachelor of Engineering (Electronic Engineering)',
      startDate: new Date('2013'),
      endDate: new Date('2019'),
      description: `I completed my Bachelor of Engineering in Electronic Engineering at TUKS. During my studies, I discovered a strong interest in software and embedded systems, which led me to focus on embedded systems for my final year project. For this project, I developed an unmanned ground vehicle capable of autonomous navigation to GPS locations while avoiding obstacles using ultrasonic sensors. The project also included wireless power transfer, programming an STM32 microcontroller in C, designing custom ultrasonic sensors, and integrating GPS and ESP WiFi modules.`,
      link: undefined,
      company: 'University of Pretoria',
      information: [
        { text: 'Graduated with a Bachelor of Engineering in Electronic Engineering.' },
        { text: 'Developed a love for embedded systems adn software development.' },
        { text: 'Gained experience in hardware design and integration.' },
      ],
    },
    {
      title: 'High School (IEB) - Treverton College',
      startDate: new Date('2008'),
      endDate: new Date('2012'),
      description: `High School Marks: Mathematics 83%, Physical Sciences 79%, Biology 75%, Business Studies 66%.`,
      link: undefined,
      company: 'Treverton College',
      information: [
        { text: 'Graduated with strong academic performance in Mathematics and Physical Sciences.' },
        { text: 'Demonstrated leadership skills as a school prefect and boarding house prefect.' },
        { text: "Received the Headmaster's Award for outstanding contributions to the school community." },
      ],
    },
  ];

  skills: SkillsType[] = [
    {
      title: 'JavaScript / TypeScript',
      description: 'Proficient in JavaScript and TypeScript for both front-end and back-end development.',
      icon: 'logo-javascript',
    },
    {
      title: 'HTML & CSS',
      description: 'Experienced in building responsive UIs using HTML and CSS.',
      icon: 'logo-html5',
    },
    {
      title: 'Angular',
      description: 'Skilled in Angular for modern web and hybrid mobile app development.',
      icon: 'logo-angular',
    },
    {
      title: 'Ionic',
      description: 'Skilled in Ionic for modern web and hybrid mobile app development.',
      icon: 'logo-angular',
    },
    {
      title: 'Node.js',
      description: 'Back-end development using Node.js, including REST APIs.',
      icon: 'logo-nodejs',
    },
    {
      title: 'Express.js',
      description: 'Building RESTful APIs and server-side applications with Express.js.',
      icon: 'server-outline',
    },

    {
      title: 'MySQL',
      description: 'Database design and querying with MySQL.',
      icon: 'server-outline',
    },
    { title: 'Sequelize', description: 'ORM for Node.js, simplifying database interactions.', icon: 'server-outline' },
    {
      title: 'Capacitor',
      description: 'Integrating native functionality in hybrid apps using Capacitor.',
      icon: 'phone-portrait-outline',
    },
    {
      title: 'Azure Services',
      description: 'Deploying and managing web applications using Azure App Service and Blob Storage.',
      icon: 'cloud-outline',
    },
  ];

  interests: InterestsType[] = [
    {
      title: 'Renewable Energy',
      description: 'Passionate about renewable energy solutions and sustainable technology.',
      icon: 'leaf-outline',
    },
    {
      title: 'Home Automation',
      description: 'Interested in smart home technologies and automation systems.',
      icon: 'home-outline',
    },
    {
      title: 'Computers',
      description: 'Enthusiastic about computers, hardware, and software innovations.',
      icon: 'desktop-outline',
    },
  ];

  constructor(public locationService: LocationService) {
    addIcons({
      locationOutline,
      callOutline,
      mailOutline,
      logoGithub,
      logoLinkedin,
      checkmarkCircleOutline,
      statsChartOutline,
      chevronDown,
      chevronUp,
    });
  }

  // Add these to your component class
  expandedProjects: boolean[] = [];

  ngOnInit() {
    // Initialize all projects as collapsed
    this.expandedProjects = new Array(this.projects.length).fill(false);
  }
  ngAfterViewInit() {}

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
