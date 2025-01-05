import { Component, Input } from '@angular/core';
import { Reason } from '../../Interfaces/reason';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-reason-card',
  imports: [NgClass, NgStyle],
  templateUrl: './reason-card.component.html',
  styleUrl: './reason-card.component.css'
})
export class ReasonCardComponent {
  @Input() reason: Reason = {title: 'Test Title', description: 'Test Description', colour:'red'}

}
