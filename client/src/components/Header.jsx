import React from "react";
import {FaSearch} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';

const Header = () => {

   const {currentUser} =useSelector(state => state.user)
  return (
    <div className="bg-slate-200 shadow-md">
      <div className=" flex justify-between items-center max-w-6xl mx-auto h-12.5 p-3">
      <Link to='/'>
        <h1 className="font-bold text-sm sm:text-xl flex-wrap">
          <span className="text-slate-500">Sahand</span>
          <span className="text-slate-900">Estate</span>
        </h1>
        </Link>
        <form className="bg-slate-100 rounded-full p-3 flex items-center">
          <input type="text" placeholder="Search..." className="bg-transparent   hover:cursor-pointer focus:outline-none w-24 sm:w-64" />
          <FaSearch className=" text-slate-700"/>
        </form>
         <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          <Link to='/profile'>

             {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
 </Link>





        </ul>
      </div>
    </div>
  );
};

export default Header;
