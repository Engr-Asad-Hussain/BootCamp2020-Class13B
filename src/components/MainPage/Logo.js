import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

import brain from '../../images/Intro_Brain.svg';
import frontLayer from '../../images/Intro_Front_Layer.svg';
import feature from '../../images/Intro_Featured_Image_Empty.svg';

function Logo() {
    let brainRef = useWebAnimations({
        keyframes: {
            transform: ['translateY(-40px)', 'translateY(10px)']
        },
        timing: {
            duration: 2500,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
        }
    });
    let layerRef = useWebAnimations({
        keyframes: {
            opacity: [0, '80%', 0, '80%', 0, '80%', 0, 0, 0, 0]
        },
        timing: {
            duration: 800,
            easing: 'steps(10)',
            iterations: Infinity
        }
    });
    
    return (
        <div className="logo">
            <img id="brain" src={brain} ref={brainRef.ref} />
            <img id="frontLayer" src={frontLayer} ref={layerRef.ref} />
            <img id="feature" src={feature} />
        </div>
    );
}
export default Logo;