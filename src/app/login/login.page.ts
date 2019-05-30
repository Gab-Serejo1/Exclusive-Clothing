import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('email') email;
  @ViewChild('senha') senha;

  constructor(public router: Router,
    public fire: AngularFireAuth,
    public loadingController : LoadingController,
    public toastController : ToastController ) { }

  ngOnInit() {
  }

  logar() {
    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
      .then(() => {
        console.log('Logado com sucesso');
        this.router.navigate(['/home']);
      })
      .catch(() => {
        console.log('Login Inválido');
      })
  }

  cadastrar() {
    this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.senha.value)
      .then(() => { 
        this.toast('Cadastrado com sucesso');
        this.router.navigate(['/home']);
        console.log("Cadastrado com sucesso!");
        this.loadingController.dismiss();
      }).catch(() => {
        console.log("Não foi possível cadastrar");
        this.loadingController.dismiss();
      })
  }
  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();
  }
  async toast(msg : string) {
    const toast = await this.toastController.create({
      message: 'Login realizado com sucesso!',
      duration: 2000
    });
    toast.present();
  }
}
