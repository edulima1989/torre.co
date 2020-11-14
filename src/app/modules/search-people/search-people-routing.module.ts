import { NgModule } from '@angular/core';
import { SearchPeopleComponent } from './components/search-people/search-people.component';
import { RouterModule, Routes } from "@angular/router";


const routes: Routes= [
    {
        path: '',
        component: SearchPeopleComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class SearchPeopleRoutingModule {}