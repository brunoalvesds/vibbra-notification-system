import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  isCollapsed = false;

  constructor() { }
  
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  
  ngOnInit() {
  }

}
