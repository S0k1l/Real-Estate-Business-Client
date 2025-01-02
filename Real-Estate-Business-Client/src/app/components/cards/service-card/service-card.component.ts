import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css',
})
export class ServiceCardComponent {
  @Input() heading: string = 'no text';
  @Input() text: string = 'no text';
  @Input() imgUrl: string = '/';
}
