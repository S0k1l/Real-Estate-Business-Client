import { Component } from '@angular/core';
import { ServiceItemBtnComponent } from '../../components/service-item-btn/service-item-btn.component';
import { SectionComponent } from '../../components/section/section.component';
import { OfficeLocationCardComponent } from '../../components/cards/office-location-card/office-location-card.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ServiceItemBtnComponent,
    SectionComponent,
    OfficeLocationCardComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
