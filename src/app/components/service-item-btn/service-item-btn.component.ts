import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-item-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-item-btn.component.html',
  styleUrl: './service-item-btn.component.css',
})
export class ServiceItemBtnComponent {
  @Input() iconUrl: string = 'no img';
  @Input() text: string = 'no text';
  @Input() link: string = '/';
}
