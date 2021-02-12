import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigateTo($event){
    console.log('adentro del evento');
    
    const section = document.querySelector($event.target.hash)
    console.log(section);
    section.scrollIntoView({ behavior: 'smooth', block: "center", inline: 'nearest'})
  }

 
}
