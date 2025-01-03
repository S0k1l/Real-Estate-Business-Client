import { Component } from '@angular/core';
import { ServiceItemBtnComponent } from '../../components/service-item-btn/service-item-btn.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ServiceItemBtnComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
