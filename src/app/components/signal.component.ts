import { Component, computed, effect, signal, viewChild } from '@angular/core';
import { ImageComponent } from './image.component';
import VatComponent from './vat.component';

@Component({
  selector: 'app-signal',
  standalone: true,
  styleUrls: ['../app.component.scss'],
  imports: [ImageComponent, VatComponent],
  template: `
    <h1>Signal</h1>
    <div style="display: flex;flex-direction: column;gap: 10px;">
      <app-image />
      <div>
        Price:
        <input
          min="0"
          type="text"
          [value]="price()"
          (input)="handleUpdatePrice($event)"
        />
        THB
      </div>
      <div style="display: flex;gap: 10px;">
        <button (click)="handleRemoveFromCart()">-</button>
        <div>Quantity: {{ quantity() }}</div>
        <button (click)="handleAddToCart()">+</button>
      </div>
      <div style="display: flex;">
        Vat:
        <div style="display: flex;"><app-vat /> %</div>
        ({{ vat() }} THB)
      </div>
      <div>Total Price: {{ (totalPrice() + vat()).toLocaleString() }} THB</div>
    </div>
  `,
})
export default class SignalComponent {
  price = signal(100);
  quantity = signal(0);
  totalPrice = computed(() => this.price() * this.quantity());
  vatComponent = viewChild(VatComponent);
  vat = computed(() => (this.totalPrice() / 100) * this.vatComponent()?.vat()!);
  constructor() {
    effect(() => {
      console.log(this.vatComponent()?.vat());
    });
  }
  handleAddToCart() {
    this.quantity.update((v) => v + 1);
  }

  handleRemoveFromCart() {
    this.quantity.update((v) => v - 1);
  }

  handleUpdatePrice(event: any) {
    this.price.set(event.target.value);
  }
}
