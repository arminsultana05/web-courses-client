import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../assets/logo.png'

const MenuBar = () => {
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
                    <Link to='/' class="mr-5 hover:text-gray-900">Home</Link>
                    <Link to='courses' class="mr-5 hover:text-gray-900">Courses</Link>
                    <Link class="mr-5 hover:text-gray-900">Blog</Link>
                    <Link class="mr-5 hover:text-gray-900">Contact Us</Link>
                </nav>
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