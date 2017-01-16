import { Component } from '@angular/core';
import { CommentsComponent} from './comments/comments.component';
import {AppServiceService} from './app-service.service';
import {ToolbarComponent} from './toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppServiceService]
})
export class AppComponent {
  title = 'app really works!';
}
