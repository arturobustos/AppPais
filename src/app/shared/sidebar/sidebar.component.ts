import { Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles:[
    `
    li{
     cursor: pointer;
    }
    `
  ]
})
//los modulos por si solos son componentes aislados 
//por eso nos da error copiar y pegar el html 
export class SidebarComponent  {

 

}
