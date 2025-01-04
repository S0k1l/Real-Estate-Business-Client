import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-sm',
  standalone: true,
  imports: [],
  templateUrl: './card-sm.component.html',
  styleUrl: './card-sm.component.css',
})
export class CardSmComponent {
  @Input() imgUrl: string = '/';
  @Input() header: string = 'no text';
  @Input() text: string = 'no text';
}
