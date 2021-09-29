import { Injectable } from '@angular/core';
import { BehaviorSubject, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly isMenuOpenSubject = new BehaviorSubject<boolean>(false);
  public readonly isMenuOpen$ = this.isMenuOpenSubject
    .asObservable()
    .pipe(shareReplay());

  constructor() {}

  toggleMenu() {
    this.isMenuOpenSubject.next(!this.isMenuOpenSubject.value);
  }
}
