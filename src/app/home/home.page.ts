import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverpesquisaPage } from '../pages/popoverpesquisa/popoverpesquisa.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router,
    public fire: AngularFireAuth,
    public nav: NavController,
    public popoverController: PopoverController,
  ) {
  }

}
