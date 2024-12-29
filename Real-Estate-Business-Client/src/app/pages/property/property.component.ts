import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DividerComponent } from '../../components/divider/divider.component';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [CommonModule, DividerComponent, SectionComponent],
  templateUrl: './property.component.html',
  styleUrl: './property.component.css',
})
export class PropertyComponent {
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

  @ViewChild('imageList', { static: false }) imageList!: ElementRef;

  currentIndexes: number[] = [0, 1];

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
}
