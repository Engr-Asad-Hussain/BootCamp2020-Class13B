import React from 'react';
import ButtonMessage from './Button';
import Logo from './Logo';

function MainPage() {
    return (
        <div className="cont-main">
            <div className="cont-des">
                <p className="heading">CORTEX</p>
                <p className="sub-heading">COPYWRITER</p>
                <p className="des-heading">
                    Enhance your communications with psychology-based copywriting 
                    and UX writing.
                </p>
                <div className="main-btn">
                    <ButtonMessage />
                </div>
            </div>
            <Logo />
        </div>
    );
}
export default MainPage;