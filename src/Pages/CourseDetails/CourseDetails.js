import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Courses from '../../Components/Solid/Banner/Courses/Courses';
import '../CourseDetails/CourseDetals.css'

const CourseDetails = () => {
    const { courseId } = useParams()
    const [courses, setCourses] = useState({})
    const [course, setCourse] = useState([])
    const navigate = useNavigate()
    const handleCheckoutPage = () => {
        navigate('/checkout')
    }
    const handleLoginPage = () => {
        navigate('/login')
    }
    useEffect(() => {
        fetch('https://web-backend-8xh7.onrender.com/course')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    useEffect(() => {
        fetch(`https://web-backend-8xh7.onrender.com/course/${courseId}`)

            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <>

            <div className='grid grid-cols-3 gap-4 mid-container '>

                {/* All courses name in details page */}
                <div className="bg-green-100 ">
                    {

                        course.map((c) => <div class="collapse">
                            <input type="checkbox" class="peer" />
                            <div class="collapse-title rounded bg-primary mt-5 text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">

                                {c.name}
                            </div>
                            <div class="collapse-content bg-base-200 text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                <p> Price {c.price}</p>
                            </div>
                        </div>)


                    }

                </div>


                <div className="col-span-2 bg-white rounded-xl flex  p-4 ">
                    <div class="p-4 w-1/3   ">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={courses.img} alt="blog" />
                            <div class="p-6 bg-base-200">

                                <h1 class="title-font text-sm font-medium text-gray-900 mb-3">Course Name: <span className='text-lg'>{courses.name}</span></h1>
                                <p class="leading-relaxed mb-3">Price: <span className='font-bold text-2xl'>৳</span> {courses.price}</p>
                                <div class="flex items-center justify-between pointer cursor-pointer ">

                                    <a onClick={handleCheckoutPage} className='enroll-btn'>Enroll Now</a>


                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Course Description */}
                    <div className="w-2/3 mt-5">
                        <p className='font-semibold'>Total Video :20</p>
                        <p className='font-semibold mt-1.5'>Course Duration: 12 hours</p>
                        <p className='mt-3'>{courses.desc}</p>

                    </div>

                </div>
                {/* Premium access */}


            </div >
            <div className='mid-container  '>
                <h1 className='text-2xl border-b-2 pb-3 cursor-pointer  font-bold'>PREMIUM ACCESS</h1>
                <div className="mt-6">
                    <div tabIndex={0} className="  collapse collapse-plus border border-base-300 bg-base-100 ">
                        <div className="collapse-title text-xl  font-medium">
                            What is Html?
                        </div>
                        <div className="collapse-content">
                            <p>HTML is the standard markup language for Web pages.
                                With HTML you can create your own Website.
                                HTML is easy to learn - You will enjoy it!</p>
                        </div>
                    </div>
                    <div tabIndex={0} className=" mt-3 collapse collapse-plus border border-base-300 bg-base-100 ">
                        <div className="collapse-title text-xl font-medium">
                            What is JavaScript?
                        </div>
                        <div className="collapse-content">
                            <p>JavaScript is the world's most popular programming language JavaScript is the programming language of the Web.JavaScript is easy to learn.This tutorial will teach you JavaScript from basic to advanced.
                            </p>
                        </div>
                    </div>
                    <div onClick={handleLoginPage} className=" mt-3 collapse-plus border p-5 text-white border-base-300 bg-orange-500 rounded ">
                        <div className=" text-xl font-medium">
                            LOG IN AND BUY THIS COURSE TO GET PREMIUM ACCESS
                        </div>

                    </div>
                    <div tabIndex={0} className="collapse mt-3 collapse-plus border border-base-300 bg-base-100 ">
                        <div className="collapse-title text-xl font-medium">
                            What is Phython?
                        </div>
                        <div className="collapse-content">
                            <p>Python is a popular programming language.Python can be used on a server to create web applications.
                                Python is a popular programming language.Python can be used on a server to create web applications.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse mt-3 collapse-plus border border-base-300 bg-base-100 ">
                        <div className="collapse-title text-xl font-medium">
                            What is MongoDB?
                        </div>
                        <div className="collapse-content">
                            <p>MongoDB is a cross-platform document-oriented database program.
                                Classified as a NoSQL database program,
                                MongoDB uses JSON-like documents with optional schemas.
                                MongoDB is developed by MongoDB Inc.
                                MongoDB is licensed under the Server Side Public License,
                                which is deemed non-free by several distributions</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default CourseDetails;