import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { HomeComponent } from './componentes/home/home.component';
import { HelloComponent } from './componentes/hello/hello.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { TrayectoriaComponent } from './componentes/trayectoria/trayectoria.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';

const rutas=[
  {
    path:'',
    component:HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HelloComponent,
    ServiciosComponent,
    TrayectoriaComponent,
    ClientesComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas, { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
