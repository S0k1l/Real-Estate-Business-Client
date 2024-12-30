import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DividerComponent } from '../../components/divider/divider.component';
import { SectionComponent } from '../../components/section/section.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { ResizeService } from '../../services/resize.service';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [CommonModule, DividerComponent, SectionComponent, PricingComponent],
  templateUrl: './property.component.html',
  styleUrl: './property.component.css',
})
export class PropertyComponent implements OnInit {
  @ViewChild('imageList', { static: false }) imageList!: ElementRef;

  screenWidth!: number;
  isScreenBig: boolean = true;

  images: string[] = [
    'imgs/properties/Seaside Serenity Villa/Image-_0_.webp',
    'imgs/properties/Seaside Serenity Villa/Image-_1_.webp',
    'imgs/properties/Seaside Serenity Villa/Image-_2_.webp',
    'imgs/properties/Seaside Serenity Villa/Image-_3_.webp',
    'imgs/properties/Seaside Serenity Villa/Image-_4_.webp',
    'imgs/properties/Seaside Serenity Villa/Image-_5_.webp',
    'imgs/properties/Seaside Serenity Villa/Image-_6_.webp',
    'imgs/properties/Seaside Serenity Villa/Image-_7_.webp',
    'imgs/properties/Seaside Serenity Villa/Image-_8_.webp',
  ];

  currentIndexes: number[] = [0, 1];

  constructor(private resizeService: ResizeService) {}
  ngOnInit(): void {
    this.resizeService.screenWidth$.subscribe((width) => {
      this.screenWidth = width;
      this.updateWindowSize();
    });
    this.updateWindowSize();
  }

  prev(): void {
    this.currentIndexes[1] = this.currentIndexes[0];
    this.currentIndexes[0] =
      (this.currentIndexes[0] - 1 + this.images.length) % this.images.length;
    this.scrollToImage(this.currentIndexes[0]);
  }

  next(): void {
    this.currentIndexes[0] = this.currentIndexes[1];
    this.currentIndexes[1] = (this.currentIndexes[1] + 1) % this.images.length;
    this.scrollToImage(this.currentIndexes[0]);
  }

  select(index: number) {
    this.currentIndexes[0] = index;
    this.currentIndexes[1] = (this.currentIndexes[0] + 1) % this.images.length;
  }

  scrollToImage(index: number) {
    const element = document.getElementById('image-' + index);
    if (element && this.imageList) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }

  updateWindowSize() {
    if (this.screenWidth < 1440) {
      this.isScreenBig = false;
    } else {
      this.isScreenBig = true;
    }
  }
}
