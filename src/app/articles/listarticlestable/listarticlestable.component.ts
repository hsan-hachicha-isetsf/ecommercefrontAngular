import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Article } from 'src/app/models/article';
@Component({
  selector: 'app-listarticlestable',
  templateUrl: './listarticlestable.component.html',
  styleUrls: ['./listarticlestable.component.css']
})
export class ListarticlestableComponent {
  articles:Article[]
  constructor(private artserv:ArticlesService){}
ngOnInit(){
  this.Listart()
}
Listart(){
return this.artserv.getarticles().subscribe(data=>
  this.articles=data),
  (error:any)=>console.log(error)
  

}
}
