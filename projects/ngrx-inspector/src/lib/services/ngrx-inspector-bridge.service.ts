import { Injectable, inject, isDevMode } from "@angular/core";
import { ActionsSubject, Store, Action } from "@ngrx/store";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { withLatestFrom } from "rxjs";
/*
* This service is using for sending messages with Ngrx Actions details to window.
*/
@Injectable({ providedIn: "root" })
export class NgrxInspectorBridge {
    //region DI

    private readonly _actions$: ActionsSubject = inject(ActionsSubject);

    private readonly _store: Store = inject(Store);

    //endregion
    //region Fields

    private _id: number = 0;

    //endregion

    constructor() {
        if (!isDevMode()) return;

        this._actions$.pipe(withLatestFrom(this._store), takeUntilDestroyed()).subscribe(([action, state]: [Action, unknown]) => {
            // postMessage with "*" is intentional — the Chrome DevTools extension
            // listens on the same page context, so no specific targetOrigin is needed.
            window.postMessage(
                {
                    source: "ngrx-inspector",
                    payload: {
                        id: this._id++,
                        type: action.type,
                        payload: action,
                        state,
                        timestamp: Date.now(),
                    },
                },
                "*",
            );
        });
    }
}
