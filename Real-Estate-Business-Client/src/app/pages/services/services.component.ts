import { Component } from '@angular/core';
import { ServiceItemBtnComponent } from '../../components/service-item-btn/service-item-btn.component';
import { SectionComponent } from '../../components/section/section.component';
import { ServiceCardComponent } from '../../components/cards/service-card/service-card.component';
import { ServiceLearnMoreCardComponent } from '../../components/cards/service-learn-more-card/service-learn-more-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    ServiceItemBtnComponent,
    SectionComponent,
    ServiceCardComponent,
    ServiceLearnMoreCardComponent,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {}
