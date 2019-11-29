import React from 'react';
import CardTile from './Card';

const CardGrid = () => {
    return (
        <section>
            <h2 style={{ fontSize: "7.2rem", margin: "50px", marginTop: "100px" }}>Why Choose Us?</h2>
            <div className="card-grid">
            <CardTile title="Get A Free Quote"
                        details="Fill out our property form and recieve a free quote for your land"
                        icon="edit"
            />

            <CardTile title="No Realtor"
                        details="Bypass the realtor and save more"
                        icon="realtor"
            />

            <CardTile title="Don't Wait Months"
                        details="We won't keep you waiting with our speedy process"
                        icon="clock"
            />

            <CardTile title="Ready To Buy"
                ard      details="We are ready to buy, are you ready to sell?"
                        icon="money"
            />
            </div>
        </section>
    )
}

export default CardGrid;