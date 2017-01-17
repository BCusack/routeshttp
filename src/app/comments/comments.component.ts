import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [AppServiceService]
})

export class CommentsComponent {
  posts: Post[];
  selectedPost: Post;

  constructor(private AppServiceService: AppServiceService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    this.AppServiceService.getPost().subscribe(posts => {
      this.posts = posts;
    });
    overlay.defaultViewContainer = vcRef;
  }
  onSelect(post: Post): void {
    this.selectedPost = post;
    this.modal.alert()
      .showClose(true)
      .titleHtml(post.title)
      .body(post.body)
      .open();
  }
}


interface Post {
  id: number;
  title: string;
  body: string;
}