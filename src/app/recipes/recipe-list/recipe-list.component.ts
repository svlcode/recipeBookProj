import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test',
      'This is a test recipe',
      'https://thumbs.dreamstime.com/b/fresh-delicious-spagetti-bolognese-wooden-table-fresh-delicious-spagetti-bolognese-wooden-table-133035144.jpg'
    ),
    new Recipe(
      'Ribs',
      'Recipe for BBQ Ribs',
      'https://simply-delicious-food.com/wp-content/uploads/2020/06/Sticky-BBQ-ribs-3-500x500.jpg'
    ),
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {}

  onSelected(recipe) {
    this.recipeSelected.emit(recipe);
  }
}
