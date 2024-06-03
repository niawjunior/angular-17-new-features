import { Component } from '@angular/core';
import { ImageComponent } from './image.component';

@Component({
  selector: '[app-profile], app-profile',
  template: `<div class="profile-container card-color">
    <div>Profile</div>
    <app-image />
  </div>`,
  standalone: true,
  imports: [ImageComponent],
  styleUrls: ['../styles/profile.scss', '../styles/base.scss'],
})
export default class ComponentAnnotationComponent {}
