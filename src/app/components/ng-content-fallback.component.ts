import { Component } from '@angular/core';
import { ImageComponent } from './image.component';

@Component({
  selector: 'app-ng-content-fallback',
  standalone: true,
  imports: [ImageComponent],
  template: `
    <ng-content>
      <app-image
        [img]="'https://static.thenounproject.com/png/3890903-200.png'"
      />
    </ng-content>
  `,
})
export default class NgContentFallbackComponent {}
