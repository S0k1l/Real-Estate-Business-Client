import { Component, HostListener } from '@angular/core';
import { FeaturedPropertiesCardComponent } from '../../components/featured-properties-card/featured-properties-card.component';
import { CommonModule } from '@angular/common';
import { ClientsSayCardComponent } from '../../components/clients-say-card/clients-say-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FeaturedPropertiesCardComponent,
    CommonModule,
    ClientsSayCardComponent,
  ],
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

  clientSayData = [
    {
      rating: 5,
      header: 'Exceptional Service!',
      description:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      userImg: 'imgs/users/Wade Warren.webp',
      userName: 'Wade Warren',
      userLocation: 'USA, California',
    },
    {
      rating: 4,
      header: 'Efficient and Reliable',
      description:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      userImg: 'imgs/users/Emelie Thomson.webp',
      userName: 'Emelie Thomson',
      userLocation: 'USA, Florida',
    },
    {
      rating: 3,
      header: 'Trusted Advisors',
      description:
        'The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!',
      userImg: 'imgs/users/John Mans.webp',
      userName: 'John Mans',
      userLocation: 'USA, Nevada',
    },
  ];

  visibleFPCDataItems = this.fPCData.slice(0, 1);
  visibleClientSayDataItems = this.clientSayData.slice(0, 1);
  screenWidth = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenWidth = (event.target as Window).innerWidth;
    this.updateVisibleItems();
  }

  ngOnInit(): void {
    this.updateVisibleItems();
  }

  private updateVisibleItems(): void {
    const itemsToShow = this.getItemsCountForScreenWidth(this.screenWidth);
    this.visibleFPCDataItems = this.fPCData.slice(0, itemsToShow);
    this.visibleClientSayDataItems = this.clientSayData.slice(0, itemsToShow);
  }

  private getItemsCountForScreenWidth(width: number): number {
    if (width < 768) {
      return 1;
    } else if (width < 1280) {
      return 2;
    } else {
      return 3;
    }
  }
}
