import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faMobileScreen, faEnvelope}  from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  faLocationDot = faLocationDot;
  faMobileScreen = faMobileScreen;
  faEnvelope = faEnvelope;
}
