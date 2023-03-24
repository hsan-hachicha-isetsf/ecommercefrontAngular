import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Scategorie } from 'src/app/models/scategorie';
import { ArticlesService } from 'src/app/services/articles.service';
import { ScategorieService } from 'src/app/services/scategorie.service';
@Component({
  selector: 'app-insertarticle',
  templateUrl: './insertarticle.component.html',
  styleUrls: ['./insertarticle.component.css']
})
export class InsertarticleComponent {
   
    article:Article=new Article()
    scategorie:Scategorie[]
constructor(private artserv:ArticlesService,private router:Router,private scatserv:ScategorieService){}
ngOnInit(){
 this.loadscategorie()
}
loadscategorie(){
  return this.scatserv.getscategories().subscribe(data=>
    this.scategorie=data),
    (error:any)=>console.log(error)
    

}
ajoutarticle=()=>{
  this.artserv.Addarticle(this.article).subscribe((data=>this.router.navigate(['/larticles'])))
}

}
