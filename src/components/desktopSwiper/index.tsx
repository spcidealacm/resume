import React from "react";
// import ReactDom from "react-dom";
import Style from "./style.module.scss";
import earthImg from "../../assets/images/earth.png";
import {
  BrowserView,
  // MobileView,
  // isBrowser,
  // isMobile
} from "react-device-detect";


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
        <BrowserView>
          <div className={Style.container}>
            <div className={Style.wrapper}>
              <div className={Style.slide}>
                <div className={Style.sliderNumber}>
                  <p><span>{this.state.plantName}</span></p>
                </div>
                <div className={Style.sliderText}>
                  <p><span>{this.state.text}</span></p>
                </div>
                <div className={Style.silderDetail}>
                  <p><span>{this.state.detail}</span></p>
                </div>
                <div className={Style.silderDetailFacts}>
                  <div>
                    <h5>ORBIT PERIOD: <span>{this.state.earthDays}</span></h5>
                  </div>
                  <div>
                    <h5>KNOW MOONS: <span>{this.state.plantMoons}</span></h5>
                  </div>
                </div>
                <div className={Style.silderImg} style={{ backgroundImage: `url(${this.state.plantImg})` }}>background
                </div>
              </div>
            </div>
          </div>
        </BrowserView>
      </>
    )
  }
}

export default DesktopSwiper;

