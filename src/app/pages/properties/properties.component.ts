import { Component, OnInit } from '@angular/core';
import { DividerComponent } from '../../components/divider/divider.component';
import { SectionComponent } from '../../components/section/section.component';
import { CardsPaginationComponent } from '../../components/cards/cards-pagination/cards-pagination.component';
import { CARD_TYPES, PROPERTY_TYPES } from '../../data/constants';
import { LocationsService } from '../../services/locations.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [
    DividerComponent,
    SectionComponent,
    CardsPaginationComponent,
    CommonModule,
  ],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css',
})
export class PropertiesComponent implements OnInit {
  cardTypes = CARD_TYPES;
  propertyTypes = PROPERTY_TYPES;
  locations: string[] = [];

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.locationsService.getAll().subscribe({
      next: (res) => {
        this.locations = res.locations;
      },
    });
  }
}
