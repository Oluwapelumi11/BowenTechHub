import { Component, Input } from '@angular/core';
import { Tutor } from '../../Interfaces/tutor';

@Component({
  selector: 'app-tutor-card',
  imports: [],
  templateUrl: './tutor-card.component.html',
  styleUrl: './tutor-card.component.css'
})
export class TutorCardComponent {
 @Input() tutor : Tutor = {name:'Damilola Ilesanmi', description:'Senior Animator at Cre8iveStudio Abuja, Nigeria'}
}
