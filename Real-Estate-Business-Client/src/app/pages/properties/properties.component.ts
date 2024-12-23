import { Component } from '@angular/core';
import { DividerComponent } from '../../components/divider/divider.component';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css',
})
export class PropertiesComponent {}
