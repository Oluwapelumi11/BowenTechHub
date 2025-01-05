import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  imports: [],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {
  @Input({required:true}) linkName: string = ''
}
