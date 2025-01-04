import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-card',
  standalone: true,
  imports: [],
  templateUrl: './faq-card.component.html',
  styleUrl: './faq-card.component.css',
})
export class FaqCardComponent {
  @Input() details!: any;
}
