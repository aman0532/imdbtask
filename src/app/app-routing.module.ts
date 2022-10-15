import { NgxPaginationModule } from 'ngx-pagination';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieComponent } from './movie/movie.component';


const routes: Routes = [
  {path: '', redirectTo: 'movie', pathMatch: 'full'},
  { path: 'movie', component: MovieComponent},

  // {path:'movie[]/:title', component:MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
