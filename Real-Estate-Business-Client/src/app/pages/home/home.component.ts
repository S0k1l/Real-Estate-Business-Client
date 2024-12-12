import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsPaginationComponent } from '../../components/cards-pagination/cards-pagination.component';
import { CARD_TYPES } from '../../data/constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardsPaginationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cardTypes = CARD_TYPES;
}
