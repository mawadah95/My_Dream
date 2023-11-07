import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
      this.items = [
          //{ label: 'Home', icon: 'pi pi-fw pi-home' },
         // { label: 'Login', icon: 'pi pi-fw pi-calendar' },
          { label: 'Cart', icon: 'pi pi-fw pi-pencil' },
          { label: 'Product', icon: 'pi pi-fw pi-pencil' },
          { label: 'About Us', icon: 'pi pi-fw pi-file' },
          { label: 'Contact', icon: 'pi pi-fw pi-cog' }
      ];

      this.activeItem = this.items[0];
  }

}
