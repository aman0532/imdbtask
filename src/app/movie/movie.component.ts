
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from '../movie';
import { NgxPaginationModule } from 'ngx-pagination';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


  
  
  constructor(private service:MovieService,private route:ActivatedRoute) {}


  movies!:any;

POSTS:any;
page:number=1;
count:number=0;
tableSize:number=9;
tableSizes:any=[9,18,27,36];
 
  ngOnInit():void {

   this.onpage();


}
onpage()
{
  this.service.getusertList().subscribe(response =>   this.movies = response);

}
tabledatachange(event:any)
{
this.page=event;
this.onpage();
}

ontablesize(event: any):void
{
  this.tableSize=event.target.value;
  this.page=1;
  this.onpage();
}
}
