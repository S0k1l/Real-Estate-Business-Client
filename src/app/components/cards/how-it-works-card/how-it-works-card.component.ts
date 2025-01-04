import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-how-it-works-card',
  standalone: true,
  imports: [],
  templateUrl: './how-it-works-card.component.html',
  styleUrl: './how-it-works-card.component.css',
})
export class HowItWorksCardComponent {
  @Input() step: string = 'no text';
  @Input() heading: string = 'no text';
  @Input() text: string = 'no text';
}
