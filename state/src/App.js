import logo from "./logo.svg";
import "./App.css";
import React from "react";
import laico from "./images/laico.jpg";

class App extends React.Component {
  state = {
    fullName: "Ines Ben Hamida",
    bio: "Diplomée de l'ecole d'architecture en 2011",
    imgSrc: laico,
    profession: "Architecte",

    show: true,
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };
  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 5000000);
  }

  render() {
    return (
      <div
        style={{ textAlign: "center", backgroundColor: "grey", margin: "50px" }}
      >
        <>
          {this.state.show && (
            <>
              <h1 className="fullname">{this.state.fullName}</h1>
              <h3 className="bio">{this.state.bio}</h3>
              <br></br>
              <h3 className="profession">{this.state.profession}</h3>
              <img className="laico" src={this.state.imgSrc} alt="laico"></img>
              <br></br>
            </>
          )}

          <button className="button" onClick={this.handleShowPerson}>
            click here
          </button>
        </>
      </div>
    );
  }
}

export default App;
