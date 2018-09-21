import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {BlogService} from "../blog.service";
import {BlogHttpService} from "../blog-http.service";
import {Location} from '@angular/common';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit,OnDestroy {

  public currentUrl;
  public characterValue;
  public bookValue;


  constructor(private _route:ActivatedRoute,private router:Router,public blogHttpService:BlogHttpService,private location:Location) { 

    console.log("Constructor is called");
  }

  ngOnInit() {
    console.log("ngOnInitCalled");
    let character=[];
    this.characterValue;
    this.bookValue;
    let myUrl=this._route.snapshot.paramMap.get('url');
   
    this.characterValue=this.blogHttpService.getSingleCharacter(myUrl);
    
    
    this.blogHttpService.getSingleCharacter(myUrl).subscribe(
      
      data=>{
          
          console.log(data);
          this.characterValue=data;
          // character.push(this.characterValue);
          console.log(this.characterValue);
        },

        error=>{
          console.log(error.errorMessage);
        }

    )

    this.blogHttpService.getSingleBook(myUrl).subscribe(
      
      data=>{
          
          console.log(data);
          this.bookValue=data;
          // character.push(this.characterValue);
          console.log(this.bookValue);
        },

        error=>{
          console.log(error.errorMessage);
        }

    )

    
  }




  public goBackToPreviousPage(): any{
    this.location.back();
  }

  ngOnDestroy(){
    console.log("blog view destroyed");
  }


//  public deleteThisBlog():any{
//    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
//      data=> {
//        console.log(data);
//        setTimeout(()=>{
//         this.router.navigate(['/home'])
//        },1000)
//      },

//      error =>{
//        console.log(error.errorMessage);
//      }
//    )
//  }

}
