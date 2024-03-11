import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faFaceGrinWink, faFaceGrinBeamSweat} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ FontAwesomeModule, RouterLink ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
class_check : boolean = false;
  faFaceGrinWink = faFaceGrinWink;
  faFaceGrinBeamSweat = faFaceGrinBeamSweat;

  currentIcon = faFaceGrinWink;
  toggleIcons(){
    if (this.currentIcon === faFaceGrinWink) {
      this.currentIcon = faFaceGrinBeamSweat;
    } else {
      this.currentIcon = faFaceGrinWink;
    }
  }
}
