export interface ISetSuccessAction {
    readonly type: 'SET_SUCCESS';
    name: any;
    phoneNumber: any;
}

export type SuccessActions =
| ISetSuccessAction