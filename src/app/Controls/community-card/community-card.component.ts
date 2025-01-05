import { Component, Input } from '@angular/core';
import { Community } from '../../Interfaces/community';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community-card',
  imports: [],
  templateUrl: './community-card.component.html',
  styleUrl: './community-card.component.css'
})
export class CommunityCardComponent {
@Input() Community : Community = { svg: "frontend.svg", link:"applynow"}


constructor(private router: Router){

}

gotoApply(link:string){
  this.router.navigateByUrl(link)
}
}
