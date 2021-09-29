import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isMenuOpen$: Observable<boolean> = this.layoutService.isMenuOpen$;

  constructor(private readonly layoutService: LayoutService) {}

  ngOnInit(): void {}
  toggleMenu() {
    this.layoutService.toggleMenu();
  }
}
