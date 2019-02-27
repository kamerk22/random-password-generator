import React, { Component } from "react";
import Toggle from "./components/Toogle";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";
import Clipboard from "./components/Clipboard";
import { generateRandom } from "./utils/RandomPassword";
const root = document.documentElement;
const theme = {
  dark: {
    background: "#222225",
    font: "#ffffff"
  },
  light: {
    background: "#ffffff",
    font: "#222225"
  }
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 8,
      pwd: "",
      upperCase: false,
      lowerCase: false,
      numeric: false,
      symbol: true,
      theme: "light"
    };
  }

  componentDidMount() {
    this.generatePwd(this.state.length);
  }
  generatePwd(len) {
    const { upperCase, lowerCase, numeric, symbol } = this.state;
    let pwd = generateRandom(len)
      .setLowerCase(lowerCase)
      .setUpperCase(upperCase)
      .setNumberCase(numeric)
      .setSymbol(symbol)
      .generate();
    this.setState({ pwd });
  }

  changeTheme(e) {
    this.setState({
      theme: e.target.checked ? "dark" : "light"
    });
    root.style.setProperty("--background-color", theme[this.state.theme].font);
    root.style.setProperty("--font-color", theme[this.state.theme].background);
  }
  render() {
    let root = document.documentElement;
    return (
      <div>
        <div className="container">
          <section>
            <header>
              <div className="row">
                <div className="col">
                  <h1 className=" terminal-prompt">
                    Generate a secure password
                  </h1>
                </div>
                <div className="col">
                  <div className="switch">
                    <Toggle
                      icons={{
                        checked: (
                          <img
                            src={moon}
                            width="16"
                            height="16"
                            role="presentation"
                            style={{ pointerEvents: "none" }}
                          />
                        ),
                        unchecked: (
                          <img
                            src={sun}
                            width="16"
                            height="16"
                            role="presentation"
                            style={{ pointerEvents: "none" }}
                          />
                        )
                      }}
                      checked={this.state.theme === "dark"}
                      onChange={e => this.changeTheme(e)}
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className="input-container">
              <input
                id="input"
                className={this.state.theme}
                name="password"
                type="text"
                readOnly
                value={this.state.pwd}
              />
              <div className="clipboard">
                <Clipboard theme={this.state.theme} />
              </div>
            </div>
          </section>
          <hr />
          <section>
            <header>
              <h3>Customize your password</h3>
            </header>
            <fieldset>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label className="checkbox-container">
                      Uppercase
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Lowercase
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Numeric
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Symbols
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label htmlFor="email">Password Length:</label>
                        &nbsp;&nbsp;
                      </div>
                      <div className="col">
                        <input
                          type="number"
                          min="8"
                          max="40"
                          style={{ width: 65 }}
                          value={this.state.length}
                          onChange={e => {
                            this.generatePwd(e.target.value);
                            this.setState({ length: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                    &nbsp;
                    <div className="slider-container">
                      <input
                        className="slider"
                        type="range"
                        min="8"
                        max="40"
                        value={this.state.length}
                        onChange={e => {
                          this.generatePwd(e.target.value);
                          this.setState({ length: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <br />
            <div style={{ textAlign: "left" }}>
              <div className="row">
                <div className="col">
                  <button
                    className="btn  btn-primary"
                    onClick={() => {
                      this.generatePwd(this.state.length);
                    }}
                  >
                    Generate
                  </button>
                </div>
              </div>

              <br />
              <br />
            </div>
          </section>
          <div
            style={{
              textAlign: "center"
            }}
          >
            Made with <span style={{ color: "#e25555" }}>&#9829;</span> by{" "}
            <a href="http://kamerk22.github.io">Kashyap Merai</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
