import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../assets/logo.png'
import { useLocation } from "react-router-dom";
import '../MenuBar/MenuBar.css'



const MenuBar = ({handleTroggle}) => {
    const pathname = useLocation().pathname

    const [user, loading, error] = useAuthState(auth);
   
    const logout = () => {
        signOut(auth);
    };
    return (
        <header class="text-gray-600 body-font bg-zinc-300">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className='w-12 h-12' src={logo} alt="" />
                    <span class="ml-3 text-xl">Web-Courses</span>
                </a>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className='mr-5 '>  <NavLink to='/' className={`${pathname === '/' ? 'active' : 'noactive'}`}> <span>Home</span></NavLink></a>
                    <a className='mr-5'> <NavLink to='/courses' className={`${pathname === '/courses' ? 'active' : 'noactive'}`}>Courses</NavLink></a>
                    <a className='mr-5'> <NavLink to='/blog' className={`${pathname === '/blog' ? 'active' : 'noactive'}`}>Blog</NavLink></a>
                    <a className='mr-5' > <NavLink to='/contact' className={`${pathname === '/contact' ? 'active' : 'noactive'}`}>Contact</NavLink></a>
                </nav>

                {/* Dark and Light mode content */}


                

                <label className="switch mr-10 ">
                    <input type="checkbox" />
                    <span class="slider"></span>
                </label>
                {
                    user && <p className='mr-5'>{user.displayName}</p>
                }


                {
                    user ? <Link onClick={logout} class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Log Out
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link> : <Link to='login' class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Log in
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                }

            </div>
        </header>


    );
};

export default MenuBar;