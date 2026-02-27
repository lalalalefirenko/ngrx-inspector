import { Injectable, inject } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { Store, Action } from "@ngrx/store";
import { withLatestFrom } from "rxjs";
/*
* This service is using for sending messages with Ngrx Actions details to window.
*/
@Injectable({ providedIn: "root" })
export class NgrxInspectorBridge {
    //region DI

    private readonly _actions$: Actions = inject(Actions);

    private readonly _store: Store = inject(Store);

    //endregion
    //region Fields

    private _id: number = 0;

    //endregion

    constructor() {
        this._actions$.pipe(withLatestFrom(this._store)).subscribe(([action, state]: [Action, unknown]) => {
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
