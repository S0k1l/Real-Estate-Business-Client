import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-service-learn-more-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-learn-more-card.component.html',
  styleUrl: './service-learn-more-card.component.css',
})
export class ServiceLearnMoreCardComponent implements AfterViewInit {
  @Input() heading: string = 'no text';
  @Input() text: string = 'no text';
  @Input() isSmall: boolean = false;

  isWidthSmall: boolean = false;

  @ViewChild('firstDiv') firstDiv!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  private updateWidth(): void {
    const width = this.firstDiv.nativeElement.offsetWidth;
    this.isWidthSmall = width <= 680;
  }

  ngAfterViewInit(): void {
    this.updateWidth();
    this.cdr.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.updateWidth();
  }
}
