import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-vat',
  standalone: true,
  template: `
    <div>
      <input
        min="0"
        type="number"
        [value]="vat()"
        (input)="handleUpdateVat($event)"
      />
    </div>
  `,
})
export default class VatComponent {
  vat = signal<number>(7);

  handleUpdateVat(event: any) {
    this.vat.set(event.target.value);
  }
}
