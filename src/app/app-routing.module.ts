import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {dashboardRoutes} from "./dashboard/dashboard.routes";



const routes : Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: DashboardComponent,
    //Para que tenga rutas hijas
    children: dashboardRoutes
  },
  {
    path: '**',
    redirectTo: ''
  }

]

//Registramos nuestro reouter --> Recuerda registrar el modulo en los import del modulo padre
@NgModule({
  //Configuracion a nivel raiz para hacer posible el enrutamiento
    imports: [RouterModule.forRoot(routes)],
  //Hra que este disponible para toda la aplciacion
    exports: [RouterModule]
})
export class AppRoutingModule { }
