import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-properties-card',
  standalone: true,
  imports: [],
  templateUrl: './featured-properties-card.component.html',
  styleUrl: './featured-properties-card.component.css',
})
export class FeaturedPropertiesCardComponent {
  @Input() details!: any;
}
