/***
 *
 *
 */

import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';


//importar los componentes
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';

const adminRoutes: Routes = [
  {
    //ruta principal
    path: 'admin-panel', component: MainComponent,
    //rutas hijas
    children: [
      { path: '', redirectTo: 'listado', pathMatch: 'full' },
      { path: 'listado', component: ListComponent },
      { path: 'crear', component: AddComponent },
      { path: 'editar', component: EditComponent }
    ]
  },
  { path: 'listado-del-panel', component: ListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class AdminRoutingModule{

}

