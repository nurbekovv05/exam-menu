import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store";
import {Bas} from "../../../store/MenuSlice";

const Menu = () => {
    const {menu} = useSelector((state: RootState) => state.menu)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div className='bg-blue-300 min-h-[84vh]'>
            <h1 className='text-center text-4xl pt-10 text-[#33332D]'>MENU</h1>
            <div className='py-10 px-6 '>
                <div className='flex wrap'>{
                    menu.map(menu => (
                        <div key={menu.id} className='w-[260px] h-[240px] py-2 px-2 bg-gray-100 rounded-[10px] mx-4'>{
                            <div>
                                <div>
                                    <img src={menu.photo} alt=""/>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h1 className='mt-2'>{menu.name}</h1>
                                            <h1>{menu.price}$</h1>
                                        </div>
                                        <button onClick={() => {
                                            dispatch((Bas(menu)))
                                        }} className='bg-yellow-300 py-1 px-3 mt-10 rounded'>{
                                            'to order'
                                        }</button>
                                    </div>
                                </div>
                            </div>
                        }</div>
                    ))
                }</div>
            </div>

        </div>
    );
};

export default Menu;