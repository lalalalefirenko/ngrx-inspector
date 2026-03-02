# NgRx Inspector

This lightweight Angular library connects your application to the **NgRx Inspector** Chrome DevTools extension, enabling real-time monitoring of dispatched actions and store state.

### Install the companion bridge library:

```bash
npm install ngrx-inspector
```

### Register the provider:

```js
import { provideNgRxInspector } from 'ngrx-inspector';

bootstrapApplication(AppComponent, {
  providers: [provideNgRxInspector()],
});
```
