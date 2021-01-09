import React from 'react';
import logo from '../../images/services-6.svg';
import useWebAnimations from '@wellyshen/use-web-animations';

function UXDesign() {
    let { ref } = useWebAnimations({
        keyframes: [
            { transform: 'scale(1)' },
            { transform: 'scale(1.02)' },
            { transform: 'scale(1)' }
        ],
        timing: {
            ...timing,
            iterations: Infinity
        }
    });
    
    return (
        <div className="cont-ux">
            <div className="ux-logo">
                <img src={logo} alt="ux-logo" ref={ref} />
            </div>
            <div className="ux-des">
                <h1>UX Writing</h1>
                <p>
                    I develop clear and useful text in product interfaces 
                    to help users reach a specific goal, whether that's 
                    completing a form or tapping a button. This includes 
                    every type of content from on-screen help systems, user 
                    onboarding and in-app messages to push notifications and tooltips.
                </p>
                <ul>
                    <li><span>Microcopy</span></li>
                    <li><span>Taxonomy & Labeling</span></li>
                    <li><span>Chatbots</span></li>
                    <li><span>User Research</span></li>
                    <li><span>Content Style Guide</span></li>
                    <li><span>User Testing</span></li>
                    <li><span>Design Principles</span></li>
                    <li><span>Prototype</span></li>
                </ul>
            </div>
        </div>
    );
}
export default UXDesign;