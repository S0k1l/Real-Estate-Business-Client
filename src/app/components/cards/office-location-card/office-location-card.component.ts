import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-office-location-card',
  standalone: true,
  imports: [],
  templateUrl: './office-location-card.component.html',
  styleUrl: './office-location-card.component.css',
})
export class OfficeLocationCardComponent {
  @Input() heading: string = 'no text';
  @Input() address: string = 'no text';
  @Input() text: string = 'no text';
  @Input() email: string = 'no text';
  @Input() phone: string = 'no text';
  @Input() city: string = 'no text';
}
