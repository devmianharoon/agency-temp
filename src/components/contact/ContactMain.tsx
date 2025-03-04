import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import GoogleMap from './GoogleMap';
import ContactArea from './ContactArea';
import ContactForm from './ContactForm';

const ContactMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Contacts'/>
            <GoogleMap/>
            <ContactArea/>
            <ContactForm/>
        </>
    );
};

export default ContactMain;