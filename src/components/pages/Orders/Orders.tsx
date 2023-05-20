import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store";
import {deleteMenu} from "../../../store/MenuSlice";
import {TfiTrash} from "react-icons/tfi";
import {adDMenuREC, decMenuREC} from "../../../store/ActionCreators";
import {NavLink} from "react-router-dom";




const Orders = () => {
    const {order} = useSelector((state: RootState) => state.menu)
    console.log(order)

    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className='bg-blue-300 min-h-[84vh]'>
            <div className=' px-10 '>
                <h1 className='text-center text-4xl py-10 text-[#33332D]'>My Orders</h1>

                <ul>
                    {
                        order.map(menu => (
                            <li className=' bg-gray-200 py-4 px-4 rounded-[8px] my-2'>
                                {
                                    <div className='flex items-center justify-evenly '>
                                        <img width={140} src={menu.photo} alt=""/>
                                        <div>
                                            <h1 className='text-black ml-2 mb-4 text-xl text-bold'>{menu.name}</h1>
                                            <h2 className='ml-2 text-xl text-bold text-green'>{menu.price * menu.quantity}$</h2>
                                        </div>
                                        <div className='flex items-center flex-col-reverse'>
                                            <div className='flex items-center w-[130px] justify-between mt-5'>
                                                <button onClick={() => dispatch(decMenuREC(menu))} className="hover:text-red-800 bg-amber-400 rounded py-[-15px] mr-5 text-2xl px-3">-</button>
                                                {menu.quantity  } <p>x</p>
                                                <button onClick={() => dispatch(adDMenuREC(menu))} className="hover:text-red-800 bg-amber-400 rounded py-[-15px] ml-5 text-2xl px-3">+</button>

                                            </div>

                                            <button onClick={() => dispatch(deleteMenu(menu))}
                                                    className='text-red text-xl cursor-pointer bg-red-600 rounded-[10px] px-[30px] py-[8px]'>delete order</button>
                                        </div>
                                    </div>
                                }


                            </li>


                        ))
                    }
                </ul>
                <div className='flex items-end justify-end '>
                   <NavLink to={'/'}><button className='bg-emerald-700 py-2 px-4 rounded '>to order</button></NavLink>

                </div>
            </div>

        </div>
    );
};

export default Orders;