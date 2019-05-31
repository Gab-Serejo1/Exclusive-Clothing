import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopoverpesquisaPage } from './popoverpesquisa.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverpesquisaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PopoverpesquisaPage]
})
export class PopoverpesquisaPageModule {}
