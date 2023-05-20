import React from 'react';
import logo from '../../assets/image/logo.svg'
import {NavLink} from "react-router-dom";
import {RootState} from "../../store/store";
import {useSelector} from "react-redux";
const Header = () => {
    const ordering = useSelector((state: RootState) => state.menu.order)
    const menuSlice = useSelector((state: RootState) => state.menu.menu)

    const basLen = ordering.reduce((acc, el) => {
        return acc + el.quantity
    }, 0)
    return (
        <div className='container'>
           <div className='flex items-center justify-between py-4'>
               <img src={logo} alt=""/>
               <div className='flex items-center justify-between gap-[20px] text-2xl cursor-pointer'>
                   <div className='relative'>
                       <NavLink to={'/'}><p >Menu</p></NavLink>
                       <span className='absolute right-[-8px] w-[20px] h-[20px]  font-bold top-[-8px]  text-center  px-1 text-[15px] menuSlice'>{menuSlice.length > 0 ? menuSlice.length : ''}</span>
                   </div>
                   <div className='relative'>
                       <NavLink to={'/orders'}><p>Orders</p></NavLink>
                       <span className='absolute right-[-5px] w-[20px] h-[20px]  font-bold top-[-8px]   text-center  px-1 text-[15px] menuSlice'>{basLen === 0 ? "" : basLen}</span>

                   </div>

                  <NavLink to={'/admin'}><p>Admin</p></NavLink>
               </div>
           </div>
        </div>
    );
};

export default Header;