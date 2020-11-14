import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
    {
        path: 'search-people',
        loadChildren:() => import('./modules/search-people/search-people.module').then(c => c.SearchPeopleModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always'
  })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }