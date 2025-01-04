import { Component, OnInit } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { StatsSectionComponent } from '../../components/stats-section/stats-section.component';
import { CardSmComponent } from '../../components/cards/card-sm/card-sm.component';
import { DividerComponent } from '../../components/divider/divider.component';
import { CommonModule } from '@angular/common';
import { ResizeService } from '../../services/resize.service';
import { HowItWorksCardComponent } from '../../components/cards/how-it-works-card/how-it-works-card.component';
import { TeamCardComponent } from '../../components/cards/team-card/team-card.component';
import { ValuedClientCardComponent } from '../../components/cards/valued-client-card/valued-client-card.component';
import { CardsPaginationComponent } from '../../components/cards/cards-pagination/cards-pagination.component';
import { CARD_TYPES } from '../../data/constants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    SectionComponent,
    StatsSectionComponent,
    CardSmComponent,
    DividerComponent,
    CommonModule,
    HowItWorksCardComponent,
    TeamCardComponent,
    ValuedClientCardComponent,
    CardsPaginationComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  constructor(private resizeService: ResizeService) {}

  screenWidth!: number;
  isSmallScreen = true;
  cardsType = CARD_TYPES;

  ngOnInit(): void {
    this.resizeService.screenWidth$.subscribe((width) => {
      this.screenWidth = width;
      this.updateVisibleItems();
    });
    this.updateVisibleItems();
  }

  updateVisibleItems() {
    if (this.screenWidth < 768) {
      this.isSmallScreen = false;
    } else {
      this.isSmallScreen = true;
    }
  }
}
