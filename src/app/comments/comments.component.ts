import { Component, OnInit, ViewContainerRef , trigger, style, transition, animate, group } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [AppServiceService],
  animations: [
  trigger('itemAnim', [
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate(350)
    ]),
    transition(':leave', [
      group([
        animate('0.2s ease', style({
          transform: 'translate(150px,25px)'
        })),
        animate('0.5s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])
]
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