import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.intercafes';

@Component({
  selector: 'gifs-homa-page',
  templateUrl: './homa-page.component.html'
})
export class HomaPageComponent  {
  constructor ( private gifsService: GifsService){}
  get gifs (): Gif [] {
    return this.gifsService.gifList;
  }
}
