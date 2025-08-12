import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
 
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

  @Input() card:any={
    image:'',
    title:'',
    description:'',
    prices:0
};
item: any;

}