import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, DividerComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
