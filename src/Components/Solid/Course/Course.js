import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Course/Course.css'

const Course = ({ course }) => {
    const { img, name, price,_id } = course;

    const navigate = useNavigate()
    // When clicked specfiq courses
    const navigateToCourseDetails=(id)=>{
        navigate(`/course/${id}`)

    }
    const navigeTocheckoutPage =()=>{
        navigate('/checkout')

    }
    return (
        <div class="p-4 ">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={img} alt="blog" />
                <div class="p-6">
                    <p> <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg class="w
                        -4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                    </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                        </span></p>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Course Name: <span className='text-xl'>{name}</span></h1>
                    <p class="leading-relaxed mb-3">Price: <span className='font-bold text-2xl'>৳</span> {price}</p>
                    <div class="flex items-center justify-between pointer cursor-pointer ">
                        <a onClick={()=>navigateToCourseDetails(_id)} class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <a onClick={()=>navigeTocheckoutPage()}  className='enroll-btn'>Enroll Now</a>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;