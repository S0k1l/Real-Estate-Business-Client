import { Component, Input } from '@angular/core';
import { PROPERTY_TYPES } from '../../../data/constants';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css',
})
export class PropertyCardComponent {
  @Input() data!: any;
  @Input() type: string = 'no type';

  propertyTypes = PROPERTY_TYPES;
}
