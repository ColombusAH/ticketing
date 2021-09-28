import { Component, OnInit } from '@angular/core';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isMenuOpen$ = this.layoutService.isMenuOpen$;

  constructor(private readonly layoutService: LayoutService) {}

  ngOnInit(): void {
    console.log('ok');
  }
  toggleMenu() {
    this.layoutService.toggleMenu();
  }
}
