import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/head';

const Contact = () => {

    return (
        <div>
            <Layout>
                <Head title='Contact'/>
                <h1>Contact</h1>
                <p>Contact me via the contact form of this page</p>
                <a href='http://www.google.com' target='blank'>Google</a>
            </Layout>
        </div>
    );
}

export default Contact;