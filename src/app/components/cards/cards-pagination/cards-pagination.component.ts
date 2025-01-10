import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { CARD_TYPES, PROPERTY_TYPES } from '../../../data/constants';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';
import { FaqCardComponent } from '../faq-card/faq-card.component';
import { ResizeService } from '../../../services/resize.service';
import { ValuedClientCardComponent } from '../valued-client-card/valued-client-card.component';
import { PaginationService } from '../../../services/pagination.service';

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
  constructor(
    private resizeService: ResizeService,
    private paginationService: PaginationService
  ) {}

  @Input() type: string = '';
  @Input() propertyType: string = '';
  cardTypes = CARD_TYPES;

  data: any = [];
  visibleItems = this.data;
  screenWidth!: number;

  curentPage: number = 1;
  hasPreviousPage: boolean = false;
  hasNextPage: boolean = true;
  totalPages: number = 10;
  pageSize: number = 3;

  ngOnInit() {
    this.resizeService.screenWidth$.subscribe((width) => {
      this.screenWidth = width;
      this.updateVisibleItems();
    });

    this.updateVisibleItems();
  }

  updateVisibleItems() {
    if (this.type == this.cardTypes.valuedClientCard) {
      if (this.screenWidth < 1024) {
        this.visibleItems = this.data.slice(0, 1);
        this.pageSize = 1;
      } else {
        this.visibleItems = this.data.slice(0, 2);
        this.pageSize = 2;
      }
    } else {
      if (this.screenWidth < 768) {
        this.visibleItems = this.data.slice(0, 1);
        this.pageSize = 1;
      } else if (this.screenWidth < 1280) {
        this.visibleItems = this.data.slice(0, 2);
        this.pageSize = 2;
      } else {
        this.visibleItems = this.data.slice(0, 3);
        this.pageSize = 3;
      }
    }

    this.getData();
  }

  nextPage() {
    this.curentPage = this.hasNextPage
      ? (this.curentPage += 1)
      : (this.curentPage = 1);
    this.getData();
  }

  getData() {
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
        this.paginationService
          .getReviews(this.curentPage, this.pageSize)
          .subscribe({
            next: (res) => {
              this.data = res.items;
              this.hasNextPage = res.hasNextPage;
              this.hasPreviousPage = res.hasPreviousPage;
              this.totalPages = res.totalPages;
            },
          });

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
  }
}
