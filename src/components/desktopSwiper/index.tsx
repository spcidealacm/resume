import React from "react";
// import ReactDom from "react-dom";
import Style from "./style.module.scss";
import earthImg from "../../assets/images/earth.png";
import {
  // BrowserView,
  // MobileView,
  // isBrowser,
  // isMobile
} from "react-device-detect";

// Import Swiper styles
import 'swiper/swiper.scss';


interface Props {
  plantName?: string;
  text?: string;
  detail?: string;
  earthDays?: string;
  plantMoons?: string;
  plantImg?: string;
}

interface State extends Props {
}

class DesktopSwiper extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      plantName: "plantName",
      text: "plantNumber",
      detail: "plantDetail",
      earthDays: "earthDays",
      plantMoons: "plantMoons",
      plantImg: earthImg
    }
  }
  componentDidMount() {
    const info: Props = this.props;
    if (info.plantName) { this.setState({ plantName: info.plantName }); }
    if (info.text) { this.setState({ text: info.text }) }
    if (info.detail) { this.setState({ detail: info.detail }) }
    if (info.earthDays) { this.setState({ earthDays: info.earthDays }) }
    if (info.plantMoons) { this.setState({ plantMoons: info.plantMoons }) }
    if (info.plantImg) { this.setState({ plantImg: info.plantImg }) }
  }
  render() {
    return (
      <>
        <div className={Style.slide}>
          {/* Title */}
          <div className={Style.title}>

            <h4>{this.state.text}</h4>
            <span>{this.state.plantName}</span>
          </div>
          {/* Detail */}
          <div className={Style.detail}>
            <div className={Style.silderImg} style={{ backgroundImage: `url(${this.state.plantImg})` }}></div>
            <div className={Style.detailText}>
              <p>{this.state.detail}</p>
              <div className={Style.detailKeyInfo}>
                <div>
                  <h5>ORBIT PERIOD: <span>{this.state.earthDays}</span></h5>
                </div>
                <div>
                  <h5>KNOW MOONS: <span>{this.state.plantMoons}</span></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default DesktopSwiper;

