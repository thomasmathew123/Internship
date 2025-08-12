import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {


  @Input() title='no value';
  @Input() description="aaaa";
  @Input() image="...";
  
}
