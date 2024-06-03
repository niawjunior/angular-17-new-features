import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  template: `<img
    width="200"
    height="200"
    alt="Cute Cat"
    title="Cute Cat"
    style="object-fit: cover;"
    [src]="img()"
  />`,
})
export class ImageComponent {
  img = input<string>(
    'https://static.vecteezy.com/system/resources/thumbnails/022/963/918/small_2x/ai-generative-cute-cat-isolated-on-solid-background-photo.jpg'
  );
}
