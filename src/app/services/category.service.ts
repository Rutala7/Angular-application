import { moviesList } from './../shared/data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories() {
    return moviesList.categories;
  }

  getCategoryById(id$: string) {
    return moviesList.categories.find((cat) => cat.id.toString() == id$);
  }
 }
