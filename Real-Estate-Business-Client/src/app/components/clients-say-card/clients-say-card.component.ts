import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clients-say-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients-say-card.component.html',
  styleUrl: './clients-say-card.component.css',
})
export class ClientsSayCardComponent {
  @Input() details!: any;
  stars = Array(5).fill(0);
}
