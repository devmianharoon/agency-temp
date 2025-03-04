import SliderDefault from '@/sheardComponent/elements/sliders/SliderDefault';
import React from 'react';
import About from './About';
import Service from './Service';
import Team from './Team';
import Cta from './Cta';
import Project from './Project';
import Testimonial from './Testimonial';
import CounterDefault from './CounterDefault';
import Video from './Video';
import Contact from './Contact';
import BlogGrid from './Blog';
import Brand from './Brand';
import Newsletter from './Newsletter';

const HomeMain = () => {
    return (
        <>
           <SliderDefault/>
           <About/>
           <Service/>
           <Team/>
           <Cta/>
           <Project/>
           <Testimonial/>
           <CounterDefault/>
           <Video/>
           <Contact/>
           <BlogGrid/>
           <Brand/>
           <Newsletter/>
        </>
    );
};

export default HomeMain;