import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { CARD_TYPES } from '../../../data/constants';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';
import { FaqCardComponent } from '../faq-card/faq-card.component';
import { ResizeService } from '../../../services/resize.service';

@Component({
  selector: 'app-cards-pagination',
  standalone: true,
  imports: [
    CommonModule,
    PropertyCardComponent,
    TestimonialCardComponent,
    FaqCardComponent,
  ],
  templateUrl: './cards-pagination.component.html',
  styleUrl: './cards-pagination.component.css',
})
export class CardsPaginationComponent implements OnInit {
  constructor(private resizeService: ResizeService) {}

  @Input() type: string = '';

  cardTypes = CARD_TYPES;
  data: any = [];
  visibleItems = this.data;
  screenWidth!: number;

  ngOnInit() {
    this.resizeService.screenWidth$.subscribe((width) => {
      this.screenWidth = width;
      this.updateVisibleItems();
    });

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
      case this.cardTypes.testimonialCard:
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

      case this.cardTypes.faqCard:
        this.data = [
          {
            heading: 'How do I search for properties on Estatein?',
            text: 'Learn how to use our user-friendly search tools to find properties that match your criteria.',
          },
          {
            heading:
              'What documents do I need to sell my property through Estatein?',
            text: 'Find out about the necessary documentation for listing your property with us.',
          },
          {
            heading: 'How can I contact an Estatein agent?',
            text: 'Discover the different ways you can get in touch with our experienced agents.',
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
