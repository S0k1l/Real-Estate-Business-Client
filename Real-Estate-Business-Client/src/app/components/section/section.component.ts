import { Component, Input } from '@angular/core';
import { StarsDividerComponent } from '../stars-divider/stars-divider.component';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [StarsDividerComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
})
export class SectionComponent {
  @Input() header: string = 'no text';
  @Input() text: string = 'no text';
}
