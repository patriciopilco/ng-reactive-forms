import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'shared-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public reactiveMenu: MenuItem[] = [
    { title: 'Basic', route: 'reactive/basic' },
    { title: 'Dynamic', route: 'reactive/dynamic' },
    { title: 'Switches', route: 'reactive/switches' },
  ];


  public authMenu: MenuItem[] = [
    { title: 'Registro', route: './auth' },
  ];

}
