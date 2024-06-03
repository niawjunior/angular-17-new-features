import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  template: `
    <h1>Control Flow</h1>

    <div>
      @if (angularVersion === 17) {
      <div>Wow, Angular 17</div>
      } @else {
      <div>Need to upgrade</div>
      }
    </div>
    <div>
      @for (item of usersData; track $index) {
      <div>Name: {{ item.name }}</div>
      <div>
        @switch (item.role) { @case ('admin') {
        <div>Hello Admin</div>
        } @case ('user') {
        <div>Hello User</div>
        } @default {
        <div>Hello Guest</div>
        } }
      </div>
      } @empty {
      <div>No users</div>
      }
    </div>
  `,
})
export default class ControlFlowComponent {
  angularVersion = 17;
  usersData: { id: number; name: string; role?: string }[] = [
    {
      id: 1,
      name: 'John Doe',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Jane Doe',
      role: 'user',
    },
    {
      id: 3,
      name: 'Adam Doe',
      role: 'admin',
    },
    {
      id: 4,
      name: 'Bob Doe',
    },
  ];
}
