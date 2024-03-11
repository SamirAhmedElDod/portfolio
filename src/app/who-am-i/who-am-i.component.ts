import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck}  from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from "@angular/common";
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-who-am-i',
  standalone: true,
  imports: [ FontAwesomeModule , CommonModule ,RouterLink ],
  templateUrl: './who-am-i.component.html',
  styleUrl: './who-am-i.component.css'
})
export class WhoAmIComponent {

  faCheck = faCheck;


}
