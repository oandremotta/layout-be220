import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { CardListComponent } from '../components/card-list/card-list.component';
import { UserService } from '../services/user.service';
import { Usuario } from '../mocks/user.data';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MenuComponent } from '../components/menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent, CardListComponent, MenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {

  usuario!: Usuario;
  loggedUser: any;
  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.usuario = this.userService.getUsuario();
    this.getUser();
  }

  getUser() {
    this.authService.getLoggedInUser().subscribe((user: any) => {
      this.loggedUser = user;
    });
  }

}
