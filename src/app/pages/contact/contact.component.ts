import { Component } from '@angular/core';
import { ServiceItemBtnComponent } from '../../components/service-item-btn/service-item-btn.component';
import { SectionComponent } from '../../components/section/section.component';
import { OfficeLocationCardComponent } from '../../components/cards/office-location-card/office-location-card.component';
import { SelectOption } from '../../interfaces/select-option';
import { CustomSelectComponent } from '../../components/custom-select/custom-select.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ServiceItemBtnComponent,
    SectionComponent,
    OfficeLocationCardComponent,
    CustomSelectComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  inquiryType: SelectOption[] = [
    {
      value: 'Property-Specific Inquiries',
      display: 'Property-Specific Inquiries',
    },
    { value: 'Buying-Related Inquiries', display: 'Buying-Related Inquiries' },
    {
      value: 'Selling-Related Inquiries',
      display: 'Selling-Related Inquiries',
    },
    {
      value: 'Renting-Related Inquiries',
      display: 'Renting-Related Inquiries',
    },
    {
      value: 'Commercial Real Estate Inquiries',
      display: 'Commercial Real Estate Inquiries',
    },
    {
      value: 'Real Estate Investment Inquiries',
      display: 'Real Estate Investment Inquiries',
    },
    { value: 'Relocation Inquiries', display: 'Relocation Inquiries' },
    {
      value: 'Financing and Legal Inquiries',
      display: 'Financing and Legal Inquiries',
    },
    { value: 'General Inquiries', display: 'General Inquiries' },
    {
      value: 'Partnership/Business Inquiries',
      display: 'Partnership/Business Inquiries',
    },
    {
      value: 'Technical Support Inquiries',
      display: 'Technical Support Inquiries',
    },
  ];

  howDidYouHearAboutUs: SelectOption[] = [
    {
      value: 'Online Search',
      display: 'Online Search',
    },
    {
      value: 'Social Media',
      display: 'Social Media',
    },
    {
      value: 'Referral',
      display: 'Referral',
    },
    {
      value: 'Advertisements',
      display: 'Advertisements',
    },
    {
      value: 'Email or Newsletter',
      display: 'Email or Newsletter',
    },
    {
      value: 'Events',
      display: 'Events',
    },
    {
      value: 'Online Reviews',
      display: 'Online Reviews',
    },
    {
      value: 'Property Listing Sites',
      display: 'Property Listing Sites',
    },
    {
      value: 'Direct Visit',
      display: 'Direct Visit',
    },
  ];
}
