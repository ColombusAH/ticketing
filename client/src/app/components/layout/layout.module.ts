import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutService } from './layout.service';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  providers: [LayoutService],
  exports: [],
})
export class LayoutModule {}
