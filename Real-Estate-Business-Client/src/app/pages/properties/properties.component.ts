import { Component } from '@angular/core';
import { DividerComponent } from '../../components/divider/divider.component';
import { SectionComponent } from '../../components/section/section.component';
import { CardsPaginationComponent } from '../../components/cards/cards-pagination/cards-pagination.component';
import { CARD_TYPES, PROPERTY_TYPES } from '../../data/constants';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [DividerComponent, SectionComponent, CardsPaginationComponent],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css',
})
export class PropertiesComponent {
  cardTypes = CARD_TYPES;
  propertyTypes = PROPERTY_TYPES;
}
