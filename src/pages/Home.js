import React from 'react';
import Header from '../components/header/Header';
import Body from '../components/header/Body';
import Footer from '../components/Footer';
import Banner from '../components/slider/Banner';
import logo from '../asset/logo.jpg';
import VideoSlider from "../components/react-slick/React-slick";


const Home = () => {

    return ( 
        <div>
            <logo/>
            <Header/>
            <Banner/>
             <Body/>
             <VideoSlider/>
             <Footer/>
            
        </div>
    );
};

export default Home;