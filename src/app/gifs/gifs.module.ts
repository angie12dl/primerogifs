import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { HomaPageComponent } from './pages/homa/homa-page.component';
import { SearchBoxComponent } from './components/search-box/search-box';
import { CardListComponent } from './component/card-list/card-list.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent,
    HomaPageComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  exports:[
    GifsPageComponent,
    HomaPageComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
