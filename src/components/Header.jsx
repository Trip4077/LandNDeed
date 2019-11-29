import React from 'react';
import { Button } from "@material-ui/core";

const Header = () => {
    return (
        <header className="header" id="header">
            <h1>Land N Deed</h1>

            <p>Sell Your Land Quickly</p>

            <Button variant="contained" color="primary" id="cta-btn" size="large" href="#contact">
                Get Offer
            </Button>
        </header>
    )
}

export default Header;