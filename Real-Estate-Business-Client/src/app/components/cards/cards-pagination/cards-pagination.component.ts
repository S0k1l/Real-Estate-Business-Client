import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { CARD_TYPES, PROPERTY_TYPES } from '../../../data/constants';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';
import { FaqCardComponent } from '../faq-card/faq-card.component';
import { ResizeService } from '../../../services/resize.service';
import { ValuedClientCardComponent } from '../valued-client-card/valued-client-card.component';

@Component({
  selector: 'app-cards-pagination',
  standalone: true,
  imports: [
    CommonModule,
    PropertyCardComponent,
    TestimonialCardComponent,
    FaqCardComponent,
    ValuedClientCardComponent,
  ],
  templateUrl: './cards-pagination.component.html',
  styleUrl: './cards-pagination.component.css',
})
export class CardsPaginationComponent implements OnInit {
  constructor(private resizeService: ResizeService) {}

  @Input() type: string = '';
  @Input() propertyType: string = '';
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
            imgUrl: 'imgs/properties/Seaside Serenity Villa/Image-__.webp',
            quote: 'Coastal Escapes - Where Waves Beckon',
            name: 'Seaside Serenity Villa',
            details:
              'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood',
            description:
              'Wake up to the soothing melody of waves. This beachfront villa offers.',
            bedrooms: 4,
            bathroom: 3,
            type: 'Villa',
            price: '550,000',
          },
          {
            imgUrl: 'imgs/properties/Metropolitan Haven/Image-__.webp',
            quote: 'Urban Oasis - Life in the Heart of the City',
            name: 'Seaside Serenity Villa',
            details:
              'A chic and fully-furnished 2-bedroom apartment with panoramic city views',
            description:
              'Immerse yourself in the energy of the city. This modern apartment in the heart',
            bedrooms: 2,
            bathroom: 2,
            type: 'Villa',
            price: '550,000',
          },
          {
            imgUrl: 'imgs/properties/Rustic Retreat Cottage/Image-__.webp',
            quote: "Countryside Charm - Escape to Nature's Embrace",

            name: 'Seaside Serenity Villa',
            details:
              'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community',
            description:
              'Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills',
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
      case this.cardTypes.valuedClientCard:
        this.data = [
          {
            since: '2019',
            heading: 'ABC Corporation',
            domain: 'Commercial Real Estate',
            category: 'Luxury Home Development',
            comment:
              "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
          },
          {
            since: '2018',
            heading: 'GreenTech Enterprises',
            domain: 'Commercial Real Estate',
            category: 'Retail Space',
            comment:
              "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
          },
        ];
        break;
      default:
        break;
    }

    this.updateVisibleItems();
  }

  updateVisibleItems() {
    if (this.type == this.cardTypes.valuedClientCard) {
      if (this.screenWidth < 1024) {
        this.visibleItems = this.data.slice(0, 1);
      } else {
        this.visibleItems = this.data.slice(0, 2);
      }
    } else {
      if (this.screenWidth < 768) {
        this.visibleItems = this.data.slice(0, 1);
      } else if (this.screenWidth < 1280) {
        this.visibleItems = this.data.slice(0, 2);
      } else {
        this.visibleItems = this.data.slice(0, 3);
      }
    }
  }
}
