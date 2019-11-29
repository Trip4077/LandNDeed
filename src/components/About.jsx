import React from 'react';
import PicOne from '../assets/about-1.jpg';
import PicTwo from '../assets/about-2.jpg';
import PicThree from '../assets/about-3.jpg';

const About = () => {
    return (
        <div className="about" id="about">
            <h2 style={{ fontSize: "7.2rem", margin: "50px", marginTop: "100px" }}>About Us:</h2>
            

            <div className="about-card">
                <div>
                    <img src={PicOne} alt='family picture' />

                    <p>Yes, we are Red Sox fans</p>
                </div>
                

                <p> My name is Dan and my wife's name is Gina. I am nearing retirement from the fire department, and we are now focusing more on our business buying and selling land to help pay for our kids college. Now, with the help of our kids, we continue to grow the business. Whether you would like to sell your property, or you are looking to buy your dream property, we would like to help you. We look forward to speaking with you soon. </p>
            </div>

            <div className="about-card">
                <div>
                    <img src={PicTwo} alt='family picture' />

                    <p>Bring your daughter to work day</p>
                </div>
                
                <div>
                    <img src={PicThree} alt='family picture' />

                    <p>Family fun bungee jumping for Hannah's birthday</p>
                </div>
            </div>
        </div>
    )
}

export default About;