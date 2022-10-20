
import { RouterModule,Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { NgModule } from "@angular/core";//SIEMPRE DEBEMOS IMPORTAR 
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
//ESTO EN UN MODULE

const routes: Routes = [
{
    path:'', //dirigir a ruta vacia
    component:PorPaisComponent,
    pathMatch: 'full'
},
{
    path:'region', //dirigir a component con routes estatico
    component: PorRegionComponent
},
{
    path:'capital',
    component:PorCapitalComponent
},
{
    path:'pais/:id', //dirigir a component con routes dinamico
    component:VerPaisComponent
},
{
    path:'**', //cualquier otra ruta redirige al home
    redirectTo:''
}
]; //arreglo de rutas 

//SIEMPRE DEBEMOS CREAR EL DECORADOR DEL MODULO
@NgModule({
    imports:[
        RouterModule.forRoot(routes) //importamos la configuracion de nuestras rutas
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}