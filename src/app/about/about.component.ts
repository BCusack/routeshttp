import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'about';
  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }
  onClick() {
    this.modal.alert()
      .showClose(true)
      .body(` <md-card>
  <md-card-header>
    <md-card-title>Cards are the best</md-card-title>
    <md-card-subtitle>Really, they are!</md-card-subtitle>
  </md-card-header>
  <md-card-content>
    <p>Something pretty...</p>
  </md-card-content>
</md-card>`)
      .open();
  }

}
