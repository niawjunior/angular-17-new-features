import { Component, computed, effect, signal } from '@angular/core';
import { ImageComponent } from './components/image.component';
import ControlFlowComponent from './components/control-flow.component';
import ComponentAnnotationComponent from './components/component-annotation.component';
import DeferComponent from './components/defer.component';
import SignalComponent from './components/signal.component';
import { OutputApiComponent } from './components/output-api.component';
import NgContentFallbackComponent from './components/ng-content-fallback.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    OutputApiComponent,
    ComponentAnnotationComponent,
    ControlFlowComponent,
    DeferComponent,
    SignalComponent,
    NgContentFallbackComponent,
    ImageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./styles/home.scss', './styles/nav.scss'],
})
export class AppComponent {
  nameUpperCase = signal('');

  constructor() {}
}
