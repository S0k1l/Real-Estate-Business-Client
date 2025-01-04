import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.css',
})
export class TeamCardComponent {
  @Input() imgUrl: string = '/';
  @Input() name: string = 'no text';
  @Input() role: string = 'no text';
}
