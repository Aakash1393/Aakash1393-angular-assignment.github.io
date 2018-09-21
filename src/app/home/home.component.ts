import { Component, OnInit, OnDestroy } from '@angular/core';
// import {BlogService} from "../blog.service";
import {BlogHttpService} from "../blog-http.service";
import { ActivatedRoute,Router } from '@angular/router';
// import { Z_DATA_ERROR } from 'zlib';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  // ngOnDestroy(): void{
  //   throw new Error("Method not implemented");
  // }
  // public allBlogs={};
  // public characters;
  // public allBlogs=[
    public allDetails = {};
    public newArr=[];
    

  
  constructor(public blogHttpService:BlogHttpService,private _route:ActivatedRoute,private router:Router) { 
    console.log("Home component constructor called");
    // let btn = document.getElementById("coolbutton");

    // if(btn){
    //   btn.addEventListener("click", (e:Event) => this.getCharacters());
    //   }  
    
  }

  getCharacters(value){
    var url="https://anapioficeandfire.com/api";
    for(var i=0;i<this.allDetails["characters"].length;i++)
    {
      if(value==this.allDetails["characters"][i].url)
      {
        
        var ret = value.replace(url);
        var regex = /undefined/gi;
        var value=(ret.replace(regex, ''));
        console.log(value);
        
        this.router.navigate(['/blog',value]);
      }  
    }
  } 

  getBooks(value){
    var url="https://anapioficeandfire.com/api";
    for(var i=0;i<this.allDetails["books"].length;i++)
    {
      if(value==this.allDetails["books"][i].url)
      {
        
        var ret = value.replace(url);
        var regex = /undefined/gi;
        var value=(ret.replace(regex, ''));
        console.log(value);
        
        this.router.navigate(['/create',value]);
      }  
    }
  }
  
  getHouses(value){
    var url="https://anapioficeandfire.com/api";
    for(var i=0;i<this.allDetails["houses"].length;i++)
    {
      if(value==this.allDetails["houses"][i].url)
      {
        
        var ret = value.replace(url);
        var regex = /undefined/gi;
        var value=(ret.replace(regex, ''));
        console.log(value);
        
        this.router.navigate(['/edit',value]);
      }  
    }
  } 
  

  ngOnInit() {
    console.log("Home component oninit called");
   
    
    this.allDetails["characters"] = [];
    this.allDetails["books"] = [];
    this.allDetails["houses"] = [];
    this.blogHttpService.getAllCharacters().subscribe(
      data =>{
        
        this.allDetails["characters"]=data;
        // this.allDetails["characters"].sort();
      },
      error =>{
        console.log("some error occurred");
        console.log(error.errorMessage);
      }
    )
    // this.newArr=this.allDetails["characters"].concat(this.allDetails["books"]);
    // console.log(this.newArr);
    this.blogHttpService.getAllBooks().subscribe(
      data =>{
        this.allDetails["books"]=data;
        this.allDetails["books"].sort();
      },
      error =>{
        console.log("some error occurred");
        console.log(error.errorMessage);
      }
    )
    this.blogHttpService.getAllHouses().subscribe(
      data =>{
        console.log(this.allDetails);
        this.allDetails["houses"]=data;
        // this.allDetails["houses"].sort();
      },
      error =>{
        console.log("some error occurred");
        console.log(error.errorMessage);
      }

      
    
       
    )

    
  }


  ngOnDestroy() {
    console.log("Home component ondestroy called");
  }
}
