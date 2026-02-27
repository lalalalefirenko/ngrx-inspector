import { inject, EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { NgrxInspectorBridge } from './services/ngrx-inspector-bridge.service';

export function provideNgRxInspectorBridge(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: 'NGRX_VISUALIZER_INIT',
      multi: true,
      useFactory: () => {
        inject(NgrxInspectorBridge);
        return true;
      },
    },
  ]);
}
