import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute,Router } from '@angular/router';
// import { ToastaModule } from 'ngx-toasta';
// import {ToastaService} from 'ngx-toasta';
// import {ToastaConfig} from 'ngx-toasta';
// import {ToastOptions} from 'ngx-toasta';
// import {ToastData} from 'ngx-toasta';
// import {ToastaEvent} from 'ngx-toasta';
// import {ToastaEventType} from 'ngx-toasta';
// declare var toastr: any; 



@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  // constructor(private blogHttpService:BlogHttpService,private _route:ActivatedRoute,private router:Router,public toastr:ToastaModule)
  // {
  //   this.toastr;
  // }
  constructor(private blogHttpService:BlogHttpService,private _route:ActivatedRoute,private router:Router) { 
    // Assign the selected theme name to the `theme` property of the instance of ToastaConfig. 
    // Possible values: default, bootstrap, material
    
}



  // Success()
  // {
  //   toastr.success();
  // }
  public blogTitle:string;
  public blogBodyHtml:string;
  public blogDescription:string;
  public blogCategory:string;
  public bookValue;
  
  ngOnInit() {
    let myUrl=this._route.snapshot.paramMap.get('url');
    this.bookValue=this.blogHttpService.getSingleBook(myUrl);
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




  public createBlog(): any{
    let blogData ={
      title:this.blogTitle,
      description:this.blogDescription,
      blogBody:this.blogBodyHtml,
      category:this.blogCategory
    }

    console.log(blogData);
 
  }

}
function newFunction() {
  var toastr: any;
  return toastr;
}

