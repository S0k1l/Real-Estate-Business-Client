import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { CARD_TYPES, PROPERTY_TYPES } from '../../../data/constants';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';
import { FaqCardComponent } from '../faq-card/faq-card.component';
import { ResizeService } from '../../../services/resize.service';
import { ValuedClientCardComponent } from '../valued-client-card/valued-client-card.component';
import { PaginationService } from '../../../services/pagination.service';
import { Review } from '../../../interfaces/review';
import { ValuedClient } from '../../../interfaces/valued-client';
import { HouseDetailed } from '../../../interfaces/house-detailed';
import { HouseStandard } from '../../../interfaces/house-standard';
import { SearchRequest } from '../../../interfaces/search-request';

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
export class CardsPaginationComponent implements OnInit, OnChanges {
  constructor(
    private resizeService: ResizeService,
    private paginationService: PaginationService
  ) {}
  ngOnChanges(): void {
    this.currentPage = 1;
    this.ngOnInit();
  }

  @Input() type: string = '';
  @Input() propertyType: string = '';
  cardTypes = CARD_TYPES;
  propertyTypes = PROPERTY_TYPES;
  @Input() searchRequest: SearchRequest = {
    name: null,
    location: null,
    propertyTypeId: null,
    pricingRange: null,
    propertySize: null,
  };

  data: Review[] | ValuedClient[] | HouseDetailed[] | HouseStandard[] | any[] =
    [];
  visibleItems = this.data;
  screenWidth!: number;

  currentPage: number = 1;
  hasPreviousPage: boolean = false;
  hasNextPage: boolean = false;
  totalPages: number = 1;
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
    this.currentPage = this.hasNextPage
      ? (this.currentPage += 1)
      : (this.currentPage = 1);
    this.getData();
  }

  PreviousPage() {
    this.currentPage = this.hasPreviousPage
      ? (this.currentPage -= 1)
      : (this.currentPage = this.totalPages);
    this.getData();
  }

  getData() {
    switch (this.type) {
      case this.cardTypes.propertiesCard:
        if (this.propertyType == this.propertyTypes.detailed) {
          this.paginationService
            .getHouseDetailed(this.currentPage, this.pageSize)
            .subscribe({
              next: (res) => {
                this.data = res.items;
                this.hasNextPage = res.hasNextPage;
                this.hasPreviousPage = res.hasPreviousPage;
                this.totalPages = res.totalPages;
              },
            });
        } else {
          if (this.propertyType == this.propertyTypes.standard) {
            this.paginationService
              .getHouseWithSearch(
                this.currentPage,
                this.pageSize,
                this.searchRequest
              )
              .subscribe({
                next: (res) => {
                  this.data = res.items;
                  this.hasNextPage = res.hasNextPage;
                  this.hasPreviousPage = res.hasPreviousPage;
                  this.totalPages = res.totalPages;
                },
              });
          }
        }
        break;
      case this.cardTypes.testimonialCard:
        this.paginationService
          .getReviews(this.currentPage, this.pageSize)
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
        this.paginationService
          .getValuedClients(this.currentPage, this.pageSize)
          .subscribe({
            next: (res) => {
              this.data = res.items;
              this.hasNextPage = res.hasNextPage;
              this.hasPreviousPage = res.hasPreviousPage;
              this.totalPages = res.totalPages;
            },
          });
        break;
      default:
        break;
    }
  }
}
