import logo from '../../images/services-7.svg';
import useWebAnimations from '@wellyshen/use-web-animations';

function Website() {
    let { ref } = useWebAnimations({
        keyframes: [
            { transform: 'scale(1)' },
            { transform: 'scale(1.02)' },
            { transform: 'scale(1)' }
        ],
        timing: {
            duration: 1000,
            iterations: Infinity
        }
    });

    return (
        <div className="cont-web">
            <div className="web-des">
                <h1>Website<br/>Copywriting</h1>
                <p>
                    Your website is a dialogue with your audience. I capture the 
                    essence of your business and communicate it clearly. Carefully 
                    considered writing and SEO best practices allow me to craft the 
                    perfect user journey online. Let me draw the map that guides 
                    users every step of the way from discovery, to consideration, to 
                    conversion.
                </p>
                <ul>
                    <li><span>Information Architecture</span></li>
                    <li><span>Wireframes</span></li>
                    <li><span>Competitor Analysis</span></li>
                    <li><span>On-page SEO</span></li>
                    <li><span>Off-page SEO</span></li>
                    <li><span>USP/UVP</span></li>
                    <li><span>Landing Page</span></li>
                    <li><span>Sales Letter</span></li>
                </ul>
            </div>
            <div className="web-logo">
                <img src={logo} alt="website" ref={ref} />
            </div>
        </div>
    );
}
export default Website;