import { Component, OnInit } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { StatsSectionComponent } from '../../components/stats-section/stats-section.component';
import { CardSmComponent } from '../../components/cards/card-sm/card-sm.component';
import { DividerComponent } from '../../components/divider/divider.component';
import { CommonModule } from '@angular/common';
import { ResizeService } from '../../services/resize.service';
import { HowItWorksCardComponent } from '../../components/cards/how-it-works-card/how-it-works-card.component';

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
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  constructor(private resizeService: ResizeService) {}

  screenWidth!: number;
  isSmallScreen = true;

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
