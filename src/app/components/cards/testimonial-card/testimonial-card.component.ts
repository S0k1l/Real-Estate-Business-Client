import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Review } from '../../../interfaces/review';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.css',
})
export class TestimonialCardComponent {
  @Input() details!: Review;
  stars = Array(5).fill(0);
}
