import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { LoggingService } from './logging.service';

@Injectable()
export class IngredientService {
  ingredients: Ingredient[] = [];

  constructor(private loggingService: LoggingService) {}

  public addIngredient(ingredient: Ingredient) {
    this.loggingService.logMessage('Ingredient added');
    this.ingredients.push(ingredient);
  }
}
