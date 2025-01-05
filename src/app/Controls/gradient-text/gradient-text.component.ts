import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gradient-text',
  imports: [],
  templateUrl: './gradient-text.component.html',
  styleUrl: './gradient-text.component.css'
})
export class GradientTextComponent {
 @Input() text :string = 'Gradient Text'
}
