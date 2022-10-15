import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { NgxPaginationModule } from 'ngx-pagination/lib/ngx-pagination.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
//import { MovieDetailsComponent } from './movie-details/movie-details.component';
//import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent  
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
