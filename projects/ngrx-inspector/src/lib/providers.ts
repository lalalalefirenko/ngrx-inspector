import { inject, provideEnvironmentInitializer } from "@angular/core";
import { NgrxInspectorBridge } from "./services/ngrx-inspector-bridge.service";

export const provideNgRxInspector = () =>
  provideEnvironmentInitializer(() => {
    inject(NgrxInspectorBridge);
  });
