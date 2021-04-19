import Style from "./style.module.scss";
// import Parallax from "parallax-js";
import imgLinkedin from "../../assets/images/linkedin.png";
import imgFacebook from "../../assets/images/facebook.png";
import imgInstagram from "../../assets/images/instagram.png";



function Home() {
    return (
        <>
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
        </>
    )
}

export default Home;