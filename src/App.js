import React, { Component } from "react";
import Toggle from "./components/Toogle";
import { timingSafeEqual } from "crypto";
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
      theme: "light"
    };
  }

  componentDidMount() {
    this.generatePwd(this.state.length);
  }
  generatePwd(len) {
    var arr = new Uint8Array((len || 40) / 2);
    window.crypto.getRandomValues(arr);
    let pwd = Array.from(arr, dec => {
      return ("0" + dec.toString(16)).substr(-2);
    }).join("");
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
                  <p style={{ marginBottom: "-10px", marginTop: "3%" }}>
                    Random Password Generator Tool
                  </p>
                </div>
                <div className="col">
                  <div style={{ textAlign: "right", margin: "10px 0 0 0" }}>
                    <Toggle
                      icons={{
                        checked: (
                          <img
                            src=""
                            width="16"
                            height="16"
                            role="presentation"
                            style={{ pointerEvents: "none" }}
                          />
                        ),
                        unchecked: (
                          <img
                            src=""
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

              <h1 className=" terminal-prompt">Generate a secure password</h1>
            </header>
            <input
              id="password"
              name="password"
              type="text"
              readOnly
              value={this.state.pwd}
            />
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
                <div className="col">
                  <button className="btn btn-error">Copy Passoword</button>
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
