import React, { PureComponent } from 'react';
import copy from '../../assets/images/copy.svg';
import './index.css';

export default class Toggle extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* <span className="tooltiptext">
          Copy to clipboard
        </span> */}
        <img src={copy} alt="copy" height={25}/>
      </>
    );
  }
}
