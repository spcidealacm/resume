import Style from "./style.module.scss";
import React from "react";
import ReactDOM from "react-dom";
import Parallax from "parallax-js";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
import imgLinkedin from "../../assets/images/linkedin.png";
import imgFacebook from "../../assets/images/facebook.png";
import imgInstagram from "../../assets/images/instagram.png";
import imgBackground from "../../assets/images/background.png";
import imgRock from "../../assets/images/rock.png";
import imgEarth from "../../assets/images/earth.png";
import imgMid from "../../assets/images/mid.png";
import imgFore from "../../assets/images/foreground.png";



interface Props {

}

interface State {

}

class Home extends React.Component<Props, State>{
    private sceneOne: React.RefObject<HTMLDivElement>;
    constructor(props: Props) {
        super(props);
        this.sceneOne = React.createRef();
        this.state = {

        }
    }
    componentDidMount() {
        if (isBrowser) {
            const sceneOne = ReactDOM.findDOMNode(this.sceneOne.current);
            new Parallax(sceneOne);
        } else if (isMobile) {

        }
    }

    render() {
        return (
            <>
                <BrowserView>
                    <div className={Style.pcHome}>
                        <nav className={Style.nav}>
                            <div className={Style.logo}>Explore.</div>
                            <div className={Style.navlinks}>
                                <ul>
                                    <li><img src={imgLinkedin} alt="linkedin logo" /></li>
                                    <li><img src={imgFacebook} alt="facebook logo" /></li>
                                    <li><img src={imgInstagram} alt="instagram logo" /></li>
                                </ul>
                            </div>
                        </nav>
                        <section className={Style.sectionOne}>
                            <div ref={this.sceneOne}>
                                <div data-depth="0.1" className={Style.bg} style={{backgroundImage: `url(${imgBackground})`}}>
                                    {/* <img src={imgBackground} alt="background" /> */}
                                </div>
                                <div data-depth="0.2" className={Style.rock}>
                                    <img src={imgRock} alt="rock" />
                                </div>
                                <div data-depth="1.2" className={Style.earth}>
                                    <img src={imgEarth} alt="earth" />
                                </div>
                                <div data-depth="0.1" className={Style.text}>
                                    <h1>PLANETS</h1>
                                </div>
                                <div data-depth="0.4" className={Style.mid}>
                                    <img src={imgMid} alt="mid" />
                                </div>
                                <div data-depth="0.1" className={Style.fore}>
                                    <img src={imgFore} alt="foreground" />
                                </div>
                            </div>
                        </section>
                        <section className={Style.sectionTwo}></section>
                    </div>
                </BrowserView>
                <MobileView>
                    <div className={Style.mobileHome}>
                        <h1 className={Style.title}> just a test </h1>
                    </div>
                </MobileView>
            </>
        )
    }
}

export default Home;