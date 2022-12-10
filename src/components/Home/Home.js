import React from 'react';
import { Link } from 'react-router-dom';
import backGround from '../../assets/images/backGround.jpg'
const Home = () => {
    return (


        <div className="hero min-h-screen" style={{ backgroundImage: `url(${backGround})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">I am Md. Mahmudur Rahman Sourov. Welcome to my website.</p>
                    <Link to='/projects'><button className="btn btn-primary">My Works</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;