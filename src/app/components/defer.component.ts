import { Component } from '@angular/core';
import { ImageComponent } from './image.component';
import ReviewComponent from './review.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [ImageComponent, ReviewComponent],
  styleUrls: ['../app.component.scss'],
  template: `
    <h1>Deferrable Views</h1>
    <div style="display: flex; flex-direction: column">
      <div style="display: flex;flex-direction: column;gap: 10px;">
        <button #loadButton>Click to Load Image (interaction)</button>
        <button (click)="isLoading = true">Click to Load Image (when)</button>
        <button #hoverButton>Hover to Load Image</button>
      </div>
      @defer (on hover(hoverButton)) {
      <app-image></app-image>
      } @placeholder (minimum 500ms) {
      <div>This is a cat image</div>
      } @loading (minimum 500ms) {
      <div>Loading...</div>
      } @error {
      <div>Error</div>
      } @defer (on interaction(loadButton)) {
      <app-image></app-image>
      } @placeholder (minimum 500ms) {
      <div>This is a cat image</div>
      } @loading (minimum 500ms) {
      <div>Loading...</div>
      } @error {
      <div>Error</div>
      } @defer (when isLoading) {
      <app-image></app-image>
      } @placeholder (minimum 500ms) {
      <div>This is a profile</div>
      } @loading (minimum 500ms) {
      <div>Loading...</div>
      } @error {
      <div>Error</div>
      }
      <h1>Reviews</h1>
      <div class="review-container">
        @for (item of comments; track $index) {
        <span>{{ item }}</span>
        } @defer (on viewport) {
        <app-review />
        } @placeholder(minimum 2000ms) {
        <div>Loading...</div>
        }
      </div>
    </div>
  `,
})
export default class DeferComponent {
  isLoading = false;

  comments = [
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
    'This is a review',
  ];
}
