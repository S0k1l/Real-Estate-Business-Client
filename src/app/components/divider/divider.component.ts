import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.css',
})
export class DividerComponent {
  @Input() vertical: boolean = false;
}
