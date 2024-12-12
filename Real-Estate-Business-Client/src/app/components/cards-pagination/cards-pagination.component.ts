import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { PropertiesCardComponent } from '../properties-card/properties-card.component';
import { CARD_TYPES } from '../../data/constants';
import { ClientsSayCardComponent } from '../clients-say-card/clients-say-card.component';

@Component({
  selector: 'app-cards-pagination',
  standalone: true,
  imports: [CommonModule, PropertiesCardComponent, ClientsSayCardComponent],
  templateUrl: './cards-pagination.component.html',
  styleUrl: './cards-pagination.component.css',
})
export class CardsPaginationComponent {
  @Input() btnText: string = 'no text';
  @Input() btnLink: string = '/noLink';
  @Input() type: string = '';

  cardTypes = CARD_TYPES;
  data: any = [];

  visibleItems = this.data;
  screenWidth = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = (event.target as Window).innerWidth;
    this.updateVisibleItems();
  }
  ngOnInit() {
    switch (this.type) {
      case this.cardTypes.propertiesCard:
        this.data = [
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
        break;
      case this.cardTypes.clientsSay:
        this.data = [
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
        break;

      default:
        break;
    }

    this.updateVisibleItems();
  }
  updateVisibleItems() {
    if (this.screenWidth < 768) {
      this.visibleItems = this.data.slice(0, 1);
    } else if (this.screenWidth < 1280) {
      this.visibleItems = this.data.slice(0, 2);
    } else {
      this.visibleItems = this.data;
    }
  }
}
