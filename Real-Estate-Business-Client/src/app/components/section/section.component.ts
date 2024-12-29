import { Component, Input, OnInit } from '@angular/core';
import { StarsDividerComponent } from '../stars-divider/stars-divider.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [StarsDividerComponent, CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
})
export class SectionComponent implements OnInit {
  ngOnInit(): void {
    console.log('isButton: ' + this.isButton);
    console.log('isRightSection: ' + this.isRightSection);
  }
  @Input() header: string = 'no text';
  @Input() text: string = 'no text';
  @Input() isButton: boolean = false;
  @Input() isRightSection: boolean = true;
}
