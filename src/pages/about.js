import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/head';

const About = () => {

    return (
        <div>
            <Layout>
                <Head title='About'/>
                <h1>About me</h1>
                <p>I know quite a lot of technologies</p>
                <p><Link to='/contact'>Interested?</Link></p>
            </Layout>
        </div>
    );
}

export default About;