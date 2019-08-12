import React, { Component } from "react";
import "./App.css";

function Button() {
  return <button onClick={() => alert("Youve Been Alerted")}>Alert Me</button>;
}

function MyComponent() {
  const myList = ["john", "jacob", "jingle", "heimer", "schmidt"];
  const mappedList = myList.map((element, index, array) => {
    return (
      <div key={index} className="name">
        {element}
      </div>
    );
  });
  return <div>{mappedList}</div>;
}

class MyStatefulComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myList: ["john", "jacob", "jingle", "heimer", "schmidt"],
      name: ""
    };
    this.addName = this.addName.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  addName() {
    // make a copy of state, never directly effect state
    const myCoppiedList = this.state.myList.slice();
    // you can change the copy of the array/object
    myCoppiedList.push(this.state.name);
    // pass in the changed copy to set state to update state and call render
    this.setState({
      myList: myCoppiedList
    });
  }

  changeHandler(event) {
    this.setState({
      name: event.target.value
    });
  }

  // console logs and expression evaluations should be done inbetween the render and return
  render() {
    const mappedList = this.state.myList.map((element, index) => {
      // all mapped over items should have a key on the outer most parent, the value is arbitrary, but must be unique
      return (
        <div
          style={{
            background: index % 2 === 0 ? "green" : "red",
            margin: "10px 0"
          }}
          key={index}
        >
          {element}
        </div>
      );
    });

    console.log(this.state.name);
    return (
      <div>
        <input onChange={this.changeHandler} value={this.state.name} />
        <button onClick={this.addName}>Add Name</button>
        <div>{mappedList}</div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div>stateless component</div>
      <MyComponent />
      <div>Statefule Component</div>

      <MyStatefulComponent />
      <MyStatefulComponent />
      <MyStatefulComponent />
      <MyStatefulComponent />

      <Button />
    </div>
  );
}

export default App;
