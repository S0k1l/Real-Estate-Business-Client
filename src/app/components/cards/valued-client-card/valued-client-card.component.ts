import { Component, Input } from '@angular/core';
import { DividerComponent } from '../../divider/divider.component';

@Component({
  selector: 'app-valued-client-card',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './valued-client-card.component.html',
  styleUrl: './valued-client-card.component.css',
})
export class ValuedClientCardComponent {
  @Input() details!: any;
}
