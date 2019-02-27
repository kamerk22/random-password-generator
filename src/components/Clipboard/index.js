import React, { PureComponent } from "react";
import copy from "../../assets/images/copy.png";
import copyw from "../../assets/images/copyw.png";
import "./index.css";

export default class Toggle extends PureComponent {
  render() {    
    const { theme } = this.props;
    return (
      <div className="tooltip">
        <span className="tooltiptext" id="myTooltip">
          Copy to clipboard
        </span>
        <img
          src={theme === "dark" ? copyw : copy}
          alt="copy"
          height={25}
          onClick={() => {
            let copyText = document.getElementById("input");
            copyText.select();
            document.execCommand("copy");
            let tooltip = document.getElementById("myTooltip");
            tooltip.innerHTML = "Copied: ";
          }}
          onMouseOut={() => {
            let tooltip = document.getElementById("myTooltip");
            tooltip.innerHTML = "Copy to clipboard";
          }}
        />
      </div>
    );
  }
}
