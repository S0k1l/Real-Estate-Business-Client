import { Component, HostListener } from '@angular/core';
import { FeaturedPropertiesCardComponent } from '../../components/featured-properties-card/featured-properties-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeaturedPropertiesCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  fPCData = [
    {
      imgUrl:
        'imgs/properties/Seaside Serenity Villa/Seaside Serenity Villa.png',
      name: 'Seaside Serenity Villa',
      description:
        'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood',
      bedrooms: 4,
      bathroom: 3,
      type: 'Villa',
      price: '550,000',
    },
    {
      imgUrl: 'imgs/properties/Metropolitan Haven/Metropolitan Haven.png',
      name: 'Seaside Serenity Villa',
      description:
        'A chic and fully-furnished 2-bedroom apartment with panoramic city views',
      bedrooms: 2,
      bathroom: 2,
      type: 'Villa',
      price: '550,000',
    },
    {
      imgUrl:
        'imgs/properties/Rustic Retreat Cottage/Rustic Retreat Cottage.png',
      name: 'Seaside Serenity Villa',
      description:
        'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community',
      bedrooms: 3,
      bathroom: 3,
      type: 'Villa',
      price: '550,000',
    },
  ];

  visibleItems = this.fPCData.slice(0, 1);
  screenWidth = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = (event.target as Window).innerWidth;
    this.updateVisibleItems();
  }

  ngOnInit() {
    this.updateVisibleItems();
  }

  updateVisibleItems() {
    if (this.screenWidth < 768) {
      this.visibleItems = this.fPCData.slice(0, 1);
    } else if (this.screenWidth < 1280) {
      this.visibleItems = this.fPCData.slice(0, 2);
    } else {
      this.visibleItems = this.fPCData;
    }
  }
}
