import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { StatsSectionComponent } from '../../components/stats-section/stats-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionComponent, StatsSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
