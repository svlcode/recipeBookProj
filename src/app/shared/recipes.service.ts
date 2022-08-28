import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe(1,
      'Test',
      'This is a test recipe',
      'https://thumbs.dreamstime.com/b/fresh-delicious-spagetti-bolognese-wooden-table-fresh-delicious-spagetti-bolognese-wooden-table-133035144.jpg'
    ),
    new Recipe(2,
      'Ribs',
      'Recipe for BBQ Ribs',
      'https://simply-delicious-food.com/wp-content/uploads/2020/06/Sticky-BBQ-ribs-3-500x500.jpg'
    ),
  ];

  constructor() { }
  
  public getRecipeById(id: number): Recipe {
    return this.recipes.find(r => r.id === id);
  }
}
