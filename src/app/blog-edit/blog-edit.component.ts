import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {BlogHttpService} from "../blog-http.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public allDetails={};
  public houseValue;
  public possibleCategories = ["Comedy","Drama","Action","Technology"];
  constructor(private _route:ActivatedRoute,private router:Router,public blogHttpService:BlogHttpService) {
    console.log("Constructor is called");
   }

  
  ngOnInit() {
    let myUrl =this._route.snapshot.paramMap.get('url');
    console.log(myUrl);
    this.blogHttpService.getSingleHouse(myUrl).subscribe(
      data =>{
        console.log(data);
        this.houseValue=data;
        console.log(this.houseValue);
      },
      error =>{
        console.log(error.errorMessage);
      }
    )
  }

  // public editThisBlog(): any{
  //   this.blogHttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
  //     data =>{
  //       console.log(data);
  //       setTimeout(() =>{
  //         this.router.navigate(['/blog',this.currentBlog.blogId]);
  //       }, 1000)
  //     },

  //     error =>{
  //       console.log(error.errorMessage);
  //     }
  //   )
  // }

}
