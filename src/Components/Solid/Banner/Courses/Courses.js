import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../../Course/Course';

const Courses = () => {
    const [courses, setCourses]= useState([])
    useEffect (()=>{
        fetch('https://web-backend-8xh7.onrender.com/course')
        .then(res=> res.json())
        .then(data => setCourses(data))
    },[])
    // console.log(courses);
    return (
        <div className='mid-container  '>
            <h1 className='text-2xl border-b-2 pb-3 mt-20 font-bold'>OUR COURSES</h1>

            <div className="grid grid-cols-3 mt-10">
                {
                    courses.map((course)=> 
                    <Course
                    key={course._id}
                    course={course}
                    />)
                }
            </div>
            
            
        </div>
    );
};

export default Courses;