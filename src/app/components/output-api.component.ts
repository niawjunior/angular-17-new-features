import {
  Component,
  EventEmitter,
  Output,
  effect,
  input,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-uppercase',
  standalone: true,
  template: `<input
    type="text"
    [value]="displayUpperCaseName()"
    (input)="handleOnChange($event)"
  />`,
})
export class OutputApiComponent {
  outputUpperCaseName = output<string>();
  displayUpperCaseName = signal<string>('');
  constructor() {
    effect(() => {
      this.outputUpperCaseName.emit(this.displayUpperCaseName());
    });
  }

  handleOnChange(event: any) {
    this.displayUpperCaseName.set(event.target.value.toUpperCase());
  }
}
