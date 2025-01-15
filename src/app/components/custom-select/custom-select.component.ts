import { CommonModule } from '@angular/common';
import {
  Component,
  forwardRef,
  Input,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { DividerComponent } from '../divider/divider.component';
import { SelectOption } from '../../interfaces/select-option';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [CommonModule, DividerComponent, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
  ],
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css'],
})
export class CustomSelectComponent implements ControlValueAccessor, OnInit {
  @Input() options: SelectOption[] = [{ value: null, display: 'no text' }];
  @Input() defaultOption: SelectOption = { value: null, display: 'no text' };
  @Input() imgUrl: string | null = null;

  selectedOption: SelectOption = { value: null, display: 'no text' };
  filteredOptions: SelectOption[] = this.options;
  searchQuery: string = '';
  isDropdownVisible: boolean = false;
  dropdownScrollPosition: number = 0;
  selectedIndex: number = 0;
  currentIndex: number = this.selectedIndex;

  @ViewChild('dropdownList') dropdownList!: ElementRef;
  @ViewChild('dropdownList') dropdownItems!: ElementRef;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.options = [this.defaultOption, ...this.options];
    this.selectedOption = this.defaultOption;
    this.filteredOptions = this.options;
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
    this.currentIndex = this.selectedIndex;

    if (this.isDropdownVisible) {
      setTimeout(() => {
        const selectedElement =
          this.dropdownList.nativeElement.querySelector('li.bg-gray-40');
        if (selectedElement) {
          selectedElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          });
        }
      }, 50);
    }
  }

  handleArrows(event: KeyboardEvent) {
    this.isDropdownVisible = true;
    if (this.dropdownItems) {
      const items = this.dropdownItems.nativeElement.children;
      if (event.key === 'ArrowDown') {
        this.currentIndex = (this.currentIndex + 1) % items.length;
      } else if (event.key === 'ArrowUp') {
        this.currentIndex =
          (this.currentIndex - 1 + items.length) % items.length;
      }

      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        items[this.currentIndex]?.focus();
      }
    }
  }

  handleEnter(event: KeyboardEvent, index: number, option?: SelectOption) {
    if (event.key === 'Enter' && option) {
      this.selectOption(option, index);
    }
  }

  filterOptions(): void {
    this.isDropdownVisible = true;
    const fuse = new Fuse(this.options, {
      keys: ['value', 'display'],
      threshold: 0.3,
    });

    this.filteredOptions = this.searchQuery
      ? fuse.search(this.searchQuery).map((result) => result.item)
      : this.options;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    if (value !== undefined && value !== null) {
      this.selectedOption = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  selectOption(option: SelectOption, index: number) {
    this.selectedOption = option;
    this.isDropdownVisible = false;
    this.searchQuery = '';
    this.filteredOptions = this.options;
    this.selectedIndex = index;
    this.currentIndex = this.selectedIndex;
    this.onChange(option.value);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isDropdownVisible = false;
    }
  }
}
