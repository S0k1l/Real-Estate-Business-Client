import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-properties-card',
  standalone: true,
  imports: [],
  templateUrl: './properties-card.component.html',
  styleUrl: './properties-card.component.css',
})
export class PropertiesCardComponent {
  @Input() details!: any;
}
