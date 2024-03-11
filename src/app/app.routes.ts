import { Routes } from '@angular/router';
// import { FooterComponent } from './footer/footer.component';
// import { HeaderComponent } from './header/header.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CertificateComponent } from './certificate/certificate.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
export const routes: Routes = [
  {path: '*' , component: WhoAmIComponent, title:"About Me"},
  {path: '' , component: WhoAmIComponent, title:"About Me"},
  {path: 'portfolio' , component: PortfolioComponent , title: "My Portfolio"},
  {path: 'certificate' , component: CertificateComponent , title: "My Certificates"},
  {path: 'skills' , component: SkillsComponent , title: "My Skills"},
  {path: 'Contact-us' , component: ContactComponent , title: "Countact Me"},
];
