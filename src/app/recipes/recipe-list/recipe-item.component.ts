import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() recipeId: number;
  constructor() { }

  ngOnInit() {
  }

}
