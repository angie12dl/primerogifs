import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.intercafes';

@Component({
  selector: 'app-gifs-cards',
  templateUrl: './gifs-cards.component.html'
})
export class GifsCardsComponent {
  @Input()
  public gifs: Gif [] = [];
  
}
