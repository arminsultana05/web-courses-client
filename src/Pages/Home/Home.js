import React from 'react';
import Banner from '../../Components/Solid/Banner/Banner';
import Courses from '../../Components/Solid/Banner/Courses/Courses';
import Faq from '../../Components/Solid/Faq/Faq';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Courses/>
            <Faq/>
            <Contact/>
        </div>
    );
};

export default Home;