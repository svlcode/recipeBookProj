import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from 'src/app/shared/recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.recipe = this.recipesService.getRecipeById(id);

    this.route.params.subscribe((params: Params) => {
      const id = +params['id'];
      this.recipe = this.recipesService.getRecipeById(id);
    })
  }
}
