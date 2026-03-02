# NgRx Inspector

DevTools bridge for inspecting **NgRx actions** and **state changes** in Chrome.

This lightweight Angular library connects your application to the **NgRx Inspector** Chrome DevTools extension, enabling real-time monitoring of dispatched actions and store state.

---

## ✨ Features

- 🔎 Inspect all dispatched NgRx actions
- 🧠 View full store state snapshots
- ⚡ Real-time action stream monitoring
- 🪶 Lightweight and zero-config
- 🌳 Tree-shakable and dev-mode only
- 🔌 Works with standalone Angular apps

---

## 📦 Installation

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
