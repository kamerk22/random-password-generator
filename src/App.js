import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="container">
        <section>
          <header>
            <h1>Random Password Generator</h1>
          </header>
          <input id="password" name="password" type="text" readOnly />
        </section>
        <hr />
        <section>
          <header>
            <h3>Customize your password</h3>
          </header>
          <fieldset>
            <div class="form-group">
              <label for="email">Password Length:</label>&nbsp;
              <input type="number" style={{ width: 50 }} /> &nbsp;
              <input className="progress-bar" type="range" min="1" max="100" />
            </div>
            <div class="form-group">
              <input for="check" type="checkbox" id="check" /> &nbsp;
              <label for="check">Uppercase:</label>
              <br />
              <input for="check" type="checkbox" id="check" /> &nbsp;
              <label for="check">Lowercase:</label>
              <br />
              <input for="check" type="checkbox" id="check" /> &nbsp;
              <label for="check">Numbers:</label>
              <br />
              <input for="check" type="checkbox" id="check" /> &nbsp;
              <label for="check">Symbols:</label>
            </div>
          </fieldset>
          <br/>
          <div style={{ textAlign: "center" }}>
            <button class="btn  btn-primary">Generate</button> &nbsp;
            &nbsp;
            <button class="btn btn-error">Copy Passoword</button>
            <br />
            <br />
          </div>  
        </section>
        <div style={{textAlign: 'center', position: 'absolute', bottom: 10, left: 0, right: 0, marginLeft :'auto', marginRight: 'auto'}}>
        Made with <span style={{color: '#e25555'}}>&#9829;</span> by <a href="http://kamerk22.github.io">Kashyap Merai</a>
        </div>
      </div>
    );
  }
}

export default App;
