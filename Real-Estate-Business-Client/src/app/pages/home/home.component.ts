import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsPaginationComponent } from '../../components/cards/cards-pagination/cards-pagination.component';
import { CARD_TYPES } from '../../data/constants';
import { ServiceItemBtnComponent } from '../../components/service-item-btn/service-item-btn.component';
import { StatsSectionComponent } from '../../components/stats-section/stats-section.component';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CardsPaginationComponent,
    ServiceItemBtnComponent,
    StatsSectionComponent,
    SectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cardTypes = CARD_TYPES;
}
