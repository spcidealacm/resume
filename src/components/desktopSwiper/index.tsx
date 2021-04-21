import React from "react";
import ReactDom from "react-dom";
import Style from "./style.module.scss";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import { parseIsolatedEntityName } from "typescript";

interface Props {
  plantName?: string;
  text?: string;
  detail?: string;
}

interface State {
  plantName: string;
  text: string;
  detail: string;
}

class DesktopSwiper extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      plantName: "plantName",
      text: "plantNumber",
      detail: "plantDetail"
    }
  }
  componentDidMount() {
    const info: Props = this.props;
    if (info.plantName) {
      this.setState({ plantName: info.plantName });
    }
    if (info.text) {
      this.setState({ text: info.text })
    }
    if (info.detail) {
      this.setState({ detail: info.detail })
    }
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
              </div>
            </div>
          </div>
        </BrowserView>
      </>
    )
  }
}

export default DesktopSwiper;

