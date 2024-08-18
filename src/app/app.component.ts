import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AsideComponent} from './components/layout/aside/aside.component';
import { Aside2Component} from './components/layout/aside2/aside2.component';
import { FooterComponent} from './components/layout/footer/footer.component';
import { ContentComponent}  from './components/layout/content/content.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,FooterComponent,ContentComponent,AsideComponent,Aside2Component], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'paginaLed';
}
