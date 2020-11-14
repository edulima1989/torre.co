import { SearchPeopleRoutingModule } from './search-people-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPeopleComponent } from '../search-people/components/search-people/search-people.component';

@NgModule({
  imports: [
    SearchPeopleRoutingModule,
    CommonModule
  ],
  declarations: [SearchPeopleComponent]
})
export class SearchPeopleModule { }
