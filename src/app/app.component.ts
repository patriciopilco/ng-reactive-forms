import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SideMenuComponent]
})
export class AppComponent {
  title = 'myapp';
}
