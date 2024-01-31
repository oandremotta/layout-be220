import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { CardListComponent } from '../components/card-list/card-list.component';
import { UserService } from '../services/user.service';
import { Usuario } from '../mocks/user.data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent, CardListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {

  usuario!: Usuario;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.usuario = this.userService.getUsuario();
  }
}
