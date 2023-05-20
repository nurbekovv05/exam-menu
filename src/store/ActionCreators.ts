import {AppDispatch} from "./store";
import {Bas, decMenu} from "./MenuSlice";


export const decMenuREC = (el: any) => (dispatch: AppDispatch) => {
    dispatch(decMenu(el))
}

export const adDMenuREC = (el: any) => (dispatch: AppDispatch) => {
    dispatch(Bas(el))
}