import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , RouterLink,  WhoAmIComponent , HeaderComponent , FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_app';

}
