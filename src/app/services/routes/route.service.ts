import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  constructor() {}

  checkIfParentRoute(activatedRoutes: ActivatedRoute) {
    if (activatedRoutes.children.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}
