import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../app-service.service';

@Component({
  moduleId: module.id,
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers:[AppServiceService]
})

export class CommentsComponent {
  posts:Post[];

  constructor(private AppServiceService: AppServiceService){
 

    
    this.AppServiceService.getPost().subscribe(posts => {
        this.posts = posts;
    });
  }

}

interface Post{
    id: number;
    title: string;
    body: string;
}