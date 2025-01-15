import { Component, OnInit } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { CardsPaginationComponent } from '../../components/cards/cards-pagination/cards-pagination.component';
import { CARD_TYPES, PROPERTY_TYPES } from '../../data/constants';
import { LocationsService } from '../../services/locations.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HousesTypesService } from '../../services/houses-types.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomSelectComponent } from '../../components/custom-select/custom-select.component';
import { SelectOption } from '../../interfaces/select-option';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [
    SectionComponent,
    CardsPaginationComponent,
    CommonModule,
    ReactiveFormsModule,
    CustomSelectComponent,
  ],
  providers: [CurrencyPipe],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css',
})
export class PropertiesComponent implements OnInit {
  cardTypes = CARD_TYPES;
  propertyTypes = PROPERTY_TYPES;
  form!: FormGroup;

  priceRanges!: SelectOption[];
  types!: SelectOption[];
  locations!: SelectOption[];
  propertySize!: SelectOption[];
  buildYears!: SelectOption[];
  bathAndBeds!: SelectOption[];

  constructor(
    public formBuilder: FormBuilder,
    private locationsService: LocationsService,
    private categoriesService: HousesTypesService,
    private currencyPipe: CurrencyPipe
  ) {}

  ngOnInit(): void {
    this.categoriesService.getAll().subscribe({
      next: (res) => {
        this.types = [];
        res.forEach((el) => {
          this.types.push({ value: el.id, display: el.type });
        });
      },
    });

    this.locationsService.getAll().subscribe({
      next: (res) => {
        this.locations = [];
        res.locations.forEach((element) => {
          this.locations.push({ value: element, display: element });
        });
      },
    });

    this.priceRanges = Array.from({ length: 12 }, (_, i) => {
      const value = (i + 1) * 2500000;
      return {
        value,
        display: this.currencyPipe.transform(value, '≤ $', undefined, '1.0-0')!,
      };
    });

    this.propertySize = Array.from({ length: 6 }, (_, i) => {
      const value = (i + 1) * 1000;
      return {
        value,
        display: `≤ ${value} ft²`,
      };
    });

    this.buildYears = Array.from({ length: 8 }, (_, i) => {
      const value = i * 10 + 1950;
      return {
        value,
        display: `${String(value).slice(2)}'s`,
      };
    });

    this.bathAndBeds = Array.from({ length: 10 }, (_, i) => {
      const value = i + 1;
      return {
        value,
        display: String(value),
      };
    });

    this.form = this.formBuilder.group({
      name: null,
      location: null,
      type: null,
      priceRange: null,
      propertySize: null,
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onOptionSelected(selectedValue: string) {
    console.log('Selected Value:', selectedValue);
  }
}
