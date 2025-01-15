import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DividerComponent } from '../../components/divider/divider.component';
import { SectionComponent } from '../../components/section/section.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { ResizeService } from '../../services/resize.service';
import { CardsPaginationComponent } from '../../components/cards/cards-pagination/cards-pagination.component';
import { CARD_TYPES } from '../../data/constants';
import { HouseService } from '../../services/house.service';
import { Property } from '../../interfaces/property';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [
    CommonModule,
    DividerComponent,
    SectionComponent,
    PricingComponent,
    CardsPaginationComponent,
  ],
  templateUrl: './property.component.html',
  styleUrl: './property.component.css',
})
export class PropertyComponent implements OnInit {
  @ViewChild('imageList', { static: false }) imageList!: ElementRef;
  @Input() id!: number;

  cardTypes = CARD_TYPES;
  screenWidth!: number;
  isScreenBig: boolean = true;

  currentIndexes: number[] = [0, 1];
  property!: Property;
  constructor(
    private resizeService: ResizeService,
    private houseService: HouseService
  ) {}

  ngOnInit(): void {
    this.houseService.getProperty(this.id).subscribe({
      next: (res) => {
        this.property = res;
        console.log(this.property);
      },
    });

    this.resizeService.screenWidth$.subscribe((width) => {
      this.screenWidth = width;
      this.updateWindowSize();
    });
    this.updateWindowSize();
  }

  prev(): void {
    this.currentIndexes[1] = this.currentIndexes[0];
    this.currentIndexes[0] =
      (this.currentIndexes[0] - 1 + this.property.houseImgs.length) %
      this.property.houseImgs.length;
    this.scrollToImage(this.currentIndexes[0]);
  }

  next(): void {
    this.currentIndexes[0] = this.currentIndexes[1];
    this.currentIndexes[1] =
      (this.currentIndexes[1] + 1) % this.property.houseImgs.length;
    this.scrollToImage(this.currentIndexes[0]);
  }

  select(index: number) {
    this.currentIndexes[0] = index;
    this.currentIndexes[1] =
      (this.currentIndexes[0] + 1) % this.property.houseImgs.length;
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
