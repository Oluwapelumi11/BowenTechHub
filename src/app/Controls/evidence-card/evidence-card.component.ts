import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Evidence } from '../../Interfaces/evidence';

@Component({
  selector: 'app-evidence-card',
  imports: [NgStyle],
  templateUrl: './evidence-card.component.html',
  styleUrl: './evidence-card.component.css'
})
export class EvidenceCardComponent {
  @Input() evidence : Evidence = {title:'Test', name:'test', description: "test"}
}
