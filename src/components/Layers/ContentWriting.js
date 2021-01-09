import React from 'react';
import logo from '../../images/services-5.svg';
import useWebAnimations from '@wellyshen/use-web-animations';

function ContentWriting() {
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
        <div className="cont-cw">
            <div className="cw-logo">
                <img src={logo} alt="cw-image" ref={ref} />
            </div>
            <div className="cw-des">
                <h1>Content Writing</h1>
                <p>
                    Give your business a competitive edge with powerful content 
                    that can be targeted to any segment of your audience. 
                    No matter how large or complex your project, my custom-built 
                    solutions including articles, eDMs, and case studies will 
                    help you implement a plan that maximizes your business’s 
                    online exposure.
                </p>
                <ul>
                    <li><span>Headlines & Taglines</span></li>
                    <li><span>Content Strategy</span></li>
                    <li><span>Blogs & Articles</span></li>
                    <li><span>Social Media Content</span></li>
                    <li><span>Video Scripts</span></li>
                    <li><span>eDMs & Newsletters</span></li>
                    <li><span>Case Studies</span></li>
                    <li><span>Whitepapers</span></li>
                </ul>
            </div>
        </div>
    );
}
export default ContentWriting;