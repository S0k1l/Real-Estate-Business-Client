import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  private screenWidthSubject = new BehaviorSubject<number>(window.innerWidth);
  screenWidth$ = this.screenWidthSubject.asObservable();

  constructor() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  private onResize(event: Event) {
    const newWidth = (event.target as Window).innerWidth;
    this.screenWidthSubject.next(newWidth);
  }
}
