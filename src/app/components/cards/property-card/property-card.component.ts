import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { PROPERTY_TYPES } from '../../../data/constants';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css',
})
export class PropertyCardComponent implements AfterViewInit {
  @ViewChild('myElement') myElement!: ElementRef;

  @Input() data!: any;
  @Input() type: string = 'no type';

  expand: boolean = false;
  height!: number;
  propertyTypes = PROPERTY_TYPES;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.height = this.myElement.nativeElement.offsetHeight;
      this.myElement.nativeElement.style.height = `${this.height}px`;
    }, 0);
  }

  readMore() {
    this.expand = !this.expand;

    if (this.expand) {
      this.myElement.nativeElement.style.height = '';
    } else {
      this.myElement.nativeElement.style.height = `${this.height}px`;
    }
    console.log(this.height);
  }
}
