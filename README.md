# NgRx Inspector

This lightweight Angular library connects your application to the [**NgRx Inspector** Chrome DevTools extension](https://chromewebstore.google.com/detail/ngrx-inspector/bmhafdgiifbmjgdpmbicgcfjglmcmlma), enabling real-time monitoring of dispatched actions and store state.

The library sends dispatched NgRx actions to the extension, allowing you to inspect action flow and payloads directly in Chrome DevTools.

## Installation

### Chrome Extension

Install the Chrome DevTools extension:

https://chromewebstore.google.com/detail/ngrx-inspector/bmhafdgiifbmjgdpmbicgcfjglmcmlma

### The library:

```bash
npm install ngrx-inspector
```

Register the provider in your application:

```ts
import { provideNgRxInspector } from 'ngrx-inspector';

bootstrapApplication(AppComponent, {
  providers: [
    provideNgRxInspector(),
  ],
});
```

Or, if you're using `ApplicationConfig`:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideNgRxInspector } from 'ngrx-inspector';

export const appConfig: ApplicationConfig = {
  providers: [
    provideNgRxInspector(),
  ],
};
```

Once connected, open the **NgRx Inspector** tab in Chrome DevTools to view dispatched actions.

## Features

- Inspect dispatched NgRx actions
- View action payloads
- Lightweight setup
- Works alongside existing NgRx applications

## Author

**Lev Alefirenko**

Linkedin: https://www.linkedin.com/in/lev-alefirenko/
