import React from 'react';
import { FaAddressCard ,FaFacebookF} from "react-icons/fa";
import { AiOutlinePhone ,AiOutlineTwitter } from "react-icons/ai";
import { MdEmail} from "react-icons/md";
import img1 from '../../assets/mongo.png' 
import img2 from '../../assets/Js.png' 
import img3 from '../../assets/tailwind.png' 


const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <section className="py-11  bg-base-100 mt-20">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-4 mb-11">
                    <div className='logoBorder' >
                        <img className='h-20 w-60 mb-10' src={img3} alt="" />

                        <p className="  pb-5">
                            Public libraries play an important role in supporting education and literacy. They provide countless resources, such as educational materials, trainings, courses, scientific publications, etc
                        </p>
                    </div>
                    <div className="footerBorder ml-20">
                        <div className="">
                            <h1 className="text-2xl font-medium pb-5">Web Courses</h1>
                            <h1 className="t font-medium pb-5">Home</h1>
                            <h1 className=" font-medium pb-5">Courses</h1>
                            <h1 className=" font-medium pb-5">Blog</h1>
                            <h1 className=" font-medium pb-5">Contact Us</h1>
                           
                        </div>
                    </div>
                    <div>
                        <h1 className=" text-2xl font-medium pb-5">Recent Our Courses</h1>
                        <div className="grid grid-cols-2 gap-3 mb-5">
                            <div className="flex items-center" style={{ width: '120px', height: '100px' }}>
                                <img src={img1} className=" rounded-tl-lg" style={{ width: '100%' }} alt=""></img>
                            </div>
                            <div>
                                <p className="">Padma River Boatman
                                    Tree Without Roots
                                    In Blissful Hell
                                </p>
                                <h1 className="text-amber-400">10 August 2022</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center" style={{ width: '120px', height: '100px' }}  >
                                <img src={img2} className=" rounded-tl-lg" style={{ width: '100%' }} alt=""></img>
                            </div>
                            <div>
                                <p className="">Mother of 1084<br />
                                    Chokher Bali <br />

                                    Durbin
                                </p>
                                <h1 className="text-amber-400">3 january 2022</h1>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="footerContact">
                        <h1 className=" text-2xl font-medium pb-5">Contact Info</h1>
                        <div className='mb-3 flex'>
                            <span className={`text-[19px] mt-2 `} > <FaAddressCard /></span>
                            <span>
                                <span className='font-bold text-[19px] ml-2 '> Address:</span>
                                <span className="ml-2 ">address Dhaka, bangladesh </span>
                            </span>
                        </div>
                        <div className='mb-3 flex '>
                            <span className={`text-[19px] mt-1 `}> <MdEmail /></span>
                            <span>
                                <span className='font-bold text-[19px] mt-2 ml-2 '>Email:</span>
                                <span className="ml-2 ">raselaid@gmail.com </span>
                            </span>
                        </div>
                        <div className='mb-3 flex'>
                            <span className={` text-[19px] mt-2 `}> <AiOutlinePhone /></span>
                            <span>
                                <span className='font-bold text-[19px]'>Phone:</span>
                                <span className="ml-2 ">+88195638745 </span>
                            </span>
                        </div>

                        {/* <div className="iconStyle">
                 <span><FaAddressCard/></span>
                 <span><AiOutlineTwitter/></span>
                 <span><AiOutlinePhone/></span>
               
             </div> */}
                    </div>

                </div>
                <hr></hr>
                <div>
                    <h1 className='text-center pt-6 '>&copy;<span className="text-amber-400"> copyright</span> Web Development Courses /<span className="text-amber-400"> {year}</span></h1>
                </div>
            </div>

        </section>
    );
};

export default Footer;