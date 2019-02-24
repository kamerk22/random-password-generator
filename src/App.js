import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 8,
      pwd: ""
    };
  }
  render() {
    return (
      <div className="container">
        <section>
          <header>
            <p style={{ marginBottom: "-10px", marginTop: '3%' }}>
              Random Password Generator Tool
            </p>
            <h1>Generate a secure password</h1>
          </header>
          <input id="password" name="password" type="text" readOnly />
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
                          console.log(e.target.value);
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
                        console.log(e.target.value);
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
                <button className="btn  btn-primary">Generate</button>
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
            textAlign: "center",
          }}
        >
          Made with <span style={{ color: "#e25555" }}>&#9829;</span> by{" "}
          <a href="http://kamerk22.github.io">Kashyap Merai</a>
        </div>
      </div>
    );
  }
}

export default App;
