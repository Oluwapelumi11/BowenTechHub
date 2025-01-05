import { Component } from '@angular/core';
import { NavItemComponent } from "../../Controls/nav-item/nav-item.component";
import { CommunityCardComponent } from "../../Controls/community-card/community-card.component";
import { Community } from '../../Interfaces/community';
import { StudentWorkComponent } from '../../Controls/student-work/student-work.component';
import { GradientTextComponent } from "../../Controls/gradient-text/gradient-text.component";
import { ReasonCardComponent } from "../../Controls/reason-card/reason-card.component";
import { Reason } from '../../Interfaces/reason';
import { TutorCardComponent } from "../../Controls/tutor-card/tutor-card.component";
import { Tutor } from '../../Interfaces/tutor';

@Component({
  selector: 'app-landing-page',
  imports: [NavItemComponent, CommunityCardComponent, StudentWorkComponent, GradientTextComponent, ReasonCardComponent, TutorCardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {





  comunities: Community[] =[
    {svg:'data-science.svg', link:'applynow'},
    {svg:'data-science.svg', link:'applynow'},
    {svg:'backend.svg', link:'applynow'},
    {svg:'graphics.svg', link:'applynow'},
    {svg:'swe.svg', link:'applynow'},
    {svg:'cyber.svg', link:'applynow'},
    {svg:'Product-design.svg', link:'applynow'},
    {svg:'', link:'applynow'},
    {svg:'Product-design.svg', link:'applynow'},
  ]

  studentWorks: string[] = ['','','','','','']

  reasons: Reason[] =[
    {title:'Tailored Learning Paths',description:'Customized learning plans aligned with your career goals, offering mentorship, flexible schedules to ensure your success.',colour:'#EF4972'},
    {title:'Hands-On Projects',description:'Gain real-world experience through projects, hackathons and pitch competitions that boost your portfolio',colour:'#F47D57'},
    {title:'Community Networking',description:'Connect with like minded individuals through meetups, events and collaborative projects to unlock new opportunities.',colour:'#002B8C'},
    {title:'Tailored Learning Paths',description:'Customized learning plans aligned with your career goals, offering mentorship, flexible schedules to ensure your success.',colour:'#AC247C'},
    {title:'Affordable Tech Education',description:'Quality training at an accessible price, making premium tech education affordable to more people',colour:'#605099'},
    {title:'Expert Mentorship',description:'Recieve dedicated guidance from industry leaders to excel in your career and personal growth.',colour:'#585AA8'},
  ]

  tutors: Tutor[] = [
    {name:'Stephan Oshiomogho', description:'President, Product Design Community'},
    {name:'Ojedokun olaniyi', description:'Product Design Instructor'},
    {name:'Iretomiwa Adebiyi Judith', description:'President, Project Management Community'},
    {name:'Okpala Peniel', description:'Project Management Tutor'},
    {name:'Adekeye Adeola', description:'President, Graphic Design Community'},
    {name:'Ojekunle Adeola', description:'Backend Development Tutor'},
  ]
}
