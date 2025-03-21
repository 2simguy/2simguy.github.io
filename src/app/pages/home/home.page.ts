import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxTimelineEvent, NgxTimelineModule, NgxTimelineEventChangeSide } from '@frxjs/ngx-timeline';

import {
  IonContent,
  IonList,
  IonItem,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
} from '@ionic/angular/standalone';

interface TimeLineType {
  title: string;
  description: string;
  date: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonCol,
    IonRow,
    IonGrid,
    IonCard,
    IonItem,
    IonList,
    IonContent,
    CommonModule,
    FormsModule,
    NgxTimelineModule,
  ],
})
export class HomePage implements OnInit {
  timeLine: NgxTimelineEvent[] = [
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

  timeLineOptions = {
    side: NgxTimelineEventChangeSide.ALL,
  };

  constructor() {}

  ngOnInit() {}
}
