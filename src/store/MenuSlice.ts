

// @ts-ignore
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Menu {
    name: string;
    photo: any;
    id?: number;
    quantity?: any
    price: number;

}


interface IOrders {
    name: string;
    photo: any;
    quantity?: any
    price: number;
    id?: number;

}
interface FormState {
    filePlaceholder: string;
}

interface IFoodMenuState {
    menu: Menu[],
    order: IOrders[]
    filePlaceholder: string

}

const initialState: IFoodMenuState ={
    menu: [],
    order: [],
    filePlaceholder: 'choose file'
}

export const foodMenuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        addMenu: (state, action:PayloadAction<Menu>) => {
            state.menu.push(action.payload)
        },
        menuNew: (state, action:PayloadAction<Menu>)=> {
            state.menu.push(action.payload)
        },
        setFilePlaceholder: (state, action: PayloadAction<string>) => {
            state.filePlaceholder = action.payload;
        },
        Bas: (state, action: PayloadAction<IOrders>) => {
            const found = state.order.find(el => el.id === action.payload.id)
            if(found){
                state.order = state.order.map(el => el.id === action.payload.id ?
                    {...el, quantity: el.quantity + 1}: el )
            }else{
                state.order.push({...action.payload, quantity:1});
            }
        },
        deleteMenu: (state, action) => {
            state.order = state.order.filter(el => el.id !== action.payload.id)
        },
        decMenu(state,action: PayloadAction<Menu>) {
            state.order = state.order.map(el => {
                if (el.id === action.payload.id) {
                    if (el.quantity > 1) {
                        return {...el, quantity: el.quantity -1}
                    }  else return el
                } else return el
            })
        },
        basketOnes(state,action) {
            state.order = action.payload
        }
    }
})


export const {addMenu, menuNew, setFilePlaceholder, Bas, deleteMenu, decMenu} = foodMenuSlice.actions
